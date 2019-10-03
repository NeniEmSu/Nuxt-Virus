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
              src="~assets/img/Реставраціяподряпин.jpg"
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
              <br>• можливість зберегти оригінальне заводське ЛКП;
              <br>•
              можливість зберегти заводську збірку, тому що ремонт проводиться
              без демонтажу деталей.
            </p>
            <p class>
              <b>{{ boldParagraph }}</b>
              {{ secondParagraph }}
            </p>
            <h2 class="pt-2">
              ЩО ВХОДИТЬ В ПОСЛУГУ?
            </h2>
            <ul class="ml-3">
              <li
                v-for="(items, heading) in inclusiveInService"
                :key="heading"
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
      service: '12',
      heading: 'РЕСТАВРАЦІЯ ПОДРЯПИН (СКОЛІВ) НА КУЗОВІ',
      category1: '130 грн',
      category2: '0 грн',
      category3: '250 грн',
      firstParagraph:
        'Коли трапилася неприємність, і Ви помітили на своєму автомобілі подряпини, сколи й потертості - не турбуйтеся! Найпростіше рішення проблеми – реставрація подряпин.',

      secondParagraph:
        'Фахівці студії відреставрують місце пошкодження локально, не залишаючи некрасивих переходів і сміття під лаком.',
      thirdParagraph: 'Переваги локального ремонту:',
      boldParagraph:
        'ТОЧНА ОЦІНКА ВАРТОСТІ РОБІТ МОЖЛИВА ЗА ФОТО АБО ПРИ БЕЗПОСЕРЕДНЬОМУ ОГЛЯДІ АВТОМОБІЛЯ В НАШІЙ СТУДІЇ.',
      fourthParagraph: 'Якщо мова іде про сколи – колір фарби необхідні.',
      inclusiveInService: [
        {
          services: 'Мийка кузова'
        },
        {
          services: 'Реставрація сколів'
        },
        {
          services: 'Полірування за необхідності'
        }
      ],
      timeTaken: 'Час виконання послуги від 2 до 5 годин'
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

.before {
  background-image: url("~assets/img/beforeAfter11_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter11_002.jpg");
}
</style>
