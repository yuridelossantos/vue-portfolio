<template>
  <div class="dashboard">
    <Header />

    <div class="main-content">
      <!-- Sidebar Section -->
      <transition name="slide-fade">
        <aside v-if="isSidebarVisible" class="sidebar">
          <h3 class="sidebar-title">Dashboard Menu</h3>
          <ul>
            <li><a @click="scrollToSection('about')">About Me</a></li>
            <li><a @click="scrollToSection('projects')">Projects</a></li>
            <li><router-link to="/certifications">Certificates</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><a @click="scrollToSection('testimonials')">Testimonials</a></li>
            <li><a @click="scrollToSection('contacts')">Contacts</a></li>
          </ul>
          <button class="toggle-button hide" @click="toggleSidebar">Hide Sidebar</button>
        </aside>
      </transition>

      <!-- Main Content Section -->
      <main :class="['dashboard-content', { 'shift-right': !isSidebarVisible }]">
        <button v-if="!isSidebarVisible" class="toggle-button show" @click="toggleSidebar">
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
        </button>

        <!-- Introduction Section -->
        <section class="intro-section">
          <h2>Welcome to My Portfolio!</h2>
          <p>
            Hi, I'm Jonathan Yuri N. Delos Santos, an aspiring Web Developer from 
            the Technological Institute of the Philippines (TIP). I have a passion for creating dynamic and responsive web applications.
          </p>
        </section>

        <!-- About Me Section -->
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

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
          <h3>Featured Projects</h3>
          <div class="projects-grid">
            <div 
              class="project-card" 
              v-for="project in projects" 
              :key="project.id"
            >
              <img :src="project.image" alt="Project Image" />
              <h4>{{ project.title }}</h4>
              <p>{{ project.description }}</p>
              <a :href="project.link" class="project-link">View Project</a>
            </div>
          </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials-section">
          <h3>What People Say</h3>
          <div 
            class="testimonial" 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
          >
            <blockquote>{{ testimonial.quote }}</blockquote>
            <cite>- {{ testimonial.author }}</cite>
          </div>
        </section>

        <!-- Contacts Section -->
        <section id="contacts" class="contacts-section">
          <h3>Contacts</h3>
          <p>You can Email me at: <strong>mjydelossantos@tip.edu.ph</strong></p>
          <p>You can message me at FB: <strong>https://www.facebook.com/jonathanyuri29/</strong></p>
        </section>
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'DashboardComponent',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isSidebarVisible: true,
      projects: [
        {
          id: 1,
          title: 'EcoCity',
          description: 'A website that promotes Urban Planting.',
          image: 'path/to/image1.jpg',
          link: 'https://sites.google.com/tip.edu.ph/ecocityfoundation',
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'An e-commerce site with a focus on user experience.',
          image: 'path/to/project-two-image.jpg',
          link: 'https://link-to-project-two.com',
        },
      ],
      testimonials: [
        {
          id: 1,
          quote: 'This developer is fantastic! Highly recommended.',
          author: 'John Doe',
        },
        {
          id: 2,
          quote: 'Their attention to detail is impressive!',
          author: 'Jane Smith',
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
.testimonials-section,
.contacts-section {
  margin-top: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.projects-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 45%;
}

.testimonial {
  margin-bottom: 1rem;
}

/* Styles for the toggle button */
.toggle-button {
  background-color: #3498db; /* Button color */
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 15px;
  margin: 10px; /* Add margin around the button */
  transition: background-color 0.3s ease; /* Smooth background transition */
}

.toggle-button:hover {
  background-color: #2980b9; /* Darker color on hover */
}

.burger-icon {
  display: block;
  width: 30px; /* Width of burger icon */
  height: 4px; /* Height of burger icon */
  background-color: white; /* Color of burger icon */
  margin: 5px auto; /* Center align burger icon */
  transition: background-color 0.3s ease; /* Smooth color transition */
}

.about-content {
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Center items vertically */
}

/* Adjust profile image styles */
.profile-image {
  width: 250px; /* Set the width of your profile image */
  height: 250px; /* Set the height of your profile image */
  border-radius: 50%; /* Make it circular */
  margin-right: 20px; /* Space between image and text */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.about-text {
  flex: 1; /* Allow text to take remaining space */
}
/* Add transitions for sidebar */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Shift content when sidebar is hidden */
.shift-right {
  margin-left: 0; /* Remove left margin when sidebar is hidden */
}
</style>
