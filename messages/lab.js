function parseData() {
	// If request is succesful with correct status
	if (request.readyState == 4 && request.status == 200) {
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i = 0; i < converted.length; i++) {
			messagesDiv.innerHTML += "<p>  " + converted[i]['content'] + "</p>";
		}
	}
}

function parse() {
	// Step 1 - create instance of object
	// If I prepend var to request, this will no longer work
	// request becomes a local var, so parseData() gets very confused.
	request = new XMLHttpRequest();

	// Step 2 - create or "open" HTTP request
	request.open("GET", "data.json", true);

	// Step 3 - Set up way to manage response (with a function)
	request.onreadystatechange = parseData;

	// Step 4 - Execute the request
	request.send();
}
