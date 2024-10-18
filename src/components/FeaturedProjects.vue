<template>
    <section id="projects" class="projects-section">
      <h3>Featured Projects</h3>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <img :src="project.image" class="project-image" />
          <h4>{{ project.title }}</h4>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">View Project</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FeaturedProjects',
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
 <style scoped>
 .projects-section {
     margin-top: 2rem; /* Space above the section */
     padding: 1.5rem; /* Padding inside the section */
     background: linear-gradient(135deg, #f0f4f8, #d9e4f5); /* Gradient background */
     border-radius: 8px; /* Rounded corners */
     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
 }
 
 .projects-grid {
     display: grid; /* Use grid layout */
     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
     gap: 1.5rem; /* Space between grid items */
 }
 
 .project-card {
     background: #ffffff; /* White background for cards */
     border-radius: 10px; /* More rounded corners */
     padding: 1rem; /* Padding inside cards */
     text-align: center; /* Center text in card */
     transition: box-shadow 0.3s, transform 0.3s; /* Smooth transition for shadow and scaling */
     border: 1px solid #3498db; /* Border to enhance card definition */
 }
 
 .project-card:hover {
     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow on hover */
     transform: translateY(-5px); /* Lift effect on hover */
 }
 
 .project-image {
     width: 100%; /* Full width for images */
     height: 300px; /* Adjusted height */
     object-fit: cover; /* Ensures the image covers the area without distorting */
     border-radius: 0px; /* Rounded corners for images */
 }
 
 .project-link {
     display: inline-block; /* Block display for link */
     margin-top: 1rem; /* Space above the link */
     padding: 0.5rem 1rem; /* Padding inside the link */
     background-color: #3498db; /* Button color */
     color: white; /* Text color */
     border-radius: 5px; /* Rounded corners */
     text-decoration: none; /* Remove underline */
     transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
 }
 
 .project-link:hover {
     background-color: #2980b9; /* Darker shade on hover */
     transform: scale(1.05); /* Slightly enlarge on hover */
 }
 </style>
 