import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDUmIUoBil9rb9z0QZIiUO_bbiwPRObrlE",
    authDomain: "vk-test-3a38d.firebaseapp.com",
    projectId: "vk-test-3a38d",
    storageBucket: "vk-test-3a38d.appspot.com",
    messagingSenderId: "92619532671",
    appId: "1:92619532671:web:3d9ae12bf5022ab310d24a",
    measurementId: "G-79W5505X7R"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase();

export const dbFirestore = getFirestore(app);
