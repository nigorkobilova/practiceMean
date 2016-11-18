app.controller('questionController', function($scope, $rootScope, questionFactory, $route, $location, $routeParams, $filter) {

    $scope.login = function(user){
        $rootScope.user = user;
        console.log($rootScope.user, 'name in controller');
        $location.url('/main');
    };

    $scope.logout = function(){
        $route.reload();
        $location.url('/');

    }

    $scope.cancel = function(){
        $location.url('/main')
    }

    app.value('allQuestions', $scope.questions)

    questionFactory.index(function(data){
        $scope.questions = data;
        console.log($scope.questions = data);
    })

   $scope.create = function(){
       questionFactory.create($scope.newQuestion);
       console.log($scope.newQuestion);
       $location.url('/main');
       $scope.newQuestion={};
   };


   questionFactory.show($routeParams.id, $scope.question, function(data){
       $scope.question = data;
       console.log($scope.question);
   })

});
