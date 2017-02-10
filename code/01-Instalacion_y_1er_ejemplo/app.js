(function () {

"use strict"; // explicación

angular.module('myApp', [])

/*
.controller('MyController', ['', function(){
	
}]) // explicación
*/

.controller('MyController', function($scope){
	$scope.name = "Gemerson Henry";
	$scope.saludo = function() {
		return "Hola " + $scope.name;
	}
}) // explicación


})();