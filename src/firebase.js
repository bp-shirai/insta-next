// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-v2-5c034.firebaseapp.com",
  projectId: "insta-next-v2-5c034",
  storageBucket: "insta-next-v2-5c034.appspot.com",
  messagingSenderId: "798068009283",
  appId: "1:798068009283:web:f39b5f0af9bcf4e70227f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//  service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write : if
//         request.resource.size < 2 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//       }
//     }
//   }
