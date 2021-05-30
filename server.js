const express = require('express');
require('dotenv').config({path: './config/.env'});

const mongoDBMiddlewares = require('./middlewares/mongodb.js');
const questionsRouter = require('./routes/questions.js');

const PORT = process.env.PORT || 5000;

const app = express();

//middlewares
app.use(express.json());
app.use(mongoDBMiddlewares);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(questionsRouter);

// server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
