<template>
  <div>

    <div class="shop-heading-image">
      <nav
        class="container mt-2 mb-n5"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">Головна</nuxt-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >контакти</li>
        </ol>
      </nav>
      <div class="container text-center">
        <h1 class="my-auto">
          <span class="my-auto">-50%</span> на Антидощ до кінця місяця
        </h1>
      </div>
    </div>
    <toast
      :show="toast.show"
      :text="toast.text"
      @hide-toast="hideToast"
    ></toast>

    <div id="app">
      <div class="container">
        <div class="row">
          <div class="filter-sidebar desktop-only col-xl-2 text-center p-0">
            <div class="col-0">
              <button
                class="accordion"
                @click.prevent="active1 = !active1"
              >
                Засоби догляду
                <span
                  class="down-Arrow"
                  v-show="!active1"
                >&#9660;</span>
                <span
                  class="up-Arrow"
                  v-show="active1"
                >&#9650;</span>
              </button>
              <div
                class="panel"
                v-show="active1"
              >
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn all"
                  data-filter="all"
                >-Все</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn Фібри"
                  data-filter="Фібри"
                >-Фібри</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Шампунь"
                >-Шампунь</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Віск"
                >-Віск</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Пахнючки"
                >-Пахнючки</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="чорніннярезини"
                >
                  -Засіб
                  для
                  чорніння резини
                </a>
              </div>

              <button
                class="accordion"
                @click.prevent="active2 = !active2"
              >
                Захисні покриття
                <span
                  class="down-Arrow"
                  v-show="!active2"
                >&#9660;</span>
                <span
                  class="up-Arrow"
                  v-show="active2"
                >&#9650;</span>
              </button>
              <div
                class="panel"
                v-show="active2"
              >
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Кераміка"
                >-Кераміка</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Рідкескло"
                >
                  -Рідке
                  скло
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="тканини"
                >
                  -Кераміка
                  для
                  тканини
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="шкіри"
                >
                  -Кераміка для
                  шкіри
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="диски"
                >
                  -Кераміка
                  диски
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="резина"
                >
                  -Кераміка
                  резина
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn ВіскSoft99"
                  data-filter="ВіскSoft99"
                >
                  -Віск
                  Soft
                  99
                </a>
              </div>

              <button
                class="accordion"
                @click.prevent="active3 = !active3"
              >
                Хімія
                <span
                  class="down-Arrow"
                  v-show="!active3"
                >&#9660;</span>
                <span
                  class="up-Arrow"
                  v-show="active3"
                >&#9650;</span>
              </button>
              <div
                class="panel"
                v-show="active3"
              >
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Хімія"
                >-Хімія</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Хімія"
                >-Хімія</a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Хімія"
                >-Хімія</a>
              </div>

              <button
                class="accordion"
                @click.prevent="active4 = !active4"
              >
                Подарункові набори
                <span
                  class="down-Arrow"
                  v-show="!active4"
                >&#9660;</span>
                <span
                  class="up-Arrow"
                  v-show="active4"
                >&#9650;</span>
              </button>
              <div
                class="panel"
                v-show="active4"
              >
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Подарунковінабори"
                >
                  -Подарункові
                  набори
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Подарунковінабори"
                >
                  -Подарункові
                  набори
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Подарунковінабори"
                >
                  -Подарункові
                  набори
                </a>
              </div>
            </div>
          </div>

          <div
            class="filter-sidebar-mobile col-xl-2 text-center mb-5 mobile-only"
            style
          >
            <form
              method="post"
              name="filter"
            >
              <div class="row">
                <div class="form-group col-8 text-left m-auto">
                  <label
                    class="sr-only"
                    for="filter"
                  >від дорогих до дешевих</label>
                  <select
                    aria-label="filter"
                    id="filter"
                    aria-describedby="filter"
                    class="form-control"
                    v-model="filter"
                    name="filter"
                  >
                    <option
                      value="null"
                      class="filter-btn"
                    >від дорогих до дешевих</option>
                    <option
                      value="all"
                      class="filter-btn all"
                      data-filter="all"
                    >Все</option>
                    <option
                      value="Фібри"
                      class="filter-btn Фібри"
                      data-filter="Фібри"
                    >Фібри</option>
                    <option
                      value="Шампунь"
                      class="filter-btn Шампунь"
                      data-filter="Шампунь"
                    >Шампунь</option>
                    <option value="Віск">Віск</option>
                    <option value="Пахнючки">Пахнючки</option>
                    <option value="чорніннярезини">
                      Засіб
                      для
                      чорніння резини
                    </option>
                    <option value="резина">Хімчистка передніх сидінь</option>
                    <option value="Кераміка">Кераміка</option>
                    <option value="тканини">
                      Кераміка
                      для
                      тканини
                    </option>
                    <option value="Рідкескло">Рідке скло</option>
                    <option value="шкіри">
                      Кераміка для
                      шкіри
                    </option>
                    <option value="диски">
                      Кераміка
                      диски
                    </option>
                    <option value="резина">
                      Кераміка
                      резина
                    </option>
                    <option
                      value="ВіскSoft99"
                      class="filter-btn ВіскSoft99"
                      data-filter="ВіскSoft99"
                    >
                      Віск
                      Soft
                      99
                    </option>
                    <option value="Хімія">Хімія</option>
                    <option value="Подарунковінабори">
                      Подарункові
                      набори
                    </option>
                  </select>
                </div>
                <div class="col-4 text-right m-auto">
                  <p class="m-auto">
                    Фільтр
                    <img
                      src="~assets/img/icons8-slider-filled-90.png"
                      alt="filter icon"
                    />
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div class="sales-cards col-xl-9 text-center mx-auto p-0">
            <products></products>
            <div
              class="row"
              id="store-items"
            >
              <card
                class="mb-5 mx-auto"
                v-for="product in products"
                :key="product._id"
                :name="product.name"
                :summary="product.Overview"
                :price="product.Price"
                :image="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
                :link="'/mahazyn/'+product.name_slug"
                :filterData="product.Filter"
                :stock="product.Stock"
              />
            </div>

          </div>

          <div class="cart-icon col-xl-1 desktop-only text-center">
            <div class="position-fixed col-0">
              <!-- <modalComponent :cart="cart" /> -->
              <div class="cart-icon">
                <b-button
                  v-b-modal.modal-xl-mobile
                  variant="link"
                  @click="mobileModalShow = !mobileModalShow"
                >
                  <img
                    id="cart"
                    src="~/assets/img/cart.png"
                    alt="Cart icon"
                  >
                </b-button>
                <div
                  id="show-total"
                  class="text-center justify-center"
                >
                  <span
                    id="item-count"
                    class="text-center m-auto p-0 snipcart-total-items"
                  >{{cartSize}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script
      id="snipcart"
      src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
      data-api-key="ZThkMTZkM2EtNzBlNC00ZjQ2LWI2YTEtMjE0ZTE4YTk0OTkwNjM2OTYwNjIxMDU5MDExMDc4"
    ></script>

    <script>
    (function() {
      const filterBtn = document.querySelectorAll(".filter-btn");
      filterBtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
          event.preventDefault();
          this.classList.add("active");
          const value = event.target.dataset.filter;
          const items = document.querySelectorAll(".store-item");
          items.forEach(function(items) {
            if (value === "all") {
              items.style.display = "block";
            } else {
              if (items.classList.contains(value)) {
                items.style.display = "block";
              } else {
                items.style.display = "none";
              }
            }
          });
        });
      });
    })();
    </script>
  </div>
