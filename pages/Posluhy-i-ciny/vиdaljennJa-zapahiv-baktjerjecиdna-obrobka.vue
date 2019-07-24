<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h1 class="info-pages text-center mobile-only">{{ heading }}</h1>
        <div class="row">
          <div class="col-xl-6 text-center">
            <img
              src="~assets/img/БАКТЕРЕЦИДНАОБРОБКА.jpg"
              :alt="heading"
            >
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages desktop-only">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <serviceCategories
          :category1="category1"
          :category2="category2"
          :category3="category3"
        />
      </div>
    </div>

    <ContactForm :service="service" />

    <progressSection />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  components: {},

  head () {
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
  data () {
    return {
      service: "17",
      heading: "БАКТЕРЕЦИДНА ОБРОБКА",
      category1: "500 грн",
      category2: "0 грн",
      category3: "0 грн",
      firstParagraph:
        "Процедура відбувається за рахунок спеціальних речовин, які наносяться на всі деталі салону (підлога, сидіння, стеля, панель), і які очищають їх від мікробів, бактерій та бруду.",
      timeTaken: "Час виконання послуги до 1 дня"
    };
  },
  mounted () {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";
</style>
