<template id="breadcrumb">
  <span>
    <router-link v-if="!route.meta.bcDynamic" :to="{name: route.name}">{{route.meta.bcLinkText}}</router-link>
    <nuxt-link v-if="route.meta.bcDynamic" :to="{name: route.name, params: {id: $route.params.id}}">
      <template v-if="value">{{formattedValue}}</template>
      <template v-if="!value">{{loadingText}}</template>
    </nuxt-link>
  </span>
</template>


<script>
export default {
  props: ["route"],
  beforeCreate() {
    this.$options.computed.value = function() {
      if (this.route.meta.bcGetter) {
        return this.$store.getters[this.route.meta.bcGetter];
      } else {
        return null;
      }
    };
  },
  computed: {
    formattedValue() {
      return this.route.meta.bcLinkText(this.value);
    },
    loadingText() {
      const loadingText = this.route.meta.bcLoadingText;
      return loadingText ? loadingText : "Loading...";
    }
  }
};
</script>


<style scoped>
a {
  text-decoration: none;
  margin-left: 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 3px;
}
</style>
