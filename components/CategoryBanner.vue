<template>
  <div>
    <!-- Bannerlar -->
    <div
      v-for="(image, index) in images"
      :key="index"
      class="banner"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <!-- Quad Wrapper -->
    <div class="quad-wrapper">
      <div class="quad-item" v-for="(item, index) in quadItems" :key="index">
        <img :src="item.image" :alt="item.title" class="quad-image" />
        <div class="quad-content">
          <h3>{{ item.title }}</h3>
          <a :href="item.link" class="quad-link">{{ item.title }} &gt;</a>
        </div>
      </div>
    </div>

    <!-- Üçlü Tasarım -->
    <div class="three-section">
      <!-- Sol Görsel -->
      <div class="image-section">
        <img src="/public/leftimage.jpg" alt="Kadın Ceket Mont" class="image-full" />
        <h2>KADIN CEKET & MONT</h2>
      </div>


      <div class="text-section">
        <h3>Ceket & Mont Koleksiyonu</h3>
        <p>
          Soğuk havalarda tarzını ve konforunu bir arada buluşturacağın
          modelleri Black Friday özel indirimleri ile keşfet. Ceket & mont
          koleksiyonu ile tarzın ve sıcaklığın tadını çıkar. Şimdi koleksiyonu
          keşfet, indirimli alışverişin keyfini çıkar.
        </p>
        <button class="explore-button">KEŞFET</button>
      </div>

      <!-- Sağ Görsel -->
      <div class="image-section">
        <img src="/public/rightimage.jpg" alt="Erkek Ceket Mont" class="image-full" />
        <h2>ERKEK CEKET & MONT</h2>
      </div>
    </div>

    <!-- Yeni Görsel Wrapper -->
    <div class="image-only-wrapper">
      <img src="/public/banner-image3.jpg" alt="Yeni Görsel" class="image-only" />
    </div>

    <!-- Grid Wrapper 4'lü Kısım -->
    <div class="grid-wrapper">
      <div class="grid-item" v-for="(item, index) in gridItems" :key="index">
        <div class="grid-image-container">
          <img :src="item.image" :alt="item.title" class="grid-image-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Banner görselleri
      images: [
        '/banner-image1.jpg',
        '/banner-image2.jpg',
        '/banner-image3.jpg',
        '/banner-image4.jpg',
      ],
      // Quad Wrapper içeriği
      quadItems: [
        {
          image: '/nikeairforce.jpg',
          title: 'Nike Air Force',
          link: '/products/nike-air-force',
        },
        {
          image: '/adidasamba.jpg',
          title: 'adidas Samba',
          link: '/products/adidas-samba',
        },
        {
          image: '/ugg.jpg',
          title: 'UGG',
          link: '/products/ugg',
        },
        {
          image: '/newbalance.jpg',
          title: 'New Balance 9060',
          link: '/products/new-balance-9060',
        },
      ],
      // Grid Wrapper içeriği 4'lü kısım
      gridItems: [
        {
          image: '/shoe1.jpg',
          title: 'Nike Air Max',
        },
        {
          image: '/shoe2.jpg',
          title: 'Adidas Superstar',
        },
        {
          image: '/shoe3.jpg',
          title: 'Salomon',
        },
        {
          image: '/shoe4.jpg',
          title: 'Timberland',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Banner */
.banner {
  width: 100%;
  aspect-ratio: 1348 / 495;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 20px;
}

/* Quad Wrapper */
.quad-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

.quad-item {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding-bottom: 15px;
}

.quad-item:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.quad-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.quad-content {
  padding: 10px;
}

.quad-content h3 {
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0;
}

.quad-link {
  color: black;
  font-size: 0.9rem;
}

/* Three Section */
.three-section {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  padding: 0 120px;
  align-items: center;
  text-align: center;
}

.image-section {
  position: relative;
}

.image-full {
  width: 100%;
  height: auto;
  display: block;
}

.image-section h2 {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.text-section {
  text-align: left;
  padding: 20px;
}

.text-section h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-section p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.explore-button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.explore-button:hover {
  background-color: #333;
}

/* Yeni Tekli Görsel Wrapper */
.image-only-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 20px 0;
}

.image-only {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

/* Grid Wrapper (4'lü Kısım) */
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 sütun */
  gap: 20px;
  padding: 20px 120px;
}

.grid-item {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
