import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyDqZ8NN5nI6I_W3m25_wE2cSnQOPOVkTR4",
    authDomain: "slack-of-c2c.firebaseapp.com",
    databaseURL: "https://slack-of-c2c.firebaseio.com",
    projectId: "slack-of-c2c",
    storageBucket: "slack-of-c2c.appspot.com",
    messagingSenderId: "287502579445",
    appId: "1:287502579445:web:4a4672526186ce76bdf7bc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;