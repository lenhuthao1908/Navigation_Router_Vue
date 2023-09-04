<template>
  <!-- Offcanvas Menu Begin -->
  <div class="offcanvas-menu-overlay"></div>
  <div class="offcanvas-menu-wrapper">
    <div class="offcanvas__close">+</div>
    <ul class="offcanvas__widget">
      <li><span class="icon_search search-switch"></span></li>
      <li>
        <a href="#"
          ><span class="icon_heart_alt"></span>
          <div class="tip">2</div>
        </a>
      </li>
      <li>
        <a href="#"
          ><span class="icon_bag_alt"></span>
          <div class="tip">2</div>
        </a>
      </li>
    </ul>
    <div class="offcanvas__logo">
      <a href="./index.html"><img src="img/logo.png" alt="" /></a>
    </div>
    <div id="mobile-menu-wrap"></div>
    <div class="offcanvas__auth">
      <a href="#">Login</a>
      <a href="#">Register</a>
    </div>
  </div>
  <!-- Offcanvas Menu End -->

  <!-- Header Section Begin -->
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-2">
          <div class="header__logo">
            <router-link to="/"><img src="img/logo.png" alt="" /></router-link>
          </div>
        </div>
        <div class="col-xl-6 col-lg-7">
          <nav class="header__menu">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__right">
            <div class="header__right__auth">
              <router-link to="/login">Login</router-link>
              <router-link to="/signup">Signup</router-link>
            </div>
            <ul class="header__right__widget">
              <li><span class="icon_search search-switch"></span></li>
              <li>
                <a href="#"
                  ><span class="icon_heart_alt"></span>
                  <div class="tip">2</div>
                </a>
              </li>
              <li>
                <router-link to="/cart"
                  ><span class="icon_bag_alt"></span>
                  <div class="tip">2</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="canvas__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
  <!-- Header Section End -->
</template>

<script>
export default {};
</script>

<style></style>
