const fs = require('fs');
// create the file.
fs.writeFile('example.txt', "Hey! guys I was working with the nodejs.", (err) => {
     if (err) console.log(err);
     else {
          console.log('File Successfully created.');
          fs.readFile('example.txt', 'utf8', (err, file) => {
               if (err) console.log(err);
               else console.log(file); 
          });
     }
});