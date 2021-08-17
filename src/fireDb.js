import firebase from "firebase/app";
import 'firebase/database'; 



 var firebaseConfig = {
    apiKey: "AIzaSyBpUdNeXyru3Dv20GRzJmYNbppSA7obLmc",
    authDomain: "students-record-25beb.firebaseapp.com",
    databaseURL: "https://students-record-25beb-default-rtdb.firebaseio.com",
    projectId: "students-record-25beb",
    storageBucket: "students-record-25beb.appspot.com",
    messagingSenderId: "1094352300455",
    appId: "1:1094352300455:web:539a0008e4cfb9ed09ee82"
  };
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig)
  //const fireDb  = fire.database()
  //const storageRef = firebase.storage().ref();
  //const fire  = 

  export default fireDb.database().ref();
  //.database().ref();