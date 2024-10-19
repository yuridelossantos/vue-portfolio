<template>
  <div class="dashboard"> <!-- Main container for the dashboard -->
    <Header /> <!-- Header component -->

    <div class="main-content"> <!-- Main content area -->
      <transition name="slide-fade"> <!-- Transition effect for the sidebar -->
        <aside v-if="isSidebarVisible" class="sidebar"> <!-- Sidebar for navigation -->
          <h3 class="sidebar-title">Dashboard Menu</h3> <!-- Sidebar title -->
          <ul>
            <li><a @click="scrollToSection('about')">About Me</a></li> <!-- Scroll to About Me section -->
            <li><a @click="scrollToSection('projects')">Projects</a></li> <!-- Scroll to Projects section -->
            <li><router-link to="/certifications">Certificates</router-link></li> <!-- Link to Certificates page -->
            <li><router-link to="/resume">Resume</router-link></li> <!-- Link to Resume page -->
            <li><router-link to="/testimonials">Testimonials</router-link></li> <!-- Link to Testimonials page -->
            <li><router-link to="/contacts">Contacts</router-link></li> <!-- Link to Contacts page -->
          </ul>
          <button class="toggle-button hide" @click="toggleSidebar">Hide Sidebar</button> <!-- Button to hide the sidebar -->
        </aside>
      </transition>

      <main :class="['dashboard-content', { 'shift-right': !isSidebarVisible }]"> <!-- Main dashboard content -->
        <button v-if="!isSidebarVisible" class="toggle-button show" @click="toggleSidebar"> <!-- Button to show the sidebar -->
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
        </button>

        <section class="intro-section"> <!-- Introduction section -->
          <h2>Welcome to My Portfolio!</h2> <!-- Introduction heading -->
          <p>
            Hi, I'm Jonathan Yuri N. Delos Santos, an aspiring Web Developer from 
            Technological Institute of the Philippines (TIP). I have a passion for creating dynamic and responsive web applications.
          </p>
        </section>

        <section id="about" class="about-section"> <!-- About Me section -->
          <h3>About Me</h3>
          <div class="about-content">
            <img src="@/assets/profile1.jpg" alt="Profile Picture" class="profile-image" /> <!-- Profile picture -->
            <div class="about-text">
              <p>
                Hello! I’m Jonathan Yuri N. Delos Santos, an aspiring student with a passion for creating websites and applications, also in cybersecurity. 
                <br>Currently pursuing my studies at the Technological Institute of the Philippines (TIP), taking the program of BS in Computer Engineering.<br> 
                My journey in web and app development has equipped me with a foundation in HTML, CSS, JavaScript, Python, Kotlin, and Java. 
                <br> Allowing me to craft working websites and applications.<br> 
              </p>
              <p>
                I believe that every line of code is a step toward transforming ideas into reality. With a keen eye for detail and a commitment to excellence, 
                I am excited about the opportunity to collaborate on impactful projects that not only meet user needs but also inspire and engage them.
              </p>
              <p>
                Let’s connect and explore how we can work together to bring innovative ideas to life!
              </p>
            </div>
          </div>
        </section>

        <FeaturedProjects :projects="projects" /> <!-- Component to display featured projects -->
      </main>
    </div>

    <Footer /> <!-- Footer component -->
  </div>
</template>

<script>
import Header from './Header.vue'; // Import Header component
import Footer from './Footer.vue'; // Import Footer component
import FeaturedProjects from './FeaturedProjects.vue'; // Import Featured Projects component
import image1 from '@/assets/image1.jpg'; // Import project image
import image2 from '@/assets/image2.png'; // Import project image
import image3 from '@/assets/image3.png'; // Import project image

