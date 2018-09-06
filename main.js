// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvz_BEEkyAdy3i7gnBgf-pct0_pJrhYNA",
    authDomain: "swerv1-bde73.firebaseapp.com",
    databaseURL: "https://swerv1-bde73.firebaseio.com",
    projectId: "swerv1-bde73",
    storageBucket: "",
    messagingSenderId: "715606523840"
  };
  firebase.initializeApp(config);
  
  // Reference Messages Collection
  var messagesRef = firebase.database().ref('messages'); 


// Listen for form submit 

document.getElementById('contactForm').addEventListener('submit', submitForm); 

// Submit form
function submitForm(e) {
	e.preventDefault(); 


// Get values

var email = getInputVal('email');

// Save message 

saveMessage(email ); 

// Clear form 

document.getElementById('contactForm').reset();
}

// Function to get form values

function getInputVal(id){
	return document.getElementById(id).value; 

}

// Save message to firebase 

function saveMessage(email) {
	var newMessageRef = messageRef.push(); 
	newMessageRef.set (
	{ email:email

	});
}