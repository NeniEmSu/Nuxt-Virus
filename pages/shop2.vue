<template>
  <div>
    <toast
      :show="toast.show"
      :text="toast.text"
      @hide-toast="hideToast"
    ></toast>

    <products></products>

    <cart></cart>

  </div>
</template>

<script>

import Products from '@/components/Products.vue'
import Cart from '@/components/Cart.vue'


export default {
  data () {
    return {

    };
  },
  components: {

    Products,
    Cart


  },
  computed: {
    toast () {
      return this.$store.getters.toast;
    }
  },
  methods: {
    hideToast () {
      this.$store.commit("hideToast");
    }
  }
}
</script>

<style scoped>
</style>
