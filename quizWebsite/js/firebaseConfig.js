import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFjraJS-zlDoD4Lo6IwBTh91SdDdnbWtY",
  authDomain: "quizwebsite-34d6f.firebaseapp.com",
  projectId: "quizwebsite-34d6f",
  storageBucket: "quizwebsite-34d6f.appspot.com",
  messagingSenderId: "466852113658",
  appId: "1:466852113658:web:730dc0942f293b0b8a6d43",
  measurementId: "G-M0GNQJ3LGF",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();