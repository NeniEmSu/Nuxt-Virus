<template>
  <div id="promotions-page">
    <div class="container text-center heading p-0 pt-4">
      <h1>Акції</h1>
    </div>
    <hr class="top-separator">

    <div class="jumbotron displays">
      <div class="container mx-auto contact">
        <div class="card display block-one p-5">
          <div class="row m-auto display-inner">
            <div class="col-lg-9 mx-auto">
              <h2>
                Скидка -50% на Антидощ
                при замовленні Полірування автомобіля
              </h2>
              <p class="col-md-12 m-auto p-0">Акція діє з 01.04.19 до 01.05.19</p>
            </div>
            <div class="col-lg-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЗАМОВИТИ</a>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-two p-5">
          <div class="row m-auto display-inner">
            <div class="col-lg-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЗАМОВИТИ</a>
            </div>
            <div class="col-md-9 m-auto text-right">
              <h2>
                Скидка -50% на Антидощ
                при замовленні Полірування автомобіля
              </h2>
              <p class="col-md-12 m-auto p-0">Акція діє з 01.04.19 до 01.05.19</p>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-three p-5">
          <div class="row m-auto display-inner">
            <div class="col-md-9 m-auto">
              <h2>
                Скидка -50% на Антидощ
                при замовленні Полірування автомобіля
              </h2>
              <p class="col-md-12 m-auto p-0">Акція діє з 01.04.19 до 01.05.19</p>
            </div>
            <div class="col-lg-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЗАМОВИТИ</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactForm/>

    <progressSection/>
  </div>
</template>

<script>
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
      titleTemplate: "Акції - %s!",
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
