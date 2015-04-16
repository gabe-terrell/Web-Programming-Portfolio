// By default, variables are global

// Called 3 times in one instance -- What da heck!?
function parseData() {

	if (request.readyState == 4 && request.status == 200) {
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i = 0; i < converted.length; i++) {
			console.log(converted[i]['content']);
			messagesDiv.innterHTML += "<p>" + converted[i]['content'] + "</p>";
		}
	}
	else if (request.readyState == 4 && request.status != 200) {
		alert("Hacked by the Chinese!");
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

	// Step 4 - 
	request.send();
}

// Event - something that happens
// Asynchronous - things don't happen in order -- not going at the same rate (like above)
// Ready States Vales
/*		0. Not Initializes
		1. Request has been set up
		2. Request has been sent
		3. Request is in progress
		4. Request is complete, got a response

		(the 3 pings we are getting from parseData() are 2, 3, and 4)
*/
// Same Origin Policy: Trying to get a resource like JSON, must be on your same domain (so heroku is a no no)
// No 'Access-Control-Allow-Origin' header is present on the requested resources. Origin 'http://localhost:8080'
// is therefore not allowed access.