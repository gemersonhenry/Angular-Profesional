(function () {

"use strict"

angular.module('app', [])
.controller('DIController', DIController);

function DIController($scope, $filter, $injector) {
	$scope.nombre = "Gemerson Henry";
	$scope.upper = function() {
		var upCase = $filter('uppercase');
		$scope.nombre = upCase($scope.nombre);
	}
	$scope.lower = function() {
		var lowCase = $filter('lowercase');
		$scope.nombre = lowCase($scope.nombre);
	}

	/**
	 * Dependencias injectadas en DIController
	 */
	console.log( $injector.annotate(DIController) );
}


})();