<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading"/>
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Передпродажнапідготовка1.jpg" :alt="heading">
          </div>

          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <p class>{{ fourthParagraph }}</p>
            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li v-for="items in inclusiveInService">{{ items.services }}</li>
            </ul>
          </div>
          <div class="col-xl-6 side-image">
            <img src="~assets/img/Передпродажнапідготовка2.jpg" :alt="heading">
          </div>
          <div class="row mx-auto">
            <div class="col-xl-6 mt-3">
              <img src="~assets/img/Передпродажнапідготовка3.jpg" :alt="heading">
            </div>
            <div class="col-xl-6 mt-3">
              <img src="~assets/img/Передпродажнапідготовка4.jpg" :alt="heading">
            </div>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">1100 грн</p>
              <p class="mt-2 mb-0">середній бізнес спорт купе</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">1200 грн</p>
              <p class="mt-2 mb-0">середній кросовер позашляховик</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">1300 грн</p>
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
      service: "11",
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

@import "~assets/scss/servicesPages.scss";

.side-image {
  margin-top: -240px;
}

@include mediaMenu {
  .side-image {
    margin-top: 0px;
  }
}
</style>
