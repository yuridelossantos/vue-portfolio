<template>
  <div class="resume" ref="resumeContent">
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
              <li>LinkedIn: <a href="https://www.linkedin.com/in/jonathan-yuri-delos-santos-a92b232b5" target="_blank">LinkedIn Profile</a></li>
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
          <section>
            <h3>Education</h3>
            <div class="education-item">
              <h4>Bachelor of Science in Computer Engineering - Technological Institute of the Philippines</h4>
              <p><em>2021 - 2025</em></p>
              <h4>Senior High School (STEM) - Arellano University Juan Sumulong Campus</h4>
              <p><em>2019 - 2021</em></p>
              <h4>Junior High School - Carlos P. Garcia High School</h4>
              <p><em>2015 - 2019</em></p>
            </div>
          </section>

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

      <button @click="downloadPDF">Download as PDF</button>
    </main>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  name: 'Resume',
  methods: {
    async downloadPDF() {
      const resumeContent = this.$refs.resumeContent;
      const canvas = await html2canvas(resumeContent);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Resume_Jonathan_Yuri_N_Delos_Santos.pdf');
    }
  }
};
</script>

<style scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.resume-content {
  width: 100%;
  max-width: 900px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.resume-title {
  text-align: center;
  font-size: 2.5em;
  color: #0056b3;
  margin-bottom: 0.2em;
}

.resume-subtitle {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #333;
}

.content-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.personal-info {
  flex: 1;
  background-color: #f0f0f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 2;
  background-color: #f0f0f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h3 {
  border-bottom: 2px solid #0056b3;
  padding-bottom: 8px;
  margin-bottom: 15px;
  color: #0056b3;
}

.info-list,
.skills-list {
  list-style: none;
  padding: 0;
}

.info-list li,
.skills-list li {
  margin-bottom: 10px;
  font-weight: 500;
}

button {
  display: block;
  margin: 30px auto;
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #003f7f;
}
</style>
