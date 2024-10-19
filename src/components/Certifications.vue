<template>
  <div class="certifications">
    <Header /> <!-- Header component for the page -->

    <main class="certifications-content">
      <h2>My Certifications</h2> <!-- Main heading -->

      <div class="certifications-grid">
        <div class="certification-card" v-for="cert in certifications" :key="cert.id">
          <a :href="cert.image" target="_blank" rel="noopener noreferrer"> <!-- Link to certification image -->
            <img :src="cert.image" alt="Certification Image" class="cert-image" /> <!-- Displaying certification image -->
          </a>
          <div class="cert-details">
            <h3>{{ cert.name }}</h3> <!-- Certification name -->
            <p class="issuer">Issuer: {{ cert.issuer }}</p> <!-- Issuer of the certification -->
            <p class="date">Date: {{ cert.date }}</p> <!-- Date of issuance -->
          </div>
        </div>
      </div>
    </main>

    <Footer /> <!-- Footer component for the page -->
  </div>
</template>

<script>
import Header from './Header.vue'; // Import Header component
import Footer from './Footer.vue'; // Import Footer component

// Importing certification images
import cert1 from '@/assets/cert1.jpg';
import cert2 from '@/assets/cert2.jpg';
import cert3 from '@/assets/cert3.jpg';
import cert4 from '@/assets/cert4.jpg';

export default {
  name: 'Certifications', // Component name
  components: {
    Header,
    Footer
  },
  data() {
    return {
      certifications: [ // Array of certification objects
        { 
          id: 1, 
          name: 'CCNAv7: Enterprise Networking, Security, and Automation.', 
          issuer: 'CISCO Network Academy', 
          date: '2024-05-16', 
          image: cert1
        },
        { 
          id: 2, 
          name: 'CCNAv7: Introduction to Networks', 
          issuer: 'CISCO Network Academy', 
          date: '2024-01-31', 
          image: cert2
        },
        { 
          id: 3, 
          name: 'CCNAv7: Switching, Routing, and Wireless Essentials', 
          issuer: 'CISCO Network Academy', 
          date: '2023-12-15', 
          image: cert3
        },
        { 
          id: 4, 
          name: 'Cybersecurity Essentials', 
          issuer: 'CISCO Network Academy', 
          date: '2023-05-17', 
          image: cert4
        },
      ]
    };
  },
  mounted() {
    // Sort certifications by date in descending order
    this.certifications.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
};
</script>

<style scoped>
.certifications {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  background-color: #f9f9f9; /* Light background */
}

.certifications-content {
  flex: 1; /* Flex grow */
  max-width: 1000px; /* Maximum width */
  margin: 0 auto; /* Center align */
  padding: 20px; /* Padding */
  overflow-y: scroll; /* Scrollable content */
  scrollbar-width: none; /* Hide scrollbar */
}

.certifications-content::-webkit-scrollbar {
  display: none; /* Hide scrollbar for WebKit browsers */
}

h2 {
  font-size: 2rem; /* Font size */
  font-weight: 600; /* Font weight */
  margin-bottom: 20px; /* Bottom margin */
  text-align: center; /* Center align */
  color: #333; /* Dark color */
}

.certifications-grid {
  display: grid; /* Grid layout */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
  gap: 20px; /* Gap between grid items */
}

.certification-card {
  background-color: #b5bfec; /* Card background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  overflow: hidden; /* Hide overflow */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition effects */
  cursor: pointer; /* Pointer cursor */
}

.certification-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

.cert-image {
  width: 100%; /* Full width */
  height: auto; /* Auto height */
  transition: transform 0.3s ease; /* Image transition */
}

.certification-card:hover .cert-image {
  transform: scale(1.05); /* Scale effect on hover */
}

.cert-details {
  padding: 15px; /* Inner padding */
  color: #555; /* Text color */
}

.cert-details h3 {
  font-size: 1.5rem; /* Font size for title */
  margin: 0 0 5px; /* Margin below title */
  color: #2c3e50; /* Darker color */
}

.cert-details .issuer,
.cert-details .date {
  color: #777; /* Color for issuer and date */
  margin: 0; /* No margin */
  font-size: 0.9rem; /* Smaller font size */
}
</style>
