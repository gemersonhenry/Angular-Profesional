(function () {

"use strict";

var jugos = [
	"Jugo de fresa con leche",
	"Jugo de papaya con leche",
	"Jugo de platano con leche",
	"Jugo de mango con leche",
	"Jugo de mango con melon",
	"Jugo de papaya con mango",
	"Jugo de fresa con mango con platano"
];

var jugosConPrecio = [
	{ nombre: "Jugo de fresa con leche", precio: 8.99},
	{ nombre: "Jugo de papaya con leche", precio: 6.99},
	{ nombre: "Jugo de platano con leche", precio: 5.99},
	{ nombre: "Jugo de mango con leche", precio: 8.99},
	{ nombre: "Jugo de mango con melon", precio: 10.99},
	{ nombre: "Jugo de papaya con mango", precio: 9.99},
	{ nombre: "Jugo de fresa con mango con platano", precio: 12.99}
];

angular
.module("app", [])
.controller("JugosController", JugosController);

JugosController.$inject = ["$scope"];
function JugosController($scope) {

	$scope.jugos = jugos;
	$scope.jugosConPrecio = jugosConPrecio;

}

})();