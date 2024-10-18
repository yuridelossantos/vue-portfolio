<template>
  <header>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/certifications">Certifications</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/loginpage">Logout</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: #000000; /* Light background color */
  box-shadow: 0 2px 4px rgba(204, 199, 199, 0.1); /* Subtle shadow for depth */
}

nav {
  display: flex; /* Use flexbox for alignment */
  justify-content: space-between; /* Space links evenly */
  align-items: center; /* Center vertically */
  padding: 20px 30px; /* Adjust padding for top/bottom and left/right */
}

nav a {
  font-weight: 600; /* Slightly lighter than bold for readability */
  color: #cad9e7; /* Dark text color */
  margin-right: 20px; /* Increased margin for better spacing */
  text-decoration: none; /* Remove underline from links */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}

nav a:last-child {
  margin-right: 0; /* Remove margin from the last link */
}

nav a:hover {
  color: #42b983; /* Change color on hover */
}

nav a.router-link-exact-active {
  color: #42b983; /* Active link color */
}
</style>
