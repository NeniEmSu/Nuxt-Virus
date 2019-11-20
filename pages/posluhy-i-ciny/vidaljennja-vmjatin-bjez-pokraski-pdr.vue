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
              src="~assets/img/Видаленнявмятин.jpg"
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
      service: 'Видалення вмятин без покраски PDR',
      heading: 'ВИДАЛЕННЯ ВМЯТИН БЕЗ ФАРБУВАННЯ',
      category1: '0 грн',
      category2: '0 грн',
      category3: '0 грн',
      videoUrl: 'https://www.youtube.com/embed/NpEaa2P7qZI',
      firstParagraph:
        "Навіть самий акуратний водій не застрахований від появи вм'ятин. Найчастіше в такому випадку автовласники звертаються до малярів і отримують шар шпаклівки + зниження ринкової вартості авто.",
      secondParagraph:
        "Однак в разі, якщо вм'ятина неглибока (до 5 мм), без заломів металу і пошкодження ЛКП, можна обійтися і без фарбування. Paintless Dent Repair (PDR) - це система видалення вм'ятин без фарбування. Вм'ятини на машині виправляються за допомогою спеціальних гачків. Шляхом натискання на місця пошкодження метал випрямляється і набуває первісну форму. Такий спосіб значно економить час і не знижує ринкову вартість авто - словом, одні плюси!",
      thirdParagraph:
        'ТОЧНА ОЦІНКА ВАРТОСТІ РОБІТ МОЖЛИВА ТІЛЬКИ ПО ФОТО АБО НЕПОСТРЕДСТВЕННО ПРИ ОГЛЯДІ АВТОМОБІЛЯ В СТУДІЇ.',
      inclusiveInService: [
        {
          services:
            "Арматурні роботи (при необхідності) - часткове зняття обшивки салону для доступу до вм'ятини"
        },
        {
          services: "видалення вм'ятини"
        },
        {
          services: 'Полірування деталі, на якій проводилися ремонтні роботи'
        }
      ],
      timeTaken: 'Час виконання послуги до 1 дня'
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
