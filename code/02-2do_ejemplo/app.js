(function(){

"use strict";

angular.module('appCalculador', [])

.controller('calculadorController', function ($scope) {

	$scope.nombre = "";
	$scope.longitudDelNombre = 0;
	$scope.sumaDeCodigosDeCaracteres = 0;
	$scope.numeroDeVocales = 0;

	$scope.calcular = function () {
		var longitud = calcularLongitudDeNombre($scope.nombre);
		var sumaDeCodigos = calcularSumaDeCodigosDeCaracteres($scope.nombre);
		var numeroVocales = calcularNumeroDeVocales($scope.nombre);
		$scope.longitudDelNombre = longitud;
		$scope.sumaDeCodigosDeCaracteres = sumaDeCodigos;
		$scope.numeroDeVocales = numeroVocales;
	}

	function calcularLongitudDeNombre(string) {
		return string.length;
		/**
		 * consideraciones del método "length": calcula la longitud de strings
		 * siempre y cuando estos no terminen en espacios vacios.
		 */
	}

	function calcularSumaDeCodigosDeCaracteres(string) {
		var suma = 0;
		for (var i = 0; i < string.length; i++) {
			suma += string.charCodeAt(i);		
		}
		return suma;
		/**
		 * consideraciones del método "charCodeAt": este método recibe el indice
		 * de la posición del caracter a analizar.
		 */
	}

	function calcularNumeroDeVocales(string) {
		var vocales = ['a', 'e', 'i', 'o', 'u'];
		var numero = 0;
		var string = string.toLowerCase().split('');
		for (var i = 0; i < string.length; i++) {
			for (var j in vocales) {
				if ( vocales[j] === string[i] ) {
					numero++;
					break;
				}
			}
		}
		return numero;
		/**
		 * Explicación de los métodos "toLowerCase" y "split": con toLowerCase garantizamos
		 * la conversión del string a caracteres minusculas, y con split convertimos el
		 * string en un arreglo donde cada letra es un elemento
		 */
	}

})

})();
