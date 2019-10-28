<template>
  <div class="jumbotron pt-5">
    <div class="container mx-auto contact">
      <div class="card text-center">
        <form
          class="text-md-right"
          method="post"
          name="contact"
          @submit.prevent="checkForm"
        >
          <h3 class="text-md-left px-0">
            <span class="red">ДІЗНАТИСЯ ВАРТІСТЬ ДЕТЕЙЛІНГА</span>
            <br>ДЛЯ ВАШОГО АВТОМОБІЛЯ
          </h3>
          <div
            v-if="errors.length"
            class="text-left text-danger"
          >
            <b>Виправте такі помилку(и):</b>
            <ol>
              <li
                v-for="error in errors"
                :key="error"
                class="ml-3"
              >
                {{ error }}
              </li>
            </ol>
          </div>
          <div
            v-if="success && !errors.length"
            class="text-left text-success"
          >
            <b>Ваше повідомлення надіслано успішно</b>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label
                  class="m-0 p-0"
                  for="typeOfWork"
                >
                  <select
                    id="typeOfWork"
                    v-model="service"
                    aria-label="typeOfWork"
                    aria-describedby="typeOfWork"
                    class="form-control mx-auto"
                    name="typeOfWork"
                  >
                    <option
                      value="null"
                      disabled
                    >Оберіть тип робіт</option>
                    <option value="Полірування автомобіля">Полірування автомобіля</option>
                    <option value="Полірування фар">Полірування фар</option>
                    <option value="Полірування вставок салону">Полірування вставок салону</option>
                    <option value="Полірування центральних стійок">Полірування центральних стійок</option>
                    <option value="Хімчистка">Хімчистка</option>
                    <option value="Хімчистка колесних арок, підвіски, дисків">Хімчистка колесних арок, підвіски, дисків</option>
                    <option value="Хімчистка передніх сидінь">Хімчистка передніх сидінь</option>
                    <option value="Хімчистка задніх сидінь">Хімчистка задніх сидінь</option>
                    <option value="Покриття твердим універсальним воском Soft 99">Покриття твердим універсальним воском Soft 99</option>
                    <option value="Рідке скло">Рідке скло</option>
                    <option value="Керамічне покриття кузова">Керамічне покриття кузова</option>
                    <option value="Передпродажна підготовка Комплекс">Передпродажна підготовка Комплекс</option>
                    <option value="Реставрація подряпин на кузові">Реставрація подряпин на кузові</option>
                    <option value="Перешиття шкіряних деталей салону">Перешиття шкіряних деталей салону</option>
                    <option value="Антидощ">Антидощ</option>
                    <option value="Мийка мотору парою">Мийка мотору парою</option>
                    <option value="Шумоізоляція">Шумоізоляція</option>
                    <option value="Видалення запахів Бактерецидна обробка">Видалення запахів Бактерецидна обробка</option>
                    <option value="Видалення вмятин без покраски PDR">Видалення вмятин без покраски PDR</option>
                    <option value="Поклейка антигравійної плівки">Поклейка антигравійної плівки</option>
                    <option value="Очистка кондиціонера">Очистка кондиціонера</option>
                    <option value="Чистка дисків">Чистка дисків</option>
                    <option value="Керамічне покриття сидінь">Керамічне покриття сидінь</option>
                    <option value="Озонація">Озонація</option>
                  </select>
                </label>
              </div>
              <div class="form-group">
                <label for="carModel">
                  <input
                    id="carModel"
                    v-model="carModel"
                    aria-label="carModel"
                    type="text"
                    name="carModel"
                    list="models"
                    class="form-control mx-auto"
                    aria-describedby="carModel"
                    placeholder="Введіть модель авто"
                  >

                  <datalist id="models">
                    <option
                      v-for="items in carmodeloptions"
                      :key="items.name"
                    >{{ items.name }}</option>
                  </datalist>
                </label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label
                  class="m-0 p-0"
                  for="name"
                >
                  <input
                    id="name"
                    v-model.trim="name"
                    name="name"
                    aria-label="name"
                    type="text"
                    class="form-control mx-auto"
                    aria-describedby="name"
                    placeholder="Ім’я*"
                  ></label>
              </div>
              <div class="form-group">
                <label
                  class="m-0 p-0"
                  for="phone"
                >
                  <input
                    id="phone"
                    v-model="models.phoneNumber"
                    v-mask="'+38(###) ###-####'"
                    aria-describedby="phone"
                    aria-label="phone"
                    name="phone"
                    type="text"
                    class="form-control mx-auto"
                    placeholder="Телефон*"
                  ></label>
              </div>

              <button
                v-show="loading === true"
                :disabled="loading === false"
                type="button"
                aria-label="loading"
                name="loading"
                class="contact-btn-loading"
              >
                Вантаження
                <font-awesome-icon
                  :icon="['fas', 'spinner']"
                  class="fa-spin"
                />
              </button>

              <button
                v-show="loading === false"
                type="submit"
                aria-label="submit"
                name="submit"
                class="contact-btn"
                :disabled="loading === true"
              >
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
import axios from 'axios'
import carmodeloptions from '~/plugins/api/carModelOptions'

