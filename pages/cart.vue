<template>
    <div class="cart-page">
      <h1>Sepet:</h1>
  
      <!-- Sepet Boşsa -->
      <div v-if="cartItems.length === 0" class="empty-cart">
        <h2>Alışveriş sepetin boş!</h2>
        <p>Sepetin şu anda boş. Alışverişe devam etmek için ürünleri sepetine ekleyebilirsin.</p>
        <button @click="continueShopping" class="start-shopping-button">ALIŞVERİŞE BAŞLA</button>
      </div>
  
      <!-- Sepet Doluysa -->
      <div v-else>
        <div class="cart-items">
          <!-- Her bir ürün için CartItem bileşenini çağır -->
          <CartItem
            v-for="(item, index) in cartItems"
            :key="index"
            :item="item"
            @remove="removeFromCart"
          />
        </div>
  
        <!-- Toplam ve Satın Alma İşlemleri -->
        <CartSummary :total="cartTotal" @checkout="proceedToCheckout" />
      </div>
    </div>
  </template>
  
  <script>
  import CartItem from "/components/CartItem.vue";
  import CartSummary from "/components/CartSummary.vue";
  
  export default {
    components: {
      CartItem,
      CartSummary,
    },
    data() {
      return {
        // Sepet Ürünleri
        cartItems: [
          // Varsayılan örnek ürünler (Boş başlatmak isterseniz dizi boş bırakılabilir)
          {
            id: 1,
            name: "Nike Air Max",
            price: 1250,
            quantity: 2,
            image: "/shoe1.jpg",
          },
          {
            id: 2,
            name: "Adidas Superstar",
            price: 950,
            quantity: 1,
            image: "/shoe2.jpg",
          },
        ],
      };
    },
    computed: {
      cartTotal() {
        return this.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    },
    methods: {
      removeFromCart(id) {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);
      },
      continueShopping() {
        this.$router.push("/"); // Anasayfaya yönlendirme
      },
      proceedToCheckout() {
        alert("Satın alma işlemi başlatıldı!");
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-page {
    padding: 40px 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    font-size: 1.8rem;
    color: #d0021b;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  /* Boş Sepet */
  .empty-cart {
    font-size: 1.2rem;
    color: #333;
  }
  
  .empty-cart h2 {
    margin-bottom: 10px;
  }
  
  .start-shopping-button {
    background-color: #d0021b;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .start-shopping-button:hover {
    background-color: #a00116;
  }
  
  /* Dolu Sepet */
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  </style>
  