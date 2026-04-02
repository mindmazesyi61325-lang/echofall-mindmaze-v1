import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwpXkKD68f_yiLKZg8sod7rLZcnH1Dr8Q",
  authDomain: "mindmaze-v1.firebaseapp.com",
  projectId: "mindmaze-v1",
  storageBucket: "mindmaze-v1.firebasestorage.app",
  messagingSenderId: "844076985429",
  appId: "1:844076985429:web:e0a84c8fd58d8f75a4f8dc",
  measurementId: "G-G3NHVJCJ1X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
