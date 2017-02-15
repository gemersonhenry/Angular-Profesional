(function () {

"use strict";

angular
.module("appFactory", [])
.controller("ShoppingListController1", ShoppingListController1)
.controller("ShoppingListController2", ShoppingListController2)
.factory("ShoppingListFactory", ShoppingListFactory);

ShoppingListController1.$inject = ["ShoppingListFactory"];
function ShoppingListController1(ShoppingListFactory) {

	var list1 = this;
	var shoppingList = ShoppingListFactory();

	list1.items = shoppingList.getItems();

	list1.itemName = "";
	list1.itemQuantity = "";

	list1.addItem = function () {
		shoppingList.addItem(list1.itemName, list1.itemQuantity);
	}

	list1.removeItem = function (itemIndex) {
		shoppingList.removeItem(itemIndex);
	}
}

ShoppingListController2.$inject = ["ShoppingListFactory"];
function ShoppingListController2(ShoppingListFactory) {

	var list2 = this;
	var shoppingList = ShoppingListFactory(3);

	list2.items = shoppingList.getItems();

	list2.itemName = "";
	list2.itemQuantity = "";

	list2.addItem = function () {
		try
		{
			shoppingList.addItem(list2.itemName, list2.itemQuantity);
		}
		catch (error)
		{
			list2.errorMessage = error.message;
		}
		
	}

	list2.removeItem = function (itemIndex) {
		shoppingList.removeItem(itemIndex);
	}
}

// SERVICIO CREADO COMO UNA FUNCIÓN - primero se debe colocar la funcion que trabajará
// como servicio y luego el factory
function ShoppingListService(maxItems) {
	
	var service = this;
	// lista de items
	var items = [];

	service.addItem = function (itemName, itemQuantity) {
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
function ShoppingListFactory() {
	var factory = function (maxItems) {
		return new ShoppingListService(maxItems);
	};
	return factory;
}


})();