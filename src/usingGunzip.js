const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);