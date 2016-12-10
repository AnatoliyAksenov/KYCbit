(function() {
  'use strict';

  angular
    .module('App')
    .controller('MainController', MainController);

    MainController.inject = ['$scope', 'dataAssistant'];

    function MainController($scope, dataAssistant) {
		$scope.user = {};

		$scope.profile = function(){
			dataAssistant.get('/.auth/me').then(function(data){
				$scope.user = data;
				$scope.page = 'profile';
				console.log('user:' + JSON.stringify(data));
			}, function(error){
				$scope.user = {};
				$scope.user_error = error;
				$scope.page = 'login';
			});
		};		
      
		$scope.showAdd = function(){
			if(!!$scope.user){			
				$scope.page = 'add';
			} else {
				$scope.page = 'login';
			}
		};

		$scope.showSearch = function(){
			if(!!$scope.user){			
				$scope.page = 'search';
			} else {
				$scope.page = 'login';
			}
		};

		$scope.showProfile = function(){
			if(!!$scope.user){			
				$scope.page = 'profile';
			} else {
				$scope.page = 'login';
			}
		};

		$scope.showLogin = function(){
			$scope.page = 'login';
		}
						
    }
})();