<template>
  <div class="resume">
    <Header />
    <main class="resume-content">
      <h2 class="resume-title">My Resume</h2>

      <div class="content-container">
        <aside class="personal-info">
          <h3>Personal Info</h3>
          <ul class="info-list">
            <li>Birthday: <span>May 29, 2003</span></li>
            <li>Gender: <span>Male</span></li>
            <li>Age: <span>21</span></li>
            <li>Citizenship: <span>Filipino</span></li>
            <li>Contact no: <span>+63 964 944 8259</span></li>
          </ul>
        </aside>

        <section class="main-content">
          <h3>Profile</h3>
          <div class="education-item">
            <h4>Jonathan Yuri N. Delos Santos</h4>
            <p><em>Computer Engineering, specialization in Cybersecurity.</em></p>
          </div>

          <section class="contact-info">
            <h3>Contact Information</h3>
            <p>
              Email: <a href="mailto:mjydelossantos@tip.edu.ph">mjydelossantos@tip.edu.ph</a>
            </p>
            <p>
              LinkedIn: 
              <a 
                href="https://www.linkedin.com/in/jonathan-yuri-delos-santos-a92b232b5" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              https://www.linkedin.com/in/jonathan-yuri-delos-santos-a92b232b5
              </a>
            </p>
          </section>

          <section>
            <h3>Education</h3>
            <div class="education-item">
              <h4>Bachelor Of Science In Computer Engineering - Technological Institute of the Philippines</h4>
              <p><em>2021 - 2025</em></p>
              <h4>Senior High School - (STEM) Arellano University Juan Sumulong Campus</h4>
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
  font-family: 'Arial', sans-serif;
  color: #333; /* Dark gray text for better readability */
}

.resume-content {
  flex: 1; /* Take up remaining space */
  max-width: 1200px; /* Wider layout for more space */
  margin: 0 auto;
  padding: 40px; /* Increased padding for better spacing */
  overflow-y: auto; /* Allow scrolling if content overflows */
  background-color: #f7f7f7; /* Light background for a modern look */
  border-radius: 15px; /* More rounded corners */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
  position: relative; /* For positioning pseudo-elements */
}

.content-container {
  display: flex; /* Flexbox for side-by-side layout */
  gap: 40px; /* Space between columns */
}

.personal-info {
  flex: 1; /* Take up equal space */
  background-color: #fff; /* White background for personal info */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding for personal info */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.main-content {
  flex: 3; /* Take up more space than personal info */
  background-color: #ffffff; /* White background for main content */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding for main content */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.resume-title {
  text-align: center;
  color: #0056b3; /* Blue title for a professional look */
  font-size: 2.8em; /* Larger title font size for emphasis */
  margin-bottom: 30px; /* Spacing below title */
  text-transform: uppercase; /* Uppercase title for a bold look */
}

.contact-info {
  margin-bottom: 40px;
}

.contact-info a {
  color: #0056b3; /* Link color */
  text-decoration: none; /* Remove underline */
  font-weight: bold; /* Bold links for emphasis */
}

.contact-info a:hover {
  text-decoration: underline; /* Underline on hover */
}

section {
  margin-bottom: 40px; /* Increased spacing between sections */
}

.education-item {
  margin-bottom: 20px;
  padding: 20px; /* Added padding for better spacing */
  border: 1px solid #e0e0e0; /* Light border for separation */
  border-radius: 8px; /* Rounded corners for items */
  background: #f9f9f9; /* Subtle background */
  transition: transform 0.3s ease; /* Animation effect */
}

.education-item:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

h3 {
  margin-top: 0;
  border-bottom: 2px solid #0056b3; /* Underline for section titles */
  padding-bottom: 5px;
  font-size: 1.6em; /* Slightly larger font for section titles */
  color: #333; /* Darker color for better contrast */
}

.info-list {
  list-style-type: none; /* Remove default list styles */
  padding: 0;
}

.info-list li {
  margin: 8px 0; /* Space between list items */
  font-weight: 500; /* Semi-bold text for skills */
}

.skills-list {
  list-style-type: none; /* Remove default list styles */
  padding: 0;
}

.skills-list li {
  background: #e9ecef; /* Light background for skills */
  margin: 8px 0;
  padding: 12px; /* Adjusted padding for skills */
  border-radius: 5px; /* Rounded corners */
  font-weight: 500; /* Semi-bold text for skills */
  transition: background 0.3s, transform 0.3s; /* Smooth transition on hover */
}

.skills-list li:hover {
  background: #d3d3d3; /* Darker background on hover */
  transform: scale(1.02); /* Slightly enlarging effect on hover */
}
</style>
