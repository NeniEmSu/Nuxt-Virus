<template>
  <div id="blog">
    <div class="container text-center heading p-0 pt-4">
      <h1>Блог</h1>
    </div>
    <hr class="top-separator">

    <div class="jumbotron displays">
      <div class="container mx-auto contact">
        <div class="card display block-one p-5">
          <div class="row m-auto display-inner">
            <div class="col-md-9 m-auto">
              <h2>Як самостійно доглядати за салоном автомобіля?</h2>
            </div>
            <div class="col-lg-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЧИТАТИ</a>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-two p-5">
          <div class="row m-auto display-inner">
            <div class="col-lg-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЧИТАТИ</a>
            </div>
            <div class="col-md-9 m-auto text-right">
              <h2>Скільки разів можна полірувати автомобіль?</h2>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-three p-5">
          <div class="row m-auto">
            <div class="col-md-9 m-auto display-inner">
              <h2>Чому не варто полірувати автомобіль в домашніх умовах?</h2>
            </div>
            <div class="col-lg-3 mx-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЧИТАТИ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
export default {
  components: {
    ContactForm,
    progressSection
  },

  head() {
    return {
      title: "Детейлінг центр Virus Тернопіль.",
      titleTemplate: "блог - %s!",
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
