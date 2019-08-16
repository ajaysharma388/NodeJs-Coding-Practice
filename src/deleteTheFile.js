const fs = require('fs');

fs.unlink('readFrom.txt', (err) => {
     if (err) console.log(err);
     else console.log('File Deleted Successfully.');
     // unlink is used to delete the files.
});