<template>
  <section>
    <div class="container text-center top-grid pt-4 pb-5">
      <h1 class="text-left">
        Ми
        <br>пропонуємо
      </h1>
      <div class="row">
        <nuxt-link to="/Послуги/Полірування" class="col-4 p-0 one">
          <div class="card bg-inverse">
            <picture>
              <source srcset="~/assets/img/top1.jpg" type="image/webp">
              <img class="card-img" src="~/assets/img/top1.jpg" alt="ПОЛІРУВАННЯ">
            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-center">
              <h2 class="card-title">ПОЛІРУВАННЯ</h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/Послуги/Покриттявоском" class="col-8 p-0 two">
          <div class="card bg-inverse">
            <picture>
              <source srcset="~/assets/img/top2.jpg" type="image/webp">
              <img class="card-img" src="~/assets/img/top2.jpg" alt="ВОСКОВЕ ПОКРИТТЯ">
            </picture>

            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-center text-right"
            >
              <h2 class="card-title text-right">
                ВОСКОВЕ
                <br>ПОКРИТТЯ
              </h2>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="row">
        <nuxt-link to="/Послуги/Мийкамотору" class="col-4 p-0 three">
          <div class="card bg-inverse">
            <picture>
              <source srcset="~/assets/img/top3.jpg" type="image/webp">
              <img class="card-img" src="~/assets/img/top3.jpg" alt="МИЙКА МОТОРУ">
            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-right">
              <h2 class="card-title">
                МИЙКА
                <br>МОТОРУ
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/Послуги/Хімчистка" class="col-5 p-0 four">
          <div class="card bg-inverse">
            <picture>
              <source srcset="~/assets/img/top4.jpg" type="image/webp">
              <img class="card-img" src="~/assets/img/top4.jpg" alt="ХІМЧИСТКА">
            </picture>

            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-start text-center"
            >
              <h2 class="card-title">ХІМЧИСТКА</h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/Послуги/Реставраціяподряпин" class="col-3 p-0 five">
          <div class="card bg-inverse">
            <picture>
              <source srcset="~/assets/img/top5.jpg" type="image/webp">
              <img class="card-img" src="~/assets/img/top5.jpg" alt="РЕСТАВРАЦІЯ СКОЛІВ">
            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-right">
              <h2 class="card-title">
                РЕСТАВРАЦІЯ
                <br>СКОЛІВ
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/Послуги/КЕРАМІЧНЕПОКРИТТЯСИДІНЬ" class="col-md-8 offset-4 p-0 six">
          <div class="card bg-inverse">
            <picture>
              <source srcset="~/assets/img/top6.jpg" type="image/webp">
              <img class="card-img" src="~/assets/img/top6.jpg" alt="КЕРАМІЧНЕ ПОКРИТТЯ">
            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-center">
              <h2 class="card-title">КЕРАМІЧНЕ ПОКРИТТЯ</h2>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="row">
        <nuxt-link to="/Послуги/Передпродажнапідготовка" class="col-12 p-0 seven">
          <div class="card bg-inverse">
            <picture>
              <source srcset="~/assets/img/top7.jpg" type="image/webp">
              <img class="card-img" src="~/assets/img/top7.jpg" alt="ПЕРЕДПРОДАЖНА ПІДГОТОВКА">
            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-center text-left">
              <h2 class="card-title">
                ПЕРЕДПРОДАЖНА
                <br>ПІДГОТОВКА
              </h2>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="jumbotron recomendations">
      <div class="container text-center">
        <h2 class="text-left">Рекомендуємо</h2>

        <div class="row">
          <card class="mb-5 mx-auto"/>
          <card class="mb-5 mx-auto"/>
          <card class="mb-5 mx-auto"/>
          <card class="mb-5 mx-auto"/>
        </div>

        <a href="магазин" class="btn">Показати більше</a>
      </div>
    </div>

    <div class="container cars-card">
      <h2>Наші роботи</h2>

      <worksGallery/>
    </div>

    <ContactForm/>

    <progressSection/>
  </section>
