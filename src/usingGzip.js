const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const rStream = fs.createReadStream('example.txt', 'utf8');
const wStream = fs.createWriteStream('example.txt.gz');
rStream.pipe(gzip).pipe(wStream);