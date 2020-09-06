// JavaScript Document

//////////////////////////////////////////////////
// JSON LOADING AND PAGE PRODUCT FILLING WITH DATA
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
		// Get the total of items of each Json page, which seems to be always 8, but I chose to get the array lenght because the Json number of products may be changed in the future from 8 to another number
		totalItems = data.products.length;

		// Get the element where the products will be shown
		var products = document.getElementById("products");

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
			productImage.classList.add("image-container");
			productInfo = document.createElement("div");
			productBox.appendChild(productInfo);
			productInfo.classList.add("info-container");
			
			productName = document.createElement("h6");
			productInfo.appendChild(productName);
			productDescription = document.createElement("p");
			productInfo.appendChild(productDescription);
			productOldPrice = document.createElement("span");
			productInfo.appendChild(productOldPrice);
			productPrice = document.createElement("h5");
			productInfo.appendChild(productPrice);
			productInstallmentCountValue = document.createElement("span");
			productInfo.appendChild(productInstallmentCountValue);
			productBuy = document.createElement("a");
			productInfo.appendChild(productBuy);
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

// -----------------------------------------------
// JSON LOADING AND PAGE PRODUCT FILLING WITH DATA [END]
//////////////////////////////////////////////////




//////////////////////////////////////////////////
// USER FORM VALIDATION
//////////////////////////////////////////////////
function userFormValidation() {
	// Get the name, email and cpf of the user
	var getUserName = document.getElementById("user-name").value;
	var getUserEmail = document.getElementById("user-email").value;
	var getUserCpf = document.getElementById("user-cpf").value;
	var userGenderVerification = document.getElementsByName("user-gender");
	var getUserGenderVerification = userGenderVerification.length;
	for (i = 0; i < getUserGenderVerification; i++) {
		if (userGenderVerification[i].checked == true) {
			var getUserGender = userGenderVerification[i].value;
		}
	}

	
	// Check if user fields are empty
	var emptyFieldWarning = "Este campo precisa ser preenchido";
	var emailValidationWarning = "Este campo precisa ter um e-mail válido";
	var cpfValidationWarning = "Este campo precisa conter 11 números";
	
	
	if (getUserName == "") {
		document.getElementById("user-name").classList.add("alert-input");
		document.getElementById("alert-user-name").innerHTML = emptyFieldWarning;
		checkUserName = false;
	} else {
		document.getElementById("user-name").classList.remove("alert-input");
		document.getElementById("alert-user-name").innerHTML = "";
		checkUserName = true;
	}
	
	if (getUserEmail == "") {
		document.getElementById("user-email").classList.add("alert-input");
		document.getElementById("alert-user-email").innerHTML = emptyFieldWarning;
		checkUserEmail = false;
	} else {
		document.getElementById("user-email").classList.remove("alert-input");
		document.getElementById("alert-user-email").innerHTML = "";
		
		// Check if email is valid
		if ((getUserEmail.indexOf('@') > -1) && (getUserEmail.indexOf('.') > -1)) {
			document.getElementById("user-email").classList.remove("alert-input");
			checkUserEmail = true;
		} else {
			document.getElementById("user-email").classList.add("alert-input");
			document.getElementById("alert-user-email").innerHTML = emailValidationWarning;
			checkUserEmail = false;
		}
		
	}
	
	if (getUserCpf == "") {
		document.getElementById("user-cpf").classList.add("alert-input");
		document.getElementById("alert-user-cpf").innerHTML = emptyFieldWarning;
		checkUserCpf = false;
	} else {
		document.getElementById("user-cpf").classList.remove("alert-input");
		document.getElementById("alert-user-cpf").innerHTML = "";
		
		// Check if the value is an integer and has 11 numbers (which is the total of numbers of a CPF)
		var changeToIntegerUserCpf = parseInt(getUserCpf);
		var integerUserCpf = Number.isInteger(changeToIntegerUserCpf);
		var totalNumberCpf = getUserCpf.length;
		if (integerUserCpf == false || totalNumberCpf !== 11) {
			document.getElementById("user-cpf").classList.add("alert-input");
			document.getElementById("alert-user-cpf").innerHTML = cpfValidationWarning;
		} else {
			document.getElementById("user-cpf").classList.remove("alert-input");
			document.getElementById("alert-user-cpf").innerHTML = "";
			checkUserCpf = true;
		}
	}
	
	if (getUserGender == undefined) {
		document.getElementById("alert-user-gender").innerHTML = "Escolha uma opção";
		checkUserGender = false;
	} else {
		document.getElementById("alert-user-gender").innerHTML = "";
		checkUserGender = true;
	}
	
	// The submit button won't send any data until all four fields are completed, the e-mail is valid and the CPF is an integer number with 11 characters
	if ((checkUserName == false) || (checkUserEmail == false) || (checkUserCpf == false) || (checkUserGender == false)) {
		event.preventDefault();
		return false;
	}
	
}

// -----------------------------------------------
// USER FORM VALIDATION [END]
//////////////////////////////////////////////////




//////////////////////////////////////////////////
// NEWSLETTER FORM VALIDATION
//////////////////////////////////////////////////
function newsletterFormValidation() {
	// Get the name and email of the friend
	var getFriendName = document.getElementById("friend-name").value;
	var getFriendEmail = document.getElementById("friend-email").value;
	
	// Check if newsletter fields are empty
	var emptyFieldWarning = "Este campo precisa ser preenchido";
	var emailValidationWarning = "Este campo precisa ter um e-mail válido";
	
	if (getFriendName == "") {
		document.getElementById("friend-name").classList.add("alert-input");
		document.getElementById("alert-friend-name").innerHTML = emptyFieldWarning;
		checkFriendName = false;
	} else {
		document.getElementById("friend-name").classList.remove("alert-input");
		document.getElementById("alert-friend-name").innerHTML = "&nbsp;";
		checkFriendName = true;
	}
	
	if (getFriendEmail == "") {
		document.getElementById("friend-email").classList.add("alert-input");
		document.getElementById("alert-friend-email").innerHTML = emptyFieldWarning;
		checkFriendEmail = false;
	} else {
		document.getElementById("friend-email").classList.remove("alert-input");
		document.getElementById("alert-friend-email").innerHTML = "&nbsp;";
		
		// Check if email is valid
		if ((getFriendEmail.indexOf('@') > -1) && (getFriendEmail.indexOf('.') > -1)) {
			document.getElementById("friend-email").classList.remove("alert-input");
			checkFriendEmail = true;
		} else {
			document.getElementById("friend-email").classList.add("alert-input");
			document.getElementById("alert-friend-email").innerHTML = emailValidationWarning;
			checkFriendEmail = false;
		}
		
	}
	
	// The submit button won't send any data until both fields are completed and the e-mail is valid
	if ((checkFriendName == false) || (checkFriendEmail == false)) {
		event.preventDefault();
		return false;
	}
	
}

// -----------------------------------------------
// NEWSLETTER FORM VALIDATION [END]
//////////////////////////////////////////////////