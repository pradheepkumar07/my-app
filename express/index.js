const { id } = require('date-fns/locale');
const data = require('./data.json');
const express = require('express');
const app = express();

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
