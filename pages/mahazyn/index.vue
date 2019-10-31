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

    <div
      class="filter-sidebar-mobile col-xl-2 text-center mb-3 mobile-only"
      style
    >
      <form
        method="post"
        name="filter"
      >
        <div class="row px-0 py-2 container">
          <div class="form-group col-9 text-left my-auto">
            <button
              class="accordion ml-2 ml-sm-3"
              style="outline: none; border: none; background: transparent;"
              @click.prevent="active4 = !active4"
            >
              від дорогих до дешевих
              <span
                v-show="!active4"
                class="down-Arrow ml-0 ml-sm-2"
              >&#9660;</span>
              <span
                v-show="active4"
                class="up-Arrow ml-0 ml-sm-2"
              >&#9650;</span>
            </button>
            <div
              v-show="active4"
              class="panel pl-2"
              style="background-color: white; position: absolute; z-index: 3; width: 80%; box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35); border-bottom-right-radius: 20px;"
            >
              <h3>Категорії</h3>
              <div
                v-for="category in categories"
                :key="category.value"
              >
                <label
                  class="holder"
                  :for="category.value"
                >{{ category.text }} <sup
                  v-if="category.power"
                  class="text-small"
                > <small>{{ category.power }}</small> </sup>
                  <input
                    :id="category.value"
                    v-model="category.checked"
                    type="checkbox"
                    :name="category.value"
                    :class="`'filter-btn' ${category.value}`"
                    :data-filter="category.value"
                    @change="getfilteredData"
                  >
                  <span class="checkmark" />
                </label>
              </div>

              <h3>Бренд</h3>
              <div
                v-for="brand in brands"
                :key="brand.value"
              >
                <label
                  class="holder"
                  :for="brand.value"
                >{{ brand.text }} <sup
                  v-if="brand.power"
                  class="text-small"
                > <small>{{ brand.power }}</small> </sup>
                  <input
                    :id="brand.value"
                    v-model="brand.checked"
                    type="checkbox"
                    :name="brand.value"
                    :class="`'filter-btn' ${brand.value}`"
                    :data-filter="brand.value"
                    @change="getfilteredData"
                  >
                  <span class="checkmark" />
                </label>
              </div>
            </div>
          </div>
          <div
            class="col-3 px-0 text-right my-auto"
            @click.prevent="active4 = !active4"
          >
            <p class="m-auto d-none d-sm-inline">
              Фільтр
            </p> <img
              src="~assets/img/icons8-slider-filled-90.png"
              alt="filter icon"
            >
          </div>
        </div>
      </form>
    </div>

    <div id="app">
      <div class="container">
        <!-- the search bar form -->
        <form
          class="my-3 mx-auto text-center"
          @submit="getfilteredData"
        >
          <div class="form-row text-center mx-auto">
            <label
              for="search"
              class="col-sm-10"
            >
              <input
                id="search"
                v-model="search"
                type="text"
                class="form-control mx-auto"
                placeholder="Пошук за назвою продукту ..."
                @keyup="getfilteredData"
              >
            </label>

            <div class="col-sm-2">
              <button
                type="submit"
                class="btn search-btn"
                @click.stop.prevent
              >
                Пошук
              </button>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="filter-sidebar desktop-only col-xl-2 text-center p-0">
            <div class="col-0">
              <h6 class="d-inline">
                Фільтр
              </h6> <img
                src="~assets/img/icons8-slider-filled-90.png"
                alt="filter icon"
              >
              <button
                class="accordion"
                @click.prevent="active3 = !active3"
              >
                Категорії
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
                <div
                  v-for="(category,index) in categories"
                  :key="index"
                >
                  <label
                    class="holder"
                    :for="category.value"
                  >{{ category.text }} <sup
                    v-if="category.power"
                    class="text-small"
                  > <small>{{ category.power }}</small> </sup>
                    <input
                      :id="category.value"
                      v-model="category.checked"
                      type="checkbox"
                      :name="category.value"
                      :class="`'filter-btn' ${category.value}`"
                      :data-filter="category.value"
                      @change="getfilteredData"
                    >
                    <span class="checkmark" />
                  </label>
                </div>
              </div>

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
                <div
                  v-for="(brand,index) in brands"
                  :key="index"
                >
                  <label
                    class="holder"
                    :for="brand.value"
                  >{{ brand.text }} <sup
                    v-if="brand.power"
                    class="text-small"
                  > <small>{{ brand.power }}</small> </sup>
                    <input
                      :id="brand.value"
                      v-model="brand.checked"
                      type="checkbox"
                      :name="brand.value"
                      :class="`'filter-btn' ${brand.value}`"
                      :data-filter="brand.value"
                      @change="getfilteredData"
                    >
                    <span class="checkmark" />
                  </label>
                </div>
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
                <div
                  v-for="(type) in types"
                  :key="type.id"
                >
                  <label
                    class="holder text-capitalize"
                    :for="type.value"
                  >{{ type.text }} <sup
                    v-if="type.power"
                    class="text-small"
                  > <small>{{ type.power }}</small> </sup>
                    <input
                      :id="type.value"
                      v-model="type.checked"
                      type="checkbox"
                      :name="type.value"
                      :class="`'filter-btn' ${type.value}`"
                      :data-filter="type.value"
                      @change="getfilteredData"
                    >
                    <span class="checkmark" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="container sales-cards col-xl-9 text-center p-0">
            <div class="container mt-2 pb-3">
              <img
                v-show="loading"
                src="~/assets/img/spinner.svg"
                alt="Loading spinner"
              >

              <div v-if="filteredData == 0">
                <p>Вибачте, продукти не відповідають вашим встановленим параметрам</p>
              </div>

              <div
                id="store-items"
                class="row"
              >
                <card
                  v-for="product in pageOfItems"
                  :key="product._id"
                  class="mb-5 mx-auto"
                  :name="`${product.name}`"
                  :summary="product.Overview"
                  :price="product.Price"
                  :discount-price="product.discountPrice"
                  :image="
                    `${imageApiUrl}&src=${product.Image.path}&w=190&h=190&f[brighten]=0&o=true&bcolor=%23ffffff`
                  "
                  :link="'/mahazyn/' + product.name_slug"
                  :filter-data="product.Filter"
                  :stock="product.Stock"
                  :sales="product.Sales"
                  :brand="product.brand"
                  :type="product.type"
                />
              </div>

              <jw-pagination
                :page-size="9"
                :max-pages="10"
                :initial-page="1"
                :items="filteredData"
                :styles="customStyles"
                :labels="customLabels"
                @changePage="onChangePage"
              />
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

