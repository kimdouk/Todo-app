// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJBgG2HO4UsB1G3_Vvj4mXB2bc7W_Y-9w",
  authDomain: "react-native-todo-app-a9c57.firebaseapp.com",
  projectId: "react-native-todo-app-a9c57",
  storageBucket: "react-native-todo-app-a9c57.appspot.com",
  messagingSenderId: "82735396776",
  appId: "1:82735396776:web:35742a779cac7c5fbf0f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;