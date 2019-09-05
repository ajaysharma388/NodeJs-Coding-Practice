const express = require('express');
const path = require('path');
const app = express();
//app.use('/public', express.static(path.join(__dirname, '../text_files')));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
     res.render('index');
});