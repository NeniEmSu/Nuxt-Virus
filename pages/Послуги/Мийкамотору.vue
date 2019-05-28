<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading"/>
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Мийкамотору.jpg" :alt="heading">
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

        <div class="row mx-auto">
          <div class="col-md-6 mx-auto p-0 before">
            <font class="before-image-text">До</font>
          </div>

          <div class="col-md-6 mx-auto p-0 after">
            <font class="after-image-text">Після</font>
          </div>
        </div>

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

    <ContactForm :service="service"/>

    <progressSection/>
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
import sercivesBreadcrumbs from "@/components/breadcrumbs/sercivesBreadcrumbs.vue";
export default {
  scrollToTop: true,
  layout: "default",
  components: {
    ContactForm,
    progressSection,
    sercivesBreadcrumbs
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
      service: "15",
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

.before {
  background-image: url("~assets/img/beforeAfter10_001.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
  min-height: 286px;
  max-height: 286px;
  width: 100%;
}
.before-image-text {
  position: relative;
  top: 40%;
  left: 40%;
  color: white;
}

.after {
  background-image: url("~assets/img/beforeAfter10_002.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 286px;
  max-height: 286px;
  width: 100%;
}
.after-image-text {
  position: relative;
  top: 40%;
  left: 40%;

  color: white;
}
</style>
