(function() {
  'use strict';

  angular
    .module('App')
    .directive('alert', alert);

  function alert(){
    var directive = {
      restrict:'E',
      scope:{
          message: '@',
          strong_message: '@'
      },
      templateUrl: '/templates/alert.html',
      controller: Alert,
      bindToController: true
    };

    return directive;
  };
  
  
  Alert.$inject = ['$scope'];

  function Alert($scope){
    
  }  
  
})();	