<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading"/>
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/Колісніарки.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>

            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li v-for="items in inclusiveInService">{{ items.services }}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="row mx-auto">
          <div class="col-md-6 mx-auto p-0 before">
            <font class="before-image-text">До</font>
          </div>

          <div class="col-md-6 mx-auto p-0 after">
            <font class="after-image-text">Після</font>
          </div>
        </div>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">800 грн</p>
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

    <ContactForm :service="service"/>

    <progressSection/>
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
import sercivesBreadcrumbs from "@/components/breadcrumbs/sercivesBreadcrumbs.vue";
export default {
  layout: "Services",
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
      service: "3",
      heading: "ПОЛІРУВАННЯ центральних стійок",
      question: "Для чого полірувати стійки?",
      firstParagraph:
        "Своєчасна і професійна хімчистка колісних арок і підвіски автомобіля з подальшою консервацією вузлів допоможе сповільнити налипання бруду і розвиток корозії, а також збереже деталі максимально чистими і візуально новими.",
      secondParagraph: "Після весняної сльоти така послуга - просто must have.",
      thirdParagraph:
        'Погодьтеся, шикарний позашляховик з блискучим кузовом і бездоганно чистим салоном на брудних дисках і шарами бруду на підвісці виглядає вже не "вау"!',
      inclusiveInService: [
        {
          services: "Бережна мийка кузова"
        },
        {
          services: "Хімчистка колісних арок і підвіски"
        },
        {
          services: "Обробка вузлів підвіски консервантом"
        },
        {
          services: "Хімчистка автомобільних дисків"
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


@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter6_001.jpg");
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
  color: set-text-color($backgroudColor);
}

.after {
  background-image: url("~assets/img/beforeAfter6_002.jpg");
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

  color: set-text-color($backgroudColor);
}
</style>
