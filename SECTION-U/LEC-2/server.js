const http = require('http');

const server = http.createServer((req, res)=>{
     if(req.url === '/' && req.method === 'GET'){
        res.end("hello")
     } else if(req.url === '/home' && req.method === 'GET'){
        res.end('<h1>WELCOME TO HOME PAGE</h1>')
     }
})

server.listen(4000, ()=>{
    console.log('server is running at port 4000')
})