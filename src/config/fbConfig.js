import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAzMcrhfTNNepxzu7peYPRZqPWxqDakJH0",
    authDomain: "net-my-marioplan.firebaseapp.com",
    databaseURL: "https://net-my-marioplan.firebaseio.com",
    projectId: "net-my-marioplan",
    storageBucket: "net-my-marioplan.appspot.com",
    messagingSenderId: "30576526076"
  };

  firebase.initializeApp(config);

  export default firebase;