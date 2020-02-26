import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB-P3QWySDzILleTtrZGsYf_nAHc5e_ydM",
    authDomain: "forgeit-100.firebaseapp.com",
    databaseURL: "https://forgeit-100.firebaseio.com",
    projectId: "forgeit-100",
    storageBucket: "forgeit-100.appspot.com",
    messagingSenderId: "386235534201",
    appId: "1:386235534201:web:8592dcb76f52d296c3fda8"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
