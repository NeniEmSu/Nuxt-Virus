<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/передніхсидінь.png" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading }}</h1>
            <p class>
              {{ firstParagraph }}
              <br>
              <br>Ми легко позбудемося бруду, завдяки правильно підібраним
              високоякісним препаратам для чистки шкіри
              <br>• без
              пересушування;
              <br>• без жирного блиску;
              <br>• без розводів;
              <br>• без каустичної соди, фосфатів та кислоти.
              <br>
            </p>
          </div>
        </div>

        <p class>{{ secondParagraph }}</p>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="card p-0 mt-4 service-time-image" style="background-Image: ">
          <div class="row my-auto">
            <p class="before col-sm-6 text-md-right text-center my-auto p-5">До</p>
            <!-- <hr class="col-1 my-auto d-none d-sm-block"> -->
            <p class="after col-sm-6 text-md-left text-center my-auto p-5">Після</p>
          </div>
        </div>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">275 грн</p>
              <p class="mt-2 mb-0">середній бізнес спорт купе</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">330 грн</p>
              <p class="mt-2 mb-0">середній кросовер позашляховик</p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">385 грн</p>
              <p class="mt-2 mb-0">повнорозмірний кросовер позашляховик</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactForm/>

    <progressSection/>
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
export default {
  layout: "Services",
  components: {
    ContactForm,
    progressSection
  },

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
    };
  },
  data() {
    return {
      heading: "ХІМЧИСТКА передніх сидінь (тканина, шкіра)",
      question: "Для чого полірувати стійки?",
      firstParagraph:
        "Хімчистка шкіряних сидінь авто передбачає очищення їх від пилу, бруду і нашарувань. Подальша обробка шкіряних деталей захисними засобами надає їм м'якість і еластичність, яка зберігається надовго. У багатьох випадках потрібне розбирання обшивки автомобіля, демонтаж сидінь, або часткове розбирання панелей, для забезпечення доступу до найскладнішим ділянкам, яким необхідне очищення і обробка.",
      secondParagraph:
        "Хімчистка тканинних сидінь - текстильна оббивка після чистки і обробки відновлює свій «рідний» колір, в тому числі це стосується елементів салону з алькантари, ми використовуємо особливий підхід до чищення, щоб покриття не позбулося своїх властивостей. Використовуючи очистку парою, ми виштовхуємо весь бруд, який осів глибоко, і при цьому не шкодимо Вашому здоров’ю. При детейлінг чистці сидінь з тканини багато уваги приділяється якісному виведенню плям, використовуючи препарати, які повністю відповідають характеру забруднення, і його рівню PH, а це більш ніж 20 різновидів. Усі препарати безпечні для навколишнього середовища і здоров‘я людей!",
      timeTaken: "Час виконання послуги 5 годин"
    };
  },
  mounted() {
    if (process.client) {
      this.$scrollTo("#__nuxt", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";

@import "~assets/scss/servicesPages.scss";

.service-time-image {
  background-image: url("~assets/img/beforeAfter7.png");
}
</style>
