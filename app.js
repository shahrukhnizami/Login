
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARhky7ty6KtK0qTjfjZwvqCiDYpPOogSo",
  authDomain: "ecommerce-be2dc.firebaseapp.com",
  projectId: "ecommerce-be2dc",
  storageBucket: "ecommerce-be2dc.appspot.com",
  messagingSenderId: "179775344953",
  appId: "1:179775344953:web:ebf1ab5b690f4cf96358e8",
  measurementId: "G-04F0FVEDJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// console.log(Password);
const signin_container = document.getElementById("signin_container")
const signup_container = document.getElementById("signup_container")
const user_container = document.getElementById("user_container")
const userEmail = document.getElementById("userEmail")

const signin_btn = document.getElementById("signin_btn")
const signup_btn = document.getElementById("signup_btn")
const submit_btn = document.getElementById("submit_btn")
const login_btn = document.getElementById("login_btn")
//signup_container.style.display="block"


signup_btn.addEventListener("click", CreateUserAcount)
signin_btn.addEventListener("click", signinpage)
// signup_container.style.display = "block"
// user_container.style.display="none"
submit_btn.addEventListener("click", Userlogin)
login_btn.addEventListener("click", logout)






onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("User Login");
    user_container.style.display="block"
    signup_container.style.display="none"
    signin_container.style.display="none"
    userEmail.innerText=user.email


    // ...
  } else {
    // User is signed out
    console.log("User not Login");
    signup_container.style.display = "block"
     user_container.style.display="none"

    // ...
  }
});

function CreateUserAcount() {
  // console.log(email_Signup.value);
  // console.log(Password.value);
  createUserWithEmailAndPassword(auth, email_Signup.value, Password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("User", user);


      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("User not LOgin")
      alert(error.message)
      // ..
    });

}
function signinpage() {
  signin_container.style.display = "block"
  signup_container.style.display = "none"

}
function Userlogin() {
  // console.log(email_Signin.value);
  // console.log(SigninPassword.value);

  signInWithEmailAndPassword(auth, email_Signin.value, SigninPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User=>");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
  });
}

function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
