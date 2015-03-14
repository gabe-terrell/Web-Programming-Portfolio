// Storing data using Javascript
//		1. Cookies
//				- key-value pair
//				- can be modified or deleted
//				- store up to 4 kb of data
//				- same origin policy applied (thank goodness...)
//				- Console -> Resources -> Cookies -> Local Files
//				- Have expiration dates (time or session)
//		2. Local Storage
//				- key-value pair
//				- can be modified
//				- same origin policy applied
//				- roughly 5 MB
//				- are not sent to the server

function init() {
	localStorage.setItem('phrase', 'Bonkers');
	elem = document.getElementById("header");
	elem.innerHTML = "<h1> The phrase that pays is " + localStorage['phrase'] + "</h1>";
}

function reload () {
	elem = document.getElementById("results");
}