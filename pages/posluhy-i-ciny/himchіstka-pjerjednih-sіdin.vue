<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs :heading="heading" class="desktop-tablet-only" />
      <div class="container text-left">
        <h2 class="info-pages mobile-only">
          {{ heading }}
        </h2>
        <div class="row">
          <div class="col-xl-6 text-center">
            <img src="~assets/img/передніхсидінь.jpg" :alt="heading" />
          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">
              {{ heading }}
            </h2>
            <p class>
              {{ firstParagraph }}
              <br />
              <br />Ми легко позбудемося бруду, завдяки правильно підібраним
              високоякісним препаратам для чистки шкіри <br />• без
              пересушування; <br />• без жирного блиску; <br />• без розводів;
              <br />• без каустичної соди, фосфатів та кислоти.
              <br />
            </p>
          </div>
        </div>

        <p class>
          {{ secondParagraph }}
        </p>

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
  head() {
    return {
      title: "Детейлінг центр Virus Тернопіль.",
      titleTemplate: this.heading + " - %s!",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри."
        }
      ]
    }
  },
  data() {
    return {
      service: "6",
      heading: "ХІМЧИСТКА передніх сидінь (тканина, шкіра)",
      category1: "275 грн",
      category2: "330 грн",
      category3: "385 грн",
      videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
      question: "Для чого полірувати стійки?",
      firstParagraph:
        "Хімчистка шкіряних сидінь авто передбачає очищення їх від пилу, бруду і нашарувань. Подальша обробка шкіряних деталей захисними засобами надає їм м'якість і еластичність, яка зберігається надовго. У багатьох випадках потрібне розбирання обшивки автомобіля, демонтаж сидінь, або часткове розбирання панелей, для забезпечення доступу до найскладнішим ділянкам, яким необхідне очищення і обробка.",
      secondParagraph:
        "Хімчистка тканинних сидінь - текстильна оббивка після чистки і обробки відновлює свій «рідний» колір, в тому числі це стосується елементів салону з алькантари, ми використовуємо особливий підхід до чищення, щоб покриття не позбулося своїх властивостей. Використовуючи очистку парою, ми виштовхуємо весь бруд, який осів глибоко, і при цьому не шкодимо Вашому здоров’ю. При детейлінг чистці сидінь з тканини багато уваги приділяється якісному виведенню плям, використовуючи препарати, які повністю відповідають характеру забруднення, і його рівню PH, а це більш ніж 20 різновидів. Усі препарати безпечні для навколишнього середовища і здоров‘я людей!",
      timeTaken: "Час виконання послуги 5 годин"
    }
  },
  mounted() {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter7_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter7_002.jpg");
}
</style>
