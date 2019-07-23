<template>
  <div class="desktop-only">
    <!-- <b-button variant="link" class="snipcart-checkout">
      <img src="~/assets/img/icons8-shopping-bag-filled-100.png" alt="Cart Icon">
      <div id="show-total" class="text-center mt-n3 ml-n3 snipcart-summary">
        <span id="item-count" class="text-center snipcart-total-items">0</span>
      </div>
    </b-button>-->
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
          class="text-centersnipcart-total-items"
        >{{cartSize}}</span>
      </div>
    </b-button>
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
          v-for="(product, index) in cart"
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
              >{{ product.quantity* product.price | currency }}</p>
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
              {{cartTotalAmount | currency}}
              грн
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
                for="newMail"
              ><input
                  id="newMail"
                  type="text"
                  name="newMail"
                  class="form-control mx-auto"
                  aria-describedby="newMail"
                  placeholder="Нова пошта*"
                /></label>

            </div>
            <div class="form-group col-lg-6">
              <label
                class="m-0 p-0"
                for="Новапоштаdidistrict"
              ><input
                  id="Новапоштаdidistrict"
                  type="number"
                  aria-describedby="Новапоштаdidistrict"
                  name="Новапоштаdidistrict"
                  class="form-control mx-auto"
                  placeholder="Нова пошта district*"
                /></label>

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
  // props: {
  //   cart: {
  //     type: Number,
  //     required: true
  //   }
  // },
  data () {
    return {
      mobileModalShow: false,
      cartName: null,
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
  //   methods: {
  //     addProductToCart (product) {
  //       this.$store.dispatch("addProductToCart", product);
  //     },
  //     removeFromCart (product) {
  //       this.$store.commit('removeFromCart', product);
  //     }
  //   },
  //   computed: {
  //     products () {
  //       return this.$store.getters.cartProducts;
  //     },

  //     total () {
  //       return this.$store.getters.cartTotal;
  //     }
  //   }
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
    font-size: 10px;
    line-height: 12px;

    color: $lightColor;
    text-align: center;
  }
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

@include mediaMenu {
  .desktop-only {
    display: inline;
  }
}
</style>
