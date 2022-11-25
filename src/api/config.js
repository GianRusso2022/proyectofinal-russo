import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCpqc55FySpr4KJcZ3JVFOwhSwVuHpBaOc",
    authDomain: "lospaseos-tienda.firebaseapp.com",
    projectId: "lospaseos-tienda",
    storageBucket: "lospaseos-tienda.appspot.com",
    messagingSenderId: "375435437508",
    appId: "1:375435437508:web:99310d61ad593bc8003091"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);