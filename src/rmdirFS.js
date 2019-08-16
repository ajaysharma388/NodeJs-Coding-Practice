const fs = require('fs');

fs.unlink('./FileSystem Pt-2/example.txt', (err) => {
     if (err) console.log(err);
     else {
          fs.rmdir('./FileSystem Pt-2', (err) => {
               if (err) console.log(err);
               else console.log('Folder Deleted Successfully.');
          });
     }
});
