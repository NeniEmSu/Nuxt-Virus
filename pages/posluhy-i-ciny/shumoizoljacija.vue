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
              src="~assets/img/ШУМОІЗОЛЯЦІЯ.jpg"
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
            <p class>
              {{ secondParagraph }}
            </p>
            <h2 class="pt-2">
              ЩО ВХОДИТЬ В ПОСЛУГУ?
            </h2>
            <ul class="ml-3">
              <li class="list-unstyled ml-n3">
                ВСТАНОВЛЕННЯ ШУМОІЗОЛЯЦІЇ
              </li>
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
      title: this.heading.slice(0, 60),
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
      service: 'Шумоізоляція',
      heading: 'ШУМОІЗОЛЯЦІЯ',
      category1: '330 $',
      category2: '330 $',
      category3: '330 $',
      videoUrl: 'https://www.youtube.com/embed/NpEaa2P7qZI',
      firstParagraph:
        'Шуми (звуки) присутні в автомобілі при різних режимах і умовах руху. Джерела шумів можна розділити на первинні та вторинні. До первинних джерел відносяться механізми двигуна, трансмісії, шини, вітер, дощ, дорожні нерівності, інші автомобілі. Вторинними джерелами є панелі кузова і елементи салону. Первинні джерела шумів породжують коливання «вторинних» джерел, які і випромінюють звук в салон.',
      secondParagraph:
        'Шумоізоляція блокує коливання панелі кузова і елементів салону, значною мірою знижуючи вплив первинних джерел і, відповідно, знижуючи рівень шумів.',
      thirdParagraph:
        'Комплексне застосування вібро- та звукопоглинаючих матеріалів в автомобілі дозволяє підвищити рівень акустичного комфорту. Шумоізоляція добре впливає і на здоров’я, на якому негативно відбивається вібрація і гучні дратівливі звуки.',
      fourthParagraph:
        'Всі роботи по шумоізоляції салону кожного автомобіля проводиться на професійному рівні.',
      inclusiveInService: [
        {
          services: '-ПОВНОЇ ПІД КЛЮЧ'
        },
        {
          services: '-ПІДЛОГА В САЛОНІ+БАГАЖНИК'
        },
        {
          services: '-СТЕЛЯ'
        },
        {
          services: '-ЗАДНІ КОЛІСНІ АРКИ'
        },
        {
          services: '-КРИШКА БАГАЖНИКА'
        },
        {
          services: '-ЗАДНІ КРИЛА'
        },
        {
          services: ' -ДВЕРНА ОББИВКА'
        }
      ],
      timeTaken: 'Час виконання послуги до 1 дня'
    }
  },
  mounted () {
    if (process.client) {
      this.$scrollTo('#top-contact', 0, { force: true })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";
</style>
