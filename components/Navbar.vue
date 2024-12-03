<template>
  <div>
    <!-- üst Banner -->
    <div class="top-banner text-white text-center">
      APP’e Özel 5.000 TL ve üzerine 1.000 TL İndirim | Kod: APP1000
    </div>

    <!-- ana navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div class="container">
        <!-- sol link -->
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item">
            <a class="nav-link" href="/stores">MAĞAZALAR</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/manifesto">MANİFESTO</a>
          </li>
        </ul>

        <!-- merkez logo -->
        <div class="logo-container mx-auto">
          <img src="/logo.svg" alt="House of SuperStep Logo" class="logo" />
        </div>

        <!-- sağ link -->
        <ul class="navbar-nav d-flex flex-row icons-container">
          <li class="nav-item">
            <a class="nav-link" href="/search">
              <i class="bi bi-search"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/favorites">
              <i class="bi bi-heart"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">
              <i class="bi bi-person"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cart">
              <i class="bi bi-bag">
                <span class="cart-count">0</span>
              </i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- alt linkler -->
    <div class="bottom-links">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="/women">KADIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/men">ERKEK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/kids">ÇOCUK</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/brands">MARKALAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/trends">TRENDLER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="/discounts">İNDİRİM</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* üst Banner */
.top-banner {
  background-color: #d0021b;
  padding: 4.5px 0;
  font-size: 0.7rem;
  font-weight: bold;
}

/* Navbar */
.custom-navbar {
  border-bottom: 1px solid #ddd;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 266.5px;
  margin-right: 266.5px;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  color: #000;
  font-weight: bold;
  font-size: 0.9rem; 
}

.nav-link:hover {
  color: #007bff;
}

/* merkez logo */
.logo-container {
  text-align: center;
}

.logo {
  height: 50px;
  max-height: 60px;
  object-fit: contain;
}

/* Right Icons */
.icons-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-item i {
  font-size: 1.5rem; 
  position: relative;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: none; 
  border-radius: 50%; 
  padding: 5px;
  box-sizing: border-box; 
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.8rem;
  border-radius: 50%;
  padding: 2px 5px;
}

/* alt linkler */
.bottom-links {
  padding: 10px 0;
}

.bottom-links .nav-link {
  color: #000;
  font-size: 0.9rem;
  padding: 5px 15px;
  text-transform: uppercase;
}

.bottom-links .nav-link.text-danger {
  font-weight: bold;
}

.bottom-links .nav-link:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
