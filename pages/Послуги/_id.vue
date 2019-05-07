<template>
  <div>
    <div class="jumbotron">
      <div class="container text-left">
        <div class="video-text row">
          <div class="col-xl-6">
            <video controls autoplay="true">
              <source src="../../assets/video/vid1.mp4" type="video/mp4">
            </video>
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages">{{ heading}}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
          </div>
        </div>
        <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
        <ul class="ml-3">
          <li v-for="items in inclusiveInService">{{ items.services }}</li>
        </ul>

        <h2 class="red">{{timeTaken}}</h2>

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
              <p class="pricing">5999 грн</p>
              <p class="mt-2 mb-0">
                середній
                бізнес
                спорт купе
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠ категорія</a>
              <p class="pricing">6999 грн</p>
              <p class="mt-2 mb-0">
                середній кросовер
                позашляховик
              </p>
            </div>
            <div class="col-md-4 mx-auto">
              <a href="#" class="btn category-selector">ⅠⅠⅠ категорія</a>
              <p class="pricing">8499 грн</p>
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
  layout: "default",
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
      heading: "ПОЛІРУВАННЯ",
      headingVideo: "../../assets/video/vid2.mp4",
      firstParagraph:
        "Якщо ви не знаєте, яке полірування вибрати – абразивне, відновлююче, захисне - нічого страшного, не ламайте голову! Суть детейлінг-полірування в студії VIRUS - це індивідуальний підхід до кожного автомобіля, в залежності від його стану.",
      secondParagraph:
        "Ми не просто приберемо дрібні подряпини і «павутину» від мийок, додамо авто блиск і яскравість кольору, але і зробимо це найбільш щадним для Вашого автомобіля способом. Полірування виконується в кілька етапів, а всі матеріали для виконання робіт підбираються індивідуально, залежно від стану лакофарбового покриття. Ми використовуємо тільки преміальні бренди автохімії!",
      inclusiveInService: [
        {
          services:
            "Консультація майстра і підбір оптимального комплексу робіт по поліровці автомобіля. Мийка кузова, при необхідності очищення від слідів бітуму і дорожньої розмітки. Очистка колісних  дисків (без зняття)"
        },
        {
          services:
            "Підготовка до полірування: очищення автоскрабом / глиною, захист пластикових і гумових елементів"
        },
        {
          services:
            "Полірування кузова: абразивне, коригуюче, протиголограмне, Поліровка дрібних деталей (простір під ручками, пластикові молдинги і ін.)"
        },
        {
          services:
            "Маскування сколів фарбою в тон кузова (за бажанням, і за наявності фарби підібраної в тон Вашого автомобіля)"
        },
        {
          services:
            "Вологе прибирання в салону в подарунок (включно з багажним відділенням)"
        }
      ],
      timeTaken: "ЧАС ВИКОНАННЯ ПОСЛУГИ ВІД 1 ДО 2 ДНІВ"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");

h1.info-pages {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: normal;
  text-transform: uppercase;

  color: #8b8b8b;
}

h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 14px !important;
  line-height: normal;
  text-transform: uppercase;
  color: #8b8b8b;
  text-align: left !important;
  margin: 0 0 10px 0;
}

.red {
  color: $redColor;
}

p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: normal;

  color: $darkColor;
}

main li {
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: $darkColor;
}

.before,
.after {
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: normal;

  color: #f2f2f2;
}

.pricing {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: normal;

  color: #8b8b8b;
}

.active {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: normal;

  color: $redColor;
}

.btn.category-selector {
  padding: 7px 23px;
  background-color: transparent;
  border-radius: 50px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;

  color: $darkColor;
  line-height: normal;
  text-align: center;
  border: 1px solid $redColor;
  box-sizing: border-box;
  border-radius: 50px;
  text-decoration: none;
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;

  margin-top: 20px;
  margin-bottom: 20px;
}

.btn.category-selector.btn:hover {
  color: $lightColor;
  background-color: $redColor;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.btn.category-selector.activeBtn {
  color: $lightColor;
  background-color: $redColor;
  box-shadow: none;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.service-time-image {
  background-image: url("~assets/img/beforeAfter1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $darkColor;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  height: 300px;
}

.service-time-image p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;

  color: #f2f2f2;
}

.service-time-image hr {
  border: 1px solid #f2f2f2;
  transform: rotate(90deg);
  padding-top: 0;
  padding-bottom: 0;
}

video {
  margin-bottom: 40px;
  width: 100%;
  max-width: 540px;
  height: 100%;
  max-height: 300px;
}

.video-placeholder-1 {
  background-image: url(~assets/img/Блог2-small.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.video-placeholder-2 {
  background-image: url(~assets/img/services3.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.video-placeholder-3 {
  background-image: url(~assets/img/services2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.video-placeholder-4 {
  background-image: url(~assets/img/services4.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.video-placeholder-5 {
  background-image: url(~assets/img/Блог1-small.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.contact p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: $darkColor;
}

.contact h3,
.contact h3 span.red {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
}

@import "~assets/scss/mobileResponsive.scss";
</style>
