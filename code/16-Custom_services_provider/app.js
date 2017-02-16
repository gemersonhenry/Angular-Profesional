(function () {

"use strict";

angular
.module("appFactory", [])
.controller("ShoppingListController", ShoppingListController)
.provider("ShoppingListService", ShoppingListServiceProvider)
.config(Config);

Config.$inject = ["ShoppingListServiceProvider"];
function Config(ShoppingListServiceProvider) {
	// Guardado por Gemerson
	ShoppingListServiceProvider.defaults.maxItems = 2;
}

ShoppingListController.$inject = ["ShoppingListService"];
function ShoppingListController(ShoppingListService) {

	var list = this;
	//var shoppingList = ShoppingListService();

	list.items = ShoppingListService.getItems();

	list.itemName = "";
	list.itemQuantity = "";

	list.addItem = function () {
		try{
			ShoppingListService.addItem(list.itemName, list.itemQuantity);	
		}catch (error) {
			list.errorMessage = error.message;
		}
		
	}

	list.removeItem = function (itemIndex) {
		ShoppingListService.removeItem(itemIndex);
	}
}

// SERVICIO CREADO COMO UNA FUNCIÓN - primero se debe colocar la funcion que trabajará
// como servicio y luego el factory
function ShoppingListService(maxItems) {
	
	var service = this;
	// lista de items
	var items = [];

	service.addItem = function (itemName, itemQuantity) {
		// Recurso de doble negacion "!!", se utiliza para verificación de existencia de variables
		if ( (!!maxItems===false) || ((!!maxItems===true) && (items.length<maxItems)) ) 
		{
			var item = {
				name: itemName,
				quantity: itemQuantity
			}
			items.push(item);
		} 
		else 
		{
			throw new Error("Max items (" + maxItems + ") reached.");
		}
	}

	service.removeItem = function (itemIndex) {
		items.splice(itemIndex, 1);
	}

	service.getItems = function () {
		return items;
	}
}

// CREACIÓN DEL FACTORY
function ShoppingListServiceProvider() {
	var provider = this;

	provider.defaults = {
		maxItems: 10
	};

	provider.$get = function () {
		var shoppingList = new ShoppingListService(provider.defaults.maxItems);
		return shoppingList;
	};
}


})();