const fs = require('fs');

// we can create the directory using the mkdir method available in the fileSystem module.
fs.mkdir('FileSystem Pt-2', (err) => {
     if (err) console.log(err);
     else {
          console.log('Folder Created successfully.');
          fs.writeFile('./FileSystem Pt-2/example.txt', 'This is my Node File System Code for learning.', (err) => {
               if (err) console.log(err);
               else console.log('File Created.');
          });
     }
});