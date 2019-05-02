<template>
  <section class="wrapper">
    <AppHeader/>
    <main></main>
    <AppFooter/>
  </section>
</template>

<script>
import AppHeader from "~/components/appHeader.vue";
import AppFooter from "~/components/appFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  },
  head() {
    return {
      title:
        "Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто",
      titleTemplate: "Virus - %s!",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри."
        }
      ]
    };
  }
};
</script>

<style>
</style>