const customStyles = {
  ul: {
    border: 'none'
  },
  li: {
    display: 'inline-block',
    border: 'none'
  },
  a: {
    color: 'white',
    backgroundColor: '#D41F26',
    outline: 'none',
    borderRadius: '20px'
  }
}

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
}
export default {
  components: {

  },
  // meta: {
  //   animation: 'fade-in-right'
  // },
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
      customStyles,
      customLabels,
      pageOfItems: [],
      filter: null,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      mobileModalShow: false,
      imageApiUrl: 'https://admin.virus.te.ua/api/cockpit/image?token=9fc49d5af4dda3c961d71b489540a4&rspc=1&rspc=1',
      currentProductsDisplayed: Math.floor((Math.random() * 6) + 1),
      loading: this.$store.state.loading,
      filteredData: [],
      search: '',
      selectedCategory: '',
      categories: [
        {
          checked: false,
          value: 'Зовнішня мийка',
          id: 1,
          text: 'Зовнішня мийка'
        },
        {
          checked: false,
          value: 'Екстер’єр',
          id: 2,
          text: 'Екстер’єр'
        },
        {
          checked: false,
          value: 'Інтер’єр',
          id: 3,
          text: 'Інтер’єр'
        },
        {
          checked: false,
          value: 'Полірування',
          id: 4,
          text: 'Полірування'
        },
        {
          checked: false,
          value: 'Захист',
          id: 5,
          text: 'Захист'
        },
        {
          checked: false,
          value: 'Аксесуари',
          id: 6,
          text: 'Аксесуари'
        }
      ],
      brands: [
        {
          checked: false,
          value: 'KRYTEX',
          text: 'KRYTEX',
          power: 'TM'
        },
        {
          checked: false,
          value: 'CHEMICAL GUYS',
          text: 'CHEMICAL GUYS'
        },
        {
          checked: false,
          value: 'GREEN WAVE',
          text: 'GREEN WAVE'
        },
        {
          checked: false,
          value: 'Kosh Chemie',
          text: 'Kosh Chemie',
          power: '🌚'
        },
        {
          checked: false,
          value: 'SOFT 99',
          text: 'SOFT 99'
        }
      ],

      types: [
        {
          id: 'tupe1',
          checked: false,
          value: 'Ароматизатор',
          text: 'Ароматизатор'
        },
        {
          id: 'tupe2',
          checked: false,
          value: 'устранітель запахів',
          text: 'устранітель запахів'
        },
        {
          id: 'tupe3',
          checked: false,
          value: 'антидощ',
          text: 'антидощ'
        },
        {
          id: 'tupe4',
          checked: false,
          value: 'антизапрівач',
          text: 'антизапрівач'
        },
        {
          id: 'tupe5',
          checked: false,
          value: 'Для загальної хімчистки',
          text: 'Для загальної хімчистки'
        },
        {
          id: 'tupe6',
          checked: false,
          value: 'очищувач стекол',
          text: 'очищувач стекол'
        }, {
          id: 'tupe7',
          checked: false,
          value: 'Абразивна',
          text: 'Абразивна'
        }, {
          id: 'tupe8',
          checked: false,
          value: 'Антіголограммная',
          text: 'Антіголограммная'
        }, {
          id: 'tupe9',
          checked: false,
          value: 'Аплікатори',
          text: 'Аплікатори'
        }, {
          id: 'tupe10',
          checked: false,
          value: 'ємності',
          text: 'ємності'
        }, {
          id: 'tupe11',
          checked: false,
          value: 'універсальний',
          text: 'універсальний'
        }, {
          id: 'tupe12',
          checked: false,
          value: 'Для миття коліс',
          text: 'Для миття коліс'
        }
      ]
    }
  },

  computed: {
    ...mapState(['cart', 'products']),
    ...mapGetters(['cartSize', 'cartTotalAmount']),
    toast () {
      return this.$store.getters.toast
    },
    selectedFilters () {
      const filters = []
      const checkedFiters = this.brands.filter(obj => obj.checked)
      checkedFiters.forEach((element) => {
        filters.push(element.value)
      })
      return filters
    },

    selectedTypeFilters () {
      const typeFilters = []
      const checkedFiters = this.types.filter(obj => obj.checked)
      checkedFiters.forEach((element) => {
        typeFilters.push(element.value)
      })
      return typeFilters
    },

    selectedCategoryFilters () {
      const categoryFilters = []
      const checkedFiters = this.categories.filter(obj => obj.checked)
      checkedFiters.forEach((element) => {
        categoryFilters.push(element.value)
      })
      return categoryFilters
    }
  },

  mounted () {
    this.getfilteredData()
  },

  methods: {
    // setCatergory (id, index) {
    //   this.selectedCategory = this.categories[index].value
    // },

    onChangePage (pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
    },

    hideToast () {
      this.$store.commit('hideToast')
    },
    updateView (updatedView) {
      this.currentProductsDisplayed = updatedView
    },
    getfilteredData () {
      this.filteredData = this.products
      const filteredDataByselectedCategory = []
      let filteredDataByCategoryfilters = []
      let filteredDataByfilters = []
      let filteredDataByTypefilters = []
      let filteredDataBySearch = []

      // if category is selected
      if (this.selectedCategoryFilters.length > 0) {
        filteredDataByCategoryfilters = this.filteredData.filter(obj => this.selectedCategoryFilters.every(val => obj.category.includes(val)))
        this.filteredData = filteredDataByCategoryfilters
      }

      // if filters were selected
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters = this.filteredData.filter(obj => this.selectedFilters.every(val => obj.brand.includes(val)))
        this.filteredData = filteredDataByfilters
      }

      // if types were selected
      if (this.selectedTypeFilters.length > 0) {
        filteredDataByTypefilters = this.filteredData.filter(obj => this.selectedTypeFilters.every(val => obj.type.includes(val)))
        this.filteredData = filteredDataByTypefilters
      }

      // filter according to name
      if (this.search !== '') {
        filteredDataBySearch = this.filteredData.filter(obj => obj.name.toUpperCase().match(this.search.toUpperCase()))
        this.filteredData = filteredDataBySearch
      }
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

input#search {
  height: 48px;
  border: 2px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 50px;
  font-family: $mainFont;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: $headingsFontColor;
  outline: none;

  &:focus {
    border: 2px solid $redColor;
    // box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
    box-shadow: none;
  }
}

.search-btn {
  padding: 12px 45px;
  background: $redColor;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: normal;
  text-align: center;
  color: $lightColor;
  border: 0;
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;

  &:hover {
    color: $redColor;
    background: $lightColor;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
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

  input#search {
    height: 40px;
    border: 0;
    box-sizing: border-box;
    border-radius: 50px;
    background-color: #e9ecef;
  }

  .search-btn {
    padding: 6px 22.5px;

    font-size: 16px;
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
