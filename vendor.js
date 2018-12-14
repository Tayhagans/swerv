/**********VENDOR REG***************/

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKm1Z2U7eXxafrWPvODM0IxEg0fDgKgEc",
    authDomain: "swerv-vendor-reg.firebaseapp.com",
    databaseURL: "https://swerv-vendor-reg.firebaseio.com",
    projectId: "swerv-vendor-reg",
    storageBucket: "swerv-vendor-reg.appspot.com",
    messagingSenderId: "1052167141123"
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
var product = getInputVal('product'); 
var tel = getInputVal('tel'); 

// Save message 

saveMessage(first_name, last_name, email, product, tel);

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

function saveMessage(first_name, last_name, email, product, tel) {
var newMessageRef = messageRef.push();
newMessageRef.set({
first_name: first_name,
last_name: last_name,
email: email,
product: product, 
tel: tel, 
});
}
