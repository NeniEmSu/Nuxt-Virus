<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Озонація.png" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading}}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
          </div>
        </div>

        <h2 class="red">{{timeTaken}}</h2>

        <div class="videoContainer mt-4 text-center">
          <video class="mx-auto" controls autoplay="true" muted>
            <source src="~assets/video/vid(10).mp4" type="video/mp4">
          </video>
        </div>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">1000 грн</p>
              <p class="mt-2 mb-0">
                середній
                бізнес
                спорт купе
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">0 грн</p>
              <p class="mt-2 mb-0">
                середній кросовер
                позашляховик
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">0 грн</p>
              <p class="mt-2 mb-0">
                повнорозмірний кросовер
                позашляховик
              </p>
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
  layout: "default",
  components: {
    ContactForm,
    progressSection
  },

  head() {
    return {
      title: "Детейлінг центр Virus Тернопіль.",
      titleTemplate: this.heading + " - %s!",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри."
        }
      ]
    };
  },
  data() {
    return {
      heading: "ОЗОНУВАННЯ",
      firstParagraph:
        "За допомогою озонатора можна не тільки швидко і ефективно вбити бактерії, віруси, грибки та інші шкідливі мікроорганізми, що знаходяться в повітрі і воді, але і усунути неприємні запахи: вогкості, сигаретного диму, після горіння приміщення.",
      secondParagraph:
        "Після впливу озону залишається аромат свіжості і стерильна поверхню.",
      thirdParagraph:
        "Люди, що знаходяться в салоні автомобіля, постійно вдихають продукти життєдіяльності організмів, що живуть в оббивці авто, вентиляції, важкодоступних щілинах. Вплив озонатора протягом 30 хвилин усуне всі шкідливі організми, очистить і продезинфікує повітря, усуне неприємні запахи в салоні вашого автомобіля. Після процедури ваш автомобіль буде практично стерильним, що зробить перебування в ньому більш комфортним і приємним, без ризику для вашого здоров'я!",
      timeTaken: "Час виконання послуги до 1 години"
    };
  },
  mounted() {
    if (process.client) {
      this.$scrollTo("#__nuxt", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");

@import "~assets/scss/servicesPages.scss";

.service-time-image {
  background-image: url("~assets/img/beforeAfter10.png");
}
</style>
