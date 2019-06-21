<template>
  <div>
    <div class="container pt-5">
      <div class="row mx-auto">
        <div class="col-md-1 mb-3">
          <nuxt-link to="/магазин">
            <img src="~assets/img/chevron-right.png" alt="chevron-right">
          </nuxt-link>
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="main-image col-lg-4">
              <!-- <div class="product__images">
                <div v-if="blok.images.length > 0">
                  <img :src="(selectedImage.filename || blok.images[0].filename) | resize('550x0')" :alt="selectedImage.name || blok.images[0].name">
                </div>
                <ul class="product__thumbs">
                  <li class="product__thumb" v-for="image in blok.images" :key="image.filename" @click="selectedImage = image">
                    <img class="product__thumb-image" :src="image.filename | resize('55x55')" :alt="image.name">
                  </li>
                </ul>
              </div>-->
              <div class="image-showcase col-12 text-center">
                <img src="~assets/img/86.jpg" class="mx-auto img-fluid" alt="Koch Chemie Fresh UP">
              </div>
              <div class="small-more-images">
                <div class="row mx-auto">
                  <img
                    src="~assets/img/86.jpg"
                    alt="Koch chemie fresh up"
                    class="col-4 mx-auto mt-2 more-images"
                  >
                  <img
                    src="~assets/img/86.jpg"
                    alt="Koch chemie fresh up"
                    class="col-4 mx-auto mt-2 more-images"
                  >
                  <img
                    src="~assets/img/86.jpg"
                    alt="Kosh chemie fresh up"
                    class="col-4 mx-auto mt-2 more-images"
                  >
                </div>
              </div>
            </div>

            <div class="main-text col-lg-8 text-center text-md-left">
              <h1 class="details-page-header">Koch Chemie Fresh UP</h1>
              <p class="my-lg-5">
                Koch Chemie Fresh UP —Розпилюючий засіб для видалення небажаних
                запахів,
                застосуємо в
                різних напрямках. Добре усуває запах в прокуреній машини, запах прілості. Надає
                свіжий
                приємний аромат. Протягом 5-7 днів блокує прояв небажаних запахів
              </p>
              <div class="row">
                <div class="col-md-6 text-center text-md-left my-auto">
                  <small class="mb-2 detail-discount-cost">
                    <s>2975 грн</s>
                  </small>
                  <p id="store-item-price" class="detail-cost">
                    2 900
                    <span>ГРН</span>
                  </p>
                </div>
                <div class="col-md-6 text-center mt-lg-n3">
                  <small class="detail-discount">В наявності</small>
                  <br>
                  <a href="#" class="btn add-to-cart" @click.prevent="addToCart">
                    Додати
                    до корзини +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 mt-2">
          <div class="cart-icon text-center mx-auto">
            <modalComponent :cart="cart"/>
          </div>
        </div>
      </div>

      <hr style="border: 1px solid #C4C4C4; margin: 40px 0; width: 100%;">

      <h2 class="text-center my-2">Схожі товари та пропозиції</h2>

      <div class="text-center mx-auto p-0">
        <!-- <div class="row">
          <card class="mb-5 mx-auto"/>
          <card class="mb-5 mx-auto"/>
          <card class="mb-5 mx-auto"/>
          <card class="mb-5 mx-auto"/>
        </div>-->
        <cardsSlider/>
      </div>

      <!-- <div class="card-deck">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <div class="card details-page-card one card__hover mx-auto">
              <img
                src="~assets/img/86.jpg"
                class="card-img-top img-fluid"
                alt="Koch Chemie Fresh UP"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card details-page-card two card__hover mx-auto">
              <img
                src="~assets/img/9BFZEPHIR-1.jpg"
                class="card-img-top img-fluid"
                alt="Rupes Coarse Zephir Gloss"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="card details-page-card three card__hover mx-auto">
              <img
                src="~assets/img/MaskGroup(3).jpg"
                class="card-img-top img-fluid small-img"
                alt="Soft 99"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="card details-page-card four card__hover mx-auto">
              <img
                src="~assets/img/86.jpg"
                class="card-img-top img-fluid"
                alt="Koch Chemie Fresh UP"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card details-page-card five card__hover mx-auto">
              <img
                src="~assets/img/9BFZEPHIR-1.jpg"
                class="card-img-top img-fluid"
                alt="Rupes Coarse Zephir Gloss"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card details-page-card six card__hover mx-auto">
              <img
                src="~assets/img/MaskGroup(3).jpg"
                alt="Soft 99"
                class="card-img-top img-fluid small-img"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="card details-page-card seven card__hover mx-auto">
              <img
                src="~assets/img/86.jpg"
                alt="Koch Chemie Fresh UP"
                class="card-img-top img-fluid"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card details-page-card eight card__hover mx-auto">
              <img
                src="~assets/img/9BFZEPHIR-1.jpg"
                class="card-img-top img-fluid"
                alt="Rupes Coarse Zephir Gloss"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="card details-page-card nine card__hover mx-auto">
              <img
                src="~assets/img/MaskGroup(3).jpg"
                class="card-img-top img-fluid small-img"
                alt="Soft 99"
              >
              <hr>
              <div class="card-body">
                <h5 id="store-item-name" class="card-title text-left">Koch Chemie Fresh UP</h5>
                <p class="p-0 m-0 text-left">
                  Розпилюючий засіб для видалення
                  небажаних запахів
                </p>
                <div class="row">
                  <div class="text-left col-6 my-auto pr-0">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="col-6 pl-0 mx-auto text-center">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="Магазинdetail" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import productCards from "@/components/shop/productCards";
