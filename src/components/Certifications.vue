<template>
  <div class="certifications">
    <Header />
    <main class="certifications-content">
      <h2>My Certifications</h2>
      <div class="certifications-grid">
        <div class="certification-card" v-for="cert in certifications" :key="cert.id">
          <a :href="cert.image" target="_blank" rel="noopener noreferrer">
            <img :src="cert.image" alt="Certification Image" class="cert-image" />
          </a>
          <div class="cert-details">
            <h3>{{ cert.name }}</h3>
            <p class="issuer">Issuer: {{ cert.issuer }}</p>
            <p class="date">Date: {{ cert.date }}</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

import cert1 from '@/assets/cert1.jpg';
import cert2 from '@/assets/cert2.jpg';
import cert3 from '@/assets/cert3.jpg';
import cert4 from '@/assets/cert4.jpg';

export default {
  name: 'Certifications',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      certifications: [
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
    this.certifications.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
};
</script>

<style scoped>
.certifications {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
}

.certifications-content {
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  overflow-y: scroll;
  scrollbar-width: none;
}

.certifications-content::-webkit-scrollbar {
  display: none;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.certification-card {
  background-color: #b5bfec;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.cert-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.certification-card:hover .cert-image {
  transform: scale(1.05);
}

.cert-details {
  padding: 15px;
  color: #555;
}

.cert-details h3 {
  font-size: 1.5rem;
  margin: 0 0 5px;
  color: #2c3e50;
}

.cert-details .issuer,
.cert-details .date {
  color: #777;
  margin: 0;
  font-size: 0.9rem;
}
</style>
