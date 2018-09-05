
// Listen for form submit 

document.getElementById('contactForm').addEventListener('submit', submitForm); 

// Submit form
function submitForm(e) {
	e.preventDefault(); 
}

// Get values

var email = getInputVal ('email');

// Save message 

saveMessage(email); 

// Clear form 

document.getElementById('contactForm').reset();}

// Function to get form values

function getInputVal(id) {
	return document.getElementById(id).value; 

}

// Save message to firebase 

function saveMessage(email) {
	var newMessageRef = messageRef.push(); 
	newMessageRef.set (
	{ email:email

	});
} 