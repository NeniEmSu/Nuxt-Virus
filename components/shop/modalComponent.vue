<template>
  <div>
    <div class="cart-icon col-md-1 text-center mr-n3">
      <b-button variant="link" @click="modalShow = !modalShow">
        <img id="cart" src="~/assets/img/cart.png" alt="Cart icon">
      </b-button>
      <div id="show-total" class="text-center justify-center">
        <span id="item-count" class="text-center m-auto p-0">{{ cart }}</span>
      </div>
    </div>
    <b-modal
      v-model="modalShow"
      class="modal-dialog modal-dialog-centered modal-xl"
    >Hello From Modal!</b-modal>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      modalShow: false
    };
  }
};
</script>


<style lang="scss" scoped>
.cart-icon {
  #show-total {
    width: 35px;
    height: 35px;

    background-color: $redColor;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;

    margin: 17px auto 0;

    justify-content: center;
    margin: auto;

    span {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 35px;

      color: $lightColor;
      text-align: center;
      margin: auto;
    }
  }
}
</style>
