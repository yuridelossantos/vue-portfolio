<template>
  <div class="dashboard">
    <Header />

    <div class="main-content">
      <!-- Sidebar Section -->
      <transition name="slide-fade">
        <aside v-if="isSidebarVisible" class="sidebar">
          <h3>Dashboard Menu</h3>
          <ul>
            <li><a @click="scrollToSection('about')">About Me</a></li>
            <li><a @click="scrollToSection('projects')">Projects</a></li>
            <li><a @click="scrollToSection('certificates')">Certificates</a></li>
            <li><a @click="scrollToSection('resume')">Resume</a></li>
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
            the Technological Institute of the Philippines (TIP)!
          </p>
        </section>

        <!-- About Me Section -->
        <section id="about" class="about-section">
          <h3>About Me</h3>
          <p>
            Welcome to my About Me section. Here you can find information about my 
            background, skills, and experience. Feel free to reach out if you would 
            like to know more!
          </p>
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
  width: 200px;
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
}

.dashboard-content {
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
}

.intro-section,
.about-section,
.projects-section,
.testimonials-section,
.contacts-section {
  margin-top: 2rem;
  background: white;
  padding: 1rem;
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
  background-color: #42b983; /* Button color */
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
  background-color: #36a374; /* Darker color on hover */
}

.burger-icon {
  display: block;
  width: 30px; /* Width of burger icon */
  height: 4px; /* Height of burger icon */
  background-color: white; /* Color of burger icon */
  margin: 5px auto; /* Center align burger icon */
  transition: background-color 0.3s ease; /* Smooth color transition */
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
