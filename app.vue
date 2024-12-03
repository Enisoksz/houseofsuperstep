<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="app-layout">
    <!-- Navbar -->
    <Navbar />

    <!-- Sidebar ve İçerik -->
    <div class="main-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">
                <i class="bi bi-house-door-fill"></i> Anasayfa
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cart">
                <i class="bi bi-cart-fill"></i> Sepet
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kids">
                <i class="bi bi-bicycle"></i> Çocuk
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/login">
                <i class="bi bi-box-arrow-in-right"></i> Giriş Yap
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/men">
                <i class="bi bi-person-fill"></i> Erkek
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/women">
                <i class="bi bi-person-fill"></i> Kadın
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/product">
                <i class="bi bi-box-seam"></i> Ürünler
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/search">
                <i class="bi bi-search"></i> Arama
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/wishlist">
                <i class="bi bi-heart-fill"></i> Favoriler
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Sayfa İçeriği -->
      <main class="main-content">
        <NuxtPage />
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-layout {
  display: flex;
  flex-grow: 1;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: linear-gradient(135deg, #1e3c72, #2a5298); /* Gradient arka plan */
  color: #ecf0f1;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 15px 0;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.sidebar nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Hover efekti */
  color: #1abc9c; /* Hover metin rengi */
  transform: translateX(5px); /* Hafif kayma efekti */
}

.sidebar nav ul li a i {
  font-size: 20px;
}

/* Main Content Styles */
.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  min-height: 80vh;
}
</style>
