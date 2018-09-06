/// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDC6LzH1BD1K8Ht4hPsCS4zAkfiYAkN4Hs",
    authDomain: "swerv-f9f35.firebaseapp.com",
    databaseURL: "https://swerv-f9f35.firebaseio.com",
    projectId: "swerv-f9f35",
    storageBucket: "swerv-f9f35.appspot.com",
    messagingSenderId: "335647784394"
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
