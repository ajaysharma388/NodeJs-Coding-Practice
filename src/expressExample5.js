// here we are trying to validate the userdata the client has entered during the site visit.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();
app.use('/public', express.static(path.join(__dirname, '/text_files')));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../text_files', 'form.html'));
});
app.post('/', (req, res) => {
     console.log(req.body);
     const schema = Joi.object().keys({
          fname: Joi.string().min(2).max(20).required(),
          lname: Joi.string().min(2).max(20).required(),
          age: Joi.number().min(18).max(100).required(),
          email: Joi.string().trim().email().required(),
          password: Joi.string().min(5).max(20).required(),

     });
     Joi.validate(req.body, schema, (err, result) => {
          if (err) {
               console.log(err);
               res.send('An Error Has been Occured!');
          }
          console.log(result);
          res.send('Successfully Posted The data.');
     });
});
app.listen('3000');