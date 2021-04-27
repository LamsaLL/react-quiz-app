const express = require('express');
require('dotenv').config({path: './config/.env'});
require('./config/db');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

//routes
app.get('/api/question', (req, res) => {
  res.send({
    msg: 'saluut !!!'
  })
});

// server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});