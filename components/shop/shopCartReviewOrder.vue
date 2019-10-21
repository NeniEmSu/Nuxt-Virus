<template>
  <div class=" basket text-left">
    <h3>Підтвердження замовлення</h3>
    <p class="text-left">
      Перегляньте та підтвердьте своє замовлення та деталі нижче та не забудьте виправити будь-які помилки.
    </p>
    <div class="my-3 details text-capitalize">
      <h3>Деталі поводження</h3>
      <p class="text-left">
        <span>Ім’я*</span> : {{ cartFormData.name }}
      </p>
      <p class="text-left">
        <span>Телефон*</span> : {{ cartFormData.cartphoneNumber }}
      </p>
      <p class="text-left">
        <span>Місто*</span> : {{ cartFormData.city }}
      </p>
      <p class="text-left">
        <span>Відділення пошти*</span> : {{ cartFormData.postBranch }}
      </p>
    </div>
    <div class="my-3">
      <h3>деталі замовлення</h3>
      <div
        v-for="product in cart"
        :key="product._id"
        class="basket-content col-12 p-0"
      >
        <div class="cart-item row col-12 mx-auto mb-2 px-0 py-2">
          <div class="col-8 p-0">
            <div class="col-12 p-0 m-auto">
              <div class="row m-auto">
                <p
                  id="cart-item-title text-left"
                  class="col-8 m-auto  py-2 pl-0 crop"
                >
                  {{ product.name }}
                </p>

                <div class="toggle-quantity col-4 m-auto ">
                  <p>{{ product.quantity }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 p-0">
            <div class="col-12 m-auto p-0">
              <div class="row m-auto">
                <div class="cost col-sm-7 m-auto ">
                  <p
                    id="cart-item-price"
                    class="cart-item-price text-right py-2 card-text"
                  >
                    {{ product.quantity* product.Price | currency }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sum-total col-12 mt-3 text-right">
        <span id="cart-total ">
          Всього:
          <span class="cart-items-value">
            {{ cartTotalAmount | currency({symbol: 'грн', thousandsSeparator: ',', fractionCount: '0', fractionSeparator: '.', symbolPosition: 'back', symbolSpacing: true}) }}

          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'
export default {
  props: {
    cartFormData: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      checkoutModalShow: false

    }
  },
  validations: {},
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'cartSize',
      'cartTotalAmount'
    ])
  },
  methods: {
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    },
    removeFromCart (id) {
      this.$store.dispatch('removeFromCart', id)
    },
    deleteFromCart (id) {
      this.$store.dispatch('deleteFromCart', id)
    }
  }

}
</script>

<style lang="scss" scoped>
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 5;
  stroke-miterlimit: 10;
  stroke: #d41f26;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: block;
  stroke-width: 5;
  stroke: #d41f26;
  stroke-miterlimit: 10;
  margin: 0 auto 20px auto;
  box-shadow: inset 0px 0px 0px transparent;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px transparent;
  }
}

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

.details {
  span {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    // font-size: 20px;
    // line-height: normal;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: normal;

    color: $darkColor;
  }
}

.sum-total span {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: normal;

  color: #8b8b8b;

  .cart-items-value {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: normal;

    color: $redColor;
  }
}

.modal-content {
  h4 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;

    text-align: center;
    text-transform: uppercase;

    color: $darkColor;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    text-align: center;

    color: $darkColor;
  }

  .btn.go-back {
    padding: 16px 26px;
    background: $redColor;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
    border-radius: 50px;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: $lightColor;
    border: 0;
    text-decoration: none;
    margin: auto;
  }
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 90% !important;
    margin: 1.75rem auto;
  }
}

@include mediaMenu {
  .checkmark {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: block;
    stroke-width: 5;
    stroke: #d41f26;
    stroke-miterlimit: 10;
    margin: 0 auto 20px auto;
    box-shadow: inset 0px 0px 0px transparent;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }
}

@include mediaMd {
  .checkmark {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    stroke-width: 5;
    stroke: #d41f26;
    stroke-miterlimit: 10;
    margin: 0 auto 20px auto;
    box-shadow: inset 0px 0px 0px transparent;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }

  .modal-content {
    h4 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;

      text-align: center;
      text-transform: uppercase;

      color: $darkColor;
    }

    p {
      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;

      text-align: center;

      color: $darkColor;
    }

    .btn.go-back {
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
      margin: auto;
    }
  }
}
</style>
