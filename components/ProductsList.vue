<template>
  <div>
    <img v-show="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="Loading gif" />
    <ul class="row" v-show="!loading">
      <li
        class="card mx-auto"
        style="width: 18rem; border-radius: 20px;"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card-body">
          <h4 class="card-title">Title: {{ product.title }}</h4>
          <p class="card-text">Price : {{ product.price | currency }}</p>
          <p class="card-text info">Inventory: {{product.inventory}}</p>

          <br />
          <button
            type="button"
            class="btn btn-outline-success"
            :disabled="!product.inventory"
            @click="addProductToCart(product)"
          >Add to cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    }
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    }
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>

