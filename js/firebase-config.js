import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6GTXwiXHeIT56QyORSlCDbSmIJFZQ5rM",
  authDomain: "hj-disenos.firebaseapp.com",
  projectId: "hj-disenos",
  storageBucket: "hj-disenos.firebasestorage.app",
  messagingSenderId: "923196275011",
  appId: "1:923196275011:web:7ddfdfd4bf36e156cb17f6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
