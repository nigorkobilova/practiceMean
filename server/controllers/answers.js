console.log('answers controller');
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

function AnswerController(){
  this.index = function(req,res){
    Answer.find({}, function(err, results){
        if(err){
            console.log('You have an error!');
        } else{
            console.log("Everything went right!");
            res.json(results);
        }
  })};
  this.create = function(req,res){
      var answer = new Answer({text: req.body.answer, description: req.body.details})
      answer.save(function(err){
          if (err){
              console.log(err);
              res.json({error: 'error message', err: err})
          } else {
              res.json({placeholder: 'success'})
          }
      })

  };

  this.show = function(req,res){
      Answer.findOne({_id: req.params.id}, function(err, result){
        if (err){
            console.log(err);
        } else {
            res.json(result);
        }
      })
  };
}
module.exports = new AnswerController(); // what does this export?
