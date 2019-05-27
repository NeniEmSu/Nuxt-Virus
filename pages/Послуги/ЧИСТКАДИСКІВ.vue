<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~/assets/img/ЧИСТКАДИСКІВ.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>

            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li
                v-for="items in inclusiveInService"
                :key="id"
                class="list-unstyled"
                style="margin-left: -16px;"
              >{{ items.services }}</li>
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
              <p class="pricing">250 грн</p>
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
      service: "21",
      heading: "ЧИСТКА ДИСКІВ",
      firstParagraph:
        "Унікальна методика мийки, використовувана в нашій компанії для дбайливого догляду за колісними дисками, передбачає комплексний підхід. Досвідчені фахівці проводять дбайливе усунення забруднень з дисків авто, застосовуючи якісні засоби. ",
      secondParagraph:
        "Після ретельного очищення, не залишається розлучень та інших негативних проявів.",
      thirdParagraph:
        "Чим довше бруд, бітум, стружка з гальмівних колодок, гума з коліс, дорожня хімія, солі та інші забруднення будуть перебувати на ваших дисках, тим більше ризик, що трохи згодом вони будуть виглядати каламутними, пожовклими і, звичайно, пошкодженими.",
      inclusiveInService: [
        {
          services:
            "При попаданні на дискову поверхню засіб взаємодіє з гальмівною стружкою, що застрягла в лаку, розщеплює її і виводить з рідиною, змінюючи при цьому колір. І чим більше забруднені диски, тим більш насичений колір матиме рідина. Ефект ви побачите відразу після ополіскування дисків водою - вони стають більш блискучими і помітно гладкими."
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
