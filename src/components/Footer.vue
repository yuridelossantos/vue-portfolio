<template>
    <footer class="footer">
      <p>&copy; {{ currentYear }} Jonathan Yuri N. Delos Santos. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #000000; /* Footer background color */
    color: white; /* Footer text color */
    text-align: center;
    padding: 0px 0;
    position: relative;
    bottom: 0;
    width: 100%;
  }
  </style>
  