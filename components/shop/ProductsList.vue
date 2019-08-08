<template>
  <div class="container mt-2 pb-3">
    <img
      v-show="loading"
      src="~/assets/img/spinner.svg"
      alt="Loading spinner"
    />

    <div
      class="row"
      v-show="!loading"
    >
      <single-product
        v-for="product in products"
        :key="product.id"
        class="mx-auto mb-4"
        :product="product"
      ></single-product>

    </div>
  </div>
</template>

<script>
import SingleProduct from "@/components/shop/SingleProduct.vue"
export default {
  data () {
    return {
      loading: false
    };
  },
  components: {
    SingleProduct
  },
  computed: {
    products () {
      return this.$store.state.products;
    }
  },
  created () {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
  }
}
</script>
