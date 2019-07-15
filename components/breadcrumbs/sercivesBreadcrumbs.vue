<template>
  <nav class="container mt-n3" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link to="/">Головна</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <nuxt-link to="/Posluhy-i-ciny">Послуги і ціни</nuxt-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">{{ heading }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
