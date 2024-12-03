<template>
    <div>
      <!-- Banner -->
      <Banner />
    </div>
  </template>
  
  <script>
  import Banner from "@/components/CategoryBanner.vue";
  
  export default {
    components: {
      Banner,
    },
  };
  </script>
  
  <style scoped>
  /* Ana sayfa içerikleri için örnek stil */
  .content {
    text-align: center;
    margin: 20px auto;
    padding: 10px;
  }
  </style>
  