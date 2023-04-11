const fs = require('fs');
const http = require('http');

const server = http.createServer();

const read = fs.ReadStream('node.json',{flag:'w'});

const write = fs.WriteStream('node.json', 'utf8');

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
    if (request.url === "/data" && request.method === "GET") {
      response.setHeader('Content-Type', 'application/json');
      read.on('data', (data) => {
        response.write(data)
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
        worker:[{
            "id":6,
            "name":"Raj",
            "username":"user6",
            "email":"user1@user6.com",
            "password":"012345@67"
        }]
    }))
})

