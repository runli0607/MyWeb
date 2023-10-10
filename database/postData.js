import { initializeApp , getApps, getApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAjiUWvqJnGPRRU9ZMgOqiWHwVPMmRQQko",
  authDomain: "runweb-37951.firebaseapp.com",
  projectId: "runweb-37951",
  storageBucket: "runweb-37951.appspot.com",
  messagingSenderId: "787707205999",
  appId: "1:787707205999:web:5861e0bd475703a757709a",
  measurementId: "G-C7CFGRCF5W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app) 
export const postsCollection = collection(db,'posts')