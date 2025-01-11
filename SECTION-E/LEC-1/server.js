const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/home' && req.method === 'GET'){
        res.end('<h1>WELCOME TO HOME PAGE</h1>')
    }else if(req.url === '/contact' && req.method === 'GET'){
        res.end('<h1>CONTACT PAGE</h1>')
    }
    res.end('hello');
})

server.listen(5000,()=>{
    console.log('server is running at port 5000')
})