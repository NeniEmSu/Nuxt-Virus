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
              src="~assets/img/Передпродажнапідготовка1.jpg"
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
              {{ fourthParagraph }}
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
          <div class="col-xl-6 text-center side-image">
            <img
              src="~assets/img/Передпродажнапідготовка2.jpg"
              :alt="heading"
            >
          </div>
          <div class="row mx-auto">
            <div class="col-xl-6 text-center mt-3">
              <img
                src="~assets/img/Передпродажнапідготовка3.jpg"
                :alt="heading"
              >
            </div>
            <div class="col-xl-6 text-center mt-3">
              <img
                src="~assets/img/Передпродажнапідготовка4.jpg"
                :alt="heading"
              >
            </div>
          </div>
        </div>

        <h2 class="red">
          {{ timeTaken }}
        </h2>

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
          content: `${this.firstParagraph} ${this.secondParagraph}`.slice(0, 320)
        }
      ]
    }
  },
  data () {
    return {
      service: 'Передпродажна підготовка Комплекс',
      heading: 'Передпродажна підготовка',
      category1: '1100 грн',
      category2: '1200 грн',
      category3: '1300 грн',
      firstParagraph:
        'Продаєте автомобіль? Команда VIRUS  допоможе продати його дорожче!',
      secondParagraph:
        'Якісна підготовка підвищить вартість Вашого авто мінімум на 10% і дозволить швидше знайти покупців.',
      thirdParagraph:
        'Чому саме VIRUS? Ми не просто помиємо підлогу і сидіння, а й приведемо в порядок кузов. Ми дійсно приведемо до ладу кожен сантиметр вашого авто: відмиємо, почистимо навіть найдрібніші деталі (аж до полозів сидінь і відділення під запаску!), видалимо неприємні запахи, замаскуємо відколи і нанесемо віск для продовження "вау" –ефекту за необхідності.',
      fourthParagraph:
        'І якщо після цього ви не передумаєте продавати свій автомобіль - наш фотограф зробить професійні фото для продажу абсолютно безкоштовно!',
      inclusiveInService: [
        {
          services: 'Трьохфазна мийка авто'
        },
        {
          services: 'Чистка ковроліну підлоги'
        },
        {
          services: 'Чистка дверних карт'
        },
        {
          services: 'Чистка панелі (торпедо)'
        },
        {
          services: 'Чистка воздуховодів'
        },
        {
          services: 'Чистка сидінь і стелі'
        },
        {
          services: 'Ароматизація салону'
        }
      ],
      timeTaken: 'Час виконання послуги 1 день'
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

.side-image {
  margin-top: -240px;
}

@include mediaMenu {
  .side-image {
    margin-top: 0px;
  }
}
</style>
