const http = require('http');
const server = http.createServer((req, res) => {
     if (req.url === '/') {
          res.write('Hello World From Nodejs.');
          res.end();
     } else {
          res.write('Using Some Other Domain.');
          res.end();
     }
});

server.listen('3000');