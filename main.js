
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



/******************Images Upload******************/


var inputs = document.querySelectorAll ('.inputfile'); 
Array.prototype.forEach.call (inputs, function( input ) 

{

	var label = input.nextElementSibling, 
	labelVal = label.innerHTML; 

	input.addEventListener( 'change', function( e )
	{
		var fileName = ' '; 
		if(this.file && this.files.length > 1 )
			fileName = (this.getAttribute( 'data-multiple-caption' ) || '' ).replace('{count}', this.files.length ); 

		else 
			fileName = e.target.value.split( '\\' ).pop(); 

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName; 

		else
			label.innerHTML = labelVal; 

	}); 

}); 

// Set the date we're counting down to
var countDownDate = new Date("April 13, 2019 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);









