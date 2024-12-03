<template>
  <footer class="footer">
    <!-- Üyelik ve Bilgilendirme -->
    <div class="newsletter">
      <h3>be a part of this new experience</h3>
      <p>House of SuperStep haberlerinden ve etkinliklerinden haberdar olmak için üye ol.</p>
      <div class="newsletter-form">
        <input type="email" placeholder="E-posta Adresi*" />
        <button>ÜYE OL</button>
      </div>
    </div>

    <!-- Bilgilendirme Kategorileri -->
    <div class="footer-links">
      <div class="footer-column">
        <h4>HOUSE OF</h4>
        <ul>
          <li>Manifesto</li>
          <li>Sanat</li>
          <li>Müzik</li>
          <li>Gaming</li>
          <li>Skate</li>
          <li>Tattoo</li>
          <li>Basketbol</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>YARDIM AL</h4>
        <ul>
          <li>İletişim</li>
          <li>İşlem Rehberi</li>
          <li>Sıkça Sorulan Sorular</li>
          <li>İptal & İade</li>
          <li>Bilgi Toplumu Hizmetleri</li>
          <li>Mağazalar</li>
          <li>Çerez Ayarları</li>
          <li>Kullanım Koşulları</li>
          <li>Genel Aydınlatma Metni</li>
          <li>Kampanyalar</li>
          <li>Sipariş Takibi</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>MARKALAR</h4>
        <ul>
          <li>Jordan</li>
          <li>Nike</li>
          <li>Converse</li>
          <li>adidas</li>
          <li>Les Benjamins</li>
          <li>Vans</li>
          <li>Lacoste</li>
          <li>Champion</li>
          <li>Tüm Markalar</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>KATEGORİLER</h4>
        <ul>
          <li>Sneaker</li>
          <li>Giyim</li>
          <li>Skate</li>
          <li>Tüm Ürünler</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>KOLEKSİYONLAR</h4>
        <ul>
          <li>Converse Chuck 70</li>
          <li>Vans Old Skool</li>
          <li>Nike Air Force 1</li>
          <li>Air Jordan</li>
          <li>Nike Sportswear</li>
          <li>adidas Handball Spezial</li>
          <li>adidas Samba</li>
          <li>Nike Dunk</li>
        </ul>
      </div>
    </div>

    <!-- Alt Kısım -->
    <div class="footer-bottom">
      <!-- Sol Taraf: Logo -->
      <div class="footer-left">
        <img src="/logo.svg" alt="House of SuperStep Logo" class="footer-logo" />
        <p>© 2024 House of SuperStep</p>
      </div>

      <!-- Orta Kısım: QR Kod -->
      <div class="footer-center">
        <img src="/etbis.jpg" alt="ETBİS QR Code" class="footer-qrcode" />
        <p>ETBİS'e Kayıtlıdır.</p>
      </div>

      <!-- Sağ Taraf: Sosyal Medya ve Mağaza Linkleri -->
      <div class="footer-right">
        <div class="social-icons">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-spotify"></i>
        </div>
        <div class="app-buttons">
          <img src="/appstore.png" alt="App Store" />
          <img src="/playstore.png" alt="Google Play" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer Genel Stil */
.footer {
  background-color: #f5f5f5;
  color: #333;
  padding: 20px 40px;
  text-align: center;
}

/* Newsletter Bölümü */
.newsletter {
  text-align: center;
  margin-bottom: 40px;
}

.newsletter h3 {
  font-size: 1.5rem;
  color: #d0021b;
  font-weight: bold;
}

.newsletter p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.newsletter-form input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.newsletter-form button {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #d0021b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.newsletter-form button:hover {
  background-color: #a00116;
}

/* Link Kategorileri */
.footer-links {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.footer-column h4 {
  font-size: 1rem;
  color: #d0021b;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  font-size: 0.9rem;
  margin-bottom: 8px;
}

/* Alt Kısım */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

/* Sol Kısım: Logo */
.footer-left {
  text-align: center;
  flex: 1;
}

.footer-logo {
  max-height: 50px;
  margin-bottom: 10px;
}

.footer-left p {
  font-size: 0.9rem;
  color: #555;
}

/* Orta Kısım: QR Kod */
.footer-center {
  text-align: center;
  flex: 1;
}

.footer-qrcode {
  max-height: 80px;
  margin-bottom: 10px;
}

.footer-center p {
  font-size: 0.9rem;
  color: #555;
}

/* Sağ Kısım: Sosyal Medya ve Mağaza Linkleri */
.footer-right {
  text-align: center;
  flex: 1;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.social-icons i {
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
}

.social-icons i:hover {
  color: #d0021b;
}

.app-buttons img {
  max-height: 40px;
  margin: 0 10px;
}
</style>
