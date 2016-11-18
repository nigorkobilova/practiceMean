console.log('Questions Factory');

app.factory('questionFactory', ['$http', function($http, $rootScope) {
  // constructor for our factory
  var questions = [];
  var question = {};


  function QuestionFactory(){
    var _this = this;

    // this.setUser = function(user, callback){
    //     $rootScope.user = user;
    //     console.log($rootScope.user, 'user in factory');
    //     callback($rootScope.user);
    // }

    this.create = function(newQuestion,callback){
        console.log(newQuestion, 'inside factory');
        $http.post('/questions', newQuestion).then(function(returned_data){
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
      });
    };

    this.index = function(callback){
      $http.get('/questions').then(function(returned_data){
        questions = returned_data.data;
        callback(questions);
      });

    this.show = function(id, question, callback){
        console.log(id, 'received from SHOW in Factory');
        $http.get('/questions/'+id).then(function(returned_data){
            question = returned_data.data;
            callback(question);
        })
    }
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

  }
  console.log(new QuestionFactory());
  return new QuestionFactory();
}]);