export default {
  name: 'DashboardComponent', // Component name
  components: {
    Header,
    Footer,
    FeaturedProjects, // Register components
  },
  data() {
    return {
      isSidebarVisible: true, // Controls visibility of the sidebar
      projects: [ // Array of project objects
        {
          id: 1,
          title: 'EcoCity',
          description: 'A website that promotes Urban Planting.',
          image: image1,
          link: 'https://sites.google.com/tip.edu.ph/ecocityfoundation',
        },
        {
          id: 2,
          title: 'Mental Health App',
          description: 'Mobile App that raises awareness of mental health.',
          image: image2,
          link: 'https://github.com/yuridelossantos/Mental-Health-App.git',
        },
        {
          id: 3,
          title: 'Mental Health App',
          description: 'Mobile App that raises awareness of mental health.',
          image: image3,
          link: 'https://github.com/TenJer21/WEB_MECHS.git',
        },
      ],
    };
  },
  methods: {
    toggleSidebar() { // Method to toggle sidebar visibility
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    scrollToSection(sectionId) { // Method to scroll to a specific section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll animation
      }
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth; /* Enables smooth scrolling for anchor links */
}

.dashboard {
  display: flex; /* Flexbox layout for dashboard */
  flex-direction: column; /* Vertical stacking of children */
  height: 100vh; /* Full viewport height */
}

.main-content {
  display: flex; /* Flexbox layout for main content */
  flex: 1; /* Allow main content to grow */
}

.sidebar {
  width: 250px; /* Fixed width for sidebar */
  background-color: #2c3e50; /* Dark background color */
  color: white; /* White text color */
  padding: 1.5rem; /* Padding inside sidebar */
  display: flex; /* Flexbox for sidebar content */
  flex-direction: column; /* Stack items vertically */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.sidebar-title {
  margin-bottom: 1.5rem; /* Spacing below title */
  font-size: 1.5rem; /* Font size for title */
  font-weight: bold; /* Bold text */
}

.sidebar ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
}

.sidebar ul li {
  margin: 0.5rem 0; /* Spacing between list items */
}

.sidebar ul li a {
  color: white; /* Link color */
  text-decoration: none; /* Remove underline */
  font-size: 1.1rem; /* Font size for links */
  padding: 0.5rem 10px; /* Padding for links */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Transition effect on hover */
}

.sidebar ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Hover background color */
}

.dashboard-content {
  flex: 1; /* Allow dashboard content to grow */
  padding: 2rem; /* Padding inside main content */
  background-color: #ecf0f1; /* Light background color */
  overflow-y: auto; /* Enable vertical scrolling */
}

.intro-section,
.about-section,
.projects-section,
.contacts-section {
  margin-top: 2rem; /* Spacing above sections */
  background: white; /* White background */
  padding: 1.5rem; /* Padding inside sections */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.toggle-button {
  display: flex; /* Flexbox for toggle button */
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center children */
  justify-content: center; /* Center children */
  background-color: #3498db; /* Blue background color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  color: #030303; /* Dark text color */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size for button */
  margin-bottom: 1rem; /* Margin below button */
  padding: 0.5rem 1rem; /* Padding inside button */
  transition: background-color 0.3s ease; /* Transition effect on hover */
}

.toggle-button:hover {
  background-color: #2980b9; /* Darker blue on hover */
}

.burger-icon {
  display: block; /* Display block for icons */
  width: 30px; /* Width of icons */
  height: 4px; /* Height of icons */
  background-color: white; /* White icon color */
  margin: 5px auto; /* Center icons with margin */
  transition: all 0.3s ease; /* Transition effect for icons */
}

.toggle-button.open .burger-icon:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px); /* Rotate top icon */
}

.toggle-button.open .burger-icon:nth-child(2) {
  opacity: 0; /* Hide middle icon */
}

.toggle-button.open .burger-icon:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px); /* Rotate bottom icon */
}

.about-content {
  display: flex; /* Flexbox for about section */
  align-items: center; /* Center items vertically */
  margin-top: 1rem; /* Spacing above about content */
  padding: 1rem; /* Padding inside about content */
}

.profile-image {
  width: 150px; /* Fixed width for profile image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 75px; /* Circular image */
  margin-right: 20px; /* Spacing on right */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.about-text {
  flex: 1; /* Allow text content to grow */
}

.about-text p {
  margin-bottom: 1rem; /* Spacing below paragraphs */
  line-height: 1.6; /* Line height for readability */
  font-size: 1rem; /* Font size for paragraphs */
  color: #030303; /* Dark text color */
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column; /* Stack items vertically on small screens */
    align-items: flex-start; /* Align items to start */
  }

  .project-image {
    width: 300px; /* Width for project images on small screens */
    height: 200px; /* Height for project images */
    object-fit: cover; /* Maintain aspect ratio */
    border-radius: 5px; /* Rounded corners */
  }
}
</style>
