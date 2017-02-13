(function (){

"use strict";

angular
.module("appBinding", [])
.controller("BindingController", BindingController);

BindingController.$inject = ["$scope"];
function BindingController($scope) {

	$scope.primerNombre = "Gemerson";
	//$scope.nombreCompleto = "";

	$scope.showNumberOfWatchers = function () {
		console.log("# de watchers: ", $scope.$$watchersCount);
	}

	$scope.setNombreCompleto = function () {
		$scope.nombreCompleto = $scope.primerNombre + " Bendezú";
	}

	$scope.logPrimerNombre = function () {
		console.log("Primer nombre: " + $scope.primerNombre);
	}

	$scope.logNombreCompleto = function () {
		console.log("Nombre completo: " + $scope.nombreCompleto);
	}

}

/**
* Explicando el funcionamiento de los $watch dentro de nuestro código
*/

})();