import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwoUvf2GP6C4CEXlASRZDbk3U1L0kJAlY",
    authDomain: "groupbuy-c9238.firebaseapp.com",
    databaseURL: "https://groupbuy-c9238-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "groupbuy-c9238",
    storageBucket: "groupbuy-c9238.appspot.com",
    messagingSenderId: "443292425096",
    appId: "1:443292425096:web:cff552392543b7c4bc783d"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
