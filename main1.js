// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAb-0wkWrG3SaJZaeL34s8RVZfL_Fna47I",
    authDomain: "swerv-car-reg.firebaseapp.com",
    databaseURL: "https://swerv-car-reg.firebaseio.com",
    projectId: "swerv-car-reg",
    storageBucket: "swerv-car-reg.appspot.com",
    messagingSenderId: "356521316761"
  };
  firebase.initializeApp(config);
  /*****GET ELEEMENTS**********/


  document.getElementById('parent_upload').addEventListener('change', function(e) {

  		var uploader = document.getElementById('uploader'); 
  		

	/*Get file*/
		var file = e.target.files[0];

		 if (e.target && e.target.matches('.car-img')) {

		/*create storage ref*/

		var storageRef = firebase.storage().ref('car_pics/' + file.name); 

	

	


	/*upload files*/

		var task = storageRef.put(file); 

	}

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

   /*****GET ELEEMENTS**********/


  document.getElementById('parent_upload').addEventListener('change', function(e) {

  		
  		var uploader_1 = document.getElementById('uploader_1')

	/*Get file*/
		var file = e.target.files[0];

		 if (e.target && e.target.matches('.car-img_1')) {

		/*create storage ref*/

		var storageRef = firebase.storage().ref('car_pics/' + file.name); 

	

	


	/*upload files*/

		var task = storageRef.put(file); 

	}

		/*update progress bar*/

			task.on('state_changed',

				function progress(snapshot) {
					var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
					uploader_1.value = percentage; 
					
				}, 

				function error(err) {

				}, 

				function complete() {

				}


				); 


	});


document.getElementById('parent_upload').addEventListener('change', function(e) {

  		
  		var uploader_2 = document.getElementById('uploader_2')

	/*Get file*/
		var file = e.target.files[0];

		 if (e.target && e.target.matches('.car-img_2')) {

		/*create storage ref*/

		var storageRef = firebase.storage().ref('car_pics/' + file.name); 

	

	


	/*upload files*/

		var task = storageRef.put(file); 

	}

		/*update progress bar*/

			task.on('state_changed',

				function progress(snapshot) {
					var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
					uploader_2.value = percentage; 
					
				}, 

				function error(err) {

				}, 

				function complete() {

				}


				); 


	});

document.getElementById('parent_upload').addEventListener('change', function(e) {

  		
  		var uploader_3 = document.getElementById('uploader_3')

	/*Get file*/
		var file = e.target.files[0];

		 if (e.target && e.target.matches('.car-img_3')) {

		/*create storage ref*/

		var storageRef = firebase.storage().ref('car_pics/' + file.name); 

	

	


	/*upload files*/

		var task = storageRef.put(file); 

	}

		/*update progress bar*/

			task.on('state_changed',

				function progress(snapshot) {
					var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
					uploader_3.value = percentage; 
					
				}, 

				function error(err) {

				}, 

				function complete() {



				}


				); 




	});





// var uploader = document.getElementById('uploader');
// var pic_1 = document.getElementById('pic_1'); 

/****LISTEN FOR FILE SELECTION****/


  
  
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

//reload page 

location.reload();
}