</template>

<script>
import worksGallery from "@/components/gallery/worksGallery.vue";
import productCards from "@/components/shop/productCards";

export default {
  components: {
    worksGallery,
    productCards
  },

  head() {
    return {
      title:
        "Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто",
      titleTemplate: "Virus - %s!",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.top-grid {
  h1 {
    color: $headingsFontColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 47px;
    letter-spacing: -0.05em;
    margin-bottom: 20px;
  }

  h2 {
    color: $lightColor;
    font-family: $mainFont;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: normal;
    letter-spacing: 0.1em;
    color: $lightColor;
  }

  a {
    opacity: 1;
    transition: all ease-in-out 300ms;
    -webkit-transition: all ease-in-out 300ms;
    -moz-transition: all ease-in-out 300ms;
    -ms-transition: all ease-in-out 300ms;
    -o-transition: all ease-in-out 300ms;

    &:hover {
      opacity: 0.99;
      text-decoration: none;
      color: $redColor;
      transform: scale(1.01);
      -webkit-transform: scale(1.01);
      -moz-transform: scale(1.01);
      -ms-transform: scale(1.01);
      -o-transform: scale(1.01);
      color: $redColor;
    }
  }

  .one .card {
    border-top-left-radius: 20px;
    img {
      border-top-left-radius: 20px;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
    }
  }
  .two .card {
    border-top-right-radius: 20px;
    img {
      border-top-right-radius: 20px;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
    }
  }
  .three .card {
    img {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
    }
  }
  .four {
    margin-top: -85px;
    .card {
      img {
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
        object-fit: cover;
        height: 312px;
      }
    }
  }
  .five {
    margin-top: -85px;
    .card {
      img {
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
        object-fit: cover;
        height: 312px;
      }
    }
  }
  .six {
    margin-top: -305px;
    .card {
      img {
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      }
    }
  }
  .seven .card {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    img {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
    }
  }
}

.jumbotron.recomendations {
  background: #f2f2f2;
  padding: 40px 0;
  margin: 0;
  margin-top: 40px;

  a .btn {
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;

    &:hover {
      color: $redColor;
      background: $lightColor;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }

  h2 {
    color: $headingsFontColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 47px;
    letter-spacing: -0.05em;
    margin-bottom: 40px;
  }

  .card-deck {
    // Currently disabled but this is used for there styling
    .owl-carousel .owl-nav button.owl-next,
    .owl-carousel .owl-nav button.owl-prev {
      background: 0 0;
      color: $redColor;
      border: none;
      padding: 0;
      font: inherit;
      font-size: 42px;
      cursor: pointer;
      margin-top: -40px;
    }

    .owl-theme .owl-nav.disabled + .owl-dots {
      margin-top: -5px;
      z-index: 3;
      outline: none;
    }

    .card {
      width: 100%;
      max-width: 343px;
      min-width: 285px;
      height: 343px;
      background: $lightColor;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;

      img {
        align-self: center;

        &.small-img {
          width: 100%;
          height: auto;
          max-width: 343px;
          min-height: 200px;
          object-fit: scale-down;
        }
      }

      &.one,
      &.four,
      &.seven {
        img {
          width: 209px;
          height: auto;
        }
      }

      &.two,
      &.five,
      &.eight {
        img {
          margin: 8.5px 0;
          width: 182px;
          height: auto;
        }
      }

      &.three,
      &.six,
      &.nine {
        img {
        }
      }

      hr {
        width: 270px;
        align-self: center;
        margin: 0;
        border: 1px solid #c4c4c4;
      }

      .card-title {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: normal;
        color: $darkColor;
      }

      small {
        s {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: normal;
          text-align: center;
          text-decoration-line: line-through;
          color: $redColor;
        }
      }

      .card-text {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 28px;
        letter-spacing: -0.05em;
        color: $headingsFontColor;

        span {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 10px;
          text-align: center;
        }
      }

      .discount {
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;
        color: #239a0f;
        margin-right: 22px;
      }

      a .btn {
        padding: 10px 30px;
        background: $redColor;
        border-radius: 50px;
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        text-align: center;
        color: $lightColor;
        text-decoration: none;
        transition: ease-in-out 300ms;
        -webkit-transition: ease-in-out 300ms;
        -moz-transition: ease-in-out 300ms;
        -ms-transition: ease-in-out 300ms;
        -o-transition: ease-in-out 300ms;

        &:hover {
          color: $redColor;
          background: $lightColor;
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
        }
      }
    }

    .card__hover {
      transition: transform 500ms;
      -webkit-transition: transform 500ms;
      -moz-transition: transform 500ms;
      -ms-transition: transform 500ms;
      -o-transition: transform 500ms;

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.15);
        content: "";
        opacity: 0;
        z-index: -1;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;
      }

      &:hover,
      &:focus {
        transform: scale3d(1.01, 1.01, 1);
        -webkit-transform: scale3d(1.01, 1.01, 1);
        -moz-transform: scale3d(1.01, 1.01, 1);
        -ms-transform: scale3d(1.01, 1.01, 1);
        -o-transform: scale3d(1.01, 1.01, 1);

        &::after {
          opacity: 1;
        }
      }
    }
  }

  .btn {
    padding: 10px 32px;
    background: $redColor;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
    border-radius: 50px;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: normal;
    text-align: center;
    color: $lightColor;
    border: none;
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;

    &:hover {
      color: $redColor;
      background: $lightColor;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }

    &.see-more {
      margin-top: 40px;
    }
  }
}

.cars-card {
  margin-bottom: 40px;

  h2 {
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 39px;
    letter-spacing: -0.05em;
    color: $headingsFontColor;
    margin: 40px 0;
  }

  .card__hover_two {
    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: scale3d(0, 0, 1);
      transition: transform 0.3s ease-out 0s;
      background: rgba(255, 255, 255, 0.1);
      content: "";
      pointer-events: none;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      -ms-border-radius: 20px;
      -o-border-radius: 20px;
    }

    &::before {
      transform-origin: left top;
    }

    &::after {
      transform-origin: right bottom;
    }

    &:hover,
    &:focus {
      &::before,
      &::after {
        transform: scale3d(1, 1, 1);
      }
    }
  }
}

@include mediaMenu {
  .top-grid {
    .four,
    .five {
      margin-top: -70px;
      .card {
        img {
          object-fit: cover;
          height: 260px;
        }
      }
    }

    .six {
      margin-top: -257px;
      .card {
        img {
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
        }
      }
    }
  }
}

@include mediaLg2 {
  .jumbotron {
    margin-right: 0px;

    &.recomendations {
      padding-left: 0px;
      padding-right: 2rem;

      .item {
        margin-left: 0px;
      }
    }
  }
}

@include mediaLg {
  .top-grid {
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 20px;
    }
    .four,
    .five {
      margin-top: -52px;
      .card {
        img {
          object-fit: cover;
          height: 200px;
        }
      }
    }

    .six {
      margin-top: -193px;
    }
  }
  .jumbotron {
    margin-right: 0px;

    &.recomendations {
      padding-left: 0px;
      padding-right: 0px;
      .item {
        margin-left: -12px;
      }
    }
  }
}

