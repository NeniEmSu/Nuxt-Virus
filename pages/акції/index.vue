<template>
  <div>
    <div class="container text-center heading p-0 mt-n1">
      <nav class="container mb-n4" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">Головна</nuxt-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Акції</li>
        </ol>
      </nav>
      <h1>Акції</h1>
    </div>
    <hr class="top-separator">

    <div class="jumbotron displays">
      <div class="container mx-auto contact">
        <div class="card display block-one p-5">
          <div class="row m-auto display-inner">
            <div class="col-9 mx-auto">
              <h2>Скидка -50% на Антидощ при замовленні Полірування автомобіля</h2>
              <p class="col-md-12 m-auto p-0">Акція діє з 01.04.19 до 01.05.19</p>
            </div>
            <div class="col-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЗАМОВИТИ</a>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-two p-5">
          <div class="row m-auto display-inner">
            <div class="col-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЗАМОВИТИ</a>
            </div>
            <div class="col-9 m-auto text-right">
              <h2>Скидка -50% на Антидощ при замовленні Полірування автомобіля</h2>
              <p class="col-md-12 m-auto p-0">Акція діє з 01.04.19 до 01.05.19</p>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-three p-5">
          <div class="row m-auto display-inner">
            <div class="col-9 m-auto">
              <h2>Скидка -50% на Антидощ при замовленні Полірування автомобіля</h2>
              <p class="col-md-12 m-auto p-0">Акція діє з 01.04.19 до 01.05.19</p>
            </div>
            <div class="col-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЗАМОВИТИ</a>
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
  components: {
    ContactForm,
    progressSection
  },

  head() {
    return {
      title: "Детейлінг центр Virus Тернопіль.",
      titleTemplate: "Акції - %s!",
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

.display p {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: normal;
  margin-top: 20px;

  color: $lightColor;
}

.block-one {
  background-image: url("~assets/img/Блог1.jpg");
}

.block-two {
  background-image: url("~assets/img/Блог1.jpg");
}

.block-three {
  background-image: url("~assets/img/Блог1.jpg");
}

.display {
  height: 300px;

  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border-radius: 0;
  background-color: $darkColor;
  margin-top: 40px;
  margin-bottom: 40px;
}

h2 {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: normal;
  letter-spacing: 0;

  color: $lightColor;
}

.separator {
  margin: 0;
  opacity: 0.6;
  border: 1px solid $darkColor;
}

.display {
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

@include mediaMenu {
  .display {
    height: 100%;
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0;
    background-color: $darkColor;
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      text-align: center;
    }

    h2 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor;
    }
  }

  .display {
    height: 100%;
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0;
    background-color: $darkColor;
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      text-align: center;
    }

    h2 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor;
    }
  }
}

@include mediaMd {
  .display {
    height: 100%;
    min-height: 300px;
    max-height: 400px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0;
    background-color: $darkColor;
    margin-top: 40px;
    margin-bottom: 40px;

    p {
      text-align: center;
    }

    h2 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor;
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
    border-radius: 0;
    background-color: $darkColor;
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
      font-size: 30px;
      line-height: normal;
      letter-spacing: 0;

      color: $lightColor;
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
    border-radius: 0;
    background-color: $darkColor;
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
    font-size: 28px;
    line-height: normal;
    letter-spacing: 0;

    color: $lightColor;
  }

  .display {
    max-height: 90px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0;
    background-color: $darkColor;
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
    font-size: 12px;
    line-height: 14px;
    align-items: center;

    color: $lightColor;
  }
}
</style>
