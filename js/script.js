// JavaScript Document

var page = 0;
function showProducts () {
	page++;
	fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=' + page)
	.then(function(response) {
		return response.json();
	}).then(function(data) {
		totalItems = data.products.length;
		var i;
		for (i = 0; i < totalItems; i++) {
		
			var products = document.getElementById("products");
			
			var productBox = document.createElement("div");
			products.appendChild(productBox);	
			
			
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

showProducts();

/*window.onload = function () {
	for (var i = 0; i < 10; i ++) {
		var div = document.createElement ("div");
			div.style.border = "1px solid black";
			div.style.margin = "20px";
			div.style.padding = "10px";

		document.body.appendChild (div);
	}
}*/