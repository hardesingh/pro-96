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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



  function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
       window.location = "index.html";
  }