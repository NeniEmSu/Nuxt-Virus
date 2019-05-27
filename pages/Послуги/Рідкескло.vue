<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Рідкескло.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <p class>{{ fourthParagraph }}</p>
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
      service: "9",
      heading: "Рідке скло",
      firstParagraph:
        "Рідке скло для авто - популярний склад для створення на кузові машини гідрофобного шару, що додає лакофарбовому покриттю блиск і маскує дрібні дефекти. Відмінна риса цього складу - вміст діоксиду кремнію: при грамотному нанесенні саме він надає автомобілю ефект тільки що зробленого полірування і перешкоджає забрудненню.",
      secondParagraph:
        "Переваги рідкого скла для машини Відштовхування води. Гідрофобне покриття автомобіля відштовхує бруд і не дає їй застигати на поверхні ЛКП завдяки наявності в рідкому склі силікону.",
      thirdParagraph:
        "Поява антистатичного ефекту. Покриття запобігає накопиченню статичної електрики.",
      fourthParagraph:
        "Захисні властивості. Особливим чином нанесений на поверхню кузова склад заповнює мікропори, незначні дефекти емалі і лаку, підвищуючи їх стійкість до механічного впливу. Помітне поліпшення виду машини. Автомобіль, оброблений із застосуванням рідкого скла, виглядає новим: ЛКП красиво сяє, відштовхує пил і краплі води.",
      inclusiveInService: [
        {
          services:
            "авто відмивається від звичайних і складних забруднень (налиплої смоли і комах);"
        },
        {
          services: "кузов обробляється знежирювачем;"
        },
        {
          services:
            "поверхню двічі полірується спеціальними пастами, в т.ч. фари і хромовані деталі;"
        },
        {
          services:
            "майстри приступають до нанесення рідкого скла для авто з дотриманням всіх технологічних норм;"
        },
        {
          services:
            "В ціну послуги входять всі перераховані процедури. Після нанесення рідкого скла машину бажано не мити протягом 10-14 днів, щоб не порушити цілісність покриття."
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
@import "~assets/scss/config.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");

@import "~assets/scss/servicesPages.scss";
</style>
