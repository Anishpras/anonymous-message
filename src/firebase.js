import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCs06EfgFZMxTSe7vfGM9hbVJ5zHvBqDUo",
  authDomain: "anonymous-message-anish.firebaseapp.com",
  projectId: "anonymous-message-anish",
  storageBucket: "anonymous-message-anish.appspot.com",
  messagingSenderId: "633907233497",
  appId: "1:633907233497:web:de95f7feca4feabc3f74c8",
});

const db = firebaseApp.firestore();

export default db;
