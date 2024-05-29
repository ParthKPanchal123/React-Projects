import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database"


const firebaseConfig = { 
    
    apiKey: "AIzaSyCtuREiZJl_Pd_MaDLvVKzL2wByrkTh_D8",
    authDomain: "fir-e4d7b.firebaseapp.com",
    projectId: "fir-e4d7b",
    storageBucket: "fir-e4d7b.appspot.com",
    messagingSenderId: "159948453544",
    appId: "1:159948453544:web:f11f8bf856a30884c7349d"
//   databaseURL: "https://console.firebase.google.com/project/fir-e4d7b/database/fir-e4d7b-default-rtdb/data/~2F"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// const database = getDatabase(app);
// export default database