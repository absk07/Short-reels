// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSYmccxvnfbkzF16jafwICcCLeaARWCPI",
  authDomain: "flicka-ad4d5.firebaseapp.com",
  projectId: "flicka-ad4d5",
  storageBucket: "flicka-ad4d5.appspot.com",
  messagingSenderId: "873657141693",
  appId: "1:873657141693:web:b9e8b26f1a3aec638caad4"
};

// Initialize Firebase
let app;
if(firebase.app.length==0){
    app= initializeApp(firebaseConfig);
}else{
    app=firebase.app();
}

const auth=firebase.auth()

export {auth};