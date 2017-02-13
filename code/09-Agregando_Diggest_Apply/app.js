(function () {

"use strict";

angular
.module("appContador", [])
.controller("ContadorController", ContadorController);

ContadorController.$inject = ["$scope", "$timeout"];
function ContadorController($scope, $timeout) {

	$scope.counter = 0;

	$scope.upCounter = function () {
		$timeout(function () {
			$scope.counter++;
			console.log("Counter incremented!");
		}, 2000)
	}

	// $scope.upCounter = function () {
	// 	setTimeout( function () {
	// 		$scope.$apply(function (){
	// 			$scope.counter++;
	// 			console.log("Counter incremented!");
	// 		})
	// 	}, 2000);		
	// }

	// $scope.upCounter = function () {
	// 	setTimeout( function () {
	// 		$scope.counter++;
	// 		console.log("Counter incremented!");
	// 		//$scope.$digest();
	// 	}, 2000);		
	// }
}

/**
* Explicando el uso de $digest(), $apply() y otros conceptos
*/

})();