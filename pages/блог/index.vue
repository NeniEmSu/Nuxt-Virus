<template>
  <div>
    <div class="container text-center heading p-0 pt-4">
      <h1>Блог</h1>
    </div>
    <hr class="top-separator">

    <div class="jumbotron displays">
      <div class="container mx-auto contact">
        <div class="card display block-one p-5">
          <div class="row m-auto display-inner">
            <div class="col-md-9 m-auto">
              <h2>Як самостійно доглядати за салоном автомобіля?</h2>
            </div>
            <div class="col-lg-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЧИТАТИ</a>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-two p-5">
          <div class="row m-auto display-inner">
            <div class="col-lg-3 m-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЧИТАТИ</a>
            </div>
            <div class="col-md-9 m-auto text-right">
              <h2>Скільки разів можна полірувати автомобіль?</h2>
            </div>
          </div>
        </div>

        <hr class="separator">

        <div class="card display block-three p-5">
          <div class="row m-auto">
            <div class="col-md-9 m-auto display-inner">
              <h2>Чому не варто полірувати автомобіль в домашніх умовах?</h2>
            </div>
            <div class="col-lg-3 mx-auto text-center">
              <a href="#" class="btn mx-auto mb-3">ЧИТАТИ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<<script>
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
      titleTemplate: "блог - %s!",
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");
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

.block-one {
  background-image: url("~assets/img/Блог1.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: scale-down;
}

.block-two {
  background-image: url("~assets/img/Блог2.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: scale-down;
}

.block-three {
  background-image: url("~assets/img/Блог1.png");
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
@import "~assets/scss/mobileResponsive.scss";
</style>

