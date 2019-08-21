const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
     const readStream = fs.createReadStream('../text_files/Aj.jpg');
     res.writeHead(200, { 'Content-type': 'image/jpg' });
     readStream.pipe(res);
}).listen(3000);

// using this example we can host any static content on the server.