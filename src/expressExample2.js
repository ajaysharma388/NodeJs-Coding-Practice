const express = require('express');
const path = require('path');
const app = express();
app.use('/public', express.static(path.join(__dirname, '/text_files')));
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../text_files', 'index.html'));
});
app.listen('3000');