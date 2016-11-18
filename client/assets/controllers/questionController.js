app.controller('questionController', function($scope, questionFactory, $location, $routeParams, $filter) {

    $scope.login = function(data){
        $scope.user = data
        console.log($scope.user, 'name in controller');
        $location.url('/main');
    };

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


   // $scope.filterDate = function(filter_date){
   //     console.log($scope.filter_date);
   //     return $filter('date')(filter_date, 'yyyy-MM-dd');
   // }

});
