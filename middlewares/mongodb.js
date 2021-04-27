const mongoose = require('mongoose');
const Questions = require('../models/questions.js');

mongoose.connect('mongodb://localhost/quizDB', {
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

