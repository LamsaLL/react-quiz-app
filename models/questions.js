const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Questions', new Schema({
    question_text: String,
    answer: Boolean
},
{ versionKey: false }));