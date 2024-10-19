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
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f0f4f8, #d9e4f5);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s;
  border: 1px solid #3498db;
}

.project-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0px;
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
}

.project-link:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}
</style>
