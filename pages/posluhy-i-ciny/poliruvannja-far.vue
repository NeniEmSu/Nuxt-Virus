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
              src="~assets/img/Поліруванняфар.jpg"
              :alt="heading"
            >

            </b-img-lazy>

          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">{{ heading }}</h2>
            <p class>
              {{ question }}
              <br>
              {{ firstParagraph }}
            </p>
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
      service: "1",
      heading: "ПОЛІРУВАННЯ Фар",
      category1: "600 грн",
      category2: "700 грн",
      category3: "800 грн",
      question: "Навіщо полірувати фари?",
      firstParagraph:
        "Згодом скло і пластик затираються, мутніють. Відполіровані фари пропускають більше світла (в середньому на 30%!), Що покращує видимість на дорозі і забезпечує Вашу безпеку.",
      secondParagraph:
        "Крім того, це красиво. Коли весь автомобіль блискучий, забруднені фари виглядають несолідно. Втім, навпаки теж не дуже)) Тому полірування фар важливо робити в комплексі з поліруванням автомобіля.",
      inclusiveInService: [
        {
          services: "Мийка кузова"
        },
        {
          services:
            "Підготовка до полірування: очищення автоскрабом / глиною, захист пластикових і гумових елементів"
        },
        {
          services:
            "Глибоке очищення фар абразивної глиною і підготовка до полірування"
        },
        {
          services: "Абразивне поліровання фар"
        },
        {
          services: "Фінішне полірування фар"
        },
        {
          services: "Очищення фар від слідів пасти після полірування"
        }
      ],
      timeTaken: "Час виконання послуги 3 години"
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
  background-image: url("~assets/img/beforeAfter3_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter3_002.jpg");
}
</style>
