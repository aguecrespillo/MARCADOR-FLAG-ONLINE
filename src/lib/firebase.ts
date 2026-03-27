import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // ... pega aquí tus claves (apiKey, authDomain, etc.)
  databaseURL: "https://flag-online-default-rtdb.europe-west1.firebasedatabase.app" 
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);