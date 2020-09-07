// JavaScript Document

//////////////////////////////////////////////////
// ORGANIZES THE WIDTH OF THE TWO PRODUCTS TO MATCH THE WIDTH OF DIV THAY ARE IN
//////////////////////////////////////////////////

var emailProduct = document.getElementsByClassName("col-25");

function verifyJsonLoad () {
	if (jsonIsLoaded == true) {
		
		for (i = 0; i < totalItems; i++) {
			emailProduct[i].classList.add("col-50");
			emailProduct[i].classList.remove("col-25");
		}
		clearInterval(jsonLoadingVerification);
	}
}

var jsonLoadingVerification = setInterval(verifyJsonLoad, 100);


// -----------------------------------------------
// ORGANIZES THE WIDTH OF THE TWO PRODUCTS TO MATCH THE WIDTH OF DIV THAY ARE IN [END]
//////////////////////////////////////////////////