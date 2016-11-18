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

    app.value('questions', $scope.questions)

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
});
