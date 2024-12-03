<template>
  <CategoryPage title="Kadın" :products="womenProducts" />
</template>

<script>
import CategoryPage from "/components/CategoryPage.vue";

export default {
  components: {
    CategoryPage,
  },
  data() {
    return {
      womenProducts: [
        {
          id: 1,
          brand: "Nike",
          name: "Air Max",
          price: 1500,
          category: "Sneaker",
          image: "/kadınesortman.jpg",
        },
        {
          id: 2,
          brand: "adidas",
          name: "Ultraboost",
          price: 1800,
          category: "Sneaker",
          image: "/kadınayakkabı.jpg",
        },
        {
          id: 3,
          brand: "Nike",
          name: "Air Max",
          price: 1500,
          category: "Sneaker",
          image: "/kadınkazak.jpg",
        },
        {
          id: 4,
          brand: "adidas",
          name: "Ultraboost",
          price: 1800,
          category: "Sneaker",
          image: "/kadınpantalon.jpg",
        },
        {
          id: 5,
          brand: "Nike",
          name: "Air Max",
          price: 1500,
          category: "Sneaker",
          image: "/kadınesortman.jpg",
        },
        {
          id: 6,
          brand: "adidas",
          name: "Ultraboost",
          price: 1800,
          category: "Sneaker",
          image: "/kadınayakkabı.jpg",
        },
        {
          id: 7,
          brand: "Nike",
          name: "Air Max",
          price: 1500,
          category: "Sneaker",
          image: "/kadınkazak.jpg",
        },
        {
          id: 8,
          brand: "adidas",
          name: "Ultraboost",
          price: 1800,
          category: "Sneaker",
          image: "/kadınpantalon.jpg",
        },
        {
          id: 9,
          brand: "Nike",
          name: "Air Max",
          price: 1500,
          category: "Sneaker",
          image: "/kadınesortman.jpg",
        },
        {
          id: 10,
          brand: "adidas",
          name: "Ultraboost",
          price: 1800,
          category: "Sneaker",
          image: "/kadınayakkabı.jpg",
        },
        {
          id: 11,
          brand: "Nike",
          name: "Air Max",
          price: 1500,
          category: "Sneaker",
          image: "/kadınkazak.jpg",
        },
        {
          id: 12,
          brand: "adidas",
          name: "Ultraboost",
          price: 1800,
          category: "Sneaker",
          image: "/kadınpantalon.jpg",
        },
      ],
    };
  },
};
</script>
