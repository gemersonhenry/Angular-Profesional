(function() {

"use strict";

// Aquí se veran conceptos de SINGLETON

angular
.module("appServices", [])
.controller("ShoppingListAddController", ShoppingListAddController)
.controller("ShoppingListShowController", ShoppingListShowController)
.service("ShoppingListService", ShoppingListService);

ShoppingListAddController.$inject = ["ShoppingListService"]
function ShoppingListAddController(ShoppingListService) {

	var itemAdder = this;

	itemAdder.itemName = "";
	itemAdder.itemQuantity = "";

	itemAdder.addItem = function () {
		ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
	}
}

ShoppingListShowController.$inject = ["ShoppingListService"]
function ShoppingListShowController(ShoppingListService) {
	
	var showList = this;

	showList.items = ShoppingListService.getItems();

	showList.removeItem = function (itemIndex) {
		ShoppingListService.removeItem(itemIndex);
	}
}

// Custom service
function ShoppingListService() {
	var service = this;

	// lista completa de items
	var items = [];

	service.addItem = function (itemName, itemQuantity) {
		var item = {
			name: itemName,
			quantity: itemQuantity
		};
		items.push(item);
	}

	service.removeItem = function (itemIndex) {
		items.splice(itemIndex, 1);
		/**
		* Explicando el uso del método "splice"
		*/
	}

	service.getItems = function () {
		return items;
	}
}

})();