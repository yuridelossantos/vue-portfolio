<template>
  <div class="testimonials-page">
    <Header /> 

    <div class="testimonials-section">
      <header class="testimonials-header">
        <h2>What people say to me?</h2>
        <p>Say something to me or about the design of my portfolio, thank you!</p>
      </header>

      <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
        <blockquote>{{ testimonial.quote }}</blockquote>
        <cite>- {{ testimonial.author }}</cite>
      </div>

      <!-- Comment Form -->
      <div class="comment-form">
        <h4>Leave a Testimonial</h4>
        <textarea v-model="newComment" placeholder="Your testimonial"></textarea>
        <input v-model="newAuthor" type="text" placeholder="Your Name" />
        <button @click="submitComment">Submit</button>
      </div>

      <footer class="testimonials-footer">
        <p>Thank you for your feedback!</p>
      </footer>
    </div>

    <Footer /> 
  </div>
</template>

<script>
import Header from './Header.vue'; 
import Footer from './Footer.vue'; 

export default {
  name: 'Testimonials',
  components: {
    Header, 
    Footer, 
  },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          quote: 'Amazing Portfolio!',
          author: 'Brave',
        },
        {
          id: 2,
          quote: 'Attention to detail is impressive!',
          author: 'Stronger',
        },
      ],
      newComment: '',
      newAuthor: '',
    };
  },
  methods: {
    submitComment() {
      if (this.newComment && this.newAuthor) {
        const newTestimonial = {
          id: this.testimonials.length + 1,
          quote: this.newComment,
          author: this.newAuthor,
        };
        this.testimonials.push(newTestimonial);
        this.newComment = ''; // Clear the textarea
        this.newAuthor = ''; // Clear the input field
      } else {
        alert('Please fill in both fields.'); // Simple validation
      }
    },
  },
};
</script>

<style scoped>
.testimonials-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.testimonials-section {
  flex: 1;
  padding: 2rem;
  background-color: #fdfdfd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.testimonials-header h2 {
  font-size: 2rem;
  color: #34495e;
}

.testimonials-header p {
  font-size: 1rem;
  color: #7f8c8d;
}

.testimonial {
  background-color: #b5bfec;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.testimonial blockquote {
  font-style: italic;
  margin: 0;
}

.testimonial cite {
  display: block;
  margin-top: 0.5rem;
  font-weight: bold;
}

.comment-form {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #b5bfec;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.comment-form h4 {
  margin-bottom: 1rem;
}

.comment-form textarea,
.comment-form input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}

.comment-form button {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.comment-form button:hover {
  background-color: #2980b9;
}

.testimonials-footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #7f8c8d;
}
</style>
