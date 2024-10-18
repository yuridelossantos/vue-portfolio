<template>
  <div class="certifications">
    <Header />
    <main class="certifications-content">
      <h2>My Certifications</h2>
      <ul>
        <li v-for="cert in certifications" :key="cert.id">
          <h3>{{ cert.name }}</h3>
          <p>Issuer: {{ cert.issuer }}</p>
          <p>Date: {{ cert.date }}</p>
        </li>
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'; // Adjust the path if needed
import Footer from './Footer.vue'; // Adjust the path if needed

export default {
  name: 'Certifications',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      certifications: [
        { id: 1, name: 'Web Development Certification', issuer: 'FreeCodeCamp', date: '2022-05-15' },
        { id: 2, name: 'Vue.js Advanced Concepts', issuer: 'Vue Mastery', date: '2023-01-10' },
        // Add more certifications as needed
      ]
    };
  }
};
</script>

<style scoped>
.certifications {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
}

.certifications-content {
  flex: 1; /* Take up remaining space */
  max-width: 800px; /* Optional: control max width */
  margin: 0 auto;
  padding: 20px;
  overflow-y: auto; /* Allow scrolling if content overflows */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f5f5f5;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

li:hover {
  transform: translateY(-5px);
}
</style>
