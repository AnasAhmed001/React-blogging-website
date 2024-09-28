import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhaEt2rj8Sq3WopNjR6o_X_-ewCpmYl9g",
  authDomain: "blogging-website-react.firebaseapp.com",
  projectId: "blogging-website-react",
  storageBucket: "blogging-website-react.appspot.com",
  messagingSenderId: "1097368988409",
  appId: "1:1097368988409:web:a08b12e30416ed26339028",
  measurementId: "G-YG19CSC1WS"
};


const app = initializeApp(firebaseConfig);
export default app