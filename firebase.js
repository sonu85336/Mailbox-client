import firebase from "firebase/compat/app"
import 'firebase/compat/database'
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCVh0utcRb3zCohZ83qEYzEMHaFCic1fH8",
  authDomain: "clone-33626.firebaseapp.com",
  projectId: "clone-33626",
  storageBucket: "clone-33626.appspot.com",
  messagingSenderId: "135605359422",
  appId: "1:135605359422:web:6cc0975b82dd4c569f526f"
};
  const firebaseApp  = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  export {db}
