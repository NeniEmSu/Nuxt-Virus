<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h2 class="info-pages text-center mobile-only">
          {{ heading }}
        </h2>
        <div class="row">
          <div class="col-xl-6 text-center">
            <b-img-lazy
              src="~assets/img/Озонація.jpg"
              :alt="heading"
            />
          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">
              {{ heading }}
            </h2>
            <p class>
              {{ firstParagraph }}
            </p>
            <p class>
              {{ secondParagraph }}
            </p>
            <p class>
              {{ thirdParagraph }}
            </p>
          </div>
        </div>

        <h2 class="red">
          {{ timeTaken }}
        </h2>

        <servicesYoutubeVideo :video-url="videoUrl" />

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
  data () {
    return {
      service: 'Озонація',
      heading: 'ОЗОНУВАННЯ',
      category1: '1000 грн',
      category2: '1200 грн',
      category3: '1200 грн',
      videoUrl: 'https://www.youtube.com/embed/eDtDT7qkOMo',
      firstParagraph:
        'За допомогою озонатора можна не тільки швидко і ефективно вбити бактерії, віруси, грибки та інші шкідливі мікроорганізми, що знаходяться в повітрі і воді, але і усунути неприємні запахи: вогкості, сигаретного диму, після горіння приміщення.',
      secondParagraph:
        'Після впливу озону залишається аромат свіжості і стерильна поверхню.',
      thirdParagraph:
        "Люди, що знаходяться в салоні автомобіля, постійно вдихають продукти життєдіяльності організмів, що живуть в оббивці авто, вентиляції, важкодоступних щілинах. Вплив озонатора протягом 30 хвилин усуне всі шкідливі організми, очистить і продезинфікує повітря, усуне неприємні запахи в салоні вашого автомобіля. Після процедури ваш автомобіль буде практично стерильним, що зробить перебування в ньому більш комфортним і приємним, без ризику для вашого здоров'я!",
      timeTaken: 'Час виконання послуги до 1 години'
    }
  },
  mounted () {
    if (process.client) {
      this.$scrollTo('#top-contact', 100, { force: true })
    }
  },
  head () {
    return {
      title: this.heading.slice(0, 60),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.firstParagraph.slice(0, 320)
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";
</style>
