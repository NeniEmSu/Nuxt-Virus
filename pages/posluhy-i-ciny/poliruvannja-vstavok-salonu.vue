<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h2 class="info-pages text-center mobile-only">{{ heading }}</h2>
        <div class="row">
          <div class="col-xl-6 text-center">
            <b-img-lazy
              src="~assets/img/Вставкисалону.jpg"
              :alt="heading"
            >

            </b-img-lazy>

          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">{{ heading }}</h2>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>

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
  head () {
    return {
      title: this.heading.slice(0, 60),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.firstParagraph.slice(0, 320)
        }
      ]
    }
  },
  data () {
    return {
      service: "2",
      heading: "ПОЛІРУВАННЯ ВСТАВОК САЛОНУ",
      category1: "500 грн",
      category2: "600 грн",
      category3: "700 грн",
      firstParagraph:
        "Коли ти щиро любиш свій автомобіль, хочеться, щоб кожна його деталь була бездоганна. Чистий салон - це тільки половина справи. Важливо також повернути первісний блиск лакованим вставкам салону.",
      secondParagraph:
        "Детейлінг-полірування максимально дбайливо видалить дрібні подряпини і потертості, і вставки будуть як нові!",
      inclusiveInService: [
        {
          services:
            "Підготовка до полірування, обклеювання пластикових деталей для захисту під час полірування"
        },
        {
          services: "Абразивна поліровка для видалення подряпин"
        },
        {
          services:
            "Глибоке очищення фар абразивної глиною і підготовка до полірування"
        },
        {
          services: "Фінішна полірування для додання блиску"
        },
        {
          services: "Очищення вставок від слідів пасти"
        }
      ],
      timeTaken: "Час виконання послуги до 1 дня"
    };
  },
  mounted () {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter2_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter2_002.jpg");
}
</style>
