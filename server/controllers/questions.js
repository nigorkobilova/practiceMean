console.log('questions controller');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function QuestionController(){
  this.index = function(req,res){
    Question.find({}, function(err, results){
        if(err){
            console.log('You have an error!');
        } else{
            console.log("Everything went right!");
            console.log(results, 'these are results');
            res.json(results);
        }
  })};
  this.create = function(req,res){
      var question = new Question({text: req.body.question, description: req.body.description})
      question.save(function(err){
          if (err){
              console.log(err);
              res.json({error: 'error message', err: err})
          } else {
              res.json({placeholder: 'success'})
          }
      })

  };

  this.show = function(req,res){
      Question.findOne({_id: req.params.id}, function(err, result){
        if (err){
            console.log(err);
        } else {
            res.json(result);
        }
      })
  };
}
module.exports = new QuestionController(); // what does this export?
