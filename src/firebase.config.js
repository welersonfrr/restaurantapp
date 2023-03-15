import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcRG_uwVRR1i4_h1gEOCxhNxI8goziEXE",
  authDomain: "restaurantapp-dec8d.firebaseapp.com",
  databaseURL: "https://restaurantapp-dec8d-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-dec8d",
  storageBucket: "restaurantapp-dec8d.appspot.com",
  messagingSenderId: "561732637713",
  appId: "1:561732637713:web:58b054be9e507c3b31cdb0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
