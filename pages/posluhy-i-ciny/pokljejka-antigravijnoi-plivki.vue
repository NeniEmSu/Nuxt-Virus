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
              src="~assets/img/антигравійноїплівки.jpg"
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
              В наші студії твердий віск наноситься в чистому закритому
              приміщенні в такій послідовності:
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
      service: 'Поклейка антигравійної плівки',
      heading: 'ПОКЛЕЙКА АНТИГРАВІЙНОЇ ПЛІВКИ',
      category1: '1000 грн',
      category2: '0 грн',
      category3: '0 грн',
      videoUrl: 'https://www.youtube.com/embed/NpEaa2P7qZI',
      firstParagraph:
        'Антигравійна плівка - це, мабуть, саме прогресивне на поточний момент захисне покриття.',
      secondParagraph:
        'Вона захищає автомобіль від відколів і механічних пошкоджень, не жовтіє і зберігає свої захисні властивості до 5 років.',
      thirdParagraph:
        'Можливt обклеювання окремих деталей (фари, дзеркала), "зони ризику" (капот, бампер, передні крила та ін.) Або кузова цілком.',
      fourthParagraph:
        "Для уточнення вартості обклеювання окремих деталей Ви можете залишити свою ЗАЯВКУ на сайті або зв'язатися з нами за телефоном 0673334040",
      inclusiveInService: [
        {
          services:
            'Мийка кузова, при необхідності очищення від слідів бітуму і дорожньої розмітки'
        },
        {
          services:
            'Підготовка поверхні до обклеювання плівкою: очищення абразивною глиною або автоскрабом'
        },
        {
          services: 'Обклеювання кузова плівкою'
        }
      ],
      timeTaken: 'Час виконання послуги до 3 днів'
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
          content: `${this.firstParagraph} ${this.secondParagraph}`.slice(0, 320)
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";
</style>
