var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app){
    console.log('routes connected');
    app.get('/questions', questions.index);
    app.get('/questions/:id', questions.show);
    app.post('/questions', questions.create);
    app.get('/answers', answers.index);
    app.post('/answers', answers.create);
    // app.post('/users', users.create)
}
