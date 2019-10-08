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
              src="~assets/img/Антидощ.jpg"
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
            <h2 class="pt-2">
              ЩО ВХОДИТЬ В ПОСЛУГУ?
            </h2>
            <ul class="ml-3">
              <li
                v-for="(items, index) in inclusiveInService"
                :key="index"
              >
                {{ items.services }}
              </li>
            </ul>
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
  head () {
    return {
      title: this.heading,
      titleTemplate: '%s! - Детейлінг центр Virus ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.firstParagraph.slice(0, 320)
        }
      ]
    }
  },
  data () {
    return {
      service: '14',
      heading: 'Антидощ',
      category1: '600 грн',
      category2: '0 грн',
      category3: '1200 грн',
      videoUrl: 'https://www.youtube.com/embed/NpEaa2P7qZI',
      firstParagraph:
        'Гідрофобний ефект поліпшить видимість на дорозі і позбавить Вас від необхідності слухати монотонний шум працюючих двірників. Тепер лобове скло не буде затирається, а вода буде скочуватися з нього практично безслідно. Термін служби покриття до 4 місяців',
      inclusiveInService: [
        {
          services: 'Глибоке очищення і усунення нерівностей на склі'
        },
        {
          services: 'Нанесення захисного покриття'
        }
      ],
      timeTaken: 'Час виконання послуги 1 година'
    }
  },
  mounted () {
    if (process.client) {
      this.$scrollTo('#top-contact', 100, { force: true })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";
</style>
