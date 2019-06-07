<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading" class="desktop-tablet-only"/>
      <div class="container text-left">
        <h1 class="info-pages text-center mobile-only">{{ heading }}</h1>
        <div class="row">
          <div class="col-xl-6 text-center">
            <img src="~assets/img/Озонація.jpg" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages desktop-only">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <servicesYoutubeVideo :videoUrl="videoUrl"/>

        <serviceCategories :category1="category1" :category2="category2" :category3="category3"/>

       
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
      service: "23",
      heading: "ОЗОНУВАННЯ",
      category1: "1000 грн",
      category2: "1000 грн",
      category3: "1000 грн",
      videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
      firstParagraph:
        "За допомогою озонатора можна не тільки швидко і ефективно вбити бактерії, віруси, грибки та інші шкідливі мікроорганізми, що знаходяться в повітрі і воді, але і усунути неприємні запахи: вогкості, сигаретного диму, після горіння приміщення.",
      secondParagraph:
        "Після впливу озону залишається аромат свіжості і стерильна поверхню.",
      thirdParagraph:
        "Люди, що знаходяться в салоні автомобіля, постійно вдихають продукти життєдіяльності організмів, що живуть в оббивці авто, вентиляції, важкодоступних щілинах. Вплив озонатора протягом 30 хвилин усуне всі шкідливі організми, очистить і продезинфікує повітря, усуне неприємні запахи в салоні вашого автомобіля. Після процедури ваш автомобіль буде практично стерильним, що зробить перебування в ньому більш комфортним і приємним, без ризику для вашого здоров'я!",
      timeTaken: "Час виконання послуги до 1 години"
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