</template>

<script>
import axios from "axios";
import Products from '@/components/Products.vue'
import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  components: {
    Products,
  },
  async asyncData ({ app, error }) {
    const { data } = await app.$axios.post(
      process.env.PRODUCT_URL,
      JSON.stringify({
        filter: { Published: true },
        sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    if (!data.entries[0]) {
      return error({ message: "404 Page not found", statusCode: 404 });
    }

    return { products: data.entries };
  },
  data () {
    return {
      filter: null,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      mobileModalShow: false,
      imageApiUrl: process.env.IMAGE_URL
    };
  },
  computed: {
    ...mapState([
      "cart"
    ]),
    ...mapGetters([
      "cartSize",
      "cartTotalAmount"
    ]),
    toast () {
      return this.$store.getters.toast;
    }
  },

  methods: {
    hideToast () {
      this.$store.commit("hideToast");
    }
  },
  mounted () {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-icon {
  #show-total {
    width: 35px;
    height: 35px;

    background-color: $redColor;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;

    margin: 17px auto 0;

    justify-content: center;
    margin: auto;

    span {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 35px;

      color: $lightColor;
      text-align: center;
      margin: auto;
    }
  }
}

.filter-sidebar-mobile {
  height: 40px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  select {
    border: 0;
  }
}

.mobile-only {
  display: none;
}

.shop-heading-image {
  margin-top: -10px;
  margin-bottom: 40px;
  background: $darkColor;
  background-image: url(~assets/img/shopPageHeadImg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 150px;
  justify-content: center;
  justify-items: center;
  text-justify: center;

  h1 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    padding: 20px 0;

    color: $lightColor;
    margin: auto;
    line-height: normal;
    justify-self: center !important;
    align-self: center;

    span {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 80px;

      color: $redColor;
      margin: auto;
      justify-self: center !important;
    }
  }
}

.filter-sidebar {
  .fixed-left {
    position: fixed;
    margin: auto;
  }

  .accordion {
    display: block;
    border: 1.48094px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 50px;
    margin: 10px auto;
    background-color: $lightColor;

    width: 90%;
    height: 38px;

    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    text-align: center;

    color: $darkColor;

    outline: none;
    transition: 400ms;
  }

  .open,
  .accordion:hover {
    background-color: #e5e5e5;
    outline: none;
  }

  .down-Arrow,
  .up-Arrow {
    color: $headingsFontColor;
    float: right;
    font-size: 14px;
    font-weight: 900;
    margin-right: 10px;
  }

  .panel {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    width: 90%;

    color: #8b8b8b;

    overflow: hidden;
    outline: none;

    .filter-btn {
      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;

      color: #8b8b8b;

      display: block;
      text-decoration: none;
      text-align: left;

      padding: 3px 0px 3px 10px;
      margin: 5px 0 5px 20px;
      outline: none;
      box-shadow: none;
      border-radius: 20px;
    }

    .filter-btn:hover,
    .filter-btn.active {
      color: $darkColor;
      background: #e5e5e5;
      border-radius: 20px;
      padding: 3px 0px 3px 10px;
      margin: 5px 0 5px 20px;
    }
  }
}

@include mediaMenu {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }
  .shop-heading-image {
    display: none;
    h1 {
      color: $lightColor;

      padding: 15px 0;

      span {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;

        color: $redColor;
      }
    }
  }
}

@include mediaMd {
  // .shop-heading-image {

  //   h1 {
  //     font-size: 25px;

  //     color: $lightColor;

  //     padding: 10px 0;

  //     span {
  //       font-family: $mainFont;
  //       font-style: normal;
  //       font-weight: bold;
  //       font-size: 60px;

  //       color: $redColor;
  //     }
  //   }
  // }
}

@include mediaSm {
  .shop-heading-image {
    h1 {
      font-size: 20px;

      color: $lightColor;

      padding: 20px 0;

      span {
        font-size: 60px;

        color: $redColor;
      }
    }
  }
}

@include mediaXSm {
  .shop-heading-image {
    h1 {
      font-size: 20px;

      color: $lightColor;

      padding: 40px 0;

      span {
        font-size: 40px;

        color: $redColor;
      }
    }
  }
}

@include mediaXXSm {
  .shop-heading-image {
    h1 {
      font-size: 18px;

      color: $lightColor;

      padding: 50px 0;

      span {
        font-size: 30px;

        color: $redColor;
      }
    }
  }
}
</style>

