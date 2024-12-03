<template>
    <div class="product-page">
      <!-- Başlık -->
      <h1 class="product-title">adidas Samba</h1>
  
      <!-- Filtreleme ve Ürün Sayısı -->
      <div class="filter-wrapper">
        <div class="filter-row">
          <button class="filter-button">Filtrele <i class="bi bi-sliders"></i></button>
          <p class="product-count">44 Ürün Listelendi</p>
          <select class="sort-select" v-model="selectedSort">
            <option value="recommended">Önerilenler</option>
            <option value="low-to-high">Fiyata Göre Artan</option>
            <option value="high-to-low">Fiyata Göre Azalan</option>
          </select>
        </div>
      </div>
  
      <!-- ürün list -->
      <div class="product-list">
        <ProductCard
          v-for="product in sortedProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>



      <!-- Pagination -->
        <div class="pagination">
        <button class="pagination-arrow" @click="prevPage" :disabled="currentPage === 1">
            <i class="bi bi-chevron-left"></i>
        </button>
        <span class="pagination-page">{{ currentPage }}</span>
        <button class="pagination-arrow" @click="nextPage" :disabled="currentPage === totalPages">
            <i class="bi bi-chevron-right"></i>
        </button>
        </div>

    </div>
  </template>
  
  <script>
  import ProductCard from "/components/ProductCard.vue";
  
  export default {
    components: {
      ProductCard,
    },
    data() {
      return {
        selectedSort: "recommended", // deafult sıralama
        products: [
          {
            id: 1,
            brand: "adidas",
            name: "Samba Xlg",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/adidas-xlg.jpg",
          },
          {
            id: 2,
            brand: "adidas",
            name: "Samba Og",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/adidas-og.jpg",
          },
          {
            id: 3,
            brand: "adidas",
            name: "Samba Xlg White",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/adidas-white.jpg",
          },
          {
            id: 4,
            brand: "adidas",
            name: "Samba Green",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/samba-originals.jpg",
          },
          {
            id: 5,
            brand: "adidas",
            name: "Samba Xlg",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/adidas-xlg.jpg",
          },
          {
            id: 6,
            brand: "adidas",
            name: "Samba Og",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/adidas-og.jpg",
          },
          {
            id: 7,
            brand: "adidas",
            name: "Samba Xlg White",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/adidas-white.jpg",
          },
          {
            id: 8,
            brand: "adidas",
            name: "Samba Green",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/samba-originals.jpg",
          },
          {
            id: 9,
            brand: "adidas",
            name: "Samba Xlg",
            price: 5169,
            category: "Unisex Sneaker",
            image: "/adidas-xlg.jpg",
          },
        ],
      };
    },
    computed: {
      sortedProducts() {
        if (this.selectedSort === "low-to-high") {
          return this.products.sort((a, b) => a.price - b.price);
        }
        if (this.selectedSort === "high-to-low") {
          return this.products.sort((a, b) => b.price - a.price);
        }
        return this.products; // default sıralama
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
  .product-page {
    position: relative; 
    top: 0; /* navbar hizası için */
    margin-top: -70px;
    padding: 20px;
    padding-top: calc(96px + 10px); /* Navbar yüksekliği ile uyum */
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Başlık */
  .product-title {
    color: #d0021b;
    font-size: 0.625rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
  }
  
  /* filtreleme ürün sayısı */
  .filter-wrapper {
    display: flex;
    flex-direction: column;
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
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .filter-button i {
    margin-left: 5px;
  }
  
  .product-count {
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: underline;
    text-align: center;
    margin: 0;
    flex: 1; /* ortalama */
  }
  
  /* sıralama */
  .sort-select {
    border: none;
    font-size: 0.8rem;
    background: #f9f9f9;
    cursor: pointer;
  }
  
  /* ürün list */
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  /* pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
}

.pagination-arrow {
  background: none;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pagination-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-page {
  background: #333;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
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
  