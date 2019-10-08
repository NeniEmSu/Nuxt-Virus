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
      >
      <div
        id="show-total"
        class="text-center mt-n3 ml-n3"
      >
        <span
          id="item-count"
          style="text-decoration: none;"
          class="text-center"
        >{{ cartSize }}</span>
      </div>
    </b-button>
    <style>
      #modal-xl-mobile {
      padding-left: 0px !important;
      }

      .modal-body {
      padding: 22px 85px 85px;
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
      id="modal-xl-mobile"
      v-model="mobileModalShow"
      size="xl"
      title="Корзина"
      class="modal-content text-center"
      hide-footer
      style="padding-left: 0 !important;"
    >
      <div
        v-if="cartInProgress"
        v-show="asyncState !== 'pending'"
      >
        <keep-alive>
          <component
            :is="currentStep"
            ref="currentStep"
            :cart-form-data="form"
            @update="processstep"
          />
        </keep-alive>

        <div
          v-if="errors.length"
          class="text-left text-danger"
        >
          <b>Виправте такі помилку(и):</b>
          <ol>
            <li
              v-for="error in errors"
              :key="error"
              class="ml-3"
            >
              {{ error }}
            </li>
          </ol>
        </div>
        <div
          v-if="success && !errors.length"
          class="text-left text-success"
        >
          <b>Ваше повідомлення надіслано успішно</b>
        </div>

        <div class="row">
          <div class="col-6 text-left my-2">
            <b-button
              id="clear-cart"
              to="/mahazyn"
              class="btn cart-navigarion go-back"
              @click="previousButtonAction"
            >
              {{ !isLastStep ? 'Повернутися' : 'Редагувати деталі' }}
            </b-button>
          </div>
          <div class="col-6 text-right my-2">
            <button
              :disabled="!cartSize || !canGoNext"
              type="submit"
              class="btn cart-navigarion order"
              @click="nextButtonAction"
            >
              {{ isLastStep ? 'підтвердити Замовити' : 'Замовити' }}
            </button>
          </div>
          <p class="text-center w-md-50 mt-3 mx-auto">
            Оформіть замовлення, і наш менеджер
            зв’яжеться з вами найближчим часом
          </p>
        </div>

        <div class="progress-bar">
          <div :style="`width: ${progress}%;`" />
        </div>
      </div>

      <div v-else>
        <shopCartSuccessPage />
      </div>

      <div
        v-if="asyncState === 'pending'"
        class="loading-wrapper"
      >
        <div class="loader mx-auto">
          <img
            src="~/assets/img/spinner.svg"
            alt="spinner"
          >
          <p class="mx-auto">
            Зачекайте Будь ласка... Ваше замовлення обробляється!
          </p>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
// import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapGetters, mapState } from 'vuex'
import cities from '~/plugins/api/ua.json'
import shopCartPurchaseDetails from '~/components/shop/shopCartPurchaseDetails'
import shopCartReviewOrder from '~/components/shop/shopCartReviewOrder'
import shopCartSuccessPage from '~/components/shop/shopCartSuccessPage'
export default {
  name: 'ShopCart',

  components: {
    shopCartPurchaseDetails,
    shopCartReviewOrder,
    shopCartSuccessPage
  },
  data () {
    return {
      errors: [],
      success: false,
      currentStepNumber: 1,
      canGoNext: false,
      asyncState: null,
      steps: [
        'shopCartPurchaseDetails',
        'shopCartReviewOrder'
      ],
      mobileModalShow: false,
      cities,
      form: {
        name: null,
        postBranch: null,
        city: null,
        cartphoneNumber: null
      }
    }
  },

  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'cartSize',
      'cartTotalAmount'
    ]),
    progress () {
      return this.currentStepNumber / this.length * 100
    },
    length () {
      return this.steps.length
    },
    currentStep () {
      return this.steps[this.currentStepNumber - 1]
    },
    isLastStep () {
      return this.currentStepNumber === this.length
    },
    cartInProgress () {
      return this.currentStepNumber <= this.length
    }
  },

  methods: {
    processstep (step) {
      Object.assign(this.form, step.data)
      this.canGoNext = step.valid
    },

    // submitOrder () {
    //   this.asyncState = 'pending'
    //   this.$store.dispatch('checkout')
    //     .then(() => {
    //       console.log('form submitted', this.form)
    //       this.asyncState = 'success'
    //       this.currentStepNumber++
    //     })
    // },

    checkForm (e) {
      this.errors = []
      this.success = false

      if (!this.form.name) {
        this.errors.push('Ім’я вимагається')
      }
      if (!this.this.form.postBranch) {
        this.errors.push('Post Branch вимагається')
      }
      if (!this.form.city) {
        this.errors.push('City вимагається')
      }
      if (!this.form.cartphoneNumber) {
        this.errors.push('Телефон вимагається')
      }
      if (!this.errors.length) {
        this.submitForm()
      }
      e.preventDefault()
    },

    submitOrder () {
      this.asyncState = 'pending'

      axios
        .post(
          'https://admin.virus.te.ua/api/forms/submit/cart?token=742af3741fa4ff80bd0db4c22496ba',
          JSON.stringify({
            form: {
              cart: JSON.stringify(this.cart),
              cartTotalAmount: this.cartTotalAmount,
              itemsInCart: this.cartSize,
              name: this.form.name,
              postBranch: this.form.postBranch,
              city: this.form.city,
              cartphoneNumber: this.form.cartphoneNumber
            }
          }),
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(({ data }) => {
          this.asyncState = 'success'

          if (data.error) {
            this.errors.push(data.error)
          } else if (
            data.name &&
            data.postBranch &&
            data.city &&
            data.cartphoneNumber
          ) {
            this.form.name = this.form.postBranch = this.form.city = this.form.cartphoneNumber = null
            this.$store.commit('emptyCart')
            this.success = true
            this.asyncState = 'success'
            this.currentStepNumber++
            const self = this
            setTimeout(function () {
              self.currentStepNumber = 1
            }, 5000)
          }
        })
        .catch((error) => {
          this.asyncState = 'success'
          this.errors.push(`Сталася помилка. Повторіть спробу пізніше ${error}`)
        })
    },

    nextButtonAction () {
      if (this.isLastStep) {
        this.submitOrder()
      } else {
        this.goNext()
      }
    },

    previousButtonAction () {
      if (!this.isLastStep) {
        this.$bvModal.hide('modal-xl-mobile')
      } else {
        this.goBack()
      }
    },
    goBack () {
      this.currentStepNumber--
      this.canGoNext = true
    },
    goNext () {
      this.currentStepNumber++
      // this.canGoNext = false
      this.$nextTick(() => {
        this.canGoNext = !this.$refs.currentStep.$v.$invalid
      })
    },
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
.loading-wrapper {
  margin-top: 4rem;
}

.loading-wrapper,
.loading-wrapper .loader {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.loading-wrapper .loader {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: 2px solid $redColor;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  color: #5c6162;
}

.loading-wrapper .loader p {
  margin-right: 1rem;
  margin-bottom: 0px;
}

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
