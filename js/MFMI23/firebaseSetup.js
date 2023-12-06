const firebaseConfig = {
    apiKey: "AIzaSyD2XyyGabPr2y_VWHMJtzJ1CEztKTEqRHQ",
    authDomain: "mfmi23.firebaseapp.com",
    projectId: "mfmi23",
    storageBucket: "gs://mfmi23.appspot.com",
    messagingSenderId: "900627906509",
    appId: "1:900627906509:web:c28d9579288c3e27cdce84"
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const firebaseStorage = firebase.storage();