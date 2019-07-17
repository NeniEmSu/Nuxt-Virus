<template>
  <div class="container text-center" id="app">
    <h1>Shop</h1>
    <hr />
    <h2>Products</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "@/components/ProductsList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
  components: { ProductList, ShoppingCart }
};
</script>
