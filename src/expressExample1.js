const express = require('express');
const app = express();
app.get('/', (req, res) => {
     res.send('Hello World With The Express.');
});
app.get('/example', (req, res) => {
     res.send('Hello Your Are on the Example.');
});
app.get('/example/:name/:age', (req, res) => {
     const data = req.params;
     console.log(req.query);
     res.send(`Hey , ${data.name} and your age is ${data.age}`);
});
app.listen('3000');