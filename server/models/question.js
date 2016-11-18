console.log('questions model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var FormatDate = mongoose.Schema.Types.FormatDate = require('../../node_modules/mongoose-schema-formatdate/formatdate')
// build your friend schema and add it to the mongoose.models
var QuestionSchema = new mongoose.Schema({
    text: String,
    description: String,
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

var Question = mongoose.model('Question', QuestionSchema)