export default {
  components: {
    productCards
  },
  data() {
    return {
      cart: 0,
      selectedImage: {}
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    }
  },
  mounted() {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

 <style lang="scss" scoped>
h1.details-page-header {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: normal;
  margin-top: 10px;

  color: #000000;
}

.image-showcase {
  margin-top: 10px;
  margin-bottom: 22px;
}

.image-showcase img {
  background: url("~assets/img/86.jpg");
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
}

.more-images {
  max-height: 73px;
  height: 100%;
  max-width: 73px;
  margin-top: 4px;
  width: 100%;
  object-fit: scale-down;
  object-position: center;
  background: url("~assets/img/86.jpg");
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}

.detail-cost {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 38px;
  letter-spacing: -0.05em;

  color: #8b8b8b;
}

.detail-discount-cost {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;
  text-align: center;
  text-decoration-line: line-through;

  color: #d7000b;
}

.detail-discount {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: normal;
  text-align: center;

  color: #239a0f;
}

.btn.add-to-cart {
  padding: 12px 36px;
  background: #d41f26;
  border-radius: 50px;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: normal;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);

  margin-top: 5px;
}

// .card {
//   width: 100%;
//   max-width: 320px;
//   min-width: 250px;
//   height: 100%;
//   background: #ffffff;
//   box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
//   border-radius: 20px;
//   margin-bottom: 20px !important;
//   margin-left: auto;
//   margin-right: auto;
// }

// .card img {
//   object-fit: scale-down;
//   height: 180px;
// }

// .card p {
//   padding: 0px 0;
// }

// hr {
//   width: 270px;
//   align-self: center;
//   margin: 0;
//   border: 1px solid #c4c4c4;
// }

// .card-title {
//   font-family: "Roboto", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: normal;
//   color: #000000;
// }

// small s {
//   font-family: "Roboto", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 12px;
//   line-height: normal;
//   text-align: center;
//   text-decoration-line: line-through;
//   color: #d41f26;
// }

// .card-text {
//   font-family: "Roboto", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 30px;
//   line-height: 28px;
//   letter-spacing: -0.05em;
//   color: #8b8b8b;
// }

// span {
//   font-family: "Roboto", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 12px;
//   line-height: 10px;
//   text-align: center;
// }

// .discount {
//   font-family: "Roboto Condensed", sans-serif;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   line-height: normal;
//   color: #239a0f;
//   margin-right: 22px;
// }

// .card .btn {
//   padding: 10px 30px;
//   background: #d41f26;
//   border-radius: 50px;
//   font-family: "Roboto Condensed", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 20px;
//   line-height: normal;
//   text-align: center;
//   color: #ffffff;
//   text-decoration: none;
//   transition: ease-in-out 300ms;
//   -webkit-transition: ease-in-out 300ms;
//   -moz-transition: ease-in-out 300ms;
//   -ms-transition: ease-in-out 300ms;
//   -o-transition: ease-in-out 300ms;
//   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
// }

.btn:hover {
  color: #d41f26;
  background: #ffffff;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

@media screen and (max-width: 320px) {
  // .card {
  //   width: 100%;
  //   max-width: 270px;
  //   min-width: 250px;
  //   height: 100%;
  //   background: #ffffff;
  //   box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
  //   border-radius: 20px;
  //   margin-bottom: 20px !important;
  //   margin-left: auto;
  //   margin-right: auto;
  // }
}
</style>
