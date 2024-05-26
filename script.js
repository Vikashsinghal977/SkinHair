 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
 import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
 const firebaseConfig = {
    apiKey: "AIzaSyD46KcHF8Sop9VOCYbOzZLIauMfgukiZ90",
    authDomain: "skincare-5470d.firebaseapp.com",
    projectId: "skincare-5470d",
    storageBucket: "skincare-5470d.appspot.com",
    messagingSenderId: "1049316262268",
    appId: "1:1049316262268:web:2acf3823d085b089fde4f9"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById("username").value),{
        username:  document.getElementById("username").value,
        phone:  document.getElementById("phone").value,
        selectd:  document.getElementById("selectd").value,
        dob:  document.getElementById("dob").value
    });
    alert("Thanks for request");
})
