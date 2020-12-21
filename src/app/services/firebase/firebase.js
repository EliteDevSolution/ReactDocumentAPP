import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const firebaseApp = firebase;
