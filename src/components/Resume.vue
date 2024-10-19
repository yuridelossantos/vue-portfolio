<template>
  <div class="resume" ref="resumeContent">
    <!-- Header component for the resume -->
    <Header />
    <main class="resume-content">
      <!-- Main title of the resume -->
      <h2 class="resume-title">Jonathan Yuri N. Delos Santos</h2>
      <!-- Subtitle highlighting the user's field of study -->
      <h4 class="resume-subtitle">Computer Engineering | Specializing in Cybersecurity</h4>

      <div class="content-container">
        <aside class="personal-info">
          <section>
            <h3>Personal Information</h3>
            <ul class="info-list">
              <!-- Personal details including birthday, gender, age, citizenship, contact information, and LinkedIn -->
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
              <!-- List of programming languages the user is proficient in -->
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
              <!-- List of skills relevant to the user's field -->
              <li>Cybersecurity Specialist</li>
              <li>Networking</li>
              <li>Full Stack Mobile Developer</li>
              <li>Web App Developer</li>
            </ul>
          </section>
        </section>
      </div>
    </main>
    <!-- Button to download the resume as a PDF -->
    <button @click="downloadPDF">Download Resume</button>
    <!-- Footer component for the resume -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'; // Importing Header component
import Footer from './Footer.vue'; // Importing Footer component
import html2pdf from 'html2pdf.js'; // Importing html2pdf.js library for PDF generation

export default {
  name: 'Resume', // Component name
  components: {
    Header, // Registering Header component
    Footer // Registering Footer component
  },
  methods: {
    // Method to download the resume as a PDF
    downloadPDF() {
      const resumeElement = this.$refs.resumeContent; // Reference to the resume content

      // Cloning the main content for PDF generation
      const mainContent = resumeElement.querySelector('.resume-content').cloneNode(true);
      const opt = {
        margin: 0.5, // Margin settings for the PDF
        filename: 'resume.pdf', // Filename for the downloaded PDF
        image: { type: 'jpeg', quality: 0.98 }, // Image settings for the PDF
        html2canvas: { scale: 2 }, // Scaling factor for html2canvas
        jsPDF: { unit: 'in', format: 'legal', orientation: 'portrait' } // PDF settings
      };

      // Generating and saving the PDF
      html2pdf()
        .from(mainContent) // Setting the content to convert
        .set(opt) // Applying the options
        .save(); // Triggering the download
    }
  }
};
</script>

<style scoped>
.resume {
  display: flex; /* Flexbox layout for the resume */
  flex-direction: column; /* Arranging items vertically */
  font-family: 'Arial', sans-serif; /* Font style for the resume */
  color: #333; /* Text color */
  padding: 20px; /* Padding around the resume */
}

.resume-content {
  max-width: 100%; /* Ensuring content does not exceed the width */
  padding: 20px; /* Padding inside the content */
  background-color: #f7f7f7; /* Background color for the content */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Shadow effect */
  page-break-inside: avoid; /* Prevent page breaks within the content */
}

.resume-title {
  text-align: center; /* Centering the title */
  color: #0056b3; /* Title color */
  font-size: 2.5em; /* Title font size */
  margin-bottom: 10px; /* Margin below the title */
  text-transform: uppercase; /* Uppercase title */
}

.resume-subtitle {
  text-align: center; /* Centering the subtitle */
  color: #333; /* Subtitle color */
  font-size: 1.5em; /* Subtitle font size */
  margin-bottom: 20px; /* Margin below the subtitle */
}

.content-container {
  display: flex; /* Flexbox layout for the content container */
  gap: 40px; /* Gap between items */
}

.personal-info {
  flex: 1; /* Flex-grow property for personal info section */
  background-color: #cecae7; /* Background color for personal info */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding inside personal info */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.main-content {
  flex: 3; /* Flex-grow property for main content section */
  background-color: #cecae7; /* Background color for main content */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding inside main content */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

h3 {
  margin-top: 0; /* No top margin for headings */
  border-bottom: 2px solid #0056b3; /* Underline for headings */
  padding-bottom: 5px; /* Padding below headings */
  font-size: 1.5em; /* Font size for headings */
  color: #333; /* Heading color */
}

.info-list {
  list-style-type: none; /* Removing list style */
  padding: 0; /* No padding for the list */
}

.info-list li {
  margin: 8px 0; /* Margin between list items */
  font-weight: 500; /* Medium font weight for list items */
}

.skills-list {
  list-style-type: none; /* Removing list style */
  padding: 0; /* No padding for the list */
}

.skills-list li {
  background: #e9ecef; /* Background color for skills */
  margin: 8px 0; /* Margin between skills */
  padding: 12px; /* Padding inside skills */
  border-radius: 5px; /* Rounded corners for skills */
  font-weight: 500; /* Medium font weight for skills */
  transition: background 0.3s, transform 0.3s; /* Transition effects for hover */
}

.skills-list li:hover {
  background: #d3d3d3; /* Background color on hover */
  transform: scale(1.02); /* Slight scale effect on hover */
}

button {
  margin: 20px auto; /* Centering the button with margin */
  padding: 10px 20px; /* Padding inside the button */
  border: none; /* No border for the button */
  border-radius: 5px; /* Rounded corners for the button */
  background-color: #0056b3; /* Background color for the button */
  color: white; /* Text color for the button */
  cursor: pointer; /* Pointer cursor on hover */
}

button:hover {
  background-color: #004494; /* Darker background on hover */
}
</style>
