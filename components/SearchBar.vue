<template>
  <div class="search-bar">
    <!-- Logo -->
    <img src="/public/aa.svg" alt="Logo" class="search-image" />

    <!-- Arama Kutusu -->
    <div class="search-input-wrapper">
      <input
        type="text"
        v-model="query"
        class="search-input"
        placeholder="Ürün, marka veya kategori ara..."
      />
      <i class="bi bi-search search-icon" @click="search"></i>
    </div>

    <!-- Kapat Düğmesi -->
    <a href="#" class="close-link" @click.prevent="clearSearch">Kapat</a>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "", // Arama kutusunun içeriği
    };
  },
  methods: {
    search() {
      const results = [
        { name: "Nike Air Max", link: "/urunler/nike-air-max" },
        { name: "Adidas Superstar", link: "/urunler/adidas-superstar" },
        { name: "Puma RS-X", link: "/urunler/puma-rs-x" },
      ];

      // Filtreleme
      const filteredResults = results.filter((item) =>
        item.name.toLowerCase().includes(this.query.toLowerCase())
      );

      if (filteredResults.length > 0) {
        console.log("Sonuçlar:", filteredResults);
      } else {
        console.log("Sonuç bulunamadı.");
      }
    },
    clearSearch() {
      this.query = ""; // Arama kutusu temizleme
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /* Navbar üstüne çıkması için fixed kullanıyoruz */
  top: 200px; /* Daha aşağı taşımak için top değerini artırdık */
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  height: 100px;
  z-index: 1000; /* Navbar'ın üstüne çıkması için z-index ayarı */
  background-color: #fff; /* Arka plan beyaz */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Hafif bir gölge */
  border-radius: 8px;
  padding: 20px;
}
.search-image {
  width: 120px;
  height: auto;
  margin-right: 20px;
}
.search-input-wrapper {
  position: relative;
  flex-grow: 1;
}
.search-input {
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  padding-right: 40px;
  font-size: 16px;
  color: #333;
  outline: none;
}
.search-input::placeholder {
  color: #888;
  opacity: 1;
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
  cursor: pointer;
}
.close-link {
  font-size: 16px;
  color: #888;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
}
.close-link:hover {
  color: #000;
}
</style>
