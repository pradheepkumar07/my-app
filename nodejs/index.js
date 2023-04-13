const fs = require('fs');
const http = require('http');

const server = http.createServer();

const read = fs.ReadStream('node.json', 'utf8');
const write = fs.WriteStream('node.json', {flags: 'a'});
/* server.on('request', (request, response) => {
    if (request.url === '/data' request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json');
        read.on('data', (data) => {
            response.write(data)
            response.end()
        })
    }else{
        response.end()
    }
})
 */

server.on('request', (request, response) => {
    console.log("Testing...");
    if (request.url === "/articles" && request.method === "GET") {
      /* console.log(request.url); */
      response.setHeader('Content-Type', 'application/json');
      read.on('articles', (data) => {
        response.write(data)
        console.log(data);
        console.log("Testing ends...");
        response.end()
      })
    } else {
      response.end()
    }
  })
  

server.listen({port:3000},() => {
    console.log('server is running on port 3000');
    write.write(JSON.stringify({
      articles:[
          {"id":4,"name":"user4","username":"user4","email":"user4@user4.com","password":"01234"},
          {"id":5,"name":"user5","username":"user5","email":"user5@user5.com","password":"012345"}
        ]
    }))
})

