<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Перешиття.png" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading}}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>
              <b>{{ thirdParagraph }}</b>
            </p>
            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li v-for="items in inclusiveInService">{{ items.services }}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{timeTaken}}</h2>

        <div class="card p-0 mt-4 service-time-image">
          <div class="row my-auto">
            <p class="before col-sm-6 text-md-right text-center my-auto p-5">До</p>
            <p class="after col-sm-6 text-md-left text-center my-auto p-5">Після</p>
          </div>
        </div>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">500 грн</p>
              <p class="mt-2 mb-0">
                середній
                бізнес
                спорт купе
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">500 грн</p>
              <p class="mt-2 mb-0">
                середній кросовер
                позашляховик
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">3000 грн</p>
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
      heading: "Перешиття шкіряних деталей салону",
      firstParagraph:
        "Якщо шкіряні сидіння протерлися, потріскалися або просто виглядають вже не як нові, - ми допоможемо повернути авто первозданний вигляд.",
      secondParagraph:
        "Ювелірно відновлюємо структуру шкіри, фарбуємо і, при необхідності, перешиваємо окремі елементи. Фарбу підбирає спеціально навчений колорист, за рахунок чого пофарбована деталь за кольором ніяк не відрізняється від решти салону.",
      thirdParagraph:
        "ТОЧНА ОЦІНКА ВАРТОСТІ ДАНИХ РОБІТ МОЖЛИВА ЗА ФОТО АБО ПРИ БЕЗПОСЕРЕДНЬОМУ ОГЛЯДІ АВТОМОБІЛЯ В СТУДІЇ.",
      inclusiveInService: [
        {
          services: "Очищення і підготовка елемента до фарбування / ремонту"
        },
        {
          services: "Очищення і підготовка елемента до фарбування / ремонту"
        }
      ],
      timeTaken: "ЧАС ВИКОНАННЯ ПОСЛУГИ ВІД 1 ДО 2 ДНІВ"
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
  background-image: url("~assets/img/beforeAfter9.png");
}

@import "~assets/scss/mobileResponsive.scss";
</style>
