const { id } = require('date-fns/locale');
const data = require('./data.json');
const express = require('express');
const app = express();
const fs = require("fs");
var bodyParser = require('body-parser');
// const { Delete } = require('@mui/icons-material');

app.use(bodyParser.json());     //req.body

const dbWrite = fs.WriteStream('./express/data2.json', {
    flags: 'a'
});

app.listen(4000, err => {
    if(err) console.log(err)
    console.log('Server is running on port: 4000')
})

app.get('/',(req,res) => {
    res.send('<h1>Server is running successfully</h1>')
})

app.get('/messages', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(data.messages) 

})

app.get('/messages/:id', (req,res) => {
    random = req.params.id
    const temp =  data.messages.filter( p => p.id === +random);
    res.send(temp)
    res.end()

})
app.set('views', '/views');
app.set('view engine', 'hbs');

app.get('/messages/:id/comments' ,(req,res) => {
    random = req.params.id
    const temp =  data.messages.filter( p => p.id === +random);
    // console.log(JSON.stringify(temp));
    let arrValues = Object.values(temp);
    var comment = arrValues[0].content;
    res.render('index', {
        topic: 'View Home',
        contentHead: 'Home Page of View'
      })
    res.send(comment)
    res.end()
})

app.post('/messages/:id/comments' ,(req,res) => {
    random = req.params.id
    const temp =  data.messages.filter( p => p.id === +random);
    if(temp){  
        temp[0].content = req.body.content
        dbWrite.write(JSON.stringify(temp))
        console.log(" Comment Added ");
        res.end()
    }
})

app.delete('/messages/:id/comments_id' ,(req,res) => {
    random = req.params.id
    const temp =  data.messages.filter( p => p.id === +random);
    delete(temp[0].content)
    fs.writeFileSync("./express/data2.json", JSON.stringify(temp, null, 4), 'utf8');
    res.end(temp + ' was deleted');
    console.log(JSON.stringify(temp, null, 4));
    console.log(temp)
    console.log(" Comment Added ");
    res.end()
 
})

