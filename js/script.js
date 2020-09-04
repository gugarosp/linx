// JavaScript Document

// Json page starts with 0
var page = 0;

//Function that shows products
function showProducts () {
	// Increments the variable page so the url can get the json of the first page
	// Also, increments the variable when the button on HTML page is clicked, so we can have page 2, 3, 4, etc...
	page++;
	
	// Get the json according to page
	fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=' + page)
	.then(function(response) {
		return response.json();
	}).then(function(data) {
		// Get the total of items fo eache json page, which seems to be always 8, but i chose to get the array lenght because the json may be changed in the futuro from 8 to another number
		totalItems = data.products.length;

		// Shows all products with their data from json file
		var i;
		for (i = 0; i < totalItems; i++) {
		
			// Get the element where the products will be shown
			var products = document.getElementById("products");
			
			// Creates divs to receive the data from json for each product
			var productBox = document.createElement("div");
			products.appendChild(productBox);	
			
			// Inserts the data from json on the divs for each product
			productBox.innerHTML += data.products[i].name;
			productBox.innerHTML += "<br>";
			productBox.innerHTML += "<img src='http:" + data.products[i].image + "'/>";
			productBox.innerHTML += "<br>";
			productBox.innerHTML += "De: R$ " + data.products[i].oldPrice + ",00";
			productBox.innerHTML += "<br>";
			productBox.innerHTML += "Por: R$ " + data.products[i].price + ",00";
			productBox.innerHTML += "<br>";
			productBox.innerHTML += "ou: " + data.products[i].installments.count + "x de R$ " + data.products[i].installments.value + "0";
			productBox.innerHTML += "<br>";
			productBox.innerHTML += data.products[i].description;

			productBox.innerHTML += "<br><br><br><br>";
			
		}
	})
}

// Calls the function for the first time when user enters the page
showProducts();