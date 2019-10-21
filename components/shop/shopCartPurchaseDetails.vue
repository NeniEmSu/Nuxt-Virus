<template>
  <div class=" basket text-center">
    <div
      v-for="product in cart"
      :key="product._id"
      class="basket-content col-12 p-0"
    >
      <div class="cart-item row col-12 mx-auto mb-2 px-0 py-2">
        <img
          id="item-img"
          :src="
            `${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`
          "
          alt="Koch Chemie Fresh UP"
          class="col-2 p-0 m-auto"
        >
        <div class="col-6 p-0">
          <div class="col-12 p-0 m-auto">
            <div class="row m-auto">
              <h5
                id="cart-item-title"
                class="col-sm-8 m-auto text-center py-2 crop"
              >
                {{ product.name }}
              </h5>
              <div class="toggle-quantity col-sm-4 m-auto ">
                <button
                  :disabled="product.quantity === 1"
                  @click="removeFromCart(product._id)"
                >
                  &minus;
                </button>
                <p>{{ product.quantity }}</p>
                <button
                  :disabled="product.quantity === product.stock"
                  @click="addToCart(product._id)"
                >
                  &plus;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 p-0 my-auto">
          <div class="col-12 m-auto p-0">
            <div class="row m-auto">
              <div class="cost col-sm-7 m-auto ">
                <p
                  id="cart-item-price"
                  class="cart-item-price text-right py-2 card-text "
                >
                  {{ product.quantity* product.Price | currency }}
                </p>
              </div>
              <div class="remove-from-chart col-sm-5 m-auto text-right">
                <span
                  class="close text-right"
                  @click="deleteFromCart(product._id)"
                >&times;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!cartSize"
      class="col-12"
    >
      <h6>КОШИК НЕ ПОВТОРЕНО. ВИБРАТИ НЕКОТОВІ ПРОДУКТИ, ЩО КУПИТИ ДО ПЕРЕВАГУ.</h6>
    </div>
    <div class="sum-total col-12 mt-3 text-right">
      <span id="cart-total ">
        Всього:
        <span class="cart-items-value">
          {{ cartTotalAmount | currency({symbol: 'грн', thousandsSeparator: ',', fractionCount: '0', fractionSeparator: '.', symbolPosition: 'back', symbolSpacing: true}) }}

        </span>
      </span>
    </div>

    <form
      class="checkOut"
      @input="submit"
    >
      <div class="row">
        <div class="form-group col-lg-6">
          <label
            class="m-0 p-0"
            for="name"
          ><input
            id="name"
            v-model="$v.form.name.$model"
            type="text"
            name="name"
            class="form-control mx-auto"
            :class="[!$v.form.name.$error && $v.form.name.$model ? 'is-valid' : '', $v.form.name.$error ? 'is-invalid' : '']"
            aria-describedby="name"
            placeholder="Ім’я*"
            :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
          ></label>
          <div
            v-if="$v.form.name.$error"
            class="text-danger text-right"
          >
            Ім'я обов'язково і має містити не менше 3 символів.
          </div>
        </div>
        <div class="form-group col-lg-6">
          <label
            class="m-0 p-0"
            for="cartPhone"
          ><input
            id="cartPhone"
            v-model="$v.form.models.cartphoneNumber.$model"
            v-mask="'+38(###) ###-####'"
            aria-describedby="cartPhone"
            aria-label="cartPhone"
            name="cartPhone"
            class="form-control mx-auto "
            :class="[!$v.form.models.cartphoneNumber.$error && $v.form.models.cartphoneNumber.$model ? 'is-valid' : '', $v.form.models.cartphoneNumber.$error ? 'is-invalid' : '']"
            placeholder="Телефон*"
            :state="$v.form.models.cartphoneNumber.$dirty ? !$v.form.models.cartphoneNumber.$error : null"
          ></label>
          <div
            v-if="$v.form.models.cartphoneNumber.$error"
            class="text-danger text-right"
          >
            Телефон обов'язково
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-6">
          <label
            class="m-0 p-0"
            for="Місто"
          ><select
            id="Місто"
            v-model="$v.form.city.$model"
            aria-label="Місто"
            aria-describedby="Місто"
            class="form-control mx-auto"
            name="Місто"
          >
            <option
              value="null"
              disabled
            >Місто*</option>
            <optgroup
              v-for="city in cities"
              :key="city.id"
              :value="city.name"
              :label="city.name"
            >
              <option
                v-for="area in city.areas"
                :key="area.id"
                :label="area.name"
                :value="area.name"
              >{{ area.name }}</option>

            </optgroup>

          </select>

          </label>
          <div
            v-if="$v.form.city.$error"
            class="text-danger text-right"
          >
            Місто обов'язково
          </div>
        </div>
        <div class="form-group col-6">
          <label
            class="m-0 p-0"
            for="Відділеня-пошти"
          ><input
            id="Відділеня-пошти"
            v-model="$v.form.postBranch.$model"
            v-mask="'Відділення №#####'"
            aria-label="Відділеня-пошти"
            type="text"
            aria-describedby="Відділеня-пошти"
            class="form-control mx-auto"
            :class="[!$v.form.postBranch.$error && $v.form.postBranch.$model ? 'is-valid' : '', $v.form.postBranch.$error ? 'is-invalid' : '']"
            :state="$v.form.postBranch.$dirty ? !$v.form.postBranch.$error : null"
            name="Відділеня-пошти"
            placeholder="Відділення пошти*"
          ></label>
          <div
            v-if="$v.form.postBranch.$error"
            class="text-danger text-right"
          >
            Відділення пошти обов'язково
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import { mapGetters, mapState } from 'vuex'
import cities from '~/plugins/api/ua.json'
export default {
  data () {
    return {
      imageApiUrl: 'https://admin.virus.te.ua/api/cockpit/image?token=9fc49d5af4dda3c961d71b489540a4',
      cities,
      mobileModalShow: false,
      form: {
        name: null,
        postBranch: null,
        city: null,
        models: {
          cartphoneNumber: null
        }
      }

    }
  },
  validations: {
    form: {
      postBranch: {
        required,
        minLength: minLength(13)
      },
      city: {
        required
      },
      name: {
        required,
        minLength: minLength(3)
      },
      models: {
        cartphoneNumber: {
          required,
          minLength: minLength(17)
        }
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
    ])
  },
  methods: {
    submit () {
      this.$emit('update', {
        data: {
          name: this.form.name,
          postBranch: this.form.postBranch,
          city: this.form.city,
          cartphoneNumber: this.form.models.cartphoneNumber
        },
        valid: !this.$v.$invalid
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
  .basket {
    h5 {
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
        font-size: 20px;
        line-height: 93.75%;

        color: $darkColor;

        margin: auto;
      }

      .toggle-quantity {
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 50px;
        width: 50%;

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

  .modal-content {
    .basket {
      h5 {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;

        color: $darkColor;
      }

      .basket-content {
        display: flex;

        .cart-item {
          background: #ffffff;
          box-shadow: 0px 4px 13.3333px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          margin: 0 auto 10px auto;
        }

        .cost p {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 93.75%;

          align-items: center;
          letter-spacing: -0.05em;

          color: #8b8b8b;
        }

        .toggle-quantity {
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          border-radius: 50px;
          width: 100px;

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
        font-weight: normal;
        font-size: 18px;
        line-height: 93.75%;

        align-items: center;
        letter-spacing: -0.05em;

        color: #8b8b8b;

        .cart-items-value {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 93.75%;
          align-items: center;
          letter-spacing: -0.05em;

          color: #d41f26;
        }
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
    }
  }
}
</style>
