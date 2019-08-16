const fs = require('fs');

const rstream = fs.createReadStream('./example.txt', 'utf8');
const wstream = fs.createWriteStream('example2.txt');

rstream.pipe(wstream);
