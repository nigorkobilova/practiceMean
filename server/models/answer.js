console.log('answers model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var FormatDate = mongoose.Schema.Types.FormatDate = require('../../node_modules/mongoose-schema-formatdate/formatdate')
// build your friend schema and add it to the mongoose.models
var AnswerSchema = new mongoose.Schema({
    text: {type: String, required: true},
    details: {type: String, required: true},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'},
})
var Answer = mongoose.model('Answer', AnswerSchema)
