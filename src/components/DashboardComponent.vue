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
            Technological Institute of the Philippines (TIP). I have a passion for creating dynamic and responsive web applications.
          </p>
        </section>

        <section id="about" class="about-section">
          <h3>About Me</h3>
          <div class="about-content">
            <img src="@/assets/profile1.jpg" alt="Profile Picture" class="profile-image" />
            <div class="about-text">
              <p>
                Hello! I’m Jonathan Yuri N. Delos Santos, an aspiring student with passion in creating website and application also in cybersecurity. 
                <br>Currently pursuing my studies at the Technological Institute of the Philippines (TIP), Taking the program of BS in Computer Engineering.<br> 
                My journey in web and app development has equipped me with a foundation in HTML, CSS, JavaScript, python, and Kotlin and Java. 
                <br> Allowing me to craft working website and applications<br> 
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
        <FeaturedProjects :projects="projects" />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import FeaturedProjects from './FeaturedProjects.vue';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';


export default {
  name: 'DashboardComponent',
  components: {
    Header,
    Footer,
    FeaturedProjects, 
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
        {
          id: 3,
          title: 'Mental Health App',
          description: 'Mobile App that makes the user to have awareness in mental health.',
          image: image3,
          link: 'https://github.com/TenJer21/WEB_MECHS.git',
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
  background-color: #2c3e50;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
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
  margin: 0.5rem 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.sidebar ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dashboard-content {
  flex: 1;
  padding: 2rem;
  background-color: #ecf0f1;
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

.toggle-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  color: #030303;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #2980b9;
}

.burger-icon {
  display: block;
  width: 30px;
  height: 4px;
  background-color: white;
  margin: 5px auto;
  transition: all 0.3s ease;
}

.toggle-button.open .burger-icon:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.toggle-button.open .burger-icon:nth-child(2) {
  opacity: 0;
}

.toggle-button.open .burger-icon:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.about-content {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
}

.profile-image {
  width: 150px;
  height: auto;
  border-radius: 75px;
  margin-right: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1rem;
  color: #030303;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>
