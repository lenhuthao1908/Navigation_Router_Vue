<template>
  <!-- Shop Section Begin -->
  <section class="shop spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <the-sidebar></the-sidebar>
        </div>
        <div class="col-lg-9 col-md-9">
          <product-list></product-list>
        </div>
      </div>
    </div>
  </section>
  <!-- Shop Section End -->
</template>

<script>
import TheSidebar from "./TheSidebar.vue";
import ProductList from "./ProductList.vue";
export default {
  components: {
    TheSidebar,
    ProductList,
  },
};
</script>

<style></style>
