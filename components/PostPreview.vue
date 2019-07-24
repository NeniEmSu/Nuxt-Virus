<template>
  <div>
    <div
      class="card display block p-5"
      :style="{ backgroundImage: 'url(' + thumbnail + ') ' }"
    >
      <div class="row m-auto display-inner">
        <div class="col-md-9 m-auto">
          <h2>{{ title }}</h2>
        </div>
        <div class="col-lg-3 m-auto text-center">
          <nuxt-link
            class="btn mx-auto mb-3"
            :to="id"
          >ЧИТАТИ</nuxt-link>
        </div>
      </div>
    </div>

    <hr class="separator">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 33px;
  letter-spacing: 0;

  color: $darkColor;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1:before,
h1:after {
  content: "";
  border: 1px solid $darkColor;
  margin: 0 20px 0 0;
  flex: 1 0 20px;
}

h1:after {
  margin: 0 0 0 20px;
}

.heading {
  margin: 33px auto;
}

.top-separator {
  margin: 0;
  border: 3px solid $darkColor;
}

.displays {
  margin-top: 0;
  padding-bottom: 40px;
}

.block {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: scale-down;
}

.block-one {
  background-image: url("~assets/img/Блог1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: scale-down;
}

.block-two {
  background-image: url("~assets/img/Блог2.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: scale-down;
}

.block-three {
  background-image: url("~assets/img/Блог1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: scale-down;
}

a .btn {
  padding: 12px 66px;
}

.display {
  height: 300px;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border-radius: 0;
  background-color: $darkColor;
  margin-top: 40px;
  margin-bottom: 40px;

  .btn {
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
    padding: 12px 50px;

    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;
  }

  .btn:hover,
  .btn.active {
    color: $redColor;
    background-color: $lightColor;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
}

h2 {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: normal;

  color: $lightColor;
}

.separator {
  margin: 0;
  opacity: 0.6;
  border: 1px solid $darkColor;
}

@include mediaMenu {
  .display {
    height: 100%;
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0 !important;
    background-color: $darkColor !important;
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      text-align: center;
    }

    h2 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 30px !important;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor !important;
    }
  }

  .display {
    height: 100%;
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0 !important;
    background-color: $darkColor !important;
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      text-align: center;
    }

    h2 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 30px !important;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor !important;
    }
  }
}

@include mediaMd {
  .display {
    height: 100%;
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0 !important;
    background-color: $darkColor !important;
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      text-align: center;
    }

    h2 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 30px !important;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor !important;
    }
  }

  .display-inner {
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
  }

  .display {
    height: 100%;
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0 !important;
    background-color: $darkColor !important;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  p {
    text-align: center;

    .block-one {
      background-image: url("~assets/img/Блог1-small.jpg");
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.64);
      backdrop-filter: blur(5px);
    }

    .block-two {
      background-image: url("~assets/img/Блог2-small.jpg");
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.64);
      backdrop-filter: blur(5px);
    }

    .block-three {
      background-image: url("~assets/img/Блог1-small.jpg");
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.64);
      backdrop-filter: blur(5px);
    }

    h2 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 30px !important;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor !important;
    }

    .display-inner {
      background-color: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(5px);
    }
  }
}

@include mediaXSm {
  .display {
    height: 100%;
    min-height: 300px;
    max-height: 420px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0 !important;
    background-color: $darkColor !important;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .display p {
    text-align: center;
  }

  h2 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 28px !important;
    line-height: normal;
    letter-spacing: 0;

    color: $lightColor !important;
  }

  .display {
    height: 100%;
    min-height: 300px;
    max-height: 420px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0 !important;
    background-color: $darkColor !important;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .display p {
    text-align: center;
  }

  h2 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 28px !important;
    line-height: normal;
    letter-spacing: 0;

    color: $lightColor !important;
  }
}
</style>
