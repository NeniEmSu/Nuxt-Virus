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
              src="~assets/img/Хімчистка.jpg"
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

        <div class="row mx-auto">
          <div class="col-6 mx-auto p-0 before img-fluid">
            <font class="before-image-text">
              До
            </font>
          </div>

          <div class="col-6 mx-auto p-0 after img-fluid">
            <font class="after-image-text">
              Після
            </font>
          </div>
        </div>

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
      titleTemplate: '%s!- Детейлінг центр Virus',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.firstParagraph
        }
      ]
    }
  },
  data () {
    return {
      service: 'Хімчистка',
      heading: 'Хімчистка',
      category1: '1999 грн',
      category2: '2499 грн',
      category3: '3199 грн',
      videoUrl: 'https://www.youtube.com/embed/1TkHas2OYso',
      question: 'Для чого полірувати стійки?',
      firstParagraph:
        'Дбайливо і ретельно очистимо кожну деталь салону, включаючи багажник. Використовуємо тільки безпечні матеріали преміум-класу і сучасне обладнання.',
      secondParagraph:
        'На відміну від хімчистки на звичайній мийці, ви отримаєте дійсно максимальний комплекс з очищення салону вашого авто і гарантію результату.',
      inclusiveInService: [
        {
          services:
            'Мийка кузова, при необхідності очищення від слідів бітуму і бруду.'
        },
        {
          services:
            'Очистка хромованих деталей і зовнішніх частин вихлопних труб'
        },
        {
          services: 'Бережливе очищення стелі (без провисання і катишів)'
        },
        {
          services: 'Очищення сидінь і ременів безпеки'
        },
        {
          services:
            'Очищення килимового покриття: хімія + миючий пилосос, щоб не залишилося розводів'
        },
        {
          services: 'Очистка дверних карт і дверних пройомів'
        },
        {
          services: 'Очистка ковриків'
        },
        {
          services: 'Очистка багажника, включаючи місце для запаски'
        },
        {
          services:
            'Очистка дрібних деталей: ущільнювачі дверей, повітроводи, полози сидінь і ін.'
        },
        {
          services:
            'Обробка шкіряних деталей паром і нанесення кондиціонера для шкіри'
        },
        {
          services: 'Обробка гумових деталей спеціальним консервантом'
        },
        {
          services: 'Очистка дитячих крісел (якщо є)'
        }
      ],
      timeTaken: 'Час виконання послуги до 12 годин'
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

.before {
  background-image: url("~assets/img/beforeAfter5_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter5_002.jpg");
}
</style>
