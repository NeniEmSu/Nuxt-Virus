<template>
  <div class="jumbotron pt-5">
    <div class="container mx-auto contact">
      <div class="card p-5">
        <form
          class="text-right"
          method="POST"
          action="includes/contactForm.inc.php"
        >
          <h3 class="text-left px-0">
            <span class="red">
              ДІЗНАТИСЯ ВАРТІСТЬ ДЕТЕЙЛІНГА
            </span>
            <br />ДЛЯ ВАШОГО АВТОМОБІЛЯ
          </h3>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label hidden for="carModel">Введіть модель авто</label>
                <input
                  id="carModel"
                  type="text"
                  name="carModel"
                  class="form-control mx-auto"
                  aria-describedby="carModel"
                  placeholder="Введіть модель авто"
                />
              </div>
              <div class="form-group">
                <label hidden for="typeOfWork">Оберіть тип робіт</label>
                <select
                  id="typeOfWork"
                  aria-describedby="typeOfWork"
                  class="form-control mx-auto"
                >
                  <option>Оберіть тип робіт</option>
                  <option>Оберіть тип робіт</option>
                  <option>Оберіть тип робіт</option>
                  <option>Оберіть тип робіт</option>
                </select>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label hidden for="name">Ім’я</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="form-control mx-auto"
                  aria-describedby="name"
                  placeholder="Ім’я*"
                />
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
                />
              </div>

              <button type="submit" name="submit" class="contact-btn">
                ВІДПРАВИТИ
              </button>
            </div>
          </div>
          <p class="text-left col-12 w-md-50 px-0">
            Відправте запит, і наш менеджер зв’яжеться з вами найближчим часом
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/config.scss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900');
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

    padding: 3rem !important;

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
    .card {
      background: $lightColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      height: 100%;
      min-height: 330px;
      padding-bottom: 5rem !important;

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
      background: $lightColor;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      padding: 10px !important;
      height: 480px;

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
    .card {
      form {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}
</style>
