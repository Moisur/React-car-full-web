// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOxA0EEGbtY27WRObsuCTDtU8SOD4xyuM",
  authDomain: "reacat-car.firebaseapp.com",
  projectId: "reacat-car",
  storageBucket: "reacat-car.appspot.com",
  messagingSenderId: "635169141733",
  appId: "1:635169141733:web:b0be6fe56940c6a4e0750c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;