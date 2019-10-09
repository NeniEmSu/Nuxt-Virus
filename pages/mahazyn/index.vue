<template>
  <div>
    <div class="shop-heading-image">
      <nav
        class="container mt-2 mb-n5"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">
              Головна
            </nuxt-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >
            магазин
          </li>
        </ol>
      </nav>
      <div class="container text-center">
        <h1 class="my-auto">
          <span class="my-auto">-50%</span> на Антидощ до кінця місяця
        </h1>
      </div>
    </div>
    <ProductsToast
      :show="toast.show"
      :text="toast.text"
      @hide-toast="hideToast"
    />

    <div id="app">
      <div class="container">
        <ProductsCategories />
        <div class="row">
          <div class="filter-sidebar desktop-only col-xl-2 text-center p-0">
            <div class="col-0">
              <button
                class="accordion"
                @click.prevent="active1 = !active1"
              >
                Засоби догляду
                <span
                  v-show="!active1"
                  class="down-Arrow"
                >&#9660;</span>
                <span
                  v-show="active1"
                  class="up-Arrow"
                >&#9650;</span>
              </button>
              <div
                v-show="active1"
                class="panel"
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
                  -Засіб для чорніння резини
                </a>
              </div>

              <button
                class="accordion"
                @click.prevent="active2 = !active2"
              >
                Захисні покриття
                <span
                  v-show="!active2"
                  class="down-Arrow"
                >&#9660;</span>
                <span
                  v-show="active2"
                  class="up-Arrow"
                >&#9650;</span>
              </button>
              <div
                v-show="active2"
                class="panel"
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
                  -Рідке скло
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="тканини"
                >
                  -Кераміка для тканини
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="шкіри"
                >
                  -Кераміка для шкіри
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="диски"
                >
                  -Кераміка диски
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="резина"
                >
                  -Кераміка резина
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn ВіскSoft99"
                  data-filter="ВіскSoft99"
                >
                  -Віск Soft 99
                </a>
              </div>

              <button
                class="accordion"
                @click.prevent="active3 = !active3"
              >
                Хімія
                <span
                  v-show="!active3"
                  class="down-Arrow"
                >&#9660;</span>
                <span
                  v-show="active3"
                  class="up-Arrow"
                >&#9650;</span>
              </button>
              <div
                v-show="active3"
                class="panel"
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
                  v-show="!active4"
                  class="down-Arrow"
                >&#9660;</span>
                <span
                  v-show="active4"
                  class="up-Arrow"
                >&#9650;</span>
              </button>
              <div
                v-show="active4"
                class="panel"
              >
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Подарунковінабори"
                >
                  -Подарункові набори
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Подарунковінабори"
                >
                  -Подарункові набори
                </a>
                <a
                  tag="button"
                  class="btn text-uppercase filter-btn"
                  data-filter="Подарунковінабори"
                >
                  -Подарункові набори
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
                    id="filter"
                    v-model="filter"
                    aria-label="filter"
                    aria-describedby="filter"
                    class="form-control"
                    name="filter"
                  >
                    <option
                      value="null"
                      class="filter-btn"
                    >
                      від дорогих до дешевих
                    </option>
                    <option
                      value="all"
                      class="filter-btn all"
                      data-filter="all"
                    >
                      Все
                    </option>
                    <option
                      value="Фібри"
                      class="filter-btn Фібри"
                      data-filter="Фібри"
                    >
                      Фібри
                    </option>
                    <option
                      value="Шампунь"
                      class="filter-btn Шампунь"
                      data-filter="Шампунь"
                    >
                      Шампунь
                    </option>
                    <option value="Віск">
                      Віск
                    </option>
                    <option value="Пахнючки">
                      Пахнючки
                    </option>
                    <option value="чорніннярезини">
                      Засіб для чорніння резини
                    </option>
                    <option value="резина">
                      Хімчистка передніх сидінь
                    </option>
                    <option value="Кераміка">
                      Кераміка
                    </option>
                    <option value="тканини">
                      Кераміка для тканини
                    </option>
                    <option value="Рідкескло">
                      Рідке скло
                    </option>
                    <option value="шкіри">
                      Кераміка для шкіри
                    </option>
                    <option value="диски">
                      Кераміка диски
                    </option>
                    <option value="резина">
                      Кераміка резина
                    </option>
                    <option
                      value="ВіскSoft99"
                      class="filter-btn ВіскSoft99"
                      data-filter="ВіскSoft99"
                    >
                      Віск Soft 99
                    </option>
                    <option value="Хімія">
                      Хімія
                    </option>
                    <option value="Подарунковінабори">
                      Подарункові набори
                    </option>
                  </select>
                </div>
                <div class="col-4 text-right m-auto">
                  <p class="m-auto">
                    Фільтр
                    <img
                      src="~assets/img/icons8-slider-filled-90.png"
                      alt="filter icon"
                    >
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div class="container sales-cards col-xl-9 text-center p-0">
            <ProductsList />
            <div class="container mt-2 pb-3">
              <div
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in products"
                  :key="product._id"
                  class="mb-5 mx-auto"
                  :name="product.name"
                  :summary="product.Overview"
                  :price="product.Price"
                  :discount-price="product.discountPrice"
                  :image="
                    `${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`
                  "
                  :link="'/mahazyn/' + product.name_slug"
                  :filter-data="product.Filter"
                  :stock="product.Stock"
                  :sales="product.Sales"
                />
              </div>
            </div>
          </div>

          <div class="cart-icon col-xl-1 desktop-only text-center">
            <div class="position-fixed col-0">
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
                    class="text-center m-auto p-0"
                  >{{
                    cartSize
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      (function() {
      const filterBtn = document.querySelectorAll(".filter-btn")
      filterBtn.forEach(function(btn) {
      btn.addEventListener("click", function(event) {
      event.preventDefault()
      this.classList.add("active");
      const value = event.target.dataset.filter;
      const items = document.querySelectorAll(".store-item")
      items.forEach(function(items) {
      if (value === "all") {
      items.style.display = "block";
      } else {
      if (items.classList.contains(value)) {
      items.style.display = "block"
      } else {
      items.style.display = "none";
      }
      }
      });
      });
      })
      })()
    </script>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ProductsList from '@/components/shop/ProductsList.vue'
import ProductsCategories from '@/components/shop/ProductsCategories.vue'

export default {
  components: {
    ProductsList,
    ProductsCategories
  },
  meta: {
    animation: 'fade-in-right'
  },
  head () {
    return {
      title: 'Детейлінг центр Virus Тернопіль.',
      titleTemplate: 'магазин - %s!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'магазин - Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри.'
        }
      ]
    }
  },
  data () {
    return {
      filter: null,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      mobileModalShow: false,
      imageApiUrl: 'https://admin.virus.te.ua/api/cockpit/image?token=9fc49d5af4dda3c961d71b489540a4&rspc=1'
    }
  },

  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartSize', 'cartTotalAmount']),
    toast () {
      return this.$store.getters.toast
    }
  },

  async asyncData ({ app, error }) {
    const { data } = await app.$axios.get(
      'https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&rspc=1',
      JSON.stringify({
        filter: { Published: true },
        sort: { _created: 1 },
        populate: 1
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    if (!data.entries[0]) {
      return error({ message: '404 Page not found', statusCode: 404 })
    }

    return { products: data.entries }
  },

  methods: {
    hideToast () {
      this.$store.commit('hideToast')
    }
  }
}
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
  // margin-bottom: 40px;
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
