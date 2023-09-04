<template>
  <!-- Product Details Section Begin -->
  <section class="product-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="product__details__pic">
            <div class="product__details__pic__left product__thumb nice-scroll">
              <a class="pt active" href="#product-1">
                <img src="img/product/details/thumb-1.jpg" alt="" />
              </a>
              <a class="pt" href="#product-2">
                <img src="img/product/details/thumb-2.jpg" alt="" />
              </a>
              <a class="pt" href="#product-3">
                <img src="img/product/details/thumb-3.jpg" alt="" />
              </a>
              <a class="pt" href="#product-4">
                <img src="img/product/details/thumb-4.jpg" alt="" />
              </a>
            </div>
            <div class="product__details__slider__content">
              <div class="product__details__pic__slider owl-carousel">
                <img
                  data-hash="product-1"
                  class="product__big__img"
                  src="img/product/details/product-1.jpg"
                  alt=""
                />
                <img
                  data-hash="product-2"
                  class="product__big__img"
                  src="img/product/details/product-3.jpg"
                  alt=""
                />
                <img
                  data-hash="product-3"
                  class="product__big__img"
                  src="img/product/details/product-2.jpg"
                  alt=""
                />
                <img
                  data-hash="product-4"
                  class="product__big__img"
                  src="img/product/details/product-4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product__details__text">
            <h3>
              Essential structured blazer
              <span>Brand: SKMEIMore Men Watches from SKMEI</span>
            </h3>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span>( 138 reviews )</span>
            </div>
            <div class="product__details__price">
              $ 75.0 <span>$ 83.0</span>
            </div>
            <p>
              Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
              fugit, sed quia consequuntur magni lores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div class="product__details__button">
              <div class="quantity">
                <span>Quantity:</span>
                <div class="pro-qty">
                  <input type="number" value="1" />
                </div>
              </div>
              <a href="#" class="cart-btn"
                ><span class="icon_bag_alt"></span> Add to cart</a
              >
              <ul>
                <li>
                  <a href="#"><span class="icon_heart_alt"></span></a>
                </li>
              </ul>
            </div>
            <div class="product__details__widget">
              <ul>
                <li>
                  <span>Availability:</span>
                  <div class="stock__checkbox">
                    <label for="stockin">
                      In Stock
                      <input type="checkbox" id="stockin" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </li>
                <li>
                  <span>Available color:</span>
                  <div class="color__checkbox">
                    <label for="red">
                      <input
                        type="radio"
                        name="color__radio"
                        id="red"
                        checked
                      />
                      <span class="checkmark"></span>
                    </label>
                    <label for="black">
                      <input type="radio" name="color__radio" id="black" />
                      <span class="checkmark black-bg"></span>
                    </label>
                    <label for="grey">
                      <input type="radio" name="color__radio" id="grey" />
                      <span class="checkmark grey-bg"></span>
                    </label>
                  </div>
                </li>
                <li>
                  <span>Available size:</span>
                  <div class="size__btn">
                    <label for="xs-btn" class="active">
                      <input type="radio" id="xs-btn" />
                      xs
                    </label>
                    <label for="s-btn">
                      <input type="radio" id="s-btn" />
                      s
                    </label>
                    <label for="m-btn">
                      <input type="radio" id="m-btn" />
                      m
                    </label>
                    <label for="l-btn">
                      <input type="radio" id="l-btn" />
                      l
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Product Details Section End -->
</template>

<script>
export default {};
</script>

<style></style>
