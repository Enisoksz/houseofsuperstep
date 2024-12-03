<template>
  <CategoryPage title="Çocuk" :products="kidsProducts" />
</template>

<script>
import CategoryPage from "/components/CategoryPage.vue";

export default {
  components: {
    CategoryPage,
  },
  data() {
    return {
      kidsProducts: [
        {
          id: 1,
          brand: "Converse",
          name: "Chuck Taylor",
          price: 800,
          category: "Sneaker",
          image: "/converse.jpg",
        },
        {
          id: 2,
          brand: "Vans",
          name: "Old Skool",
          price: 750,
          category: "Sneaker",
          image: "/tshirt.jpg",
        },
        {
          id: 3,
          brand: "Converse",
          name: "Chuck Taylor",
          price: 800,
          category: "Sneaker",
          image: "/jacket.jpg",
        },
        {
          id: 4,
          brand: "Converse",
          name: "Chuck Taylor",
          price: 800,
          category: "Sneaker",
          image: "/converse.jpg",
        },
        {
          id: 5,
          brand: "Vans",
          name: "Old Skool",
          price: 750,
          category: "Sneaker",
          image: "/tshirt.jpg",
        },
        {
          id: 6,
          brand: "Converse",
          name: "Chuck Taylor",
          price: 800,
          category: "Sneaker",
          image: "/jacket.jpg",
        },
        
      ],
    };
  },
};
</script>
