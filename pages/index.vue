<template>
  <section>
    <div class="container text-center top-grid pt-4 pb-5">
      <h1 class="text-left">
        Ми
        пропонуємо
      </h1>
      <div class="row">
        <nuxt-link
          to="/posluhy-i-ciny/poliruvannja-avtomobilja"
          class="col-4 p-0 one"
        >
          <div class="card bg-inverse">
            <picture>
              <source
                srcset="~/assets/imgWebP/top1.webp"
                type="image/webp"
              >
              <b-img-lazy
                src="~/assets/img/top1.jpg"
                class="card-img"
                alt="ПОЛІРУВАННЯ"
              />
            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-center">
              <h2 class="card-title">
                ПОЛІРУВАННЯ
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/posluhy-i-ciny/pokrittja-tvjerdim-univjersalnim-voskom-soft-99"
          class="col-8 p-0 two"
        >
          <div class="card bg-inverse">
            <picture>
              <source
                srcset="~/assets/imgWebP/top2.webp"
                type="image/webp"
              >
              <b-img-lazy
                src="~/assets/img/top1.jpg"
                class="card-img"
                alt="ВОСКОВЕ ПОКРИТТЯ"
              />

            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-center text-right">
              <h2 class="card-title text-right">
                ВОСКОВЕ <br>
                ПОКРИТТЯ
              </h2>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="row">
        <nuxt-link
          to="/posluhy-i-ciny/mijka-motoru-paroju"
          class="col-4 p-0 three"
        >
          <div class="card bg-inverse">
            <picture>
              <source
                srcset="~/assets/imgWebP/top3.webp"
                type="image/webp"
              >
              <b-img-lazy
                src="~/assets/img/top3.jpg"
                class="card-img"
                alt="МИЙКА МОТОРУ"
              />

            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-right">
              <h2 class="card-title">
                МИЙКА
                <br>МОТОРУ
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/posluhy-i-ciny/himchistka"
          class="col-5 p-0 four"
        >
          <div class="card bg-inverse">
            <picture>
              <source
                srcset="~/assets/imgWebP/top4.webp"
                type="image/webp"
              >
              <b-img-lazy
                src="~/assets/img/top4.jpg"
                class="card-img"
                alt="ХІМЧИСТКА"
              />

            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-start text-center">
              <h2 class="card-title">
                ХІМЧИСТКА
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/posluhy-i-ciny/rjestavnacija-podrjapin-na-kuzovi"
          class="col-3 p-0 five"
        >
          <div class="card bg-inverse">
            <picture>
              <source
                srcset="~/assets/imgWebP/top5.webp"
                type="image/webp"
              >
              <b-img-lazy
                src="~/assets/img/top5.jpg"
                class="card-img"
                alt="РЕСТАВРАЦІЯ СКОЛІВ"
              />

            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-right">
              <h2 class="card-title">
                РЕСТАВРАЦІЯ
                <br>СКОЛІВ
              </h2>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/posluhy-i-ciny/kjeramichnje-pokrittja-sidin"
          class="col-md-8 offset-4 p-0 six"
        >
          <div class="card bg-inverse">
            <picture>
              <source
                srcset="~/assets/imgWebP/top6.webp"
                type="image/webp"
              >
              <b-img-lazy
                src="~/assets/img/top6.jpg"
                class="card-img"
                alt="КЕРАМІЧНЕ ПОКРИТТЯ"
              />

            </picture>

            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end text-center">
              <h2 class="card-title">
                КЕРАМІЧНЕ ПОКРИТТЯ
              </h2>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="row">
        <nuxt-link
          to="/posluhy-i-ciny/pjerjedprodazhna-pidgotovka"
          class="col-12 p-0 seven"
        >
          <div class="card bg-inverse">
            <picture>
              <source
                srcset="~/assets/imgWebP/top7.webp"
                type="image/webp"
              >
              <b-img-lazy
                src="~/assets/img/top7.jpg"
                class="card-img"
                alt="ПЕРЕДПРОДАЖНА ПІДГОТОВКА"
              />

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
        <h2 class="text-left">
          Рекомендуємо
        </h2>

        <client-only>
          <carousel
            :autoplay="true"
            :nav="false"
            :items="4"
            :lazy-load="true"
            :loop="true"
            :mouse-drag="true"
            :touch-drag="true"
            :autoplay-hover-pause="true"
            :responsive="{
              0: { items: 1, nav: false },
              350: { items: 2, nav: false },
              550: { items: 3, nav: false },
              767: { items: 2, nav: false },
              992: { items: 3, nav: false },
              1200: { items: 4, nav: false }
            }"
          >
            <card
              v-for="product in products"
              :key="product._id"
              class="mb-5 mx-auto"
              :name="product.name"
              :summary="product.Overview"
              :price="product.Price"
              :image="
                `${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`
              "
              :link="'/mahazyn/' + product.name_slug"
              :stock="product.Stock"
            />
          </carousel>
        </client-only>

        <nuxt-link
          to="/mahazyn"
          class="btn"
        >
          Показати більше
        </nuxt-link>
      </div>
    </div>

    <div class="container cars-card">
      <h2>Наші роботи</h2>

      <worksGallery />
    </div>

    <ContactForm />

    <progressSection />
  </section>
