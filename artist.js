/**********ARTIST REG***************/

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKMijLYs_hA7205kJhLwKDenJfXGMaczA",
    authDomain: "swerv-artist-reg.firebaseapp.com",
    databaseURL: "https://swerv-artist-reg.firebaseio.com",
    projectId: "swerv-artist-reg",
    storageBucket: "swerv-artist-reg.appspot.com",
    messagingSenderId: "706240803115"
  };
  firebase.initializeApp(config);

   //Reference message collection

var messageRef = firebase.database().ref('messages');

// Listen for form submit 

document.getElementById('car-reg-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
e.preventDefault();

// Get values
var first_name = getInputVal('first_name');
var last_name = getInputVal('last_name');
var email = getInputVal('email');
var music = getInputVal('music'); 
var tel = getInputVal('tel'); 

// Save message 

saveMessage(first_name, last_name, email, music, tel);

// Show alert 
document.querySelector('.alert').style.display = "block";

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
},3000);


// Clear form 

document.getElementById('car-reg-form').reset();
}

// Function to get form values

function getInputVal(id) {
return document.getElementById(id).value;
}

// Save message to firebase 

function saveMessage(first_name, last_name, email, music, tel) {
var newMessageRef = messageRef.push();
newMessageRef.set({
first_name: first_name,
last_name: last_name,
email: email,
music: music, 
tel: tel, 
});
}
