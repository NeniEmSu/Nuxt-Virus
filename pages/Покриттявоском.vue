<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Покриттявоском.png" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading}}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
          </div>
        </div>
        <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
        <ul class="ml-3">
          В наші студії твердий віск наноситься в чистому закритому приміщенні в такій послідовності:
          <li v-for="items in inclusiveInService">{{ items.services }}</li>
        </ul>

        <h2 class="red">{{timeTaken}}</h2>

        <div class="videoContainer mt-4 text-center">
          <video class="mx-auto" controls autoplay="true" muted>
            <source src="~assets/video/vid(23).mp4" type="video/mp4">
          </video>
        </div>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">1200 грн</p>
              <p class="mt-2 mb-0">
                середній
                бізнес
                спорт купе
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">1300 грн</p>
              <p class="mt-2 mb-0">
                середній кросовер
                позашляховик
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">1400 грн</p>
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
      heading: "Покриття твердим воском",
      firstParagraph:
        "Воскове покриття авто - це додатковий захист вашого автомобіля від подряпин, пилу, дрібних відколів, що неодмінно відбувається з машиною при її щоденній експлуатації.",
      secondParagraph:
        "Рекомендується застосовувати послугу обробки воском навіть якщо ви користуєтеся мийними засобами на його основі. Детейлінг-студія Virus надає послугу з нанесення воску на ваш автомобіль. Ми користуємося тільки екологічно чистими матеріалами, які не викликають алергії.",
      thirdParagraph:
        "Обробка авто воском полягає в нанесенні на лакофарбове покриття спеціального воску тонким шаром. Після нанесення на поверхні кузова утворюється тонка плівка з антистатичним і гідрофобним ефектом. Це знімає з покриття лаком електричну напругу. Також кузов машини не буде схильний до пилу і бруду. Буде досягнутий водовідштовхувальний ефект.",
      inclusiveInService: [
        {
          services:
            "Ручна мийка, покриття кузова спеціальним миючим шампунем від забруднень і жиру;"
        },
        {
          services: "Сушка вимитої поверхні;"
        },
        {
          services:
            "Нанесення твердого воску на невеликі площі і розтирання за допомогою губки;"
        },
        {
          services:
            "Висихання воску. Про повному висиханні утворюється  матова плівка;"
        },
        {
          services:
            "Розполірування висохлого твердого воску на поверхні кузова авто спеціальною мікрофіброю."
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
