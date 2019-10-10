<template>
  <div class="container mt-2 pb-3">
    <img
      v-show="loading"
      src="~/assets/img/spinner.svg"
      alt="Loading spinner"
    >
    <vue-page-transition name="fade-in">
      <div
        v-show="!loading"
        class="row"
      >
        <single-product
          v-for="product in products"
          :key="product.id"
          class="mx-auto mb-4"
          :product="product"
        />
      </div>
    </vue-page-transition>
  </div>
</template>

<script>
import SingleProduct from '@/components/shop/SingleProduct.vue'
export default {
  components: {
    SingleProduct
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchProducts').then(() => (this.loading = false))
  }
}
</script>
