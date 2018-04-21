const express = require('express');
const { json } = require('body-parser');

const app = express();

app.use(json());

app.get('/signin/:email/:password', (req, res) => {
    console.log(req.params);
    res.send('Hello.');
});

app.post('/signin', (req, res) => {
    console.log(req.body);
    res.send({ success: true, message: 'Success!' });
});

app.listen(3000, () => console.log('Server started.'));
