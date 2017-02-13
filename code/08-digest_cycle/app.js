(function () {

"use strict";

angular
.module("appContador", [])
.controller("ContadorController", ContadorController);

ContadorController.$inject = ["$scope"];
function ContadorController($scope) {

	$scope.onceCounter = 0;
	$scope.counter = 0;

	$scope.showNumberOfWatchers = function () {
		console.log("# de watchers: ", $scope.$$watchersCount);
	}

	$scope.countOnce = function () {
		$scope.onceCounter = 1;
	}

	$scope.upCounter = function () {
		$scope.counter++;
	}

	$scope.$watch(function () {
		console.log("Cambio hecho");
	})

	// $scope.$watch('onceCounter', function (newValue, oldValue) {
	// 	console.log("onceCounter old value: ", oldValue);
	// 	console.log("onceCounter new value: ", newValue);
	// })

	// $scope.$watch('counter', function (newValue, oldValue) {
	// 	console.log("counter old value: ", oldValue);
	// 	console.log("counter new value: ", newValue);
	// })
}

/**
* Observaciones sobre el uso de $watch
*/

})();