import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrlS_seRwqHhdE4MTPD0pNgiKGxdaW4Rk",
  authDomain: "greenjuice-cde09.firebaseapp.com",
  projectId: "greenjuice-cde09",
  storageBucket: "greenjuice-cde09.appspot.com",
  messagingSenderId: "950467250592",
  appId: "1:950467250592:web:86411086055b3e5a437cc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
