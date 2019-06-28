<template>
  <div class="jumbotron pt-5">
    <div class="container mx-auto contact">
      <div class="card text-center">
        <form class="text-md-right" @submit.prevent="checkForm" method="post" name="contact">
          <h3 class="text-md-left px-0">
            <span class="red">ДІЗНАТИСЯ ВАРТІСТЬ ДЕТЕЙЛІНГА</span>
            <br>ДЛЯ ВАШОГО АВТОМОБІЛЯ
          </h3>
          <div v-if="errors.length" class="text-left text-danger">
            <b>Please correct the following error(s):</b>
            <ol>
              <li class="ml-3" v-for="error in errors" :key="error">{{ error }}</li>
            </ol>
          </div>
          <div v-if="success" @submitForm="makeToast('success')" class="text-left text-sucess">
            <b>Your message has been sent succesfully</b>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="sr-only" for="typeOfWork">Оберіть тип робіт</label>
                <select
                  aria-label="typeOfWork"
                  id="typeOfWork"
                  aria-describedby="typeOfWork"
                  class="form-control mx-auto"
                  v-model="service"
                  name="typeOfWork"
                >
                  <option value="null" disabled>Оберіть тип робіт</option>
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
                <label class="sr-only" for="carModel">Введіть модель авто</label>
                <input
                  aria-label="carModel"
                  id="carModel"
                  type="text"
                  name="carModel"
                  list="models"
                  class="form-control mx-auto"
                  aria-describedby="carModel"
                  placeholder="Введіть модель авто"
                  v-model="carModel"
                >

                <datalist id="models">
                  <option v-for="(items, key) in carmodeloptions" :key="key">{{ items.name }}</option>
                </datalist>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label class="sr-only" for="name">Ім’я</label>
                <input
                  name="name"
                  id="name"
                  aria-label="name"
                  type="text"
                  class="form-control mx-auto"
                  aria-describedby="name"
                  placeholder="Ім’я*"
                  v-model="name"
                >
              </div>
              <div class="form-group">
                <label class="sr-only" for="phone">Телефон</label>
                <input
                  aria-describedby="phone"
                  aria-label="phone"
                  name="phone"
                  type="text"
                  class="form-control mx-auto"
                  id="phone"
                  placeholder="Телефон*"
                  v-mask="'+38(0##) ###-####'"
                  v-model="models.phoneNumber"
                >
              </div>

              <button
              v-show="loading === true"
                type="loading"
                aria-label="loading"
                name="loading"
                class="contact-btn-loading"
              >Вантаження <font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin"/> </button>

              <button
               v-show="loading === false"
                type="submit"
                aria-label="submit"
                name="submit"
                class="contact-btn"
              >ВІДПРАВИТИ</button>

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
import axios from "axios";

