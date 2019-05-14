<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Передпродажнапідготовка1.png" :alt="heading">
            <img src="~assets/img/Передпродажнапідготовка2.png" :alt="heading">
          </div>

          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading}}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <p class>{{ fourthParagraph }}</p>
            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li v-for="items in inclusiveInService">{{ items.services }}</li>
            </ul>
          </div>
          <div class="row mx-auto">
            <div class="col-xl-6">
              <img src="~assets/img/Передпродажнапідготовка3.png" :alt="heading">
            </div>
            <div class="col-xl-6">
              <img src="~assets/img/Передпродажнапідготовка4.png" :alt="heading">
            </div>
          </div>
        </div>

        <h2 class="red">{{timeTaken}}</h2>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">1100 грн</p>
              <p class="mt-2 mb-0">
                середній
                бізнес
                спорт купе
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">1200 грн</p>
              <p class="mt-2 mb-0">
                середній кросовер
                позашляховик
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">1300 грн</p>
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
      heading: "Передпродажна підготовка",
      firstParagraph:
        "Продаєте автомобіль? Команда VIRUS  допоможе продати його дорожче!",
      secondParagraph:
        "Якісна підготовка підвищить вартість Вашого авто мінімум на 10% і дозволить швидше знайти покупців.",
      thirdParagraph:
        'Чому саме VIRUS? Ми не просто помиємо підлогу і сидіння, а й приведемо в порядок кузов. Ми дійсно приведемо до ладу кожен сантиметр вашого авто: відмиємо, почистимо навіть найдрібніші деталі (аж до полозів сидінь і відділення під запаску!), видалимо неприємні запахи, замаскуємо відколи і нанесемо віск для продовження "вау" –ефекту за необхідності.',
      fourthParagraph:
        "І якщо після цього ви не передумаєте продавати свій автомобіль - наш фотограф зробить професійні фото для продажу абсолютно безкоштовно!",
      inclusiveInService: [
        {
          services: "Трьохфазна мийка авто"
        },
        {
          services: "Чистка ковроліну підлоги"
        },
        {
          services: "Чистка дверних карт"
        },
        {
          services: "Чистка панелі (торпедо)"
        },
        {
          services: "Чистка воздуховодів"
        },
        {
          services: "Чистка сидінь і стелі"
        },
        {
          services: "Ароматизація салону"
        }
      ],
      timeTaken: "Час виконання послуги 1 день"
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
</style>
