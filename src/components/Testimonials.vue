<template>
    <div class="testimonials-page">
      <Header /> <!-- Add Header component here -->
  
      <div class="testimonials-section">
        <header class="testimonials-header">
          <h2>What people say to me?</h2>
          <p>Say something to me or to the design of my portfolio, thank you!</p>
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
  
      <Footer /> <!-- Add Footer component here -->
    </div>
  </template>
  
  <script>
  import Header from './Header.vue'; // Import the Header component
  import Footer from './Footer.vue'; // Import the Footer component
  
  export default {
    name: 'Testimonials',
    components: {
      Header, // Register the Header component
      Footer, // Register the Footer component
    },
    data() {
      return {
        testimonials: [
          {
            id: 1,
            quote: 'Amazing Portfolio!.',
            author: 'Franz Ivan Edep',
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
    min-height: 100vh; /* Make the page at least the height of the viewport */
  }
  
  .testimonials-section {
    flex: 1; /* Allow this section to take up remaining space */
    padding: 2rem; /* Space inside the section */
    background-color: #fdfdfd; /* Light background for the section */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    margin: 2rem 0; /* Space above and below the section */
  }
  
  .testimonials-header {
    text-align: center; /* Center-align header text */
    margin-bottom: 1.5rem; /* Space below the header */
  }
  
  .testimonials-header h2 {
    font-size: 2rem; /* Larger font for the title */
    color: #34495e; /* Darker color for contrast */
  }
  
  .testimonials-header p {
    font-size: 1rem; /* Standard font size for description */
    color: #7f8c8d; /* Lighter color for description text */
  }
  
  .testimonial {
    background-color: #fff; /* White background for each testimonial */
    border-radius: 5px; /* Rounded corners */
    padding: 1rem; /* Space inside testimonial */
    margin: 1rem 0; /* Space between testimonials */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow effect */
  }
  
  .testimonial blockquote {
    font-style: italic; /* Italics for quotes */
    margin: 0; /* Remove default margin */
  }
  
  .testimonial cite {
    display: block; /* Display author on a new line */
    margin-top: 0.5rem; /* Space above author citation */
    font-weight: bold; /* Bold author name */
  }
  
  .comment-form {
    margin-top: 2rem; /* Space above the comment form */
    padding: 1.5rem; /* Padding inside the form */
    background: #f9f9f9; /* Light background for the form */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }
  
  .comment-form h4 {
    margin-bottom: 1rem; /* Space below the header */
  }
  
  .comment-form textarea,
  .comment-form input {
    width: 100%; /* Full width for inputs */
    padding: 0.5rem; /* Padding inside inputs */
    border-radius: 5px; /* Rounded corners */
    border: 1px solid #ccc; /* Border for inputs */
    margin-bottom: 1rem; /* Space below inputs */
  }
  
  .comment-form button {
    background-color: #3498db; /* Button color */
    color: white; /* Text color */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners */
    padding: 0.5rem 1rem; /* Padding inside the button */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.3s ease; /* Smooth transition */
  }
  
  .comment-form button:hover {
    background-color: #2980b9; /* Darker button color on hover */
  }
  
  .testimonials-footer {
    text-align: center; /* Center-align footer text */
    margin-top: 2rem; /* Space above the footer */
    font-size: 0.9rem; /* Smaller font size for footer */
    color: #7f8c8d; /* Lighter color for footer text */
  }
  </style>
  