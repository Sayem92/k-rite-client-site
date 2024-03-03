// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBIC3tHdqKcmJrhoJE9Pt1wq-074tq01Rg",
  authDomain: "task-management-b5e67.firebaseapp.com",
  projectId: "task-management-b5e67",
  storageBucket: "task-management-b5e67.appspot.com",
  messagingSenderId: "829767261871",
  appId: "1:829767261871:web:34fa8e660ee0e327153e5a",
  measurementId: "G-38305G7H9W",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

