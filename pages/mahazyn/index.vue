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
        <ProductsCategories
          :current-products-displayed="currentProductsDisplayed"
          @changedView="updateView($event)"
        />
        <vue-page-transition name="fade">
          <ExteriorSink v-if="currentProductsDisplayed === 1" />
          <Exterior v-if="currentProductsDisplayed === 2" />
          <Interior v-if="currentProductsDisplayed === 3" />
          <Polishing v-if="currentProductsDisplayed === 4" />
          <Protection v-if="currentProductsDisplayed === 5" />
          <Acessories v-if="currentProductsDisplayed === 6" />
        </vue-page-transition>
        <div class="row">
          <div class="filter-sidebar desktop-only col-xl-2 text-center p-0">
            <div class="col-0">
              <button
                class="accordion"
                @click.prevent="active1 = !active1"
              >
                Бренд
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
                <label
                  class="holder"
                  for="all"
                >Auto Finesse
                  <input
                    id="all"
                    type="checkbox"
                    name="all"
                    class="filter-btn all"
                    data-filter="all"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Фібри"
                >Auto Finesse
                  <input
                    id="Фібри"
                    type="checkbox"
                    name="Фібри"
                    class="filter-btn Фібри"
                    data-filter="Фібри"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Шампунь"
                >Auto Finesse
                  <input
                    id="Шампунь"
                    type="checkbox"
                    name="Шампунь"
                    class="filter-btn Шампунь"
                    data-filter="Шампунь"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Віск"
                >Auto Finesse
                  <input
                    id="Віск"
                    type="checkbox"
                    name="Віск"
                    class="filter-btn Віск"
                    data-filter="Віск"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Пахнючки"
                >Auto Finesse
                  <input
                    id="Пахнючки"
                    type="checkbox"
                    name="Пахнючки"
                    class="filter-btn Пахнючки"
                    data-filter="Пахнючки"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="чорніннярезини"
                >Auto Finesse
                  <input
                    id="чорніннярезини"
                    type="checkbox"
                    name="чорніннярезини"
                    class="filter-btn чорніннярезини"
                    data-filter="чорніннярезини"
                  >
                  <span class="checkmark" />
                </label>
              </div>

              <button
                class="accordion"
                @click.prevent="active2 = !active2"
              >
                Тип
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
                <label
                  class="holder"
                  for="Кераміка"
                >Auto Finesse
                  <input
                    id="Кераміка"
                    type="checkbox"
                    name="Кераміка"
                    class="filter-btn Кераміка"
                    data-filter="Кераміка"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Рідкескло"
                >Auto Finesse
                  <input
                    id="Рідкескло"
                    type="checkbox"
                    name="Рідкескло"
                    class="filter-btn Рідкескло"
                    data-filter="Рідкескло"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="тканини"
                >Auto Finesse
                  <input
                    id="тканини"
                    type="checkbox"
                    name="тканини"
                    class="filter-btn тканини"
                    data-filter="тканини"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="шкіри"
                >Auto Finesse
                  <input
                    id="шкіри"
                    type="checkbox"
                    name="шкіри"
                    class="filter-btn шкіри"
                    data-filter="шкіри"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="диски"
                >Auto Finesse
                  <input
                    id="диски"
                    type="checkbox"
                    name="диски"
                    class="filter-btn диски"
                    data-filter="диски"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="резина"
                >Auto Finesse
                  <input
                    id="резина"
                    type="checkbox"
                    name="резина"
                    class="filter-btn резина"
                    data-filter="резина"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="ВіскSoft99"
                >Auto Finesse
                  <input
                    id="ВіскSoft99"
                    type="checkbox"
                    name="ВіскSoft99"
                    class="filter-btn ВіскSoft99"
                    data-filter="ВіскSoft99"
                  >
                  <span class="checkmark" />
                </label>
              </div>

              <!--<button
                class="accordion"
                @click.prevent="active3 = !active3"
              >
                Тип
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
                <label
                  class="holder"
                  for="all"
                >Auto Finesse
                  <input
                    id="all"
                    type="checkbox"
                    name="all"
                    class="filter-btn all"
                    data-filter="all"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Фібри"
                >Auto Finesse
                  <input
                    id="Фібри"
                    type="checkbox"
                    name="Фібри"
                    class="filter-btn Фібри"
                    data-filter="Фібри"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Шампунь"
                >Auto Finesse
                  <input
                    id="Шампунь"
                    type="checkbox"
                    name="Шампунь"
                    class="filter-btn Шампунь"
                    data-filter="Шампунь"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Віск"
                >Auto Finesse
                  <input
                    id="Віск"
                    type="checkbox"
                    name="Віск"
                    class="filter-btn Віск"
                    data-filter="Віск"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Пахнючки"
                >Auto Finesse
                  <input
                    id="Пахнючки"
                    type="checkbox"
                    name="Пахнючки"
                    class="filter-btn Пахнючки"
                    data-filter="Пахнючки"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="чорніннярезини"
                >Auto Finesse
                  <input
                    id="чорніннярезини"
                    type="checkbox"
                    name="чорніннярезини"
                    class="filter-btn чорніннярезини"
                    data-filter="чорніннярезини"
                  >
                  <span class="checkmark" />
                </label>
              </div>

              <button
                class="accordion"
                @click.prevent="active4 = !active4"
              >
                Тип
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
                <label
                  class="holder"
                  for="all"
                >Auto Finesse
                  <input
                    id="all"
                    type="checkbox"
                    name="all"
                    class="filter-btn all"
                    data-filter="all"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Фібри"
                >Auto Finesse
                  <input
                    id="Фібри"
                    type="checkbox"
                    name="Фібри"
                    class="filter-btn Фібри"
                    data-filter="Фібри"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Шампунь"
                >Auto Finesse
                  <input
                    id="Шампунь"
                    type="checkbox"
                    name="Шампунь"
                    class="filter-btn Шампунь"
                    data-filter="Шампунь"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Віск"
                >Auto Finesse
                  <input
                    id="Віск"
                    type="checkbox"
                    name="Віск"
                    class="filter-btn Віск"
                    data-filter="Віск"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="Пахнючки"
                >Auto Finesse
                  <input
                    id="Пахнючки"
                    type="checkbox"
                    name="Пахнючки"
                    class="filter-btn Пахнючки"
                    data-filter="Пахнючки"
                  >
                  <span class="checkmark" />
                </label>

                <label
                  class="holder"
                  for="чорніннярезини"
                >Auto Finesse
                  <input
                    id="чорніннярезини"
                    type="checkbox"
                    name="чорніннярезини"
                    class="filter-btn чорніннярезини"
                    data-filter="чорніннярезини"
                  >
                  <span class="checkmark" />
                </label>
              </div> -->
            </div>
          </div>

          <div class="container sales-cards col-xl-9 text-center p-0">
            <!-- <ProductsList /> -->
            <div class="container mt-2 pb-3">
              <img
                v-show="loading"
                src="~/assets/img/spinner.svg"
                alt="Loading spinner"
              >

              <div
                v-if="currentProductsDisplayed === 2"
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in exProducts"
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

              <div
                v-if="currentProductsDisplayed === 1"
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in exSiProducts"
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

              <div
                v-if="currentProductsDisplayed === 3"
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in inProducts"
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

              <div
                v-if="currentProductsDisplayed === 4"
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in polProducts"
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
              <div
                v-if="currentProductsDisplayed === 5"
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in proProducts"
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

              <div
                v-if="currentProductsDisplayed === 6"
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in acProducts"
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
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
// import ProductsList from '@/components/shop/ProductsList.vue'
import ProductsCategories from '@/components/shop/ProductsCategories.vue'
import ExteriorSink from '@/components/shop/subcategoris/ExteriorSink'
import Exterior from '@/components/shop/subcategoris/Exterior'
import Interior from '@/components/shop/subcategoris/Interior'
import Polishing from '@/components/shop/subcategoris/Polishing'
import Protection from '@/components/shop/subcategoris/Protection'
import Acessories from '@/components/shop/subcategoris/Acessories'
export default {
  components: {
    // ProductsList,
    ProductsCategories,
    ExteriorSink,
    Exterior,
    Interior,
    Polishing,
    Protection,
    Acessories
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
      imageApiUrl: 'https://admin.virus.te.ua/api/cockpit/image?token=9fc49d5af4dda3c961d71b489540a4&rspc=1',
      currentProductsDisplayed: Math.floor((Math.random() * 6) + 1),
      loading: this.$store.state.loading
    }
  },

  computed: {
    ...mapState(['cart', 'products']),
    ...mapGetters(['cartSize', 'cartTotalAmount']),
    toast () {
      return this.$store.getters.toast
    },
    exProducts () {
      return this.products.filter(el => el.category === 'Екстер’єр')
    },
    inProducts () {
      return this.products.filter(el => el.category === 'Інтер’єр')
    },
    exSiProducts () {
      return this.products.filter(el => el.category === 'Зовнішня мийка')
    },
    acProducts () {
      return this.products.filter(el => el.category === 'Аксесуари')
    },
    polProducts () {
      return this.products.filter(el => el.category === 'Полірування')
    },
    proProducts () {
      return this.products.filter(el => el.category === 'Захист')
    }
  },

  // async asyncData ({ app, error }) {
  //   const { data } = await app.$axios.get(
  //     'https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&rspc=1',
  //     JSON.stringify({
  //       filter: { Published: true },
  //       sort: { _created: 1 },
  //       populate: 1
  //     }),
  //     {
  //       headers: { 'Content-Type': 'application/json' }
  //     }
  //   )

  //   if (!data.entries[0]) {
  //     return error({ message: '404 Page not found', statusCode: 404 })
  //   }

  //   return { exProducts: data.entries.filter(el => el.category === data.entries[0].category) }
  // },

  methods: {
    hideToast () {
      this.$store.commit('hideToast')
    },
    updateView (updatedView) {
      this.currentProductsDisplayed = updatedView
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
    border: none;
    box-sizing: border-box;
    // border-radius: 50px;
    // margin: 10px auto;
    background-color: $lightColor;

    width: 100%;
    height: 38px;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    text-align: left;

    color: $darkColor;

    outline: none;
    transition: 400ms;
  }

  .open,
  .accordion:hover {
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
    font-size: 16px;
    line-height: 19px;

    text-align: left;

    color: #000000;

    overflow: hidden;
    outline: none;

    .holder {
      display: block;
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    .holder input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      display: flex;
      align-items: center;

      color: #000000;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      border: 2px solid #c4c4c4;
      box-sizing: border-box;
      border-radius: 4px;
    }

    /* On mouse-over, add a grey background color */
    .holder:hover input ~ .checkmark {
      background-color: transparent;
    }

    /* When the checkbox is checked, add a blue background */
    .holder input:checked ~ .checkmark {
      border: 2px solid $redColor;
      box-sizing: border-box;
      border-radius: 4px;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .holder input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .holder .checkmark:after {
      left: 2px;
      top: 1.5px;
      width: 12px;
      height: 12px;
      background: $redColor;
      border-radius: 2px;
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
