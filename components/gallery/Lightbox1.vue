<template>
  <div>
    <a class="text-center" href="#" @click.prevent="show" title="See more images!">
      <div class="card col-xl-6 mx-auto py-5">
        <div class="row text-center card__hover_two img-fluid" :class="workclass">
          <div class="col-8"></div>
          <div class="col-sm-4 my-auto">
            <h4>
              {{title}}
              <span>{{subtitle}}</span>
            </h4>
          </div>
        </div>
      </div>
    </a>

    <div class="lightbox m-auto text-center" v-if="visible" @click="hide">
      <div
        class="text-right text-white p-2"
        style="font-size: 50px; cursor: pointer;"
        @click.stop="hide"
      >&times;</div>
      <div class="row h-75 m-auto">
        <div
          class="col-1 text-left my-auto p-0"
          style="font-size: 50px; line-height: 52px; cursor: pointer;"
          @click.stop="prev"
          :class="{'invisible': ! hasPrev()}"
        >
          <svg
            class="pointer-events-none"
            fill="#fff"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
            <path d="M0-.5h24v24H0z" fill="none"></path>
          </svg>
        </div>
        <div class="lightbox-image col-10 my-auto p-2" @click.stop>
          <img class="img-fluid" :src="images[index]">
        </div>
        <div
          class="col-1 text-right my-auto p-0 ml-n3"
          style="font-size: 50px; line-height: 52px; cursor: pointer;"
          @click.stop="next"
          :class="{'invisible': ! hasNext()}"
        >
          <svg
            class="pointer-events-none"
            fill="#fff"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            <path d="M0-.25h24v24H0z" fill="none"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // thumbnail: {
    //   type: String,
    //   required: true
    // },
    images: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    workclass: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
          case "Escape":
            this.hide();
            break;
        }
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown);
  }
};
</script>

<style>
.lightbox {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
}
.lightbox-image img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 90px);
  margin: auto;
}
</style>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";

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
