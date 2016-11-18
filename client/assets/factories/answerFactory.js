console.log('Answers Factory');

app.factory('answerFactory', ['$http', function($http) {
  // constructor for our factory
  var answers = [];
  var answer = {};

  function AnswerFactory(){
    var _this = this;

    this.create = function(newAnswer,callback){
        console.log(newAnswer, 'inside factory');
        $http.post('/answers', newAnswer).then(function(returned_data){
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
      });
    };

    this.index = function(callback){
      $http.get('/answers').then(function(returned_data){
        answer = returned_data.data;
        callback(answer);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };

    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    // this.getFriends = function(callback){
    //   callback(friends);
    // };
    //
    // this.get_user = function(callback){
    //     callback(current_user);
    // }
    //
    // this.set_user = function(new_user, callback){
    //     current_user = new_user;
    //     callback(current_user);
    // }

  }
  console.log(new AnswerFactory());
  return new AnswerFactory();
}]);
