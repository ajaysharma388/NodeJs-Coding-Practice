const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('../text_files/example.txt.gz');
const writeStream = fs.createWriteStream('../text_files/uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);