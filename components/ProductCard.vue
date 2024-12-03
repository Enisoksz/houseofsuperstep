<template>
  <div class="product-card">
    <!-- görsel -->
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>

    <!-- ürün bilgi -->
    <div class="product-info">
      <h3 class="brand-name">{{ product.brand }}</h3>
      <h4 class="product-name">{{ product.name }}</h4>
      <p class="product-category">{{ product.category }}</p>
      <p class="product-price">{{ formatPrice(product.price) }}</p>
      <button class="wishlist-button">
        <i class="bi bi-heart"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      }).format(price);
    },
  },
};
</script>

<style scoped>
.product-card {
  background: #f9f9f9;
  overflow: hidden;
  text-align: center;
  position: relative;
}

.product-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 15px;
}

.product-info {
  padding: 10px 0;
}

.brand-name {
  font-size: 1rem;
  color: black;
  font-weight: bold;
}

.product-name {
  font-size: 1rem;
  margin: 5px 0;
}

.product-category {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 10px;
}

.product-price {
  font-size: 0.8rem;
  font-weight: bold;
}

.wishlist-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
