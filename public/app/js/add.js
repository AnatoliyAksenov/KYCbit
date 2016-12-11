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

    $scope.add = function(){        
        var hash = '0xa18fdc5ca4dab088722bcaf62a31255dca032f76';
        dataAssistant.get('/eth/CustomerInsert/' + hash).then(function(data){
            
            $scope.add_result = data;
        },function(error){
            $scope.add_error = error;
        });
    };
    
    $scope.calcHash = function(){
      $scope.hash = SHA256($scope.firstname + $scope.lastname);
    } 

  }

  
  
})();	
