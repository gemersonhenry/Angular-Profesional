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

	service.updateItem = function (itemName, itemQuantity, itemIndex) {
		items[itemIndex].name = itemName;
		items[itemIndex].quantity = itemQuantity;
	}

	service.getItems = function () {
		return items;
	}
}