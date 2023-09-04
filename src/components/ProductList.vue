<template>
  <div class="row">
    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
    <!-- <div class="col-lg-4 col-md-6">
      <div class="product__item sale">
        <div class="product__item__pic set-bg" data-setbg="img/shop/shop-5.jpg">
          <div class="label">Sale</div>
          <ul class="product__hover">
            <li>
              <a href="img/shop/shop-5.jpg" class="image-popup"
                ><span class="arrow_expand"></span
              ></a>
            </li>
            <li>
              <a href="#"><span class="icon_heart_alt"></span></a>
            </li>
            <li>
              <a href="#"><span class="icon_bag_alt"></span></a>
            </li>
          </ul>
        </div>
        <div class="product__item__text">
          <h6><a href="#">Ankle-cuff sandals</a></h6>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="product__price">$ 49.0 <span>$ 59.0</span></div>
        </div>
      </div>
    </div> -->
    <div class="col-lg-12 text-center">
      <div class="pagination__option">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#"><i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
};
</script>

<style></style>
