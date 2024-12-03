<template>
    <div class="container d-flex justify-content-center align-items-center mt-5">
      <div class="card border-0 shadow-sm" style="width: 400px;">
        <div class="card-body p-4">
          <b-tabs justified>
            <!-- Giriş Yap Sekmesi -->
            <b-tab title="Giriş Yap" active>
              <form>
                <div class="form-group mb-3">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="E-posta Adresi"
                  />
                </div>
                <div class="form-group mb-3">
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Şifre"
                    />
                    <button class="btn btn-light border" type="button">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
                <div class="text-end mb-3">
                  <a href="#" class="text-decoration-none text-danger">Şifremi Unuttum</a>
                </div>
                <button type="submit" class="btn btn-danger btn-lg w-100">
                  GİRİŞ YAP
                </button>
              </form>
            </b-tab>
            <!-- Kayıt Ol Sekmesi -->
          </b-tabs>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  
  .card {
    border-radius: 8px;
  }
  </style>
  