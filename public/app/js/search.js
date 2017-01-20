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

  Search.$inject = ['$scope', 'dataAssistant', 'socketUtils'];

  function Search($scope, dataAssistant, socketUtils){
      
      socketUtils.socket.on('wait:end', function(data){
        $scope.wait_result = data;
        $('#myModal').modal('toggle');
        $('.alert-container').append('<div class="alert alert-danger alert-dismissable fade in">' +
	                                   '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
	                                   '<strong>Danger!!</strong> Super Ethereum crash error!'+
                                     '</div>');
                                     
      });
    
      $scope.search = function(){
        var hash = $scope.query_hash;
        dataAssistant.get('/eth/test').then(function(data){            
            $scope.search_result = data;
        },function(error){
            $scope.search_error = error;
        });
      };
      
      $scope.begin_wait = function(){
        socketUtils.socket.emit('wait:start', {transaction:'asdfasdfsadfsdfsdfasdfasdfa'});
        console.log('emit');
      }
      
      
    
  }  
  
})();	
