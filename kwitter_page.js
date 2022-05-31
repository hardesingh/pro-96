//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCi0b2_dhObgig20SczLRkw7tQdVGoyDkI",
authDomain: "let-s-chat-edd7d.firebaseapp.com",
databaseURL: "https://let-s-chat-edd7d-default-rtdb.firebaseio.com",
projectId: "let-s-chat-edd7d",
storageBucket: "let-s-chat-edd7d.appspot.com",
messagingSenderId: "797976467571",
appId: "1:797976467571:web:78de184c025f7ac9387206",
measurementId: "G-XQ9J6JYCTD"
};

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
      });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
