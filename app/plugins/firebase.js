import firebase from 'firebase/app';
import 'firebase/firestore';

export default (_, inject) => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: process.env.apiKey,
      authDomain: "simple-count-down.firebaseapp.com",
      projectId: "simple-count-down",
    });
  }
  const firestore = firebase.firestore();
  firestore.settings({ timestampsInSnapshots: true });
  inject('db', firestore);
}
