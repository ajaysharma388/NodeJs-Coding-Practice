const fs = require('fs');

fs.appendFile('readFrom.txt', 'This is the next update of the file\n that you might be thinking.', (err) => {
     if (err) console.log(err);
     else console.log('Data Appended Successfully to the file.');
});