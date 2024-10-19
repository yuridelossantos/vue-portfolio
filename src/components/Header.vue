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
  background-color: #000000;
  box-shadow: 0 2px 4px rgba(204, 199, 199, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}

nav a {
  font-weight: 600;
  color: #cad9e7;
  margin-right: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:last-child {
  margin-right: 0;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

