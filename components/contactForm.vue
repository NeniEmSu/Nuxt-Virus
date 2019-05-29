<template>
  <div class="jumbotron pt-5">
    <div class="container mx-auto contact">
      <div class="card text-center">
        <form
          class="text-md-right"
          @submit.prevent="submit"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <h3 class="text-md-left px-0">
            <span class="red">ДІЗНАТИСЯ ВАРТІСТЬ ДЕТЕЙЛІНГА</span>
            <br>ДЛЯ ВАШОГО АВТОМОБІЛЯ
          </h3>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label hidden for="typeOfWork">Оберіть тип робіт</label>
                <select
                  id="typeOfWork"
                  aria-describedby="typeOfWork"
                  class="form-control mx-auto"
                  v-model="service"
                  name="typeOfWork"
                >
                  <option value="00">Оберіть тип робіт</option>
                  <option value="0">Полірування автомобіля</option>
                  <option value="1">Полірування фар</option>
                  <option value="2">Полірування вставок салону</option>
                  <option value="3">Полірування центральних стійок</option>
                  <option value="4">Хімчистка</option>
                  <option value="5">Хімчистка колесних арок, підвіски, дисків</option>
                  <option value="6">Хімчистка передніх сидінь</option>
                  <option value="7">Хімчистка задніх сидінь</option>
                  <option value="8">Покриття твердим універсальним воском Soft 99</option>
                  <option value="9">Рідке скло</option>
                  <option value="10">Керамічне покриття кузова</option>
                  <option value="11">Передпродажна підготовка Комплекс</option>
                  <option value="12">Реставрація подряпин на кузові</option>
                  <option value="13">Перешиття шкіряних деталей салону</option>
                  <option value="14">Антидощ</option>
                  <option value="15">Мийка мотору парою</option>
                  <option value="16">Шумоізоляція</option>
                  <option value="17">Видалення запахів Бактерецидна обробка</option>
                  <option value="18">Видалення вмятин без покраски PDR</option>
                  <option value="19">Поклейка антигравійної плівки</option>
                  <option value="20">Очистка кондиціонера</option>
                  <option value="21">Чистка дисків</option>
                  <option value="22">Керамічне покриття сидінь</option>
                  <option value="23">Озонація</option>
                </select>
              </div>
              <div class="form-group">
                <label hidden for="carModel">Введіть модель авто</label>
                <input
                  id="carModel"
                  type="text"
                  name="carModel"
                  class="form-control mx-auto"
                  aria-describedby="carModel"
                  placeholder="Введіть модель авто"
                  v-model="carModel"
                >
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label hidden for="name">Ім’я</label>
                <input
                  name="name"
                  id="name"
                  required
                  type="text"
                  class="form-control mx-auto"
                  aria-describedby="name"
                  placeholder="Ім’я*"
                  v-model="name"
                >
              </div>
              <div class="form-group">
                <label hidden for="phone">Телефон</label>
                <input
                  id="phone"
                  type="number"
                  aria-describedby="phone"
                  name="phone"
                  class="form-control mx-auto"
                  placeholder="Телефон*"
                  v-model="number"
                >
              </div>

              <button type="submit" name="submit" class="contact-btn">ВІДПРАВИТИ</button>
            </div>
          </div>
          <p
            class="text-left col-12 w-md-50 px-0"
          >Відправте запит, і наш менеджер зв’яжеться з вами найближчим часом</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: String,
      default: "00",
      required: false
    }
  },
  data() {
    return {
      name: "",
      carModel: "",
      number: "",
      submitted: false
    };
  },
  methods: {
    submit: function() {
      this.submitted = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";
.contact {
  .card {
    background: $lightColor;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;

    box-sizing: border-box;
    -webkit-box-sizing: border-box;

    padding: 3rem;

    form {
      padding-left: 120px;
      padding-right: 120px;
    }
  }

  h3 {
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: normal;
    color: $darkColor;

    span.red {
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: normal;
      color: $redColor;
    }
  }

  input,
  select {
    height: 48px;
    margin-top: 20px;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 50px;
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: $headingsFontColor;
    outline: none;

    &:focus {
      border: 2px solid $redColor;
      // box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      box-shadow: none;
    }
  }

  select {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    color: $darkColor;
  }

  p {
    margin-top: -44px;
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    color: $darkColor;
  }

  .contact-btn {
    padding: 12px 45px;
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

@include mediaLg2 {
  .contact {
    .card {
      background: $lightColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      height: 350px;
    }

    h3 {
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: normal;
      color: $darkColor;

      span.red {
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        color: $redColor;
      }
    }

    input,
    select {
      height: 40px;
      margin-top: 10px;
      border: 2px solid $borderColor;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: normal;
      color: $headingsFontColor;

      &:focus {
        border: 2px solid $redColor;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      }
    }

    select {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: normal;
      color: $darkColor;
    }

    p {
      margin-top: -80px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: normal;
      color: $darkColor;
    }

    .contact-btn {
      padding: 10px 35px;
      background: $redColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 50px;
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: normal;
      text-align: center;
      color: $lightColor;
      border: none;
      margin-top: 40px;
    }
  }
}

@include mediaLg {
  .contact {
    .card {
      background: $lightColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      height: 350px;

      form {
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    h3 {
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: normal;
      color: $darkColor;

      span.red {
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        color: $redColor;
      }
    }

    input,
    select {
      height: 40px;
      margin-top: 10px;
      border: 2px solid $borderColor;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: normal;
      color: $headingsFontColor;

      &:focus {
        border: 2px solid $redColor;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      }
    }

    select {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: normal;
      color: $darkColor;
    }

    p {
      margin-top: -80px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: normal;
      color: $darkColor;
    }

    .contact-btn {
      padding: 10px 35px;
      background: $redColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 50px;
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: normal;
      text-align: center;
      color: $lightColor;
      border: none;
      margin-top: 40px;
    }
  }
}

@include mediaMd {
  .contact {
    padding-bottom: 40px;
    .card {
      padding: 0;
      box-shadow: none;
      padding: none;
      background-color: inherit;
      border: none;
      border-radius: none;

      form {
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    h3 {
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: normal;
      color: $darkColor;

      span.red {
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        color: $redColor;
      }
    }

    input,
    select {
      height: 40px;
      margin-top: 10px;
      border: 2px solid $borderColor;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: normal;
      color: $headingsFontColor;

      &:focus {
        border: 2px solid $redColor;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      }
    }

    select {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: normal;
      color: $darkColor;
    }

    p {
      margin-top: -95px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: normal;
      color: $darkColor;
    }

    .contact-btn {
      padding: 10px 35px;
      background: $redColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 50px;
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: normal;
      text-align: center;
      color: $lightColor;
      border: none;
      margin-top: 40px;
    }
  }
}

@include mediaSm {
  .contact {
    .card {
      padding: 0;
      box-shadow: none;
      padding: none;
      background-color: inherit;
      border: none;
      border-radius: none;

      form {
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    h3 {
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: normal;
      color: $darkColor;

      span.red {
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: normal;
        color: $redColor;
      }
    }

    input,
    select {
      height: 40px;
      margin-top: 10px;
      border: 2px solid $borderColor;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: normal;
      color: $headingsFontColor;

      &:focus {
        border: 2px solid $redColor;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      }
    }

    select {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: normal;
      color: $darkColor;
    }

    p {
      margin-top: -80px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: normal;
      color: $darkColor;
    }

    .contact-btn {
      padding: 8px 30px;
      background: $redColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 50px;
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: normal;
      text-align: center;
      color: $lightColor;
      border: none;
      margin-top: 40px;
    }
  }
}

@include mediaXXSm {
  .contact {
    padding-bottom: 20px;
    .card {
      padding: 0;
      box-shadow: none;
      padding: none;
      background-color: inherit;
      border: none;
      border-radius: none;
      form {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}
</style>
