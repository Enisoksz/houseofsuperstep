<template>
    <div class="cart-summary">
      <h3>Toplam: {{ formatPrice(total) }}</h3>
      <button class="checkout-button" @click="$emit('checkout')">Satın Al</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      total: {
        type: Number,
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
  .cart-summary {
    margin-top: 20px;
    text-align: right;
  }
  
  .checkout-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .checkout-button:hover {
    background-color: #0056b3;
  }
  </style>
  