@include mediaMd {
  .top-grid {
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 15px;
      line-height: 16px;
    }
    .four,
    .five {
      margin-top: -40px;
      .card {
        img {
          object-fit: cover;
          height: 150px;
        }
      }
    }

    .six {
      margin-top: -145px;
    }
  }
}

@include mediaSm {
  .top-grid {
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 58.59%;

      letter-spacing: -0.05em;
    }

    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 15px;
      line-height: 16px;
    }

    .four,
    .five {
      margin-top: -30px;
      .card {
        img {
          object-fit: cover;
          height: 120px;
        }
      }
    }
    .six {
      margin-top: -113px;
    }
    .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0.25rem 0.25rem 0.5rem 0.25rem;
    }
  }

  .recomendations {
    padding-left: 20px;
    padding-right: 0px;

    .item {
      margin-left: 18px;
    }
  }

  .cars-card {
    margin-bottom: 40px;

    h2 {
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 80px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
    }
  }
}

@media only screen and (min-width: 569px) and (max-width: 573px) {
  .top-grid {
    .six {
      margin-top: -152px !important;
    }
  }
}

@media only screen and (min-width: 468px) and (max-width: 499px) {
  .top-grid {
    .six {
      margin-top: -135px !important;
    }
  }
}

@media only screen and (min-width: 405px) and (max-width: 416px) {
  .top-grid {
    .six {
      margin-top: -108px !important;
    }
  }
}

