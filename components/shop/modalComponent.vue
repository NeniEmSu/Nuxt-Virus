<template>
  <div>
    <div class="cart-icon">
      <b-button v-b-modal.modal-xl variant="link" @click="modalShow = !modalShow">
        <img id="cart" src="~/assets/img/cart.png" alt="Cart icon">
      </b-button>
      <div id="show-total" class="text-center justify-center">
        <span id="item-count" class="text-center m-auto p-0">{{ cart }}</span>
      </div>
    </div>
    <b-modal
      v-model="modalShow"
      id="modal-xl"
      size="xl"
      title="Корзина"
      class="modal-content text-center"
      hide-footer
    >
      <div class="modal-body basket text-center">
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
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      modalShow: false
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

#modal-xl___BV_modal_content_ {
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border: 0;
  border-radius: 25px;
}

.modal-content {
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border: 0;
  border-radius: 25px;

  .basket {
    // margin-top: 140px;

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
        content: "\0203A";
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
        content: "\02039";
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
</style>
