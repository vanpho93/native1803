const express = require('express');
const { json } = require('body-parser');

const app = express();

app.use(json());

// app.get('/signin/:email/:password', (req, res) => {
//     console.log(req.params);
//     res.send('Hello.');
// });

app.post('/signin', (req, res) => {
    res.send({ success: true, message: 'Success!', body: req.body });
});

app.listen(process.env.PORT || 3000, () => console.log('Server started.'));
