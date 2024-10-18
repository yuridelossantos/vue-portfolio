<template>
  <div class="resume">
    <Header />
    <main class="resume-content">
      <h2>My Resume</h2>
      <section>
        <h3>Work Experience</h3>
        <!-- Add your work experience here -->
      </section>
      <section>
        <h3>Education</h3>
        <!-- Add your education here -->
      </section>
      <section>
        <h3>Skills</h3>
        <!-- Add your skills here -->
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'; // Adjust the path if needed
import Footer from './Footer.vue'; // Adjust the path if needed

export default {
  name: 'Resume',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
}

.resume-content {
  flex: 1; /* Take up remaining space */
  max-width: 800px; /* Optional: control max width */
  margin: 0 auto;
  padding: 20px;
  overflow-y: auto; /* Allow scrolling if content overflows */
}

section {
  margin-bottom: 30px;
}

h3 {
  margin-top: 0;
}
</style>
