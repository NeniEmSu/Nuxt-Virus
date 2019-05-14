<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Хімчистка.png" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading}}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li v-for="items in inclusiveInService">{{ items.services }}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{timeTaken}}</h2>

        <div class="card p-0 mt-4 service-time-image" style="background-Image: ">
          <div class="row my-auto">
            <p class="before col-sm-6 text-md-right text-center my-auto p-5">До</p>
            <!-- <hr class="col-1 my-auto d-none d-sm-block"> -->
            <p class="after col-sm-6 text-md-left text-center my-auto p-5">Після</p>
          </div>
        </div>

        <div class="videoContainer mt-4 text-center">
          <video controls autoplay="true" muted>
            <source src="~assets/video/vid(6).mp4" type="video/mp4">
          </video>
        </div>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">1999 грн</p>
              <p class="mt-2 mb-0">
                середній
                бізнес
                спорт купе
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">2499 грн</p>
              <p class="mt-2 mb-0">
                середній кросовер
                позашляховик
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">3199 грн</p>
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
  layout: "Services",
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
      heading: "Хімчистка",
      question: "Для чого полірувати стійки?",
      firstParagraph:
        "Дбайливо і ретельно очистимо кожну деталь салону, включаючи багажник. Використовуємо тільки безпечні матеріали преміум-класу і сучасне обладнання.",
      secondParagraph:
        "На відміну від хімчистки на звичайній мийці, ви отримаєте дійсно максимальний комплекс з очищення салону вашого авто і гарантію результату.",
      inclusiveInService: [
        {
          services:
            "Мийка кузова, при необхідності очищення від слідів бітуму і бруду."
        },
        {
          services:
            "Очистка хромованих деталей і зовнішніх частин вихлопних труб"
        },
        {
          services: "Бережливе очищення стелі (без провисання і катишів)"
        },
        {
          services: "Очищення сидінь і ременів безпеки"
        },
        {
          services:
            "Очищення килимового покриття: хімія + миючий пилосос, щоб не залишилося розводів"
        },
        {
          services: "Очистка дверних карт і дверних пройомів"
        },
        {
          services: "Очистка ковриків"
        },
        {
          services: "Очистка багажника, включаючи місце для запаски"
        },
        {
          services:
            "Очистка дрібних деталей: ущільнювачі дверей, повітроводи, полози сидінь і ін."
        },
        {
          services:
            "Обробка шкіряних деталей паром і нанесення кондиціонера для шкіри"
        },
        {
          services: "Обробка гумових деталей спеціальним консервантом"
        },
        {
          services: "Очистка дитячих крісел (якщо є)"
        }
      ],
      timeTaken: "Час виконання послуги до 12 годин"
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
  background-image: url("~assets/img/beforeAfter5.png");
}
</style>
  