import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA6AtzweFx8E_greEB6vAlEHf1_DJKQr8s",
    authDomain: "antyrecenzja-a7320.firebaseapp.com",
    databaseURL: "https://antyrecenzja-a7320.firebaseio.com",
    projectId: "antyrecenzja-a7320",
    storageBucket: "antyrecenzja-a7320.appspot.com",
    messagingSenderId: "767876128406",
    appId: "1:767876128406:web:2f3ef3b93acbe2ffcfacb7",
  };
  
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