@media only screen and (min-width: 350px) and (max-width: 404px) {
  .top-grid {
    .four,
    .five {
      margin-top: -30px !important;
      .card {
        img {
          object-fit: cover;
          height: 100px !important;
        }
      }
    }
    .six {
      margin-top: -95px !important;
    }
  }
}

@include mediaXSm {
  .top-grid {
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 12px;
      line-height: 14px;

      margin-bottom: 0;
    }

    .four,
    .five {
      margin-top: -26px;
      .card {
        img {
          object-fit: cover;
          height: 100px;
        }
      }
    }
    .six {
      margin-top: -100px;
    }
    .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0.25rem 0.2rem 0.5rem 0.2rem;
    }
  }

  .recomendations {
    h2 {
      color: $headingsFontColor;
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 47px;
      letter-spacing: -0.05em;
      margin-bottom: 40px;
    }
  }

  .recomendations {
    padding-left: 10px;
    padding-right: 0px;

    .item {
      margin-left: 10px;
    }
  }

  .cars-card {
    h2 {
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
    }
  }
}

@media only screen and (min-width: 330px) and (max-width: 358px) {
  .top-grid {
    .six {
      margin-top: -95px !important;
    }
  }
}

@include mediaXXSm {
  .top-grid {
    h2 {
      font-style: normal;
      font-weight: 900;
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 0;
    }
    .four,
    .five {
      margin-top: -22px;
      .card {
        img {
          object-fit: cover;
          height: 80px;
        }
      }
    }

    .six {
      margin-top: -85px;
    }
    .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0.25rem 0.1rem 0.5rem 0.1rem;
    }
  }
  .cars-card {
    text-align: center;

    h2 {
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
    }
  }

  .recomendations {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;

    h2 {
      color: $headingsFontColor;
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 47px;
      letter-spacing: -0.05em;
      margin-bottom: 40px;
    }

    .item {
      margin-left: 5px;
    }

    .card-deck .card {
      width: 100%;
      max-width: 240px;
      min-width: 240px;
      height: 343px;
      background: $lightColor;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      margin-bottom: 40px;
      justify-items: center;
      margin-left: auto;
      margin-right: auto;

      hr {
        width: 80%;
        align-self: center;
        margin: 0;
        border: 1px solid $borderColor;
      }

      hr {
        width: 80%;
      }

      .card-text {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.05em;
        color: $headingsFontColor;

        span {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 10px;
          text-align: center;
        }
      }

      .btn {
        padding: 10px 28px;
        background: $redColor;
        border-radius: 50px;
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: normal;
        text-align: center;
        color: $lightColor;
        text-decoration: none;
        transition: ease-in-out 300ms;
        -webkit-transition: ease-in-out 300ms;
        -moz-transition: ease-in-out 300ms;
        -ms-transition: ease-in-out 300ms;
        -o-transition: ease-in-out 300ms;

        &:hover {
          color: $redColor;
          background: $lightColor;
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
        }
      }
    }
  }
}
</style>
