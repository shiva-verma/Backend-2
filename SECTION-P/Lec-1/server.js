const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/greet' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Hello world</h1>");
  }else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Contact page again</h1>");
}
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