</template>

<script>
import worksGallery from '@/components/gallery/worksGallery.vue'

export default {
  components: {
    worksGallery
  },

  data () {
    return {
      imageApiUrl: 'https://admin.virus.te.ua/api/cockpit/image?token=9fc49d5af4dda3c961d71b489540a4'
    }
  },

  head () {
    return {
      title: 'Детейлінг центр Virus - Хімчистка, полірування, реставрація авто'.slice(
        0,
        60
      ),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри.'.slice(
            0,
            320
          )
        }
      ]
    }
  },
  async asyncData ({ app, error }) {
    const { data } = await app.$axios.post(
      'https://admin.virus.te.ua/api/collections/get/Product?token=9fc49d5af4dda3c961d71b489540a4&rspc=1',
      JSON.stringify({
        filter: { Published: true },
        limit: 6,
        sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    if (!data.entries[0]) {
      return error({ message: '404 Page not found', statusCode: 404 })
    }

    return { products: data.entries }
  }

}
</script>

<style lang="scss" scoped>
.top-grid {
  h1 {
    color: $headingsFontColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 70%;
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

.recomendations {
  background: #f2f2f2;
  padding: 40px 0;
  margin: 0;
  margin-top: 40px;

  h2 {
    color: $headingsFontColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 70%;
    letter-spacing: -0.05em;
    margin-bottom: 40px;
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
    border: 0;
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
      font-size: 26px;
      line-height: 70%;
    }

    h2 {
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
    padding: 10px 0 20px;
    h2 {
      font-size: 24px;
      line-height: 70%;

      margin: 20px 0;
      text-align: left;
    }

    .item {
      margin-left: 18px;
    }
  }

  .cars-card {
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
      line-height: 70%;
      margin: 20px 0;
      text-align: left;
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

@media only screen and (min-width: 470px) and (max-width: 499px) {
  .top-grid {
    .four,
    .five {
      margin-top: -35px !important;
      .card {
        img {
          object-fit: cover;
          height: 128px;
        }
      }
    }
    .six {
      margin-top: -130px !important;
    }
  }
}

@media only screen and (min-width: 459px) and (max-width: 469px) {
  .top-grid {
    .four,
    .five {
      margin-top: -32px !important;
    }
    .six {
      margin-top: -122px !important;
    }
  }
}

@media only screen and (min-width: 405px) and (max-width: 416px) {
  .top-grid {
    .four,
    .five {
      margin-top: -30px !important;
      .card {
        img {
          object-fit: cover;
          height: 110px !important;
        }
      }
    }
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
          height: 105px !important;
        }
      }
    }
    .six {
      margin-top: -110px !important;
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
      font-size: 20px;
      line-height: 24px;

      margin-bottom: 20px;
      text-align: left;
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
      font-size: 20px;
      line-height: 24px;

      margin: 20px 0;
      text-align: left;
    }
  }
}

@media only screen and (min-width: 330px) and (max-width: 375px) {
  .top-grid {
    .four,
    .five {
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

@media only screen and (min-width: 330px) and (max-width: 358px) {
  .top-grid {
    .six {
      margin-top: -95px !important;
    }
  }
}

@include mediaXXXSm {
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
          height: 85px !important;
        }
      }
    }

    .six {
      margin-top: -85px !important;
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
      font-size: 20px;
      line-height: 24px;

      margin: 20px 0;
      text-align: left;
    }
  }

  .recomendations {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;

    h2 {
      font-size: 20px;
      line-height: 24px;

      margin-bottom: 20px;
      text-align: left;
    }
  }
}
</style>
