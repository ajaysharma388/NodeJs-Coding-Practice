const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use('/public', express.static(path.join(__dirname, '/text_files')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../text_files', 'form.html'));
});
app.post('/', (req, res) => {
     console.log(req.body);
     // here we generally do some database work
     //res.send('Request Is being Possesing.');
     res.json({ success: true });
});
app.listen('3000');