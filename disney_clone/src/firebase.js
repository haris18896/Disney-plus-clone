import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };
const firebaseConfig = {
  apiKey: "AIzaSyA8a5uLPwm-_YfwfbmcWZfSbeIblllXKP4",
  authDomain: "disneyplusclone-3c8bd.firebaseapp.com",
  projectId: "disneyplusclone-3c8bd",
  storageBucket: "disneyplusclone-3c8bd.appspot.com",
  messagingSenderId: "7198803725",
  appId: "1:7198803725:web:333a84c5b450cef2209244",
  measurementId: "G-XNNRSLBB5E"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
