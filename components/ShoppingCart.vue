<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-if="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li class="row" v-for="product in products" :key="product.id">
        <img id="item-img" src="~assets/img/MaskGroup(3).jpg" alt="Soft 99" class="col-1 m-auto" />
        <h4 class="col-4 m-auto text-left">{{ product.title }}</h4>

        <button type="button" class="btn btn-light col-1 m-auto">
          <font-awesome-icon :icon="['fas', 'minus']" class="ml-2 fa-lg" />
        </button>
        <p class="col-1 m-auto">{{ product.quantity }}</p>
        <button @click="addProductToCart(product)" class="btn btn-light col-1 m-auto">
          <font-awesome-icon :icon="['fas', 'plus']" class="ml-2 fa-lg" />
        </button>

        <p class="col-2 m-auto text-left">{{ product.price | currency }}</p>
        <button class="btn btn-light col-1 m-auto">
          <font-awesome-icon :icon="['fas', 'times']" class="ml-2 fa-lg" />
        </button>
      </li>
    </ul>
    <div class="row my-3">
      <div class="col-auto mr-auto"></div>
      <div class="col-auto">
        Total:
        {{ total | currency }}
      </div>
    </div>

    <div class="row my-3">
      <div class="col-auto mr-auto">
        <button type="button" class="btn btn-outline-primary">Return to Store</button>
      </div>
      <div class="col-auto">
        <button
          type="button"
          class="btn btn-primary"
          :disabled="!products.length"
          @click="$store.dispatch('checkout')"
        >Checkout</button>
      </div>
    </div>
    <p
      class="text-success"
      v-show="$store.state.checkoutStatus"
    >Checkout {{ $store.state.checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    }
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },

    total() {
      return this.$store.getters.cartTotal;
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

img {
  width: 60px;
  height: 60px;
  object-fit: scale-down;
}
</style>
