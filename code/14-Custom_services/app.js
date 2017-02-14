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

	itemAdder.updateItem = function () {
		ShoppingListService.updateItem(itemAdder.itemName, itemAdder.itemQuantity, itemIndex);
	}

}

ShoppingListShowController.$inject = ["ShoppingListService"]
function ShoppingListShowController(ShoppingListService) {
	
	var showList = this;

	showList.items = ShoppingListService.getItems();

	showList.removeItem = function (itemIndex) {
		ShoppingListService.removeItem(itemIndex);
	}

	showList.addForm = function (itemIndex) {
		
	}
}

})();