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

        <div class="card p-0 mt-4 service-time-image" style="background-Image: ">
          <div class="row my-auto">
            <p class="before col-sm-6 text-md-right text-center my-auto p-5">До</p>
            <!-- <hr class="col-1 my-auto d-none d-sm-block"> -->
            <p class="after col-sm-6 text-md-left text-center my-auto p-5">Після</p>
          </div>
        </div>

        <!-- <div class="videoContainer mt-4 text-center">
          <video controls autoplay="true" muted>
            <source src="~assets/video/vid(2).mp4" type="video/mp4" />
          </video>
        </div>-->

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

    <ContactForm/>

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

.service-time-image {
  background-image: url("~assets/img/beforeAfter6.jpg");
}
</style>
