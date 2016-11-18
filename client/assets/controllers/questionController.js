app.controller('questionController', function($scope, questionFactory, $location, $routeParams, $filter) {
    // console.log($location, 'this is location!');

    app.value('questions', $scope.questions)

    questionFactory.index(function(data){
        $scope.questions = data;
        console.log($scope.questions = data);
    })

   $scope.create = function(){
       questionFactory.create($scope.newQuestion);
       console.log($scope.newQuestion);
       $location.url('/');
       $scope.newQuestion={};
   };


   // $scope.filterDate = function(filter_date){
   //     console.log($scope.filter_date);
   //     return $filter('date')(filter_date, 'yyyy-MM-dd');
   // }

});
