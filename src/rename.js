const fs = require('fs');

fs.rename('example.txt', 'readfrom.txt', (err) => {
     if (err) console.log(err);
     else console.log('File Successfully Renamed');
});