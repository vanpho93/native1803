const express = require('express');

const app = express();

// app.get('/signin/:email/:password', (req, res) => {
//     console.log(req.params);
//     res.send('Hello.');
// });

app.post('/signin', (req, res) => {
    res.send({ success: true, message: 'Success!' });
});

app.listen(3000, () => console.log('Server started.'));
