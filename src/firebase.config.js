// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-app-423011.firebaseapp.com",
  projectId: "insta-app-423011",
  storageBucket: "insta-app-423011.appspot.com",
  messagingSenderId: "145659739003",
  appId: "1:145659739003:web:f167612752dec8cf0fdbde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write: if
//         request.resource.size < 2 * 1024 * 1024 &&
//         request.resource.contentType.matches("image/.*")
//       }
//     }
//   }