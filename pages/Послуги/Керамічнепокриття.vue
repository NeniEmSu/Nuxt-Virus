<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading"/>
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Керамічнепокриття.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p>{{ firstParagraph }}</p>
            <p>
              {{ secondParagraph }}
              <br>• твердістю (яка в деяких випадках поступається лише алмазу)
              <br>• хімічною стійкістю
              <br>• гідрофобністю
            </p>
            <p>{{ thirdParagraph }}</p>
            <p>{{ fourthParagraph }}</p>
            <p>{{ fifthParagraph }}</p>
            <p class="red">
              <b>{{ sixthParagraph }}</b>
            </p>
          </div>
        </div>
        <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
        <ul class="ml-3">
          <li v-for="items in inclusiveInService">{{ items.services }}</li>
        </ul>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">1200 грн</p>
              <p class="mt-2 mb-0">середній бізнес спорт купе</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">1300 грн</p>
              <p class="mt-2 mb-0">середній кросовер позашляховик</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">1400 грн</p>
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
      service: "10",
      heading: "Керамічне покриття",
      firstParagraph:
        "Керамічне покриття автомобіля - це тонка плівка на поверхні ЛКП кузова, утворена зернами оксиду титану, діоксиду кремнію, карбідів та інших неорганічних сполук. Йдеться про зерна розміром до 100 нанометрів (мільярдна частина метра!)",
      secondParagraph:
        "Що входять до складу кераміки речовини володіють декількома важливими властивостями:",
      thirdParagraph:
        "Ось чому оброблена керамікою машина захищена від впливу реагентів, УФ-променів, плюс круто блищить, набагато простіше миється і відмінно відштовхує воду і бруд.",
      fourthParagraph:
        "Термін служби кераміки без корекції до 1,5 років, з корекцією до 3 років.",
      fifthParagraph:
        "Якщо автомобіль вже з пробігом - перед нанесенням кераміки його необхідно відполірувати.",
      sixthParagraph:
        "Важливо! Полірування кузова для авто з пробігом НЕ ВКЛЮЧЕНО в вартість захисного покриття.",
      inclusiveInService: [
        {
          services:
            "Мийка кузова, при необхідності очищення від слідів бітуму і дорожньої розмітки"
        },
        {
          services:
            "Детейлінг-полірування кузова (для авто з пробігом) / фінішне полірування для нових авто"
        },
        {
          services: "Підготовка кузова до нанесення покриття"
        },
        {
          services: "Нанесення захисного покриття"
        },
        {
          services: "Фінішний шар покриття"
        },
        {
          services: "По детальне запікання фінішного шару"
        },
        {
          services: "Вологе прибирання салону (включаючи багажник)"
        }
      ],
      timeTaken: "Час виконання послуги 1-2 дні"
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


@import "~assets/scss/servicesPages.scss";
</style>
