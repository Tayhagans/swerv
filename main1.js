// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgyz2ggRK3x1MLIBdUrUMI0B7Xlb-RQJc",
    authDomain: "newtest-a1274.firebaseapp.com",
    databaseURL: "https://newtest-a1274.firebaseio.com",
    projectId: "newtest-a1274",
    storageBucket: "newtest-a1274.appspot.com",
    messagingSenderId: "925333825245"
  };
  firebase.initializeApp(config);
  /*****GET ELEEMENTS**********/

var uploader = document.getElementById('uploader');
var pic_1 = document.getElementById('pic_1'); 

/****LISTEN FOR FILE SELECTION****/

pic_1.addEventListener('change', function(e) {

	/*Get file*/
		var file = e.target.files[0]; 

		/*create storage ref*/

		var storageRef = firebase.storage().ref('car_pics/' + file.name); 

		/*upload files*/

		var task = storageRef.put(file); 

		/*update progress bar*/

			task.on('state_changed',

				function progress(snapshot) {
					var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
					uploader.value = percentage; 
				}, 

				function error(err) {

				}, 

				function complete() {

				}


				); 

	});

  
  
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
var tel = getInputVal('tel'); 
var mod = getInputVal('mod'); 
var instagram = getInputVal('instagram'); 
var pic_1 = getInputVal('pic_1'); 
var pic_2 = getInputVal('pic_2'); 
var pic_3 = getInputVal('pic_3'); 
var pic_4 = getInputVal('pic_4'); 

// Save message 

saveMessage(first_name, last_name, email, tel, mod, instagram, pic_1, pic_2, pic_3, pic_4);

// Clear form 

document.getElementById('car-reg-form').reset();
}

// Function to get form values

function getInputVal(id) {
return document.getElementById(id).value;
}

// Save message to firebase 

function saveMessage(first_name, last_name, email, tel, mod, instagram, pic_1, pic_2, pic_3, pic_4) {
var newMessageRef = messageRef.push();
newMessageRef.set({

first_name: first_name,
last_name: last_name, 
email: email,
tel: tel, 
mod: mod, 
instagram: instagram, 
pic_1: pic_1, 
pic_2: pic_2, 
pic_3: pic_3, 
pic_4: pic_4,

});
}