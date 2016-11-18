app.controller('answerController', function($scope, answerFactory, $location, questions) {
    console.log('inside answerController');


    // answerFactory.index(function(data){
    //     $scope.answers = data;
    //     // console.log(questions, 'inside the answers controller');
    //     console.log($scope.answers = data);
    // })

   $scope.createAnswer = function(){
       answerFactory.create($scope.newAnswer);
       console.log($scope.newAnswer);
       $location.url('/');
       $scope.newAnswer={};
   };


   // $scope.filterDate = function(filter_date){
   //     console.log($scope.filter_date);
   //     return $filter('date')(filter_date, 'yyyy-MM-dd');
   // }

});
