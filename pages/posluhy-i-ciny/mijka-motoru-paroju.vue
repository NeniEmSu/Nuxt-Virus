<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h2 class="info-pages mobile-only">{{ heading }}</h2>
        <div class="row">
          <div class="col-xl-6 text-center">
            <b-img-lazy
              src="~assets/img/Мийкамотору.jpg"
              :alt="heading"
            >
            </b-img-lazy>

          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">{{ heading }}</h2>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ question }}{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li
                v-for="(items, heading) in inclusiveInService"
                :key="heading"
              > {{items.services}}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="row mx-auto">
          <div class="col-6 mx-auto p-0 before img-fluid">
            <font class="before-image-text">До</font>
          </div>

          <div class="col-6 mx-auto p-0 after img-fluid">
            <font class="after-image-text">Після</font>
          </div>
        </div>

        <servicesYoutubeVideo :videoUrl="videoUrl" />

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

  head () {
    return {
      title: this.heading.slice(0, 60),
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.heading} - ${this.firstParagraph}`.slice(0, 320)
        }
      ]
    }
  },
  data () {
    return {
      service: "15",
      heading: "МИЙКА МОТОРУ ПАРОЮ",
      category1: "5999 грн",
      category2: "6999 грн",
      category3: "8499 грн",
      videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
      firstParagraph:
        "Детейлінг моторного відсіку - важливий штрих в догляді за автомобілем.",
      question: 'Важливо: це не "мийка двигуна"! В чому різниця? ',
      secondParagraph:
        "Ми не ллємо в двигун воду керхером. Замість цього ми дбайливо очищаємо двигун і підкапотний простір паром і пензликами + використовуємо склади-діелектрики, які витісняють вологу і, тим самим, знижують ризик пошкодження електроніки в ході даної процедури.",
      thirdParagraph: "В результаті автомобіль ніби щойно з салону!",
      inclusiveInService: [
        {
          services: "Бережна мийка кузова"
        },
        {
          services: "Очищення підкапотного простору"
        },
        {
          services:
            "Полірування кузова: абразивне, коригуюче, протиголограмне, Поліровка дрібних деталей (простір під ручками, пластикові молдинги і ін.)"
        },
        {
          services:
            "Нанесення консерванту, що захищає двигун від шкідливих впливів навколишнього середовища"
        },
        {
          services: "Ретельна сушка"
        }
      ],
      timeTaken: "Час виконання послуги від 2 до 5 годин"
    };
  },
  mounted () {
    if (process.client) {
      this.$scrollTo("#top-contact", 100, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter10_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter10_002.jpg");
}
</style>
