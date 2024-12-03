<template>
    <div class="category-page">
      <!-- Sayfa Başlığı -->
      <h1 class="category-title">{{ title }}</h1>
  
      <!-- Filtreleme ve Ürün Sayısı -->
      <div class="filter-wrapper">
        <div class="filter-row">
          <button class="filter-button">Filtrele <i class="bi bi-sliders"></i></button>
          <p class="product-count">{{ products.length }} Ürün Listelendi</p>
          <select class="sort-select" v-model="selectedSort">
            <option value="recommended">Önerilenler</option>
            <option value="low-to-high">Fiyata Göre Artan</option>
            <option value="high-to-low">Fiyata Göre Azalan</option>
          </select>
        </div>
      </div>
  
      <!-- Ürün Listesi -->
      <div class="product-list">
        <ProductCard
          v-for="product in sortedProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from "/components/ProductCard.vue";
  
  export default {
    components: {
      ProductCard,
    },
    props: {
      title: {
        type: String,
        required: true, // Sayfanın başlığı, Kadın, Erkek, Çocuk
      },
      products: {
        type: Array,
        required: true, // Ürün listesi
      },
    },
    data() {
      return {
        selectedSort: "recommended", // Varsayılan sıralama
      };
    },
    computed: {
      sortedProducts() {
        if (this.selectedSort === "low-to-high") {
          return this.products.slice().sort((a, b) => a.price - b.price);
        }
        if (this.selectedSort === "high-to-low") {
          return this.products.slice().sort((a, b) => b.price - a.price);
        }
        return this.products; // Varsayılan sıralama
      },
    },
    methods: {
      handleAddToCart(product) {
        console.log("Sepete eklenen ürün:", product);
      },
    },
  };
  </script>
  
  <style scoped>
  .category-page {
    padding: 20px;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  /* Başlık */
  .category-title {
    font-size: .8rem;
    color: #d0021b;
    margin-bottom: 20px;
  }
  
  /* Filtreleme ve Ürün Sayısı */
  .filter-wrapper {
    margin-bottom: 20px;
  }
  
  .filter-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .filter-button {
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
  
  .filter-button i {
    margin-left: 5px;
  }
  
  .product-count {
    font-size: 0.75rem;
    font-weight: bold;
    color: black;
    text-decoration: underline;
  }
  
  .sort-select {
    border: none;
    font-size: 1rem;
  }
  
  /* Ürün Listesi */
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    .product-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .product-list {
      grid-template-columns: 1fr;
    }
  }
  </style>
    