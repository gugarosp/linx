// JavaScript Document

//////////////////////////////////////////////////
// JSON LOAD AND PAGE PRODUCT FILLING
//////////////////////////////////////////////////

// Json page starts with 0
var page = 0;

//Function that shows products
function showProducts () {
	// Increments the variable page so the url can get the page 1 of the Json
	// Also, increments the variable when the button on HTML page is clicked, so we can load the Json page 2, 3, 4, etc...
	page++;
	
	// Get the Json according to page
	fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=' + page)
	.then(function(response) {
		return response.json();
	}).then(function(data) {
		// Get the total of items of each Json page, which seems to be always 8, but I chose to get the array lenght because the json number of products may be changed in the future from 8 to another number
		totalItems = data.products.length;

		// Get the element where the products will be shown
		var products = document.getElementById("products");
		
		// IMPORTANT: Test this later on Mozilla Firefox
		// Creates a div before every set of products for anchorage when user clicks the "More Products" button which is at the end of the page
		/*var productDivision = document.createElement("div");
		products.appendChild(productDivision);
		productDivision.setAttribute("id", "page" + page);
		productDivision.classList.add("product-page-division");*/

		// Shows all products with their data from json file
		var i;
		for (i = 0; i < totalItems; i++) {
			
			// Creates divs to receive the data from Json for each product
			var productBox = document.createElement("div");
			products.appendChild(productBox);	
			// Adds a class to each product div
			productBox.classList.add("col-25");
			
			// Creates elements inside the product box divs to fill them with data
			productImage = document.createElement("div");
			productBox.appendChild(productImage);
			productName = document.createElement("h6");
			productBox.appendChild(productName);
			productDescription = document.createElement("p");
			productBox.appendChild(productDescription);
			productOldPrice = document.createElement("span");
			productBox.appendChild(productOldPrice);
			productPrice = document.createElement("h5");
			productBox.appendChild(productPrice);
			productInstallmentCountValue = document.createElement("span");
			productBox.appendChild(productInstallmentCountValue);
			productBuy = document.createElement("a");
			productBox.appendChild(productBuy);
			// Adds a class to the buy button
			productBuy.classList.add("button-sm");
			// Adds a link to the buy button
			productBuy.setAttribute("href", "https://www.pontofrio.com.br/tablets/?Filtro=C2031&nid=111225");
			
			
			// Inserts the data from Json on a more understandable variable
			var productImageData = "<img src='http:" + data.products[i].image + "'/>";
			var productNameData = data.products[i].name;
			var productDescriptionData = data.products[i].description;
			var productOldPriceData = "De: R$ " + data.products[i].oldPrice + ",00";
			var productPriceData = "Por: R$ " + data.products[i].price + ",00";
			// Converts installment value cent standard from "." to "," if necessary
			if (Number.isInteger(data.products[i].installments.value)) {
				var productInstallmentCountValueData = "ou " + data.products[i].installments.count + "x de R$ " + data.products[i].installments.value + ",00";
			} else {
				var getProductInstallmentValue = String(data.products[i].installments.value);
				var convertedProductInstallmentValue = getProductInstallmentValue.replace(".", ",");
				var productInstallmentCountValueData = "ou " + data.products[i].installments.count + "x de R$ " + convertedProductInstallmentValue + "0";
				
			}
			var productBuyData = "Comprar";
			
			// Inserts the data from variables on each specific element of the product
			productImage.innerHTML = productImageData;
			productName.innerHTML = productNameData;
			productDescription.innerHTML = productDescriptionData;
			productOldPrice.innerHTML = productOldPriceData;
			productPrice.innerHTML = productPriceData;
			productInstallmentCountValue.innerHTML = productInstallmentCountValueData;
			productBuy.innerHTML = productBuyData;
			
			
		}
	})
	
}

// Calls the function for the first time when user enters the page
showProducts();


