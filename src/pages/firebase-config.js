// firebase-config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Jika Anda menggunakan Firestore
import { getDatabase } from "firebase/database"; // Jika Anda menggunakan Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34kYQwvU2wMcWwM3l4WI9CJ1WJwN9NdQ",
  authDomain: "savesayproject.firebaseapp.com",
  projectId: "savesayproject",
  storageBucket: "savesayproject.firebasestorage.app",
  messagingSenderId: "684850416424",
  appId: "1:684850416424:web:0d36966f2170e03c779e1d"
};


// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor layanan Firebase yang Anda gunakan
export const db = getFirestore(app); // Jika Anda menggunakan Firestore
export const database = getDatabase(app); // Jika Anda menggunakan Realtime Database
