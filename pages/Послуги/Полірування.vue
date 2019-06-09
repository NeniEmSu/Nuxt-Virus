<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading" class="desktop-tablet-only"/>
      <div class="container text-left">
        <h1 class="info-pages text-center mobile-only">{{ heading }}</h1>
        <div class="row">
          <div class="col-xl-6 text-center">
            <img src="~assets/img/Полірування.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages desktop-only">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
          </div>
        </div>
        <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
        <ul class="ml-3">
          <li v-for="(items, key) in inclusiveInService" :key="key"> {{items.services}}</li>
        </ul>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="row mx-auto">
          <div class="col-6 mx-auto p-0 before img-fluid">
            <font class="before-image-text">До</font>
          </div>

          <div class="col-6 mx-auto p-0 after img-fluid">
            <font class="after-image-text">Після</font>
          </div>
        </div>

        <servicesYoutubeVideo :videoUrl="videoUrl"/>

        <serviceCategories :category1="category1" :category2="category2" :category3="category3"/>
      </div>
    </div>

    <ContactForm :service="service"/>

    <progressSection/>
  </div>
</template>

<script>
export default {
  components: {},

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
      service: "0",
      heading: "ПОЛІРУВАННЯ",
      category1: "5999 грн",
      category2: "6999 грн",
      category3: "8499 грн",
      videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
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
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter1_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter1.jpg");
}
</style>
