(function () {

"use strict";

var list1 = ["Manzana", "Pera", "Piña", "Fresa", "Papaya", "Coco"];
var list2 = [
		{ nombre: "Manzana", precio: 5.60 },
		{ nombre: "Pera", precio: 6.80 },
		{ nombre: "Piña", precio: 1.60 },
		{ nombre: "Fresa", precio: 7.40 },
		{ nombre: "Papaya", precio: 3.50 },
		{ nombre: "Coco", precio: 2.20 },
	];

angular
.module("appRepeat", [])
.controller("RepeatController", RepeatController);

RepeatController.$inject = ["$scope"];
function RepeatController($scope) {

	$scope.list1 = list1;
	$scope.list2 = list2;

	$scope.agregarFruta = function () {
		var nuevo = {
			nombre: $scope.nuevoNombre,
			precio: $scope.nuevoPrecio
		};
		$scope.list2.push(nuevo);
	}
}

/**
* Características del "ng-repeat":

*/

})();