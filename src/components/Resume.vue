<template>
  <div class="resume" ref="resumeContent">
    <Header />
    <main class="resume-content">
      <h2 class="resume-title">Jonathan Yuri N. Delos Santos</h2>
      <h4 class="resume-subtitle">Computer Engineering | Specializing in Cybersecurity</h4>

      <div class="content-container">
        <aside class="personal-info">
          <section>
            <h3>Personal Information</h3>
            <ul class="info-list">
              <li>Birthday: <span>May 29, 2003</span></li>
              <li>Gender: <span>Male</span></li>
              <li>Age: <span>21</span></li>
              <li>Citizenship: <span>Filipino</span></li>
              <li>Contact: <span>+63 964 944 8259</span></li>
              <li>Email: <a href="mailto:mjydelossantos@tip.edu.ph">mjydelossantos@tip.edu.ph</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/jonathan-yuri-delos-santos-a92b232b5" target="_blank" rel="noopener noreferrer">linkedin.com/in/jonathan-yuri-delos-santos-a92b232b5</a></li>
            </ul>
          </section>

          <section>
            <h3>Programming Languages</h3>
            <ul class="info-list">
              <li>Java</li>
              <li>Kotlin</li>
              <li>Python</li>
              <li>Vue.js</li>
            </ul>
          </section>
        </aside>

        <section class="main-content">
          <h3>Education</h3>
          <div class="education-item">
            <h4>Bachelor of Science in Computer Engineering</h4>
            <p><em>Technological Institute of the Philippines, 2021 - 2025</em></p>
          </div>
          <div class="education-item">
            <h4>Senior High School (STEM)</h4>
            <p><em>Arellano University Juan Sumulong Campus, 2019 - 2021</em></p>
          </div>
          <div class="education-item">
            <h4>Junior High School</h4>
            <p><em>Carlos P. Garcia High School, 2015 - 2019</em></p>
          </div>

          <section>
            <h3>Skills</h3>
            <ul class="skills-list">
              <li>Cybersecurity Specialist</li>
              <li>Networking</li>
              <li>Full Stack Mobile Developer</li>
              <li>Web App Developer</li>
            </ul>
          </section>
        </section>
      </div>
    </main>
    <button @click="downloadPDF">Download Resume</button>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'; 
import Footer from './Footer.vue'; 
import html2pdf from 'html2pdf.js';

export default {
  name: 'Resume',
  components: {
    Header,
    Footer
  },
  methods: {
    downloadPDF() {
      const resumeElement = this.$refs.resumeContent;

      const mainContent = resumeElement.querySelector('.resume-content').cloneNode(true);
      const opt = {
        margin: 0.5, 
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'legal', orientation: 'portrait' } 
      };

      html2pdf()
        .from(mainContent) 
        .set(opt)
        .save();
    }
  }
};
</script>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 20px;
}

.resume-content {
  max-width: 100%; 
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  page-break-inside: avoid; 
}

.resume-title {
  text-align: center;
  color: #0056b3;
  font-size: 2.5em; 
  margin-bottom: 10px;
  text-transform: uppercase;
}

.resume-subtitle {
  text-align: center;
  color: #333;
  font-size: 1.5em; 
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  gap: 40px;
}

.personal-info {
  flex: 1;
  background-color: #cecae7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 3;
  background-color: #cecae7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-top: 0;
  border-bottom: 2px solid #0056b3;
  padding-bottom: 5px;
  font-size: 1.5em; 
  color: #333;
}

.info-list {
  list-style-type: none;
  padding: 0;
}

.info-list li {
  margin: 8px 0;
  font-weight: 500;
}

.skills-list {
  list-style-type: none;
  padding: 0;
}

.skills-list li {
  background: #e9ecef;
  margin: 8px 0;
  padding: 12px;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s, transform 0.3s;
}

.skills-list li:hover {
  background: #d3d3d3;
  transform: scale(1.02);
}

button {
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #0056b3;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #004494;
}
</style>
