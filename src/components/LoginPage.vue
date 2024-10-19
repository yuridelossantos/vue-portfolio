<template>
  <div class="loginpage"> <!-- Main container for the login page -->
    <div class="overlay"> <!-- Dark overlay for better readability -->
      <div class="login-box"> <!-- Box containing the login form -->
        <h2>Login</h2> <!-- Heading for the login form -->
        <form @submit.prevent="handleLogin"> <!-- Form submission handler -->
          <div class="input-group"> <!-- Container for username input -->
            <label for="username">Username</label> <!-- Label for username input -->
            <input
              type="text"
              id="username"
              v-model="username" 
              placeholder="Enter your username"
              required 
            />
          </div>
          <div class="input-group"> <!-- Container for password input -->
            <label for="password">Password</label> <!-- Label for password input -->
            <input
              type="password"
              id="password"
              v-model="password" 
              placeholder="Enter your password"
              required 
            />
          </div>
          <button type="submit">Login</button> <!-- Submit button for the form -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage', // Component name
  data() {
    return {
      username: '', // Data property for storing username input
      password: '' // Data property for storing password input
    };
  },
  methods: {
    handleLogin() {
      const validUsername = 'user'; // Placeholder for valid username
      const validPassword = 'pass'; // Placeholder for valid password

      // Check if entered credentials match the valid ones
      if (this.username === validUsername && this.password === validPassword) {
        this.$emit('authenticated', true); // Emit authenticated event
        this.$router.push('/dashboard'); // Redirect to dashboard on success
      } else {
        alert('Invalid username or password. Please try again.'); // Alert for invalid login
      }
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%; /* Set height to 100% for the full-page effect */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

.loginpage {
  background-image: url('@/assets/bglogin.jpg'); /* Background image for login page */
  background-size: cover; /* Cover the entire page */
  background-repeat: no-repeat; /* No repeat of the background image */
  background-position: center; /* Center the background image */
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  height: 100vh; /* Full viewport height */
}

.overlay {
  position: absolute; /* Overlay covers entire viewport */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left */
  right: 0; /* Align to the right */
  bottom: 0; /* Align to the bottom */
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black overlay */
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center the overlay content horizontally */
  align-items: center; /* Center the overlay content vertically */
}

.login-box {
  background: white; /* White background for the login box */
  padding: 40px; /* Padding inside the box */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Box shadow for depth */
  max-width: 400px; /* Maximum width of the login box */
  width: 100%; /* Full width */
  text-align: center; /* Center the text */
}

h2 {
  margin-bottom: 20px; /* Space below the heading */
  color: #333; /* Dark color for the heading */
}

.input-group {
  margin-bottom: 15px; /* Space below each input group */
  text-align: left; /* Align text to the left */
}

input {
  width: 100%; /* Full width input */
  padding: 10px; /* Padding inside the input */
  margin: 10px 0; /* Vertical margin */
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 5px; /* Rounded corners for inputs */
}

button {
  width: 100%; /* Full width button */
  padding: 10px; /* Padding inside the button */
  background-color: #0d2f0e; /* Dark green background */
  color: white; /* White text color */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  font-size: 18px; /* Font size for the button */
  cursor: pointer; /* Pointer cursor on hover */
}

button:hover {
  background-color: #227225; /* Lighter green on hover */
}
</style>
