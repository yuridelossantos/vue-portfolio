<template>
  <div class="dashboard">
    <Header />

    <div class="main-content">
      <transition name="slide-fade">
        <aside v-if="isSidebarVisible" class="sidebar">
          <h3 class="sidebar-title">Dashboard Menu</h3>
          <ul>
            <li><a @click="scrollToSection('about')">About Me</a></li>
            <li><a @click="scrollToSection('projects')">Projects</a></li>
            <li><router-link to="/certifications">Certificates</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><router-link to="/testimonials">Testimonials</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
          </ul>
          <button class="toggle-button hide" @click="toggleSidebar">Hide Sidebar</button>
        </aside>
      </transition>

      <main :class="['dashboard-content', { 'shift-right': !isSidebarVisible }]">
        <button v-if="!isSidebarVisible" class="toggle-button show" @click="toggleSidebar">
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
        </button>

        <section class="intro-section">
          <h2>Welcome to My Portfolio!</h2>
          <p>
            Hi, I'm Jonathan Yuri N. Delos Santos, an aspiring Web Developer from 
            the Technological Institute of the Philippines (TIP). I have a passion for creating dynamic and responsive web applications.
          </p>
        </section>

        <section id="about" class="about-section">
          <h3>About Me</h3>
          <div class="about-content">
            <img src="@/assets/profile1.jpg" alt="Profile Picture" class="profile-image" />
            <div class="about-text">
              <p>
                Hello! I’m Jonathan Yuri N. Delos Santos, an enthusiastic web developer with a flair for creating immersive digital experiences. 
                Currently pursuing my studies at the Technological Institute of the Philippines (TIP), I am driven by a passion for technology and innovation. 
                My journey in web development has equipped me with a solid foundation in HTML, CSS, and JavaScript, allowing me to craft user-friendly and visually stunning web applications.
              </p>
              <p>
                I believe that every line of code is a step toward transforming ideas into reality. With a keen eye for detail and a commitment to excellence, 
                I thrive on challenges that push my creative boundaries. I am excited about the opportunity to collaborate on impactful projects that not only meet user needs but also inspire and engage them.
              </p>
              <p>
                Let’s connect and explore how we can work together to bring innovative ideas to life!
              </p>
            </div>
          </div>
        </section>
        <FeaturedProjects :projects="projects" />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import FeaturedProjects from './FeaturedProjects.vue'; // Importing the new component
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.png';

export default {
  name: 'DashboardComponent',
  components: {
    Header,
    Footer,
    FeaturedProjects, // Register the new component
  },
  data() {
    return {
      isSidebarVisible: true,
      projects: [
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
          description: 'Mobile App that makes the user to have awareness in mental health.',
          image: image2,
          link: 'https://github.com/yuridelossantos/Mental-Health-App.git',
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50; /* Darker background color */
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
}

.sidebar-title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 0.5rem 0; /* Add space between items */
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 10px; /* Padding for clickable area */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth background transition */
}

.sidebar ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
}

.dashboard-content {
  flex: 1;
  padding: 2rem;
  background-color: #ecf0f1; /* Lighter background color */
  overflow-y: auto;
}

.intro-section,
.about-section,
.projects-section,
.contacts-section {
  margin-top: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Styles for the toggle button */
.toggle-button {
  display: flex; /* Flexbox for alignment */
  flex-direction: column; /* Stack lines vertically */
  align-items: center; /* Center items */
  justify-content: center; /* Center content vertically */
  background-color: #3498db; /* Button color */
  border: none;
  border-radius: 5px;
  color: 030303;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 1rem; /* Space below the button */
  padding: 0.5rem 1rem; /* Padding inside the button */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.toggle-button:hover {
  background-color: #2980b9; /* Darker shade on hover */
}

/* Burger icon styles */
.burger-icon {
  display: block; /* Display as block */
  width: 30px; /* Width of the burger icon */
  height: 4px; /* Height of the burger lines */
  background-color: white; /* Color of the lines */
  margin: 5px auto; /* Space between lines */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.toggle-button.open .burger-icon:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.toggle-button.open .burger-icon:nth-child(2) {
  opacity: 0; /* Hide the middle line */
}

.toggle-button.open .burger-icon:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* About section styles */
.about-content {
  display: flex; /* Aligns children (image and text) in a row */
  align-items: center; /* Vertically centers the image and text */
  margin-top: 1rem; /* Space above the content */
  padding: 1rem; /* Padding around the content */
}

.profile-image {
  width: 150px; /* Set width of the profile image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 75px; /* Makes the image circular */
  margin-right: 20px; /* Space between image and text */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
}

.about-text {
  flex: 1; /* Makes the text container take up remaining space */
}

.about-text p {
  margin-bottom: 1rem; /* Space between paragraphs */
  line-height: 1.6; /* Improved readability with line height */
  font-size: 1rem; /* Font size for the text */
  color: #030303; /* Darker text color for contrast */
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column; /* Stack the image and text on smaller screens */
    align-items: flex-start; /* Align items to the start */
  }

  .project-image {
    width: 300px; /* Set the desired width */
    height: 200px; /* Set the desired height */
    object-fit: cover; /* Ensures the image covers the area without distorting */
    border-radius: 5px; /* Rounded corners for images */
}
}
</style>
