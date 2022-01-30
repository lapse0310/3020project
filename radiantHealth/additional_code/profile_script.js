// JavaScript source code
const nameField = profile_html.getElementById("user-name");
const ageField = profile_html.getElementById("user-age");
const heightField = profile_html.getElementById("user-height");
const weightField = profile_html.getElementById("user-weight");
const editButton = profile_html.getElementById("edit-button");

editButton.addEventListener("click", 
function() {
	nameField.contentEditable = true;
	nameField.style.backgroundColor = "#dddbdb";
	ageField.contentEditable = true;
	ageField.style.backgroundColor = "#dddbdb";
	heightField.contentEditable = true;
	heightField.style.backgroundColor = "#dddbdb";
	weightField.contentEditable = true;
	weightField.style.backgroundColor = "#dddbdb";

});