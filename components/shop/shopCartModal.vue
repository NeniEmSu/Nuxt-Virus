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
    #modal-xl-mobile {
      padding-left: 0px !important;
    }

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

      .modal-body {
        padding: 5px;

      }

      .modal-content {
        border-radius: 0px;
        padding: 0;
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
      style="padding-left: 0 !important;"
    >

      <shopCartPurchaseDetails
        v-if="currentStepNumber === 1"
        @update='processstep '
      />
      <shopCartReviewOrder
        v-if="currentStepNumber === 2"
        :cartFormData="form"
      />
      <shopCartSuccessPage v-if="currentStepNumber === 3" />

      <div class="row">
        <div class="col-6 text-left my-2">
          <b-button
            id="clear-cart"
            to="/mahazyn"
            @click="$bvModal.hide('modal-xl-mobile')"
            class="btn cart-navigarion go-back"
            v-if="currentStepNumber === 1"
          >
            Повернутися</b-button>
          <b-button
            @click="goBack"
            v-if="currentStepNumber == 2"
            class="btn cart-navigarion go-back"
          >
            Редагувати кошик</b-button>
        </div>
        <div class="col-6 text-right my-2">
          <button
            v-if="currentStepNumber === 2 "
            :disabled="!cartSize"
            @click.prevent="ConfirmCheckout"
            type="submit"
            class="btn cart-navigarion order"
          >підтвердити Замовити</button>
          <button
            v-if="currentStepNumber === 1"
            :disabled="!cartSize || !canGoNext"
            @click="goNext"
            type="submit"
            class="btn cart-navigarion order"
          >Замовити</button>

        </div>
        <p
          class="text-center w-md-50 mt-3 mx-auto"
          v-if="currentStepNumber < 3 "
        >Оформіть замовлення, і наш менеджер
          зв’яжеться з вами найближчим часом</p>
      </div>

      <div class="progress-bar">
        <div :style="`width: ${progress}%;`"></div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import cities from '~/plugins/api/ua.json'
import shopCartPurchaseDetails from '~/components/shop/shopCartPurchaseDetails'
import shopCartReviewOrder from '~/components/shop/shopCartReviewOrder'
import shopCartSuccessPage from '~/components/shop/shopCartSuccessPage'
export default {
  name: 'shopCart',

  components: {
    shopCartPurchaseDetails,
    shopCartReviewOrder,
    shopCartSuccessPage
  },
  data () {
    return {
      currentStepNumber: 1,
      canGoNext: false,
      length: 3,
      mobileModalShow: false,
      cities,
      form: {
        name: null,
        postBranch: null,
        city: null,
        cartphoneNumber: null
      }

    };
  },

  computed: {
    ...mapState([
      "cart"
    ]),
    ...mapGetters([
      "cartSize",
      "cartTotalAmount"
    ]),
    progress () {
      return this.currentStepNumber / this.length * 100
    }

  },
  methods: {
    processstep (stepData) {
      Object.assign(this.form, stepData)
      this.canGoNext = true
    },

    ConfirmCheckout () {
      this.$store.dispatch('checkout')
      this.currentStepNumber++
      setInterval(function () { currentStepNumber === 1; }, 3000);
    },

    goBack () {
      this.currentStepNumber--
    },
    goNext () {
      this.currentStepNumber++
      this.canGoNext = false
    },
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
.progress-bar {
  width: 100%;
  border-radius: 9999px;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 12px;
  background: #c6c6c6;
}

.progress-bar > div {
  border-radius: 9999px;
  position: absolute;
  height: 100%;
  background-color: $redColor;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
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

.cart-navigarion {
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

@include mediaMenu {
  .desktop-only {
    display: inline;
  }
}

@include mediaSm {
  .crop {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 200px;
  }

  .cart-navigarion {
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
      padding: 10px 33px;
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
    display: none;
    float: none;
    content: "";
    margin-left: 0px;
    margin-right: 0px;
  }

  .go-back.btn:before {
    display: none;
    float: none;
    content: "";
    margin-left: -0px;
    margin-right: 0px;
  }
}
</style>
