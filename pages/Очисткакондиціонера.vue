<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <img src="~assets/img/ЧИСТКАДИСКІВ.png" :alt="heading">
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading}}</h1>
            <p>
              {{question}}{{ firstParagraph }}
              <br>
              {{ secondParagraph }}
              <br>
              {{titleOne}}
              <br>
              {{ thirdParagraph }}
              <br>
              {{titleTwo}}
              <br>
              {{ fourthParagraph }}
              <br>
              {{titleThree}}
              <br>
              {{ fifthParagraph }}
            </p>

            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li
                v-for="items in inclusiveInService"
                v-bind:key="id"
                class="list-unstyled"
                style="margin-left: -16px;"
              >{{ items.services }}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{timeTaken}}</h2>

        <div class="col-md-7 m-auto">
          <div class="row text-center">
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">Ⅰ категорія</a>
              <p class="pricing">1200 грн</p>
              <p class="mt-2 mb-0">
                середній
                бізнес
                спорт купе
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">0 грн</p>
              <p class="mt-2 mb-0">
                середній кросовер
                позашляховик
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">0 грн</p>
              <p class="mt-2 mb-0">
                повнорозмірний кросовер
                позашляховик
              </p>
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
      heading: "ОЧИСТКА КОНДИЦІОНЕРА",
      question:
        " Навіщо взагалі потрібна антибактеріальна чистка кондиціонера?",
      firstParagraph:
        " Навіщо взагалі потрібна антибактеріальна чистка кондиціонера?",
      secondParagraph:
        "Звідки в салоні автомобіля з'являється неприємний запах? Одним з основних джерел неприємного запаху в машині є наявність і поширення в повітрі хвороботворних бактерій, що виникає через загальне забруднення системи кондиціонування. Якщо не проводити регулярне чищення кондиціонера раз в три-чотири місяці, то неприємний запах в салоні стане вашим постійним супутником в дорозі і джерелом поганого настрою на весь день. Антибактеріальна чистка кондиціонера особливо актуальна для тих, у кого є маленькі діти, для курців, автовласників, які страждають на алергію. Ось деякі можливі негативні наслідки забруднення системи кондиціонування:",
      titleOne: "- Бактерії",
      thirdParagraph:
        "В системі утворюється конденсат, шкідливий для здоров'я. Бруд, вміщений у вологе середовище, починає розкладатися. Внаслідок цього, хвороботворні бактерії і грибки, підхоплені потоками повітря, швидко поширюються і це може негативно позначитися на вашому здоров'ї.",
      titleTwo: "- Алергія",
      fourthParagraph:
        "Різко збільшується ймовірність алергічної реакції навіть у тих людей, які ніколи не стикалися з такою проблемою.",
      titleThree: "- Легіонельоз",
      fifthParagraph:
        "Хвороба, причиною якої є бактерії, що живуть у вологому, брудному середовищі. Всі ці можливі ризики є достатньою причиною для того, щоб зробити антибактеріальну чистку кондиціонера автомобіля.",

      inclusiveInService: [
        {
          services:
            "Дезінфекція кондиціонера автомобіля за допомогою хімічних речовин. Препарат знищує всі поселення мікробів, бактерій і грибків, а крім того на тривалий час (до одного року) оберігає внутрішні поверхні кліматичної установки від нового нашестя невидимих ворогів."
        }
      ],
      timeTaken: "Час виконання послуги до 1 години"
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");

@import "~assets/scss/servicesPages.scss";

.service-time-image {
  background-image: url("~assets/img/beforeAfter6.png");
}

@import "~assets/scss/mobileResponsive.scss";
</style>
