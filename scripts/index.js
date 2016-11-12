// angular.module('myApp', [])
//   .controller('TabController', function($scope){
//     $scope.tab = '基礎情報'
//   })
// 各タグに問題を埋め込めばいいの？
// main

angular.module('myApp', [])
  .controller('ProblemController', function($scope, ProblemList){
    $scope.problems = ProblemList();
  })
  .value('ProblemList', function(){
    return [
      {
        answered: new Date(2016, 11, 12),
        chapter: 'a-b-1~4'
      },
      {
        answered: new Date(2016, 11, 14),
        chapter: 'a-b-5~18'
      },
      {
        answered: new Date(2016, 11, 16),
        chapter: 'a-b-5~18'
      },
      {
        answered: new Date(2016, 11, 18),
        chapter: 'a-b-5~18'
      },
      {
        answered: new Date(2016, 11, 20),
        chapter: 'a-b-5~18'
      }
    ];
  });


