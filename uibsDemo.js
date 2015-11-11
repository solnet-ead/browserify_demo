var angular = require('angular');
var uibs = require('angular-ui-bootstrap');

angular
	.module('myUI', [uibs])
	.controller('alertDemoCtrl', alterDemoController);

	function alterDemoController($scope){
		$scope.alerts = [
			{type: 'danger', msg: 'it\'s dangerous'},
			{type: 'wonderful', msg: 'it\'s wonderful day!'}
		];

		$scope.addAlert = function() {
			$scope.alerts.push({msg: 'Another alert!'});
		};

		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};
	}