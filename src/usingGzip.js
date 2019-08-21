const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const rStream = fs.createReadStream('../text_files/example.txt', 'utf8');
const wStream = fs.createWriteStream('../text_files/example.txt.gz');
rStream.pipe(gzip).pipe(wStream);