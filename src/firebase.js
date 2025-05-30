import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJc4JqvQz6TCl1IShxURtbIZiJbu6VQxw",
  authDomain: "to-do-list-b91d8.firebaseapp.com",
  projectId: "to-do-list-b91d8",
  storageBucket: "to-do-list-b91d8.firebasestorage.app",
  messagingSenderId: "39778664458",
  appId: "1:39778664458:web:6fe424368eba3951529ff3",
  measurementId: "G-N6301DTCQH"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default app;