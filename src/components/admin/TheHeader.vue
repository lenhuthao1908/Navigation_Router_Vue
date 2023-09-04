<template>
  <!-- Header Section Begin -->
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-2">
          <div class="header__logo">
            <router-link to="/admin"
              ><img src="img/logo.png" alt=""
            /></router-link>
          </div>
        </div>
        <div class="col-xl-6 col-lg-7">
          <nav class="header__menu">
            <ul>
              <input
                class="input input-search"
                type="search"
                name="search"
                placeholder="search text"
              />
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__right">
            <div class="header__right__auth">
              <router-link to="/login">Login</router-link>
              <router-link to="/signup">Signup</router-link>
            </div>
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
