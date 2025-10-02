// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3aTbc1ctDm-OKMLZ68_Id7Ve0Ktv1_Kw",
  authDomain: "auth-integation-afe29.firebaseapp.com",
  projectId: "auth-integation-afe29",
  storageBucket: "auth-integation-afe29.firebasestorage.app",
  messagingSenderId: "533981555393",
  appId: "1:533981555393:web:e5c6dee211b67a12b90240",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
