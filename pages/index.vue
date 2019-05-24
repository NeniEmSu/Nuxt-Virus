<template>
  <section>
    <div class="container text-center top-grid pt-4 pb-5">
      <h1 class="text-left">
        Ми
        <br>пропонуємо
      </h1>
      <div class="row">
        <nuxt-link to="/Полірування" class="col-4 p-0 one">
          <div class="card bg-inverse">
            <img class="card-img" src="~/assets/img/top1.jpg" alt="ПОЛІРУВАННЯ">
            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-center">
              <h2 class="card-title">ПОЛІРУВАННЯ</h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/Покриттявоском" class="col-8 p-0 two">
          <div class="card bg-inverse">
            <img class="card-img" src="~/assets/img/top2.jpg" alt="ВОСКОВЕ ПОКРИТТЯ">
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
        <nuxt-link to="/Мийкамотору" class="col-4 p-0 three">
          <div class="card bg-inverse">
            <img class="card-img" src="~/assets/img/top3.jpg" alt=" МИЙКА МОТОРУ">
            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-right">
              <h2 class="card-title">
                МИЙКА
                <br>МОТОРУ
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/Хімчистка" class="col-5 p-0 four">
          <div class="card bg-inverse">
            <img class="card-img" src="~/assets/img/top4.jpg" alt="ХІМЧИСТКА">
            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-start text-center"
            >
              <h2 class="card-title">ХІМЧИСТКА</h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/Реставраціяподряпин" class="col-3 p-0 five">
          <div class="card bg-inverse">
            <img class="card-img" src="~/assets/img/top5.jpg" alt="РЕСТАВРАЦІЯ СКОЛІВ">
            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-right">
              <h2 class="card-title">
                РЕСТАВРАЦІЯ
                <br>СКОЛІВ
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/КЕРАМІЧНЕПОКРИТТЯСИДІНЬ" class="col-md-8 offset-4 p-0 six">
          <div class="card bg-inverse">
            <img class="card-img" src="~/assets/img/top6.jpg" alt="КЕРАМІЧНЕ ПОКРИТТЯ">
            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-center">
              <h2 class="card-title">КЕРАМІЧНЕ ПОКРИТТЯ</h2>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="row">
        <nuxt-link to="/Передпродажнапідготовка" class="col-12 p-0 seven">
          <div class="card bg-inverse">
            <img class="card-img" src="~/assets/img/top7.jpg" alt="ПЕРЕДПРОДАЖНА ПІДГОТОВКА">
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

        <div class="sales-cards col-md text-center mx-auto p-0">
          <productCards/>
        </div>

        <a href="магазин" class="btn">Показати більше</a>
      </div>
    </div>

    <div class="container cars-card">
      <h2>Наші роботи</h2>
      <div class="row mx-auto">
        <div class="text-center col-xl-6">
          <a
            id="card-1"
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('audi')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card p-0 mx-auto one">
              <div class="row text-center card__hover_two work-one img-fluid">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Audi
                    <span>A6</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            id="card-2"
            class
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('bmw')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card p-0 mx-auto two">
              <div class="row text-center card__hover_two work-two">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    BMW
                    <span>4 Series</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            id="card-3"
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('cooper')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto three">
              <div class="row text-center card__hover_two work-three">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Mini Cooper
                    <span>Works</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            id="card-4"
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('merin')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto four">
              <div class="row text-center card__hover_two work-four">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Mercedes
                    <span>GLS</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            id="card-5"
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('rover')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto five">
              <div class="row text-center card__hover_two work-five">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Range
                    <span>Rover</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            id="card-6"
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('subaru')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto six">
              <div class="row text-center card__hover_two work-six">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Subaru
                    <span>Forester</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            id="card-7"
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('santa_fe')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto seven">
              <div class="row text-center card__hover_two work-seven">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Hundai
                    <span>Santa Fe</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            id="card-8"
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('vw')"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto eight">
              <div class="row text-center card__hover_two work-eight">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Wolksvagen
                    <span>Touareg</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <ContactForm/>

    <progressSection/>
  </section>
</template>

<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
import productCards from "@/components/shop/productCards";

export default {
  components: {
    ContactForm,
    progressSection,
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
@import "~assets/scss/config.scss";

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
      padding: 0 !important;
      font: inherit;
      font-size: 42px;
      cursor: pointer !important;
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

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0 !important;
    margin-left: -1px !important;
  }

  .card {
    background: #000000;
    width: 100%;
    max-width: 580px;
    min-width: 540px;
    height: 168px;
    margin: 5px 0;
    justify-content: center;
    justify-items: center;
    align-self: center;
    padding: 0 !important;
    cursor: pointer;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;

    .work-one {
      box-sizing: border-box;
      background-image: url("~assets/imgWebP/car1.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: border-box;
      height: 100%;
      max-height: 168px;
    }

    .work-two {
      background-image: url("~assets/imgWebp/car2.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: border-box;
      height: 100%;
    }

    .work-three {
      background-image: url("~assets/imgWebp/car3.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-four {
      background-image: url("~assets/imgWebp/car4.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-five {
      background-image: url("~assets/imgWebp/car5.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-six {
      background-image: url("~assets/imgWebp/car6.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-seven {
      background-image: url("~assets/imgWebp/car7.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-eight {
      background-image: url("~assets/imgWebp/car8.webp");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    h4 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: normal;
      text-align: right;
      letter-spacing: 0.05em;
      color: $lightColor;
      margin-right: 5px;

      span {
        font-family: $mainFont;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;
        text-align: right;
        letter-spacing: 0.05em;
        color: $lightColor;
      }
    }

    img {
      height: 168px;
      margin-left: -1px;
    }
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
  .cars-card {
    .card {
      max-width: 580px;
      min-width: 200px;
    }

    h2 {
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 62px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
      text-align: center;
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
      margin-top: -110px;
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

    .card {
      background: transparent;
      border-radius: 20px;

      max-width: 580px;
      height: 168px;
      margin: 5px 0;
      justify-content: center;
      justify-items: center;
      align-self: center;
      padding: 0;
      border: 0;

      h4 {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        text-align: center;
        letter-spacing: 0.05em;
        color: $lightColor;
        margin-right: 10px;
        background: $darkColor;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;

        span {
          font-family: $mainFont;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: normal;
          text-align: right;
          letter-spacing: 0.05em;
          color: $lightColor;
        }
      }
    }
  }

  .cars-card {
    .card {
      .work-one {
        box-sizing: border-box;
        background-image: url("~assets/imgWebp/1.webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: border-box;
        height: 100%;
        max-height: 168px;
      }

      .work-two {
        background-image: url("~assets/imgWebp/1(1).webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: border-box;
        height: 100%;
      }

      .work-three {
        background-image: url("~assets/imgWebp/1(2).webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-four {
        background-image: url("~assets/imgWebp/1(3).webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-five {
        box-sizing: border-box;
        background-image: url("~assets/imgWebp/1(4).webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-six {
        background-image: url("~assets/imgWebp/1(5).webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-seven {
        background-image: url("~assets/imgWebp/1(6).webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-eight {
        background-image: url("~assets/imgWebp/1(7).webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }
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
    text-align: center;

    h2 {
      color: $headingsFontColor;
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 50px !important;
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
    text-align: center;

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
      font-size: 42px !important;
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
        padding: 10px 28px !important;
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
