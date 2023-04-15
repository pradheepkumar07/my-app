const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');
const server = http.createServer();
var express = require('express');
var app = express();

//Reading and write sterams for file system
const read = fs.createReadStream('./nodejs/node.json', 'utf8');

const write = fs.createWriteStream('./nodejs/node.json', {flags: 'a'});

/* const handleRequests = new EventEmitter(); */

server.on('request', (request, response) => {
    console.log("Testing...");
    if (request.url === "/articles" && request.method === "GET") {
      /* console.log(request.url); */
      response.setHeader('Content-Type', 'application/json');
      read.on('data', (data) => {
        response.write(data)
        // console.log(data);
        console.log("Testing ends...");
        response.end()
      })
    } else{
      response.end()
    }
    if (request.url === "/articles" && request.method === "POST"){
      write.write(JSON.stringify({
        articles1:[
            {"id":8,"name":"user4","username":"user4","email":"user4@user4.com","password":"012345"},
            {"id":9,"name":"user5","username":"user5","email":"user5@user5.com","password":"01234567"},
            {"id":10,"name":"user5","username":"user5","email":"user5@user5.com","password":"0123456789"}
          ]
      }))
      response.end()
    }
  })
  
var articles = JSON.parse(fs.readFileSync('./nodejs/node.json', 'UTF-8'));

app.get('/articles/:id', function(req, res) {
  var id = +req.params.id;
  var article = articles.find(a => a.id === id);
  res.write(article);
  /* console.log(article); */
})

server.listen({port:3000},() => {
    console.log('server is running on port 3000');
})

