(function() {
  'use strict';

  angular
    .module('App')
    .directive('search', search);

  function search(){
    var directive = {
      restrict:'E',
      scope:{
      },
      templateUrl: '/templates/search.html',
      controller: Search,
      bindToController: true
    };

    return directive;
  };
  
  
  Search.$inject = ['$scope', 'dataAssistant'];

  function Search($scope, dataAssistant){
    
    
      $scope.search = function(){
        var hash = $scope.query_hash;
        dataAssistant.get('/eth/test').then(function(data){            
            $scope.search_result = data;
        },function(error){
            $scope.search_error = error;
        });
    };
    
  }  
  
})();	
