<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCj6xAUA6iTWHqgLrBCGdrrcdjgZjnk4_k",
    authDomain: "task-management-app-8f946.firebaseapp.com",
    projectId: "task-management-app-8f946",
    storageBucket: "task-management-app-8f946.appspot.com",
    messagingSenderId: "515216028111",
    appId: "1:515216028111:web:3ca33a16af9779054422ba",
    measurementId: "G-9SRCVZZTVV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
