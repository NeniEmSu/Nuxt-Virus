<template>
  <div>
    <div class="shop-heading-image">
      <nav class="container mt-2 mb-n5" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">Головна</nuxt-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">контакти</li>
        </ol>
      </nav>
      <div class="container text-center">
        <h1 class="my-auto">
          <span class="my-auto">-50%</span> на Антидощ до кінця місяця
        </h1>
      </div>
    </div>
    <div id="app">
      <div class="container">
        <div class="row">
          <div class="filter-sidebar desktop-only col-xl-2 text-center p-0">
            <div class="col-0">
              <button class="accordion" @click.prevent="active1 = !active1">
                Засоби догляду
                <span class="down-Arrow" v-show="!active1">&#9660;</span>
                <span class="up-Arrow" v-show="active1">&#9650;</span>
              </button>
              <div class="panel" v-show="active1">
                <a href="#" class="btn text-uppercase filter-btn all" data-filter="Все">-Все</a>
                <a href="#" class="btn text-uppercase filter-btn Фібри" data-filter="Фібри">-Фібри</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Шампунь">-Шампунь</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Віск">-Віск</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Пахнючки">-Пахнючки</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="чорніннярезини">
                  -Засіб
                  для
                  чорніння резини
                </a>
              </div>

              <button class="accordion" @click.prevent="active2 = !active2">
                Захисні покриття
                <span class="down-Arrow" v-show="!active2">&#9660;</span>
                <span class="up-Arrow" v-show="active2">&#9650;</span>
              </button>
              <div class="panel" v-show="active2">
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Кераміка">-Кераміка</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Рідкескло">
                  -Рідке
                  скло
                </a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="тканини">
                  -Кераміка
                  для
                  тканини
                </a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="шкіри">
                  -Кераміка для
                  шкіри
                </a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="диски">
                  -Кераміка
                  диски
                </a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="резина">
                  -Кераміка
                  резина
                </a>
                <a
                  href="#"
                  class="btn text-uppercase filter-btn ВіскSoft99"
                  data-filter="ВіскSoft99"
                >
                  -Віск
                  Soft
                  99
                </a>
              </div>

              <button class="accordion" @click.prevent="active3 = !active3">
                Хімія
                <span class="down-Arrow" v-show="!active3">&#9660;</span>
                <span class="up-Arrow" v-show="active3">&#9650;</span>
              </button>
              <div class="panel" v-show="active3">
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Хімія">-Хімія</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Хімія">-Хімія</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Хімія">-Хімія</a>
              </div>

              <button class="accordion" @click.prevent="active4 = !active4">
                Подарункові набори
                <span class="down-Arrow" v-show="!active4">&#9660;</span>
                <span class="up-Arrow" v-show="active4">&#9650;</span>
              </button>
              <div class="panel" v-show="active4">
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Подарунковінабори">
                  -Подарункові
                  набори
                </a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Подарунковінабори">
                  -Подарункові
                  набори
                </a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Подарунковінабори">
                  -Подарункові
                  набори
                </a>
              </div>
            </div>
          </div>

          <div class="filter-sidebar-mobile col-xl-2 text-center mb-5 mobile-only" style>
            <form method="post" name="filter">
              <div class="row">
                <div class="form-group col-8 text-left m-auto">
                  <label class="sr-only" for="filter">від дорогих до дешевих</label>
                  <select
                    aria-label="filter"
                    id="filter"
                    aria-describedby="filter"
                    class="form-control"
                    v-model="filter"
                    name="filter"
                  >
                    <option value="null">від дорогих до дешевих</option>
                    <option value="Все">Все</option>
                    <option value="Фібри">Фібри</option>
                    <option value="Шампунь">Шампунь</option>
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
                    <option value="ВіскSoft99">
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
                    <img src="~assets/img/icons8-slider-filled-90.png" alt="filter icon">
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div class="sales-cards col-xl-9 text-center mx-auto p-0">
            <div class="row">
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
            </div>
          </div>

          <div class="cart-icon col-xl-1 desktop-only text-center">
            <div class="position-fixed col-0">
              <modalComponent :cart="cart"/>
            </div>
          </div>
        </div>
      </div>
    </div>

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
import productCards from "@/components/shop/productCards";
export default {
  components: {
    productCards
  },
  data() {
    return {
      cart: 0,
      filter: null,
      active1: false,
      active2: false,
      active3: false,
      active4: false
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

