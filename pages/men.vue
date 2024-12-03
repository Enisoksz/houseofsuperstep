<template>
  <CategoryPage title="Erkek" :products="menProducts" />
</template>

<script>
import CategoryPage from "/components/CategoryPage.vue";

export default {
  components: {
    CategoryPage,
  },
  data() {
    return {
      menProducts: [
        {
          id: 1,
          brand: "Puma",
          name: "RS-X",
          price: 1200,
          category: "Sneaker",
          image: "/erkekshirt.jpg",
        },
        {
          id: 2,
          brand: "Reebok",
          name: "Classic",
          price: 1000,
          category: "Sneaker",
          image: "/erkekesortman.jpg",
        },
        {
          id: 3,
          brand: "Puma",
          name: "RS-X",
          price: 1200,
          category: "Sneaker",
          image: "/erkektakım.jpg",
        },
        {
          id: 4,
          brand: "Reebok",
          name: "Classic",
          price: 1000,
          category: "Sneaker",
          image: "/erkekkazak.jpg",
        },
        {
          id: 5,
          brand: "Puma",
          name: "RS-X",
          price: 1200,
          category: "Sneaker",
          image: "/erkekshirt.jpg",
        },
        {
          id: 6,
          brand: "Reebok",
          name: "Classic",
          price: 1000,
          category: "Sneaker",
          image: "/erkekesortman.jpg",
        },
        {
          id: 7,
          brand: "Puma",
          name: "RS-X",
          price: 1200,
          category: "Sneaker",
          image: "/erkektakım.jpg",
        },
        {
          id: 8,
          brand: "Reebok",
          name: "Classic",
          price: 1000,
          category: "Sneaker",
          image: "/erkekkazak.jpg",
        },
        {
          id: 9,
          brand: "Puma",
          name: "RS-X",
          price: 1200,
          category: "Sneaker",
          image: "/erkekshirt.jpg",
        },
        {
          id: 10,
          brand: "Reebok",
          name: "Classic",
          price: 1000,
          category: "Sneaker",
          image: "/erkekesortman.jpg",
        },
        {
          id: 11,
          brand: "Puma",
          name: "RS-X",
          price: 1200,
          category: "Sneaker",
          image: "/erkektakım.jpg",
        },
        {
          id: 12,
          brand: "Reebok",
          name: "Classic",
          price: 1000,
          category: "Sneaker",
          image: "/erkekkazak.jpg",
        },
      ],
    };
  },
};
</script>
