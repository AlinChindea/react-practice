import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'catch-of-the-day-alin-ch.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-alin-ch.firebaseio.com'
});

//create our Rebase bindings -> database() is a function that will return our actual db
const base = Rebase.createClass(firebaseApp.database());

// named export 
export { firebaseApp };

// default export
export default base;