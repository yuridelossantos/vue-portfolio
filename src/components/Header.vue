<template>
    <header class="header">
      <h2 class="title">My Portfolio</h2> <!-- Add the title here -->
      <nav>
        <ul>
          <li><router-link to="/loginpage">Logout</router-link></li>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #000000; /* Header background color */
    padding: 10px 20px;
    color: white;
    display: flex; /* Use flexbox for alignment */
    justify-content: space-between; /* Space between title and nav */
    align-items: center; /* Center items vertically */
  }
  
  .title {
    margin: 0; /* Remove default margin */
    font-size: 1.5rem; /* Adjust font size for the title */
  }
  
  nav ul {
    list-style: none; /* Remove default list styling */
    display: flex; /* Display list items in a row */
    padding: 0;
  }
  
  nav ul li {
    margin: 0 15px; /* Space between links */
  }
  
  nav ul li a {
    color: white; /* Link color */
    text-decoration: none; /* Remove underline */
  }
  
  nav ul li a:hover {
    text-decoration: underline; /* Underline on hover */
  }
  </style>
  