<template>
  <div class="dashboard">
    <Header />

    <div class="main-content">
      <transition name="slide-fade">
        <aside v-if="isSidebarVisible" class="sidebar">
          <h3>Dashboard Menu</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contacts">Contacts</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
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

        <h2>Welcome to My Portfolio!</h2>
        <p>Hi, I'm Jonathan Yuri N. Delos Santos, An aspiring Web Application Developer!</p>

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
          <h3>Featured Projects</h3>
          <div class="projects-grid">
            <div class="project-card" v-for="project in projects" :key="project.id">
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
          <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
            <blockquote>{{ testimonial.quote }}</blockquote>
            <cite>- {{ testimonial.author }}</cite>
          </div>
        </section>
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'; // Import your Header component
import Footer from './Footer.vue'; // Import your Footer component

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
          image: 'path/to/C:\Users\jherm\Desktop\PORTFOLIO-VUE\vue-project\src\assets\image1.jpg',
          link: 'https://sites.google.com/tip.edu.ph/ecocityfoundation',
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'An e-commerce site with a focus on user experience.',
          image: 'path/to/project-two-image.jpg',
          link: 'https://link-to-project-two.com',
        },
        // Add more projects as needed
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
        // Add more testimonials as needed
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex; /* Create a flexible layout for sidebar and content */
  flex-direction: column; /* Stack header and footer vertically */
  height: 100vh; /* Full height to accommodate header and footer */
}

.main-content {
  display: flex; /* Flex layout for sidebar and main content */
  flex: 1; /* Allow this section to take remaining height */
}

.sidebar {
  width: 180px; /* Set width for the sidebar */
  background-color: #333; /* Dark background for sidebar */
  color: white; /* White text color */
  padding: 1rem; /* Internal padding */
  display: flex; /* Flex for sidebar items */
  flex-direction: column; /* Arrange items vertically */
  justify-content: space-between; /* Space items evenly */
  transition: transform 0.5s ease; /* Smooth transition for transform */
}

.sidebar h3 {
  margin-top: 0; /* Remove top margin */
}

.sidebar ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

.sidebar ul li {
  margin: 1rem 0; /* Space between links */
}

.sidebar ul li a {
  color: white; /* White link color */
  text-decoration: none; /* Remove underline */
}

.sidebar ul li a:hover {
  text-decoration: underline; /* Underline on hover */
}

.dashboard-content {
  flex: 1; /* Allow the content to take the remaining space */
  padding: 2rem; /* Internal padding */
  background-color: #f5f5f5; /* Light background for the main content */
  overflow-y: auto; /* Enable scrolling if content overflows */
  transition: margin-left 0.3s ease; /* Smooth transition for margin */
}

.shift-right {
  margin-left: 25.4px; /* Shift content right by 1 inch */
}

/* Animation styles */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease; /* Transition effect */
}

.slide-fade-enter,
.slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0; /* Fade effect */
  transform: translateX(-15px); /* Slide effect */
}

h2 {
  margin-top: 2rem; /* Space above section titles */
}

h3 {
  margin-top: 2rem; /* Space above section titles in projects and testimonials */
  color: #333; /* Dark color for section headers */
}

.projects-section {
  margin-top: 2rem; /* Space above projects section */
}

.projects-grid {
  display: grid; /* Use grid for project cards */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid */
  gap: 1.5rem; /* Space between project cards */
}

.project-card {
  background: white; /* White background for project cards */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
  padding: 1rem; /* Internal padding */
  text-align: center; /* Center text */
}

.project-card img {
  max-width: 100%; /* Responsive image */
  border-radius: 4px; /* Rounded corners for images */
}

.project-link {
  display: inline-block; /* Make link block level */
  margin-top: 0.5rem; /* Space above the link */
  color: #007BFF; /* Link color */
  text-decoration: none; /* Remove underline */
}

.testimonials-section {
  margin-top: 2rem; /* Space above testimonials section */
}

.testimonial {
  background: #e9ecef; /* Light background for testimonials */
  border-left: 4px solid #007BFF; /* Accent color */
  padding: 1rem; /* Internal padding */
  margin: 1rem 0; /* Space between testimonials */
}

blockquote {
  font-style: italic; /* Italicize the quote */
}

cite {
  display: block; /* Block-level for author */
  margin-top: 0.5rem; /* Space above author */
}

/* Toggle button styles */
.toggle-button {
  margin: 1rem 0; /* Space above and below the button */
  background-color: #f5f5f5; /* Transparent background */
  border: none; /* Remove border */
  cursor: pointer; /* Pointer cursor on hover */
  display: flex; /* Flex layout for burger icon */
  flex-direction: column; /* Stack bars vertically */
  align-items: center; /* Center bars */
}

.burger-icon {
  width: 30px; /* Set width for each bar */
  height: 4px; /* Set height for each bar */
  background-color: #000000; /* Primary color for the bars */
  margin: 3px 0; /* Space between bars */
}

.toggle-button.hide {
  margin-top: auto; /* Push to the bottom of the sidebar */
}
</style>
