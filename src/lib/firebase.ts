import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHOzNjb3CMpxNP_mkqGB01Aa6HSS6jyqw",
  authDomain: "flag-online.firebaseapp.com",
  databaseURL: "https://flag-online-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flag-online",
  storageBucket: "flag-online.appspot.com",
  messagingSenderId: "975905100860",
  appId: "1:975905100860:web:e66bd079d63e363b469f39",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios
export const db = getDatabase(app);
export const auth = getAuth(app);

// Export opcional (útil para futuro)
export default app;