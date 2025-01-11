const http = require('http');

const server = http.createServer((req, res)=>{
        if(req.url === '/home' && req.method === 'GET'){
            res.statusCode = 200;
            res.end('<h1>WELCOME TO HOME PAGE</h1>')
        }else if(req.url === '/contact' && req.method ==='GET'){
            res.statusCode = 200;
            res.writeHead('content/type', 'text/html')
            res.end('<h1>CONTACT PAGE</h1>')
        }

})

server.listen(8000,()=>{
    console.log("server is running at port 8000")
})