<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Мийкамотору.png" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ question }}{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li v-for="items in inclusiveInService">{{ items.services }}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="card p-0 mt-4 service-time-image">
          <div class="row my-auto">
            <p class="before col-sm-6 text-md-right text-center my-auto p-5">До</p>
            <p class="after col-sm-6 text-md-left text-center my-auto p-5">Після</p>
          </div>
        </div>

        <!-- <div class="videoContainer mt-4 text-center">
          <video class="mx-auto" controls autoplay="true" muted>
            <source src="~assets/video/vid(3).mp4" type="video/mp4" />
          </video>
        </div>-->

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">5999 грн</p>
              <p class="mt-2 mb-0">середній бізнес спорт купе</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">6999 грн</p>
              <p class="mt-2 mb-0">середній кросовер позашляховик</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">8499 грн</p>
              <p class="mt-2 mb-0">повнорозмірний кросовер позашляховик</p>
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
  scrollToTop: true,
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
      heading: "МИЙКА МОТОРУ ПАРОЮ",
      firstParagraph:
        "Детейлінг моторного відсіку - важливий штрих в догляді за автомобілем.",
      question: 'Важливо: це не "мийка двигуна"! В чому різниця? ',
      secondParagraph:
        "Ми не ллємо в двигун воду керхером. Замість цього ми дбайливо очищаємо двигун і підкапотний простір паром і пензликами + використовуємо склади-діелектрики, які витісняють вологу і, тим самим, знижують ризик пошкодження електроніки в ході даної процедури.",
      thirdParagraph: "В результаті автомобіль ніби щойно з салону!",
      inclusiveInService: [
        {
          services: "Бережна мийка кузова"
        },
        {
          services: "Очищення підкапотного простору"
        },
        {
          services:
            "Полірування кузова: абразивне, коригуюче, протиголограмне, Поліровка дрібних деталей (простір під ручками, пластикові молдинги і ін.)"
        },
        {
          services:
            "Нанесення консерванту, що захищає двигун від шкідливих впливів навколишнього середовища"
        },
        {
          services: "Ретельна сушка"
        }
      ],
      timeTaken: "Час виконання послуги від 2 до 5 годин"
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

@import "~assets/scss/servicesPages.scss";

.service-time-image {
  background-image: url("~assets/img/beforeAfter10.png");
}
</style>
