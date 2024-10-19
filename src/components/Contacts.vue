<template>
  <div class="contacts-page">
    <Header />

    <section id="contacts" class="contacts-section">
      <h3>Contacts</h3>
      <p>If you have any questions or just want to say hello, feel free to reach out!</p>
      <p>You can email me at: <strong>mjydelossantos@tip.edu.ph</strong></p>
      <p>You can message me on Facebook: <strong><a :href="facebookLink" target="_blank">{{ facebookLink }}</a></strong></p>
      <p>You can message me on Instagram: <strong><a :href="IGLink" target="_blank">{{ IGLink }}</a></strong></p>
      <p>You can call me at: <strong>+63 964 944 8259</strong></p>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'Contacts',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      facebookLink: 'https://www.facebook.com/jonathanyuri29/',
      IGLink: 'https://www.instagram.com/iloveyouriii/',
    };
  },
};
</script>

<style scoped>
.contacts-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.contacts-section {
  flex: 1;
  margin-top: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.5;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
