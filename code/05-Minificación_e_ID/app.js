// (function () {

// "use strict"

// angular.module('app', [])
// .controller('DIController', DIController);

// DIController.$inject = ["$scope", "$filter"];
// function DIController($scope, $filter) {

// 	$scope.nombre = "Gemerson Henry";
// 	$scope.upper = function() {
// 		var upCase = $filter('uppercase');
// 		$scope.nombre = upCase($scope.nombre);
// 	}
// 	$scope.lower = function() {
// 		var lowCase = $filter('lowercase');
// 		$scope.nombre = lowCase($scope.nombre);
// 	}

// }


// })();

!function(){"use strict";function e(e,r){e.nombre="Gemerson Henry",e.upper=function(){var n=r("uppercase");e.nombre=n(e.nombre)},e.lower=function(){var n=r("lowercase");e.nombre=n(e.nombre)}}angular.module("app",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();