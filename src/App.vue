<template>
  <div id="app">
    <LoginPage v-if="!isAuthenticated" @authenticated="setAuthentication(true)" />
    <router-view v-if="isAuthenticated" />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import Header from './components/Header.vue'; // Import your Header component
import Footer from './components/Footer.vue'; // Import your Footer component
export default {
  data() {
    return {
      isAuthenticated: false, // Add a property to track authentication state
    };
  },
  methods: {
    // Method to set authentication state
    setAuthentication(state) {
      this.isAuthenticated = state;
    },
  },
  components: {
    LoginPage,
    Header,
    Footer
  },
};
</script>

<style>
main {
  padding: 2rem;
  min-height: calc(100vh - 120px); /* Ensure content area takes up remaining space */
}
</style>
