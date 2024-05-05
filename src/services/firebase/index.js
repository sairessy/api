import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCS3wwUYeKU4_50T973onWgtNbII8QhaHs",
    authDomain: "consultor-86db4.firebaseapp.com",
    projectId: "consultor-86db4",
    storageBucket: "consultor-86db4.appspot.com",
    messagingSenderId: "959528397453",
    appId: "1:959528397453:web:67f8277bdd77d9e13f90c4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;