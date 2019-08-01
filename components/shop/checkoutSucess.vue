<template>
  <div>
    <b-button
      v-b-modal.modal-xl-checkout
      variant="link"
      @click="checkoutModalShow = !checkoutModalShow"
    >
      <!-- <img
        src="~/assets/img/icons8-shopping-bag-filled-100.png"
        alt="Cart Icon"
      /> -->
      <img
        src="~/assets/img/cart.png"
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
        margin-top: 50px;
        width: 100vw;
        min-width: 100vw;
        margin: 50px auto 0;
      }

      .modal-content {
        border-radius: 0px;
      }
    }
    </style>
    <b-modal
      v-model="checkoutModalShow"
      id="modal-xl-checkout"
      size="xl"
      title="Корзина"
      class="modal-content text-center"
      hide-footer
    >
      <div class="modal-body basket text-center">

        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          /></svg>

        <h4>Дякуємо за замовлення</h4>
        <p>Очікуйте на дзвінок нашого менеджера</p>

        <b-button
          to="/mahazyn"
          @click="$bvModal.hide('modal-xl-checkout')"
          class="btn go-back"
        >Назад в магазин</b-button>

      </div>
    </b-modal>
  </div>
</template>

 <script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  data () {
    return {
      checkoutModalShow: false,

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
  margin: 10% auto;
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
    margin: 10% auto;
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
    margin: 10% auto;
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
