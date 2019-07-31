<template>
  <div class="desktop-only">
    <b-button
      v-b-modal.modal-xl-mobile
      variant="link"
      @click="mobileModalShow = !mobileModalShow"
    >
      <img
        src="~/assets/img/icons8-shopping-bag-filled-100.png"
        alt="Cart Icon"
      />
      <div
        id="show-total"
        class="text-center mt-n3 ml-n3"
      >
        <span
          style="text-decoration: none;"
          id="item-count"
          class="text-center"
        >{{cartSize}}</span>
      </div>
    </b-button>
    <style>
    .modal-content {
      border-radius: 20px;
    }

    .modal-title {
      margin-bottom: 0;
      line-height: 1.5;
      margin: auto 0 auto auto;
    }

    @media (max-width: 991px) {
      .modal-dialog {
        max-width: 95%;
      }
    }

    @media (max-width: 577px) {
      .modal-dialog {
        max-width: 100%;
      }
    }
    </style>
    <b-modal
      v-model="mobileModalShow"
      id="modal-xl-mobile"
      size="xl"
      title="Корзина"
      class="modal-content text-center"
      hide-footer
      style="border-radius: 20px; border: none;"
    >
      <div
        class="modal-body basket text-center"
        style="border-radius: 20px; border: none;"
      >
        <div
          v-for="product in cart"
          :key="product.id"
          class="basket-content col-12"
          style="border-radius: 20px; border: none;"
        >
          <div class="cart-item row col-12 m-auto p-0">
            <img
              id="item-img"
              :src="require(`~/assets/img/${product.image + '.jpg'}`)"
              alt="Koch Chemie Fresh UP"
              class="col-sm-1 p-0 m-auto"
            />
            <h5
              id="cart-item-title"
              class="col-sm-5 m-auto text-sm-left"
            >{{product.name}}</h5>
            <div class="toggle-quantity col-sm-2 m-auto">
              <button
                @click="removeFromCart(product.id)"
                :disabled="product.quantity === 1"
              >
                &minus;
              </button>
              <p>{{product.quantity}}</p>
              <button
                @click="addToCart(product.id)"
                :disabled="product.quantity === product.stock"
              >
                &plus;
              </button>

            </div>
            <div class="cost col-sm-3 m-auto">
              <p
                id="cart-item-price"
                class="cart-item-price card-text"
              >{{product.quantity* product.price | currency}}</p>
            </div>
            <div class="remove-from-chart col-sm-1 m-auto text-center">
              <span
                @click="deleteFromCart(product.id)"
                class="close text-center"
              >&times;
              </span>
            </div>
          </div>
        </div>

        <div
          class="col-12"
          v-if="!cartSize"
        >

          <h6>КОШИК НЕ ПОВТОРЕНО. ВИБРАТИ НЕКОТОВІ ПРОДУКТИ, ЩО КУПИТИ ДО ПЕРЕВАГУ.</h6>
        </div>
        <div class="sum-total col-12 text-right">
          <span id="cart-total">
            Всього:
            <span class="cart-items-value">
              {{cartTotalAmount | currency({symbol: 'грн', thousandsSeparator: ',', fractionCount: '0', fractionSeparator: '.',  symbolPosition: 'back',  symbolSpacing: true})}}

            </span>
          </span>
        </div>

        <form
          action="#"
          method="POST"
          class="checkOut"
        >
          <div class="row">
            <div class="form-group col-lg-6">
              <label
                class="m-0 p-0"
                for="name"
              ><input
                  id="name"
                  type="text"
                  name="name"
                  class="form-control mx-auto"
                  aria-describedby="name"
                  placeholder="Ім’я*"
                  v-model="cartName"
                /></label>

            </div>
            <div class="form-group col-lg-6">
              <label
                class="m-0 p-0"
                for="cartPhone"
              ><input
                  aria-describedby="cartPhone"
                  aria-label="cartPhone"
                  name="cartPhone"
                  type="text"
                  class="form-control mx-auto"
                  id="cartPhone"
                  placeholder="Телефон*"
                  v-mask="'+38(0##) ###-####'"
                  v-model="models.cartphoneNumber"
                /></label>

            </div>
          </div>
          <div class="row">
            <div class="form-group col-lg-6">
              <label
                class="m-0 p-0"
                for="Місто"
              ><select
                  aria-label="Місто"
                  id="Місто"
                  aria-describedby="Місто"
                  class="form-control mx-auto"
                  v-model="city"
                  name="Місто"
                >
                  <option
                    value="null"
                    disabled
                  >Місто*</option>
                  <option value="0">Місто</option>
                  <option value="1">Місто</option>
                </select>

              </label>

            </div>
            <div class="form-group col-lg-6">
              <label
                class="m-0 p-0"
                for="Відділеня-пошти"
              >
                <select
                  aria-label="Відділеня-пошти"
                  id="Відділеня-пошти"
                  type="text"
                  aria-describedby="Відділеня-пошти"
                  class="form-control mx-auto"
                  v-model="postBranch"
                  name="Відділеня-пошти"
                >
                  <option
                    value="null"
                    disabled
                  >Відділення пошти*</option>
                  <option value="0">Відділення пошти</option>
                  <option value="1">Відділення пошти</option>
                </select>
              </label>

            </div>
          </div>
          <div class="row">
            <div class="col-auto mr-auto my-2">
              <b-button
                id="clear-cart"
                to="/mahazyn"
                @click="$bvModal.hide('modal-xl-mobile')"
                class="btn go-back"
              >
                Повернутися</b-button>
            </div>
            <div class="col-auto my-2">
              <button
                :disabled="!cartSize"
                @click.prevent="$store.dispatch('checkout')"
                type="submit"
                class="btn order"
              >Замовити</button>
            </div>
          </div>
          <p
            class="text-success"
            v-show="$store.state.checkoutStatus"
          >Checkout
            {{ $store.state.checkoutStatus }}.
          </p>
        </form>
      </div>
    </b-modal>
  </div>
