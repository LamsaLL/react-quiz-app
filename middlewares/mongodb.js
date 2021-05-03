const mongoose = require('mongoose');
const Questions = require('../models/questions.js');
require('dotenv').config({path: './config/.env'});

mongoose.connect( process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { console.log("Connected to mongoDB") })
.catch((err) => { console.log("Failed to connect to MongoDB", err) });    

const mongoDBMiddlewares = (req, res, next) => {
    req.db = mongoose;
    req.model = {};
    req.model.Questions = Questions;

    next();
}

module.exports = mongoDBMiddlewares;

