<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Видаленнявмятин.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
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

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">0 грн</p>
              <p class="mt-2 mb-0">середній бізнес спорт купе</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">0 грн</p>
              <p class="mt-2 mb-0">середній кросовер позашляховик</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">0 грн</p>
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
      heading: "ВИДАЛЕННЯ ВМЯТИН БЕЗ ФАРБУВАННЯ ",
      firstParagraph:
        "Навіть самий акуратний водій не застрахований від появи вм'ятин. Найчастіше в такому випадку автовласники звертаються до малярів і отримують шар шпаклівки + зниження ринкової вартості авто.",
      secondParagraph:
        "Однак в разі, якщо вм'ятина неглибока (до 5 мм), без заломів металу і пошкодження ЛКП, можна обійтися і без фарбування. Paintless Dent Repair (PDR) - це система видалення вм'ятин без фарбування. Вм'ятини на машині виправляються за допомогою спеціальних гачків. Шляхом натискання на місця пошкодження метал випрямляється і набуває первісну форму. Такий спосіб значно економить час і не знижує ринкову вартість авто - словом, одні плюси!",
      thirdParagraph:
        "ТОЧНА ОЦІНКА ВАРТОСТІ РОБІТ МОЖЛИВА ТІЛЬКИ ПО ФОТО АБО НЕПОСТРЕДСТВЕННО ПРИ ОГЛЯДІ АВТОМОБІЛЯ В СТУДІЇ.",
      inclusiveInService: [
        {
          services:
            "Арматурні роботи (при необхідності) - часткове зняття обшивки салону для доступу до вм'ятини"
        },
        {
          services: "видалення вм'ятини"
        },
        {
          services: "Полірування деталі, на якій проводилися ремонтні роботи"
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

@import "~assets/scss/servicesPages.scss";
</style>
