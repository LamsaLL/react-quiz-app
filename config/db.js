const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/quizDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { console.log("Connected to mongoDB") })
.catch((err) => { console.log("Failed to connect to MongoDB", err) });

const Questions = mongoose.model('Questions', new Schema({
    question_text: String,
    answer: Boolean
}))

Questions.find({}, (err, docs) => {
    console.log(docs);
})