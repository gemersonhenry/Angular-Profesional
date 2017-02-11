(function () {

"use strict";

angular.module("MsgApp", [])
.controller("MsgController", MsgController);

MsgController.$inject = ["$scope"];
function MsgController($scope) {
	$scope.nombre = "Gemerson Henry";
	$scope.foto = "todos";
	$scope.mostrarMensaje = function () {
		return "Este es el mejor mensaje del mundo!";
	}
	$scope.cambiarImagen = function () {
		$scope.foto = "pareja";
		//$scope.foto = getFoto($scope.foto);
	}

	// function getFoto(string) {
	// 	return (string == "pareja") ? "todos" : "pareja";	
	// }
}

})();