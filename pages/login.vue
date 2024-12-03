<template>
    <div class="container mt-5">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <h2 class="text-danger mb-4">Üyelik</h2>
        <Login />
      </div>
    </div>
  </template>
  
  <script>
  import Login from '~/components/Login.vue'
  
  export default {
    components: {
      Login,
    },
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  