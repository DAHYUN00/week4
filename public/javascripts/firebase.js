  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAUbbMPsmtbJY3OLa9c0B83YuG0GcpLzOA",
    authDomain: "fir-3b07d.firebaseapp.com",
    projectId: "fir-3b07d",
    storageBucket: "fir-3b07d.appspot.com",
    messagingSenderId: "157738473986",
    appId: "1:157738473986:web:5b693e5c0f020ea85b651b",
    measurementId: "G-BPZNRKYK5P"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);