export default {
  props: {
    service: {
      type: String,
      default: null,
      required: false
    }
  },
  data() {
    return {
      errors: [],
      name: null,
      carModel: null,
      models: {
        phoneNumber: null
      },
      loading: false,
      success: false,
      carmodeloptions: [
        {
	"name": "AC"
}, {
	"name": "AC PROPULSION"
}, {
	"name": "ACURA"
}, {
	"name": "A.D. TRAMONTANA"
}, {
	"name": "ALFA ROMEO"
}, {
	"name": "ALMAC"
}, {
	"name": "ALTERNATIVE CARS"
}, {
	"name": "AMUZA"
}, {
	"name": "ANTEROS"
}, {
	"name": "ARASH"
}, {
	"name": "ARIEL"
}, {
	"name": "ARRINERA"
}, {
	"name": "ASL"
}, {
	"name": "ASTERIO"
}, {
	"name": "ASTON MARTIN"
}, {
	"name": "AUDI"
}, {
	"name": "BAC"
}, {
	"name": "BAJAJ"
}, {
	"name": "BEIJING AUTOMOBILE WORKS"
}, {
	"name": "BENTLEY"
}, {
	"name": "BMW"
}, {
	"name": "BOLLORÉ"
}, {
	"name": "BOLWELL"
}, {
	"name": "BRILLIANCE / HUACHEN"
}, {
	"name": "BRISTOL"
}, {
	"name": "BRITISH LEYLAND"
}, {
	"name": "BRM BUGGY"
}, {
	"name": "BROOKE"
}, {
	"name": "BUDDY"
}, {
	"name": "BUFORI"
}, {
	"name": "BUGATTI"
}, {
	"name": "BUICK"
}, {
	"name": "BYD"
}, {
	"name": "CADILLAC"
}, {
	"name": "CAPARO"
}, {
	"name": "CARBONTECH"
}, {
	"name": "CARICE"
}, {
	"name": "CHANG'AN"
}, {
	"name": "CHANGHE"
}, {
	"name": "CHERY"
}, {
	"name": "CHEVROLET"
}, {
	"name": "CHEVRON"
}, {
	"name": "CITROËN"
}, {
	"name": "CHRYSLER"
}, {
	"name": "COMMUTER CARS"
}, {
	"name": "CONNAUGHT"
}, {
	"name": "COVINI"
}, {
	"name": "DACIA"
}, {
	"name": "DAIHATSU"
}, {
	"name": "DATSUN"
}, {
	"name": "DE LA CHAPELLE"
}, {
	"name": "DMC"
}, {
	"name": "DIARDI"
}, {
	"name": "DODGE"
}, {
	"name": "DONKERVOORT"
}, {
	"name": "DONGFENG"
}, {
	"name": "DONTO"
}, {
	"name": "DS AUTOMOBILES"
}, {
	"name": "DYNASTI ELECTRIC CAR CORP."
}, {
	"name": "E-VADE"
}, {
	"name": "EFFEDI"
}, {
	"name": "EGY-TECH ENGINEERING"
}, {
	"name": "ELECTRIC RACEABOUT"
}, {
	"name": "ELFIN"
}, {
	"name": "EMGRAND"
}, {
	"name": "ENGLON"
}, {
	"name": "ETERNITI"
}, {
	"name": "ETOX"
}, {
	"name": "EQUUS"
}, {
	"name": "EXAGON"
}, {
	"name": "FARALLI & MAZZANTI"
}, {
	"name": "FAW"
}, {
	"name": "FERRARI"
}, {
	"name": "FIAT"
}, {
	"name": "FISKER"
}, {
	"name": "FODAY"
}, {
	"name": "FORCE"
}, {
	"name": "FORD"
}, {
	"name": "FORD AUSTRALIA"
}, {
	"name": "FORD GERMANY"
}, {
	"name": "FORNASARI"
}, {
	"name": "FRASER"
}, {
	"name": "GAC GROUP"
}, {
	"name": "GALPIN"
}, {
	"name": "GEELY"
}, {
	"name": "GENESIS"
}, {
	"name": "GIBBS"
}, {
	"name": "GILLET"
}, {
	"name": "GINETTA"
}, {
	"name": "GMC"
}, {
	"name": "GONOW"
}, {
	"name": "GREAT WALL / CHANGCHENG"
}, {
	"name": "GREENTECH AUTOMOTIVE"
}, {
	"name": "GRINNALL"
}, {
	"name": "GTA MOTOR"
}, {
	"name": "GUMPERT"
}, {
	"name": "GURGEL"
}, {
	"name": "HENNESSEY"
}, {
	"name": "HINDUSTAN"
}, {
	"name": "HOLDEN"
}, {
	"name": "HONDA"
}, {
	"name": "HONGQI"
}, {
	"name": "HRADYESH"
}, {
	"name": "HTT TECHNOLOGIES"
}, {
	"name": "HULME"
}, {
	"name": "HYUNDAI"
}, {
	"name": "ICML"
}, {
	"name": "IFR"
}, {
	"name": "IRAN KHODRO"
}, {
	"name": "IKCO"
}, {
	"name": "IMPERIA"
}, {
	"name": "INFINITI"
}, {
	"name": "IVM"
}, {
	"name": "INVICTA"
}, {
	"name": "ISDERA"
}, {
	"name": "ISUZU"
}, {
	"name": "JAC"
}, {
	"name": "JAGUAR"
}, {
	"name": "JEEP"
}, {
	"name": "JENSEN MOTORS"
}, {
	"name": "JETCAR"
}, {
	"name": "JONWAY"
}, {
	"name": "JOSS"
}, {
	"name": "KAIPAN"
}, {
	"name": "KANTANKA"
}, {
	"name": "KARMA"
}, {
	"name": "KOENIGSEGG"
}, {
	"name": "KORRES"
}, {
	"name": "KIA"
}, {
	"name": "KIAT"
}, {
	"name": "KISH KHODRO"
}, {
	"name": "KTM"
}, {
	"name": "LADA"
}, {
	"name": "LAMBORGHINI"
}, {
	"name": "LANCIA"
}, {
	"name": "LAND ROVER"
}, {
	"name": "LANDWIND"
}, {
	"name": "LARAKI"
}, {
	"name": "LEBLANC"
}, {
	"name": "LEITCH"
}, {
	"name": "LEOPARD"
}, {
	"name": "LEXUS"
}, {
	"name": "LI-ION"
}, {
	"name": "LIFAN"
}, {
	"name": "LIGHTNING"
}, {
	"name": "LINCOLN"
}, {
	"name": "LISTER"
}, {
	"name": "LOCAL MOTORS"
}, {
	"name": "LOBINI"
}, {
	"name": "LOTEC"
}, {
	"name": "LOTUS CARS"
}, {
	"name": "LUCRA CARS"
}, {
	"name": "LUXGEN"
}, {
	"name": "MAHINDRA"
}, {
	"name": "MARUSSIA"
}, {
	"name": "MARUTI SUZUKI"
}, {
	"name": "MASERATI"
}, {
	"name": "MASTRETTA"
}, {
	"name": "MAZDA"
}, {
	"name": "MCLAREN"
}, {
	"name": "MERCEDES-BENZ"
}, {
	"name": "MG"
}, {
	"name": "MICRO"
}, {
	"name": "MINI"
}, {
	"name": "MITSUBISHI"
}, {
	"name": "MITSUOKA"
}, {
	"name": "MORGAN"
}, {
	"name": "MULLEN"
}, {
	"name": "MYCAR"
}, {
	"name": "MYVI-PERODUA"
}, {
	"name": "NISSAN"
}, {
	"name": "NOBLE"
}, {
	"name": "NOTA"
}, {
	"name": "OLDSMOBILE"
}, {
	"name": "OPEL"
}, {
	"name": "OPTIMAL ENERGY"
}, {
	"name": "ORCA"
}, {
	"name": "OLTCIT"
}, {
	"name": "PAGANI"
}, {
	"name": "PANHARD"
}, {
	"name": "PANOZ"
}, {
	"name": "PERANA"
}, {
	"name": "PERODUA"
}, {
	"name": "PEUGEOT"
}, {
	"name": "P.G.O."
}, {
	"name": "POLARSUN"
}, {
	"name": "PLYMOUTH"
}, {
	"name": "PORSCHE"
}, {
	"name": "PROTO"
}, {
	"name": "OULLIM"
}, {
	"name": "PROTON"
}, {
	"name": "PURITALIA"
}, {
	"name": "QOROS"
}, {
	"name": "QVALE"
}, {
	"name": "RADICAL"
}, {
	"name": "RELIANT"
}, {
	"name": "RENAULT"
}, {
	"name": "REVA"
}, {
	"name": "RIMAC"
}, {
	"name": "RINSPEED"
}, {
	"name": "RODING"
}, {
	"name": "ROEWE"
}, {
	"name": "ROLLS-ROYCE"
}, {
	"name": "ROSSIN-BERTIN"
}, {
	"name": "ROSSION"
}, {
	"name": "ROVER"
}, {
	"name": "SAAB"
}, {
	"name": "SALEEN"
}, {
	"name": "SAIC-GM-WULING"
}, {
	"name": "SAIPA"
}, {
	"name": "SAKER"
}, {
	"name": "SAMSUNG"
}, {
	"name": "SAN"
}, {
	"name": "SBARRO"
}, {
	"name": "SCION"
}, {
	"name": "SEAT"
}, {
	"name": "SHANGHAI MAPLE"
}, {
	"name": "SIN"
}, {
	"name": "ŠKODA"
}, {
	"name": "SMART"
}, {
	"name": "SPADA VETTURE SPORT"
}, {
	"name": "SPYKER"
}, {
	"name": "SSANGYONG"
}, {
	"name": "SSC NORTH AMERICA"
}, {
	"name": "STREET & RACING TECHNOLOGY"
}, {
	"name": "SUBARU"
}, {
	"name": "SUZUKI"
}, {
	"name": "TANOM"
}, {
	"name": "TATA"
}, {
	"name": "TAURO"
}, {
	"name": "TAWON CAR"
}, {
	"name": "TD CARS"
}, {
	"name": "TESLA"
}, {
	"name": "THAI RUNG"
}, {
	"name": "TOYOTA"
}, {
	"name": "TREKKA"
}, {
	"name": "TRIDENT"
}, {
	"name": "TRIUMPH"
}, {
	"name": "TROLLER"
}, {
	"name": "TRUMPCHI"
}, {
	"name": "TUSHEK"
}, {
	"name": "TVR"
}, {
	"name": "TVS"
}, {
	"name": "ULTIMA"
}, {
	"name": "UMM"
}, {
	"name": "UEV"
}, {
	"name": "URI"
}, {
	"name": "UAZ"
}, {
	"name": "VAUXHALL MOTORS"
}, {
	"name": "VECTOR"
}, {
	"name": "VENCER"
}, {
	"name": "VENIRAUTO"
}, {
	"name": "VENTURI"
}, {
	"name": "VEPR"
}, {
	"name": "VOLKSWAGEN"
}, {
	"name": "VOLVO"
}, {
	"name": "VINFAST"
}, {
	"name": "W MOTORS"
}, {
	"name": "WALLYSCAR"
}, {
	"name": "WESTFIELD"
}, {
	"name": "WHEEGO"
}, {
	"name": "WIESMANN"
}, {
	"name": "XENIA"
}, {
	"name": "YES!"
}, {
	"name": "YOUABIAN PUMA"
}, {
	"name": "ZASTAVA AUTOMOBILES"
}, {
	"name": "ZENDER CARS"
}, {
	"name": "ZENOS CARS"
}, {
	"name": "ZENVO"
}, {
	"name": "ZIL"
}, {
	"name": "ZX AUTO"
}]
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];
      this.success = false;

      if (!this.name) {
        this.errors.push("Ім’я вимагається");
      }
      if (!this.carModel) {
        this.errors.push("Введіть модель авто вимагається");
      }
      if (!this.service) {
        this.errors.push("тип робіт вимагається");
      }
      if (!this.models.phoneNumber) {
        this.errors.push("Телефон вимагається");
      }
      if (!this.errors.length) {
        this.submitForm();
      }
      e.preventDefault();
    },
    submitForm: function() {
      this.loading = true;

      axios
        .post(
          process.env.contactUrl,
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
              "Content-Type": "application/json"
            }
          }
        )
        .then(({ data }) => {
          this.loading = false;

          if (data.error) {
            this.errors.push(data.error);
          } else if (
            data.name &&
            data.carModel &&
            data.service &&
            data.models.phoneNumber
          ) {
            this.name = this.carModel = this.service = this.models.phoneNumber = null;
            this.success = true;
          }
        })
        .catch(error => {
          this.loading = false;

          this.errors.push("Сталася помилка. Повторіть спробу пізніше");
        });
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Повідомлення було надіслано успішно", {
        title: `Message ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    }
  }
};
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
  .contact-btn-loading{
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
    opacity: .65;
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
