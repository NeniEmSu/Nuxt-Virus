<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h2 class="info-pages mobile-only">
          {{ heading }}
        </h2>
        <div class="row">
          <div class="col-xl-6 text-center">
            <b-img-lazy
              src="~assets/img/Перешиття.jpg"
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
              <b>{{ thirdParagraph }}</b>
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
      service: '13',
      heading: 'Перешиття шкіряних деталей салону',
      category1: '500 грн',
      category2: '0 грн',
      category3: '3000 грн',
      firstParagraph:
        'Якщо шкіряні сидіння протерлися, потріскалися або просто виглядають вже не як нові, - ми допоможемо повернути авто первозданний вигляд.',
      secondParagraph:
        'Ювелірно відновлюємо структуру шкіри, фарбуємо і, при необхідності, перешиваємо окремі елементи. Фарбу підбирає спеціально навчений колорист, за рахунок чого пофарбована деталь за кольором ніяк не відрізняється від решти салону.',
      thirdParagraph:
        'ТОЧНА ОЦІНКА ВАРТОСТІ ДАНИХ РОБІТ МОЖЛИВА ЗА ФОТО АБО ПРИ БЕЗПОСЕРЕДНЬОМУ ОГЛЯДІ АВТОМОБІЛЯ В СТУДІЇ.',
      inclusiveInService: [
        {
          services: 'Очищення і підготовка елемента до фарбування / ремонту'
        },
        {
          services: 'Очищення і підготовка елемента до фарбування / ремонту'
        }
      ],
      timeTaken: 'ЧАС ВИКОНАННЯ ПОСЛУГИ ВІД 1 ДО 2 ДНІВ'
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
  background-image: url("~assets/img/beforeAfter9_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter9_002.jpg");
}
</style>