export default {
  props: {
    service: {
      type: String,
      default: null,
      required: false
    }
  },
  data () {
    return {
      errors: [],
      name: null,
      carModel: null,
      models: {
        phoneNumber: null
      },
      loading: false,
      success: false,
      carmodeloptions
    }
  },
  methods: {
    checkForm (e) {
      this.errors = []
      this.success = false

      if (!this.name) {
        this.errors.push('Ім’я вимагається')
      }
      if (!this.carModel) {
        this.errors.push('Введіть модель авто вимагається')
      }
      if (!this.service) {
        this.errors.push('тип робіт вимагається')
      }
      if (!this.models.phoneNumber) {
        this.errors.push('Телефон вимагається')
      }
      if (!this.errors.length) {
        this.submitForm()
      }
      e.preventDefault()
    },
    submitForm () {
      this.loading = true
      axios
        .post(`https://api.telegram.org/bot873984949:AAG5ewEh19eCk6mqMsC0z7EiOd_3cEBjyDg/sendMessage?chat_id=-1001453596452&text=Name: ${this.name}, Number: ${this.models.phoneNumber}, Car Model: ${this.carModel}, Service: ${this.service}`)
      axios.post(
        'https://admin.virus.te.ua/api/forms/submit/contact?token=00c9e43284a689ed7bf9a7fc972e81',
        JSON.stringify({
          form: {
            name: this.name,
            carModel: this.carModel,
            service: this.service,
            phoneNumber: this.models.phoneNumber
          }
        }),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(({ data }) => {
          this.loading = false

          if (data.error) {
            this.errors.push(data.error)
          } else if (
            data.name &&
            data.carModel &&
            data.service &&
            data.phoneNumber
          ) {
            this.name = this.carModel = this.service = this.models.phoneNumber = null
            this.success = true
          }
        })
        .catch((error) => {
          this.loading = false
          this.errors.push(`Сталася помилка. Повторіть спробу пізніше ${error}`)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
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

  label {
    width: 100%;
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
    font-weight: 500;
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
    border: 0;
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
  .contact-btn-loading {
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
    border: 0;
    cursor: wait;
    opacity: 0.65;
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
      border: 2px solid #c4c4c4;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: 500;
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
      border: 0;
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
      border: 2px solid #c4c4c4;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: 500;
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
      border: 0;
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
      padding: 0;
      background-color: inherit;
      border: 0;
      border-radius: 0;

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
      border: 0;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: 500l;
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
      border: 0;
      margin-top: 40px;
    }
  }
}

@include mediaSm {
  .contact {
    .card {
      padding: 0;
      box-shadow: none;
      padding: 0;
      background-color: inherit;
      border: 0;
      border-radius: 0;

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
      border: 0;
      box-sizing: border-box;
      border-radius: 50px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: 500;
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
      border: 0;
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
      padding: 0;
      background-color: inherit;
      border: 0;
      border-radius: 0;

      form {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}
</style>
