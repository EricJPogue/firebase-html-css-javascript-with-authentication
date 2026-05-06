// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3rw5wUPa7jJ_8fi2G5JTn8uo2kctv5BQ",
  authDomain: "fir-html-project-d85a0.firebaseapp.com",
  projectId: "fir-html-project-d85a0",
  storageBucket: "fir-html-project-d85a0.firebasestorage.app",
  messagingSenderId: "346305353800",
  appId: "1:346305353800:web:62f0a3acc0c2ddad1ba07d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
