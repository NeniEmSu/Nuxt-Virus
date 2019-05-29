<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading"/>
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/КЕРАМІЧНЕПОКРИТТЯСИДІНЬ.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <p class>{{ fourthParagraph }}</p>
            <p class>{{ fifthParagraph }}</p>
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
              <p class="pricing">500 грн</p>
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
      service: "22",
      heading: "КЕРАМІЧНЕ ПОКРИТТЯ СИДІНЬ",
      firstParagraph:
        "Як зберегти салон нового автомобіля чистим надовго? Як продовжити ефект від детейлінг-хімчистки салону? Як уникнути появи плям на текстилі і шкірі?",
      secondParagraph:
        'Спеціально для цих цілей існує послуга "керамічне покриття салону". Захисне покриття створює гідрофобний ефект, і бруд при попаданні в салон не вбирається в матеріал, а залишається на його поверхні - і її легко видалити за допомогою вологої фібри. Варіанти захисту можуть бути різні:',
      thirdParagraph:
        "Можна захистити тільки водійське сидіння, або тільки всі шкіряні лементи салону, або тільки текстиль, або ж весь салон цілком.",
      fourthParagraph:
        "Якщо захист нанесено правильно, то шкіра і пластик в салоні залишаться матовими, вони не повинні блистіти.",
      fifthParagraph:
        "Термін служби такого покриття близько 4 місяців (залежить від умов експлуатації) - саме те проїздити від хімчистки до хімчистки!",
      inclusiveInService: [
        {
          services:
            "Підготовка поверхні до нанесення захисного покриття (знежирення)"
        },
        {
          services: "Нанесення захисного покриття"
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

.before {
  background-image: url("~assets/img/beforeAfter12_001.jpg");
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
  background-image: url("~assets/img/beforeAfter12_002.jpg");
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
