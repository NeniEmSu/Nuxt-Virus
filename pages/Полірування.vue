<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Полірування.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
          </div>
        </div>
        <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
        <ul class="ml-3">
          <li v-for="items in inclusiveInService">{{ items.services }}</li>
        </ul>

        <h2 class="red">{{ timeTaken }}</h2>

        <!-- <div class="card p-0 mt-4 service-time-image">
          <div class="row my-auto">
            <p class="before col-sm-6 text-md-right text-center my-auto p-5">До</p>
            <p class="after col-sm-6 text-md-left text-center my-auto p-5">Після</p>
          </div>
        </div>-->

        <div class="row mx-auto">
          <div class="col-md-6 mx-auto p-0 before">
            <font class="before-image-text">До</font>
          </div>

          <div class="col-md-6 mx-auto p-0 after">
            <font class="after-image-text">Після</font>
          </div>
        </div>

        <!-- <div class="videoContainer mt-4 text-center">
          <video class="mx-auto" controls autoplay="true" muted>
            <source src="~assets/video/vid(23).mp4" type="video/mp4" />
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
      heading: "ПОЛІРУВАННЯ",
      firstParagraph:
        "Якщо ви не знаєте, яке полірування вибрати – абразивне, відновлююче, захисне - нічого страшного, не ламайте голову! Суть детейлінг-полірування в студії VIRUS - це індивідуальний підхід до кожного автомобіля, в залежності від його стану.",
      secondParagraph:
        "Ми не просто приберемо дрібні подряпини і «павутину» від мийок, додамо авто блиск і яскравість кольору, але і зробимо це найбільш щадним для Вашого автомобіля способом. Полірування виконується в кілька етапів, а всі матеріали для виконання робіт підбираються індивідуально, залежно від стану лакофарбового покриття. Ми використовуємо тільки преміальні бренди автохімії!",
      inclusiveInService: [
        {
          services:
            "Консультація майстра і підбір оптимального комплексу робіт по поліровці автомобіля. Мийка кузова, при необхідності очищення від слідів бітуму і дорожньої розмітки. Очистка колісних  дисків (без зняття)"
        },
        {
          services:
            "Підготовка до полірування: очищення автоскрабом / глиною, захист пластикових і гумових елементів"
        },
        {
          services:
            "Полірування кузова: абразивне, коригуюче, протиголограмне, Поліровка дрібних деталей (простір під ручками, пластикові молдинги і ін.)"
        },
        {
          services:
            "Маскування сколів фарбою в тон кузова (за бажанням, і за наявності фарби підібраної в тон Вашого автомобіля)"
        },
        {
          services:
            "Вологе прибирання в салону в подарунок (включно з багажним відділенням)"
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

@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter1_001.jpg");
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
  background-image: url("~assets/img/beforeAfter1.jpg");
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