</template>

 <script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  data () {
    return {
      mobileModalShow: false,
      cartName: null,
      postBranch: null,
      city: null,
      models: {
        cartphoneNumber: null
      },
    };
  },
  computed: {
    ...mapState([
      "cart"
    ]),
    ...mapGetters([
      "cartSize",
      "cartTotalAmount"
    ])
  },
  methods: {
    addToCart (id) {
      this.$store.dispatch("addToCart", id);
    },
    removeFromCart (id) {
      this.$store.dispatch("removeFromCart", id);
    },
    deleteFromCart (id) {
      this.$store.dispatch("deleteFromCart", id);
    }
  }

};
</script>

<style lang="scss" scoped>
.modal-title {
  text-align: center;
}

.desktop-only {
  display: none;
}
#show-total {
  span {
    padding: 4px 6px;

    background-color: $redColor;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    position: relative;
    z-index: 3;
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 12px;
    text-decoration: none !important;

    color: $lightColor;
    text-align: center;
  }
}

.modal-content {
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border: 0;
  border-radius: 25px;

  .basket {
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

        button {
          border: 0;
          background-color: transparent;
          font-weight: bold;
          font-size: 28px;
          line-height: 28px;
          cursor: pointer;
          margin: auto;
          color: $darkColor;
          text-decoration: none;
        }

        p,
        button {
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
        span {
          font-weight: bold;
          font-size: 28px;
          line-height: 28px;
          cursor: pointer;
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

    label {
      width: 100%;
    }

    .checkOut {
      margin-bottom: 60px;

      input {
        height: 48px;
        margin-top: 10px;
        border: 2px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 50px;
      }
      select {
        -webkit-appearance: none;
        -o-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;

        background-image: url(~assets/img/servicesSelect.png);
        background-position: 95% center;
        background-repeat: no-repeat;

        cursor: pointer;

        height: 48px;
        margin: 10px auto 0 auto;
        border: 2px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 50px;

        &.active,
        &:focus {
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
        }
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

        &.go-back {
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
          background: #e5e5e5;
          padding: 10px 20px;
          font-family: $secondaryFont;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 20px;
          text-align: center;
          border: 0;

          color: $darkColor;
        }
      }

      .order.btn:after {
        color: $lightColor;
        float: right;
        font-size: 20px;

        font-weight: 900;
        content: "\0203A";
        margin-left: 20px;
        margin-right: -20px;
      }

      .go-back.btn:before {
        color: $darkColor;
        float: left;
        font-size: 20px;

        font-weight: normal;
        content: "\02039";
        margin-left: -10px;
        margin-right: 10px;
      }
    }
  }
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 90% !important;
    margin: 1.75rem auto;
  }
}

@include mediaMenu {
  .desktop-only {
    display: inline;
  }
}
</style>
