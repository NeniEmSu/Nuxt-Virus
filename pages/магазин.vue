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
              <button class="accordion">Засоби догляду</button>
              <div class="panel">
                <a href="#" class="btn text-uppercase filter-btn all" data-filter="all">-All</a>
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

              <button class="accordion">Захисні покриття</button>
              <div class="panel">
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

              <button class="accordion">Хімія</button>
              <div class="panel">
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Хімія">-Хімія</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Хімія">-Хімія</a>
                <a href="#" class="btn text-uppercase filter-btn" data-filter="Хімія">-Хімія</a>
              </div>

              <button class="accordion">Подарункові набори</button>
              <div class="panel">
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

          <div class="filter-sidebar-mobile col-xl-2 text-center mb-5 " >

            <form  method="post" name="filter" style="height: 40px; width: 100%; mx-0 px-0 background: #FFFFFF;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);">
              <div class="row">
              <div class="form-group col-6 text-left m-auto">
                <label class="sr-only" for="filter">від дорогих до дешевих</label>
                <select
                  aria-label="filter"
                  id="filter"
                  aria-describedby="filter"
                  class="form-control "
                  v-model="filter"
                  name="filter"
                >
                  <option value="від дорогих до дешевих">від дорогих до дешевих</option>
                  <option value="All">All</option>
                  <option value="Фібри">Фібри</option>
                  <option value="Шампунь">Шампунь</option>
                  <option value="Віск">Віск</option>
                  <option value="Пахнючки">Пахнючки</option>
                  <option value="чорніннярезини">Засіб
                  для
                  чорніння резини</option>
                  <option value="резина">Хімчистка передніх сидінь</option>
                  <option value="Кераміка">Кераміка</option>
                  <option value="тканини">Кераміка
                  для
                  тканини</option>
                  <option value="Рідкескло">Рідке скло</option>
                  <option value="шкіри">Кераміка для
                  шкіри</option>
                  <option value="диски">Кераміка
                  диски</option>
                  <option value="резина">Кераміка
                  резина</option>
                  <option value="ВіскSoft99">Віск
                  Soft
                  99</option>
                  <option value="Хімія">Хімія</option>
                  <option value="Подарунковінабори">Подарункові
                  набори</option>

                </select>

              </div>
              <div class="col-6 text-right m-auto"> <p>Фільтр <img  width="20px" height="20px" src="~assets/img/icons8-slider-filled-90.png" alt="filter icon"></p></div>
              </div>
        </form>
          </div>

          <div class="sales-cards col-lg-9 text-center mx-auto p-0">
            <div class="row">
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
              <card class="mb-5 mx-auto"/>
            </div>
          </div>

          <div class="cart-icon col-lg-1 text-center ">
            <div class="position-fixed col-0">
              <modalComponent :cart="cart"/>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div
          id="myModal"
          class="modal fade"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body basket text-center">
                <h3 id="корзина" class="offset">Корзина</h3>
                <div class="basket-content col-12">
                  <div class="cart-item row col-12 m-auto p-0">
                    <img
                      id="item-img"
                      src="~assets/img/86.jpg"
                      alt="Koch Chemie Fresh UP"
                      class="col-sm-1 m-auto"
                    >
                    <h5 id="cart-item-title" class="col-sm-6 m-auto text-sm-left">
                      Koch
                      Chemie Fresh
                      UP
                    </h5>
                    <div class="toggle-quantity col-sm-2 m-auto">
                      <a href="#">&minus;</a>
                      <p>1</p>
                      <a href="#">&plus;</a>
                    </div>
                    <div class="cost col-sm-2 m-auto">
                      <p id="cart-item-price" class="cart-item-price card-text">2900 грн</p>
                    </div>
                    <div class="remove-from-chart col-sm-1 m-auto text-center">
                      <a href="#">
                        <p class="close text-center">&plus;</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="basket-content col-12">
                  <div class="cart-item row col-12 m-auto p-0">
                    <img
                      id="item-img"
                      src="~assets/img/MaskGroup(3).jpg"
                      alt="Soft 99"
                      class="col-sm-1 m-auto"
                    >
                    <h5 id="cart-item-title" class="col-sm-6 m-auto text-sm-left">Soft 99</h5>
                    <div class="toggle-quantity col-sm-2 m-auto">
                      <a href="#">&minus;</a>
                      <p>1</p>
                      <a href="#">&plus;</a>
                    </div>
                    <div class="cost col-sm-2 m-auto">
                      <p id="cart-item-price" class="cart-item-price card-text">2900 грн</p>
                    </div>
                    <div class="remove-from-chart col-sm-1 m-auto">
                      <a href="#">
                        <p class="close">&plus;</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sum-total col-12 text-right">
                  <span id="cart-total">
                    Всього:
                    <span class="cart-items-value">
                      5800
                      грн
                    </span>
                  </span>
                </div>

                <form action="#" method="POST" class="checkOut">
                  <div class="row">
                    <div class="form-group col-lg-6">
                      <label hidden for="name">Ім’я</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        class="form-control"
                        aria-describedby="name"
                        placeholder="Ім’я*"
                      >
                    </div>
                    <div class="form-group col-lg-6">
                      <label hidden for="phone">Телефон</label>
                      <input
                        id="phone"
                        type="number"
                        aria-describedby="phone"
                        name="phone"
                        class="form-control"
                        placeholder="Телефон*"
                      >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mx-auto mt-2 text-md-left">
                      <a id="clear-cart" href="#" class="btn go-back">Повернутися</a>
                    </div>
                    <div class="col-md-6 mx-auto mt-2 text-md-right">
                      <button type="submit" class="btn order">Замовити</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("open");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
    </script>
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
      cart: 0
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");

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

  // .accordion:after {
  //   color: $headingsFontColor;
  //   float: right;
  //   font-size: 14px;
  //   font-family: "Font Awesome 5 Free";
  //   font-weight: 900;
  //   content: "\f0d7";
  //   margin-right: 10px;
  // }

  // .accordion.open:after {
  //   color: $headingsFontColor;
  //   float: right;
  //   font-size: 14px;
  //   font-family: "Font Awesome 5 Free";
  //   font-weight: 900;
  //   content: "\f0d8";
  //   margin-right: 10px;
  // }

  .panel {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    width: 90%;

    color: #8b8b8b;

    display: none;
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

.modal-content {
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border-radius: 25px;

  .basket {
    margin-top: 140px;

    h3 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: normal;

      color: $darkColor;
    }

    .basket-content {
      display: flex;

      .cart-item {
        border-top: 1px solid #e5e5e5;
      }

      img {
        width: 60px;
        height: 60px;
        object-fit: scale-down;
      }

      .cost p {
        font-family: $mainFont;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;

        color: $darkColor;

        margin: auto;
      }

      .toggle-quantity {
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 50px;

        display: flex;
        justify-content: space-between;

        p,
        a {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 26px;

          color: $darkColor;

          margin: auto 2px;
          text-decoration: none;
        }
      }

      .remove-from-chart {
        a p.close {
          font-weight: bold;
          font-size: 28px;
          line-height: 28px;
          transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
          -webkit-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
          -moz-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
          -ms-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
          -o-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);

          margin: auto;
          color: $darkColor;
          text-decoration: none;
        }
      }
    }

    .sum-total span {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: normal;

      color: $darkColor;

      .cart-items-value {
        font-family: $mainFont;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: normal;

        color: #000000;
      }
    }

    .checkOut {
      margin-bottom: 60px;

      input {
        height: 48px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 2px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 50px;
      }

      .btn {
        padding: 10px 33px;
        background: $redColor;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
        border-radius: 50px;
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
        color: $lightColor;
        border: 0;
        text-decoration: none;
        transition: ease-in-out 300ms;
        -webkit-transition: ease-in-out 300ms;
        -moz-transition: ease-in-out 300ms;
        -ms-transition: ease-in-out 300ms;
        -o-transition: ease-in-out 300ms;

        &.go-back {
          background: #e5e5e5;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
          border-radius: 50px;

          font-family: $secondaryFont;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 20px;
          text-align: center;

          color: $darkColor;
        }

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

      .order.btn:after {
        color: $lightColor;
        float: right;
        font-size: 20px;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f054";
        margin-left: 20px;
        margin-right: -20px;
        transition: ease-in-out 300ms;
        -webkit-transition: ease-in-out 300ms;
        -moz-transition: ease-in-out 300ms;
        -ms-transition: ease-in-out 300ms;
        -o-transition: ease-in-out 300ms;
      }

      .order.btn:hover:after {
        color: $redColor;
        background: transparent;
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
      }

      .go-back.btn:before {
        color: $darkColor;
        float: left;
        font-size: 20px;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f053";
        margin-left: -20px;
        margin-right: 20px;
        transition: ease-in-out 300ms;
        -webkit-transition: ease-in-out 300ms;
        -moz-transition: ease-in-out 300ms;
        -ms-transition: ease-in-out 300ms;
        -o-transition: ease-in-out 300ms;
      }
    }
  }
}
@include mediaMenu {
  .desktop-only{
    display: none;
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

