<template>
    <section class="favorites">
      <h2>Favori Ürünlerim</h2>
      <div class="product-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <i class="bi bi-heart-fill heart-icon"></i>
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "WishList",
    data() {
      return {
        products: [
          {
            name: "Salomon Supercross 4 Gore-Tex",
            price: "6.999 ₺",
            image: "adidasamba.jpg",
          },
          {
            name: "Champion Big Logo Fleece",
            price: "3.399 ₺",
            image: "nikeairforce.jpg",
          },
          {
            name: "Lacoste Storm 96 2K",
            price: "5.599 ₺",
            image: "adidasamba.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .favorites {
    padding: 20px;
    text-align: center;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    background: #fff;
    padding: 15px;
    text-align: center;
    border: none;
    position: relative;
  }
  
  .product-card img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
  
  .product-card .heart-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: red;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .product-card .heart-icon:hover {
    transform: scale(1.2);
  }
  </style>
  