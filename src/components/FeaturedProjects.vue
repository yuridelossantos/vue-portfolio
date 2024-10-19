<template>
  <section id="projects" class="projects-section">
    <!-- Main heading for featured projects -->
    <h3>Featured Projects</h3>
    <div class="projects-grid">
      <!-- Looping through projects to display each one -->
      <div class="project-card" v-for="project in projects" :key="project.id">
        <img :src="project.image" class="project-image" /> <!-- Project image -->
        <h4>{{ project.title }}</h4> <!-- Project title -->
        <p>{{ project.description }}</p> <!-- Project description -->
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">View Project</a> <!-- Link to the project -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'FeaturedProjects', // Component name
props: {
  // Projects prop passed into the component
  projects: {
    type: Array, // Expecting an array of projects
    required: true, // Projects prop is required
  },
},
};
</script>

<style scoped>
.projects-section {
margin-top: 2rem; /* Margin above the projects section */
padding: 1.5rem; /* Padding inside the section */
background: linear-gradient(135deg, #f0f4f8, #d9e4f5); /* Gradient background */
border-radius: 8px; /* Rounded corners */
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.projects-grid {
display: grid; /* Using grid layout for projects */
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid with dynamic columns */
gap: 1.5rem; /* Gap between grid items */
}

.project-card {
background: #ffffff; /* White background for project cards */
border-radius: 10px; /* Rounded corners for cards */
padding: 1rem; /* Padding inside the card */
text-align: center; /* Center text alignment */
transition: box-shadow 0.3s, transform 0.3s; /* Transition effects for hover */
border: 1px solid #3498db; /* Border color */
}

.project-card:hover {
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
transform: translateY(-5px); /* Lift effect on hover */
}

.project-image {
width: 100%; /* Full width for project image */
height: 300px; /* Fixed height for images */
object-fit: cover; /* Cover image to fill the area */
border-radius: 0px; /* No rounded corners */
}

.project-link {
display: inline-block; /* Inline block for the link */
margin-top: 1rem; /* Margin above the link */
padding: 0.5rem 1rem; /* Padding inside the link */
background-color: #3498db; /* Background color for the link */
color: white; /* Text color for the link */
border-radius: 5px; /* Rounded corners for the link */
text-decoration: none; /* No underline for the link */
transition: background-color 0.3s, transform 0.3s; /* Transition effects for hover */
}

.project-link:hover {
background-color: #2980b9; /* Darker background on hover */
transform: scale(1.05); /* Slightly enlarge the link on hover */
}
</style>
