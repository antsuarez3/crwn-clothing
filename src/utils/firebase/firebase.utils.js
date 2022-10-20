// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKkm7AtilQzRmpefNamCxRXZRi2k6amdk',
  authDomain: 'clothing-db-c0d48.firebaseapp.com',
  projectId: 'clothing-db-c0d48',
  storageBucket: 'clothing-db-c0d48.appspot.com',
  messagingSenderId: '731051165818',
  appId: '1:731051165818:web:ffce8a90d8a5246cba53c3',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
