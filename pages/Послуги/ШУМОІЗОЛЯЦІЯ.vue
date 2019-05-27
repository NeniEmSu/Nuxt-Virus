<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/ШУМОІЗОЛЯЦІЯ.jpg" :alt="heading">

            <!-- <video controls autoplay="true" muted>
              <source src="~assets/video/vid(14).mp4" type="video/mp4" />
            </video>-->
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li class="list-unstyled ml-n3">ВСТАНОВЛЕННЯ ШУМОІЗОЛЯЦІЇ</li>
              <li v-for="items in inclusiveInService">{{ items.services }}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">330 $</p>
              <p class="mt-2 mb-0">середній бізнес спорт купе</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">0 $</p>
              <p class="mt-2 mb-0">середній кросовер позашляховик</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">0 $</p>
              <p class="mt-2 mb-0">повнорозмірний кросовер позашляховик</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactForm :service="service"/>

    <progressSection/>
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
export default {
  layout: "default",
  scrollToTop: true,
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
      service: "16",
      heading: "ШУМОІЗОЛЯЦІЯ",
      firstParagraph:
        "Шуми (звуки) присутні в автомобілі при різних режимах і умовах руху. Джерела шумів можна розділити на первинні та вторинні. До первинних джерел відносяться механізми двигуна, трансмісії, шини, вітер, дощ, дорожні нерівності, інші автомобілі. Вторинними джерелами є панелі кузова і елементи салону. Первинні джерела шумів породжують коливання «вторинних» джерел, які і випромінюють звук в салон.",
      secondParagraph:
        "Шумоізоляція блокує коливання панелі кузова і елементів салону, значною мірою знижуючи вплив первинних джерел і, відповідно, знижуючи рівень шумів.",
      thirdParagraph:
        "Комплексне застосування вібро- та звукопоглинаючих матеріалів в автомобілі дозволяє підвищити рівень акустичного комфорту. Шумоізоляція добре впливає і на здоров’я, на якому негативно відбивається вібрація і гучні дратівливі звуки.",
      fourthParagraph:
        "Всі роботи по шумоізоляції салону кожного автомобіля проводиться на професійному рівні.",
      inclusiveInService: [
        {
          services: "-ПОВНОЇ ПІД КЛЮЧ"
        },
        {
          services: "-ПІДЛОГА В САЛОНІ+БАГАЖНИК"
        },
        {
          services: "-СТЕЛЯ"
        },
        {
          services: "-ЗАДНІ КОЛІСНІ АРКИ"
        },
        {
          services: "-КРИШКА БАГАЖНИКА"
        },
        {
          services: "-ЗАДНІ КРИЛА"
        },
        {
          services: " -ДВЕРНА ОББИВКА"
        }
      ],
      timeTaken: "Час виконання послуги до 1 дня"
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

video {
  width: 100%;
  max-width: 570px;
  height: 100%;
  max-height: 427px;
}
</style>
