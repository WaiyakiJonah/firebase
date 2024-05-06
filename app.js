
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
  
  // Get a reference to the Firebase database
  const database = getDatabase();
  
  // Form and task list elements
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');
  
  // Function to add a task
  function addTask(taskName, taskDescription) {
    push(ref(database, 'tasks'), {
      name: taskName,
      description: taskDescription
    });
  }
  
  // Function to display tasks
  function displayTasks() {
    onValue(ref(database, 'tasks'), (snapshot) => {
      taskList.innerHTML = ''; // Clear the task list
      forEachChild(snapshot, (childSnapshot) => {
        const task = childSnapshot.val();
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.textContent = `${task.name}: ${task.description}`;
        taskList.appendChild(taskItem);
      });
    });
  }
  
  // Event listener for task submission
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    addTask(taskName, taskDescription);
    taskForm.reset(); // Clear form fields after submission
  });
  
  // Display tasks when the page loads
  displayTasks();
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  // Form and task list elements
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');
  
  // Function to add a task
  function addTask(taskName, taskDescription) {
    database.ref('tasks').push({
      name: taskName,
      description: taskDescription
    });
  }
  
  // Function to display tasks
  function displayTasks() {
    database.ref('tasks').on('value', function(snapshot) {
      taskList.innerHTML = ''; // Clear the task list
      snapshot.forEach(function(childSnapshot) {
        const task = childSnapshot.val();
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.textContent = `${task.name}: ${task.description}`;
        taskList.appendChild(taskItem);
      });
    });
  }
  
  // Event listener for task submission
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    addTask(taskName, taskDescription);
    taskForm.reset(); // Clear form fields after submission
  });
  
  // Display tasks when the page loads
  displayTasks();
  