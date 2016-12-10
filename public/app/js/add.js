(function() {
  'use strict';

  angular
    .module('App')
    .directive('add', add);

  function add(){
    var directive = {
      restrict:'E',
      scope:{
      },
      templateUrl: '/templates/add.html',
      controller: Add,
      bindToController: true
    };

    return directive;
  };
  
  
  Add.$inject = ['$scope', 'dataAssistant'];

  function Add($scope, dataAssistant){
    if (!!$scope.$parent.user){
        $scope.$parent.page = 'login';
    }

    $scope.add = function(){
        if (!!$scope.$parent.user){
            $scope.$parent.page = 'login';
        }

        var hash = $scope.add_hash;
        dataAssistant.get('/api/add/' + hash).then(function(data){
            
            $scope.add_result = data;
        },function(error){
            $scope.add_error = error;
        });
    };
  }  
  
})();	