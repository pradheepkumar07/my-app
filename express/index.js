const { id } = require('date-fns/locale');
const data = require('./data.json');
const express = require('express');
const app = express();
const fs = require('')

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

app.get('/messages/:id/comments' ,(req,res) => {
    random = req.params.id
    const temp =  data.messages.filter( p => p.id === +random);
    // console.log(JSON.stringify(temp));
    let arrValues = Object.values(temp);
    var comment = arrValues[0].content;
    res.send(comment)
    res.end()
})

app.post('/messages/:id/comments' ,(req,res) => {
    random = req.params.id
    // const temp =  data.messages.filter( p => p.id === +random);
    // let arrValues = Object.values(temp);
    // var comment = arrValues[0].content;
    // console.log(comment)
    res.end()
})