(function () {

"use strict";

angular
.module("appFilter", [])
.controller("UserController", UserController)
.filter("loves", LovesFilter)
.filter("verdad", VerdadFilter); 
// Se debe mejorar los filtros creados, deben generarse situaciones más reales

UserController.$inject = ["$scope", "lovesFilter"];
function UserController ($scope, lovesFilter) 
{
	$scope.estadoDeAnimo = "Molesto";

	$scope.mostrarMensaje = function () {
		var mensaje = "Henry gusta comer comida italiana";
		return mensaje;
	}

	$scope.mostrarMensajeFiltrado = function () {
		var mensaje = "Henry gusta comer comida italiana";
		mensaje = lovesFilter(mensaje);
		return mensaje;
	}

	$scope.alimentarGemerson = function () {
		$scope.estadoDeAnimo = "Satisfecho";
	}
}

function LovesFilter() {
	return function(input){
		input = input || "";
		input = input.replace("gusta", "ama");
		return input;
	}
}

function VerdadFilter() {
	return function(input, target, replace) {
		input = input || "";
		input = input.replace(target, replace);
		return input;
	}
}

/**
* otras funciones explicativas
*/

function reemplazar_01(texto) {
	var _new = /apples/gi;
	var _old = "oranges";
	var nuevo_texto = texto.replace( _new, _old );
	return nuevo_texto;
}

function reemplazar_02(texto) {
	var nuevo_texto = texto.replace("apples", "orange", "gi");
	return nuevo_texto;
}

/**
* Detallando aspectos del método "replace": 
* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/replace
*/

})();