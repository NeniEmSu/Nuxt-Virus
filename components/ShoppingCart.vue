<template>
  <div>
    <button
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#shoppingCart"
    >Cart ({{ numInCart }})</button>

    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in cart" :key="item.invId">
                  <td>{{ item.name }}</td>
                  <td>{{ item.price | dollars }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>{{ total | dollars }}</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
            <button class="btn btn-primary">Check out</button>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
  </div>
</template>

<script>
import { dollars } from "~/plugins/filters.js";

export default {
  name: "shoppingCart",
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    cart() {
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.forSale.find(forSaleItem => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    }
  },
  filters: {
    dollars
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
    }
  }
};
</script>
