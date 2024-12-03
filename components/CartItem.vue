<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.name" class="item-image" />
    <div class="item-details">
      <h3>{{ item.name }}</h3>
      <p>Adet: {{ item.quantity }}</p>
      <p>Fiyat: {{ formatPrice(item.price) }}</p>
    </div>
    <button @click="$emit('remove', item.id)" class="remove-item">Kaldır</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
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
.cart-item {
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
}

.item-image {
  max-width: 80px;
  height: auto;
  border-radius: 5px;
}

.item-details h3 {
  margin: 0;
  font-size: 1rem;
}

.remove-item {
  background: none;
  color: red;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
}

.remove-item:hover {
  text-decoration: underline;
}
</style>
