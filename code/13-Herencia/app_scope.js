(function (){

"use strict";

angular
.module("app", [])
.controller("ParentController1", ParentController1)
.controller("ChildController1", ChildController1)
.controller("ParentController2", ParentController2)
.controller("ChildController2", ChildController2);

// controller 1
ParentController1.$inject = ["$scope"];
function ParentController1($scope) {
	$scope.parentValue = 1;
	$scope.pc = this;
	$scope.pc.parentValue = 1;
}

ChildController1.$inject = ["$scope"];
function ChildController1($scope) {
	// console.log("$scope.parentValue: ", $scope.parentValue);
	// console.log("CHILD $scope: ", $scope);

	// $scope.parentValue = 5;
	// console.log("**** CHANGED: $scope.parentValue = 5 ****");
	// console.log("$scope.parentValue: ", $scope.parentValue);
	// console.log("CHILD $scope: ", $scope);

	// console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
	// $scope.pc.parentValue = 5;
	// console.log("**** CHANGED: $scope.pc.parentValue = 5 ****");
	// console.log("$scope.parentValue: ", $scope.pc.parentValue);
	// console.log("CHILD $scope: ", $scope);

	// console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
}


// controller 2
ParentController2.$inject = ["$scope"];
function ParentController2($scope) {
	var parent = this;
	parent.value = 1;
}

ChildController2.$inject = ["$scope"];
function ChildController2($scope) {
	var child = this;
	child.value = 5;
	console.log("ChildController2 $scope: ", $scope);
}

})();

/**
* USO PRINCIPAL DE LOS CONTROLLERS
* Inicializar los valores y estados del $scope 
* Agregar comportamiento al $scope
*
* LO QUE NO SE DEBE HACER
* Manipular la lógica de negocio dentro del mismo controlador
* Compartir codigo de estados combinando controladores
*/