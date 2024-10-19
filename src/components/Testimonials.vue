<template>
  <div class="testimonials-page">
    <!-- Header component for the testimonials page -->
    <Header /> 

    <div class="testimonials-section">
      <header class="testimonials-header">
        <!-- Main heading for testimonials -->
        <h2>What people say to me?</h2>
        <!-- Subheading inviting feedback -->
        <p>Say something to me or about the design of my portfolio, thank you!</p>
      </header>

      <!-- Looping through testimonials to display each one -->
      <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
        <blockquote>{{ testimonial.quote }}</blockquote> <!-- Displaying testimonial quote -->
        <cite>- {{ testimonial.author }}</cite> <!-- Displaying author of the testimonial -->
      </div>

      <!-- Comment Form for submitting new testimonials -->
      <div class="comment-form">
        <h4>Leave a Testimonial</h4>
        <textarea v-model="newComment" placeholder="Your testimonial"></textarea> <!-- Textarea for user to enter testimonial -->
        <input v-model="newAuthor" type="text" placeholder="Your Name" /> <!-- Input for user's name -->
        <button @click="submitComment">Submit</button> <!-- Button to submit testimonial -->
      </div>

      <footer class="testimonials-footer">
        <p>Thank you for your feedback!</p> <!-- Footer message -->
      </footer>
    </div>

    <!-- Footer component for the testimonials page -->
    <Footer /> 
  </div>
</template>

<script>
import Header from './Header.vue'; // Importing Header component
import Footer from './Footer.vue'; // Importing Footer component

export default {
  name: 'Testimonials', // Component name
  components: {
    Header, // Registering Header component
    Footer, // Registering Footer component
  },
  data() {
    return {
      // Initial testimonials array with sample testimonials
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
      newComment: '', // Holds the new testimonial input
      newAuthor: '', // Holds the author's name input
    };
  },
  methods: {
    // Method to submit a new testimonial
    submitComment() {
      // Check if both fields are filled
      if (this.newComment && this.newAuthor) {
        const newTestimonial = {
          id: this.testimonials.length + 1, // Assign new id based on the current length
          quote: this.newComment, // Set quote to the user's input
          author: this.newAuthor, // Set author to the user's input
        };
        this.testimonials.push(newTestimonial); // Add new testimonial to the array
        this.newComment = ''; // Clear the textarea
        this.newAuthor = ''; // Clear the input field
      } else {
        alert('Please fill in both fields.'); // Simple validation alert
      }
    },
  },
};
</script>

<style scoped>
.testimonials-page {
  display: flex; /* Flexbox layout for the testimonials page */
  flex-direction: column; /* Arranging items vertically */
  min-height: 100vh; /* Minimum height of the viewport */
}

.testimonials-section {
  flex: 1; /* Flex-grow property for the testimonials section */
  padding: 2rem; /* Padding inside the section */
  background-color: #fdfdfd; /* Background color for the section */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  margin: 2rem 0; /* Margin above and below the section */
}

.testimonials-header {
  text-align: center; /* Center alignment for header */
  margin-bottom: 1.5rem; /* Margin below header */
}

.testimonials-header h2 {
  font-size: 2rem; /* Font size for the heading */
  color: #34495e; /* Color for the heading */
}

.testimonials-header p {
  font-size: 1rem; /* Font size for the paragraph */
  color: #7f8c8d; /* Color for the paragraph */
}

.testimonial {
  background-color: #b5bfec; /* Background color for testimonials */
  border-radius: 5px; /* Rounded corners for testimonials */
  padding: 1rem; /* Padding inside testimonial */
  margin: 1rem 0; /* Margin above and below testimonial */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow effect for testimonial */
}

.testimonial blockquote {
  font-style: italic; /* Italic style for quotes */
  margin: 0; /* No margin for blockquote */
}

.testimonial cite {
  display: block; /* Display citation as block */
  margin-top: 0.5rem; /* Margin above citation */
  font-weight: bold; /* Bold font for citation */
}

.comment-form {
  margin-top: 2rem; /* Margin above comment form */
  padding: 1.5rem; /* Padding inside comment form */
  background: #b5bfec; /* Background color for comment form */
  border-radius: 8px; /* Rounded corners for comment form */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect for comment form */
}

.comment-form h4 {
  margin-bottom: 1rem; /* Margin below heading in comment form */
}

.comment-form textarea,
.comment-form input {
  width: 100%; /* Full width for input and textarea */
  padding: 0.5rem; /* Padding inside input and textarea */
  border-radius: 5px; /* Rounded corners for input and textarea */
  border: 1px solid #ccc; /* Border style */
  margin-bottom: 1rem; /* Margin below input and textarea */
}

.comment-form button {
  background-color: #3498db; /* Background color for button */
  color: white; /* Text color for button */
  border: none; /* No border for button */
  border-radius: 5px; /* Rounded corners for button */
  padding: 0.5rem 1rem; /* Padding inside button */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Transition effect for button */
}

.comment-form button:hover {
  background-color: #2980b9; /* Darker background color on hover */
}

.testimonials-footer {
  text-align: center; /* Center alignment for footer */
  margin-top: 2rem; /* Margin above footer */
  font-size: 0.9rem; /* Font size for footer text */
  color: #7f8c8d; /* Color for footer text */
}
</style>
