
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCTsS0_RDIBZ-5H4SVBruyA9JPiIddUxaA",
    authDomain: "swerv-1851c.firebaseapp.com",
    databaseURL: "https://swerv-1851c.firebaseio.com",
    projectId: "swerv-1851c",
    storageBucket: "swerv-1851c.appspot.com",
    messagingSenderId: "434299523268"
  };
  
  firebase.initializeApp(config);
  
 //Reference message collection

var messageRef = firebase.database().ref('messages');

// Listen for form submit 

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
e.preventDefault();

// Get values

var email = getInputVal('email');

// Save message 

saveMessage(email);

// Clear form 

document.getElementById('contactForm').reset();
}

// Function to get form values

function getInputVal(id) {
return document.getElementById(id).value;
}

// Save message to firebase 

function saveMessage(email) {
var newMessageRef = messageRef.push();
newMessageRef.set({
email: email
});
}