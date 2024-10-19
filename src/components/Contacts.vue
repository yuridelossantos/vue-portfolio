<template>
  <div class="contacts-page">
    <!-- Header component for the contacts page -->
    <Header />

    <section id="contacts" class="contacts-section">
      <!-- Section heading for contacts -->
      <h3>Contacts</h3>
      <!-- Introductory text inviting users to reach out -->
      <p>If you have any questions or just want to say hello, feel free to reach out!</p>
      <!-- Displaying email for contact -->
      <p>You can email me at: <strong>mjydelossantos@tip.edu.ph</strong></p>
      <!-- Displaying Facebook link for messaging -->
      <p>You can message me on Facebook: <strong><a :href="facebookLink" target="_blank">{{ facebookLink }}</a></strong></p>
      <!-- Displaying Instagram link for messaging -->
      <p>You can message me on Instagram: <strong><a :href="IGLink" target="_blank">{{ IGLink }}</a></strong></p>
      <!-- Displaying phone number for contact -->
      <p>You can call me at: <strong>+63 964 944 8259</strong></p>
    </section>

    <!-- Footer component for the contacts page -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'; // Importing Header component
import Footer from './Footer.vue'; // Importing Footer component

export default {
  name: 'Contacts', // Component name
  components: {
    Header, // Registering Header component
    Footer, // Registering Footer component
  },
  data() {
    return {
      // Data properties for Facebook and Instagram links
      facebookLink: 'https://www.facebook.com/jonathanyuri29/',
      IGLink: 'https://www.instagram.com/iloveyouriii/',
    };
  },
};
</script>

<style scoped>
.contacts-page {
  display: flex; /* Flexbox layout for the contacts page */
  flex-direction: column; /* Arranging items vertically */
  height: 100vh; /* Full height of the viewport */
}

.contacts-section {
  flex: 1; /* Flex-grow property for the contacts section */
  margin-top: 2rem; /* Margin above the section */
  background: white; /* Background color for the section */
  padding: 2rem; /* Padding inside the section */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  max-width: 800px; /* Maximum width of the section */
  margin-left: auto; /* Centering the section horizontally */
  margin-right: auto; /* Centering the section horizontally */
}

h3 {
  font-size: 2rem; /* Font size for the heading */
  margin-bottom: 1rem; /* Margin below the heading */
}

p {
  font-size: 1.1rem; /* Font size for paragraphs */
  line-height: 1.5; /* Line height for readability */
}

a {
  color: #3498db; /* Link color */
  text-decoration: none; /* No underline for links */
}

a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>
