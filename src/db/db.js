import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQVPRxAAx7lDS9Dlxv7Rh-mQ7_e0gQmfQ",
  authDomain: "baloo-ecommerce.firebaseapp.com",
  projectId: "baloo-ecommerce",
  storageBucket: "baloo-ecommerce.firebasestorage.app",
  messagingSenderId: "299389387201",
  appId: "1:299389387201:web:ce2ae8ce7aeabcda16ef40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;