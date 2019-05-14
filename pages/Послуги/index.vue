<template>
  <div>
    <div class="container text-center p-0 pt-4">
      <img class="col-12 m-auto img-fluid" :src="image" :alt="description">

      <div class="col-md-7 m-auto car-toggle">
        <div class="row text-center">
          <div class="col-md-4 mx-auto" v-for=" variant in variants" :key="variant.variantId">
            <a
              href="#"
              class="btn"
              @click.prevent="changeCars(variant.variantImage), selected  = variant.variantId "
              :class="{activeBtn:selected  == variant.variantId}"
            >{{ variant.variantTitle }}</a>
            <p class="mt-2 mb-0">{{ variant.variantDescription }}</p>
          </div>
        </div>
      </div>

      <form class="choose-brand" :class="{hideMe:selected  !== undefined}">
        <h3 class="col-12 red">Оберіть категорію автомобіля</h3>
        <p class="col-12 choose-brand-desc">Введіть можель свого авто для визначення категорії</p>

        <div class="form-group w-25 mx-auto">
          <label hidden for="brand">Марка</label>
          <select id="brand" aria-describedby="brand" class="form-control brand">
            <option>Марка</option>
            <option>Марка</option>
            <option>Марка</option>
            <option>Марка</option>
          </select>
        </div>

        <div class="form-group w-25 mx-auto">
          <label hidden for="model">Модель</label>
          <select id="model" aria-describedby="model" class="form-control model">
            <option>Модель</option>
            <option>Модель</option>
            <option>Модель</option>
            <option>Модель</option>
          </select>
        </div>

        <button type="submit" class="btn">Вибрати</button>
      </form>
    </div>
    <div class="mt-3" :class="{hideMe:selected  == undefined}">
      <div class="jumbotron services">
        <div class="container services-container">
          <!-- Полірування -->
          <h2 class="text-center fab-header">Полірування</h2>
          <div class="card-deck m-0 p-0">
            <div
              class="card four-cards"
              v-for=" polish in polishing"
              :key="polish.polishingId"
              :class="polish.polishingClass"
            >
              <div class="card-body"></div>
              <div class="card-end">
                <h5>{{ polish.polishingTitle }}</h5>
                <div class="row">
                  <div class="col-6 pr-0">
                    <p class v-show="selected == 1">
                      <small>від</small>
                      {{ polish.polishingCost }}
                      <small>грн</small>
                    </p>
                    <p class v-show="selected == 2">
                      <small>від</small>
                      {{ polish.polishingCostVar1 }}
                      <small>грн</small>
                    </p>
                    <p class v-show="selected == 3">
                      <small>від</small>
                      {{ polish.polishingCostVar2 }}
                      <small>грн</small>
                    </p>
                  </div>

                  <div class="col-6 m-0 p-0">
                    <nuxt-link :to="polish.polishingLink" class="btn">Читати більше</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Хімчистка -->
          <h2 class="text-center fab-header">Хімчистка</h2>
          <div class="card-deck">
            <div
              class="card four-cards"
              v-for=" cleaner in  cleaners"
              :key="cleaner.cleanersId"
              :class="cleaner.cleanersClass"
            >
              <div class="card-body"></div>
              <div class="card-end">
                <h5>{{ cleaner.cleanersTitle }}</h5>
                <div class="row">
                  <div class="col-6 pr-0">
                    <p class v-show="selected == 1">
                      <small>від</small>
                      {{ cleaner.cleanersCost }}
                      <small>грн</small>
                    </p>
                    <p class v-show="selected == 2">
                      <small>від</small>
                      {{ cleaner.cleanersCostVar1 }}
                      <small>грн</small>
                    </p>
                    <p class v-show="selected == 3">
                      <small>від</small>
                      {{ cleaner.cleanersCostVar2 }}
                      <small>грн</small>
                    </p>
                  </div>

                  <div class="col-6 m-0 p-0">
                    <nuxt-link :to="cleaner.cleanersLink" class="btn">Читати більше</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Воскове покриття -->
          <h2 class="text-center fab-header">Воскове покриття</h2>
          <div class="testing">
            <div class="row">
              <div
                class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto store-item p-0 p-lg-2"
                v-for=" WaxCover in  WaxCovers"
                :key="WaxCover.WaxCoversId"
              >
                <div class="card two-cards" :class="WaxCover.WaxCoversClass">
                  <div class="card-body"></div>
                  <div class="card-end">
                    <h5>{{ WaxCover.WaxCoversTitle }}</h5>
                    <div class="row">
                      <div class="col-6 pr-0">
                        <p class v-show="selected == 1">
                          <small>від</small>
                          {{ WaxCover.WaxCoversCost }}
                          <small>грн</small>
                        </p>
                        <p class v-show="selected == 2">
                          <small>від</small>
                          {{ WaxCover.WaxCoversCostVar1 }}
                          <small>грн</small>
                        </p>
                        <p class v-show="selected == 3">
                          <small>від</small>
                          {{ WaxCover.WaxCoversCostVar2 }}
                          <small>грн</small>
                        </p>
                      </div>
                      <div class="col-6 col-md-4 text-right">
                        <nuxt-link :to="WaxCover.WaxCoversLink" class="btn">Читати більше</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testing">
            <div class="row">
              <div
                class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto p-0 p-lg-2"
                v-for=" ceramicCoat in  ceramicCoating"
                :key="ceramicCoat.ceramicCoatingId"
              >
                <h2 class="text-center card-heading">Керамічне покриття</h2>
                <div class="card two-cards-seprate-titles service-eleven">
                  <div class="card-body"></div>

                  <div class="card-end">
                    <h5 class="col-12 px-0">Керамічне покриття кузова</h5>
                    <hr>
                    <div class="row">
                      <div class="col-md-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">Двухфазна мийка</p>
                      </div>
                      <div class="col-md-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">
                          Очищення кузова
                          від бітуму
                        </p>
                      </div>
                      <div class="col-md-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">
                          Легке вілновлююче
                          полірування
                        </p>
                      </div>
                      <div class="col-md-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">
                          Керамічне покриття
                          окремих деталей
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-md-8 text-lg-right pr-0">
                        <p class v-show="selected == 1">
                          <small>від</small>
                          {{ ceramicCoat.ceramicCoatingCost }}
                          <small>грн</small>
                        </p>
                        <p class v-show="selected == 2">
                          <small>від</small>
                          {{ ceramicCoat.ceramicCoatingCostVar1 }}
                          <small>грн</small>
                        </p>
                        <p class v-show="selected == 3">
                          <small>від</small>
                          {{ ceramicCoat.ceramicCoatingCostVar2 }}
                          <small>грн</small>
                        </p>
                      </div>
                      <div class="col-6 col-md-4 text-right">
                        <nuxt-link :to="ceramicCoat.ceramicCoatingLink" class="btn">Читати більше</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Передпродажна підготовка -->
              <div
                class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto p-0 p-lg-2"
                v-for=" PreSalePrep in  PreSalePreparations"
                :key="PreSalePrep.PreSalePreparationsId"
              >
                <h2 class="text-center card-heading">Передпродажна підготовка</h2>
                <div class="card two-cards-seprate-titles service-twelve">
                  <div class="card-body"></div>

                  <div class="card-end">
                    <h5 class="col-12 px-0">Комплекс</h5>
                    <hr style="width: 100%;">
                    <div class="row">
                      <div class="col-md-4 mt-2 text-left mx-md-auto">
                        <p class="subtext">
                          Трьохфазна мийка авто
                          + Чистка ковроліну підлоги
                        </p>
                      </div>
                      <div class="col-md-4 mt-2 text-left mx-md-auto">
                        <p class="subtext">
                          Чистка дверних карт
                          + Чистка панелі
                        </p>
                      </div>
                      <div class="col-md-4 mt-2 text-left mx-md-auto">
                        <p class="subtext">
                          Чистка воздуховодів
                          + Чистка сидінь і стелі
                          + Ароматизація салону
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-md-8 text-lg-right pr-0">
                        <p class v-show="selected == 1">
                          <small>від</small>
                          {{ PreSalePrep.PreSalePreparationsCost }}
                          <small>грн</small>
                        </p>
                        <p class v-show="selected == 2">
                          <small>від</small>
                          {{ PreSalePrep.PreSalePreparationsCostVar1 }}
                          <small>грн</small>
                        </p>
                        <p class v-show="selected == 3">
                          <small>від</small>
                          {{ PreSalePrep.PreSalePreparationsCostVar2 }}
                          <small>грн</small>
                        </p>
                      </div>
                      <div class="col-6 col-md-4 text-right">
                        <nuxt-link
                          :to="PreSalePrep.PreSalePreparationsLink"
                          class="btn"
                        >Читати більше</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-center fab-header">Додаткові послуги</h2>

          <div class="row cards-grouppings-3">
            <div
              class="col-10 col-sm-12 col-md-5 col-lg-4 mx-auto p-0 p-lg-2"
              v-for=" addition in  additional"
              :key="addition.additionalId"
            >
              <div class="card three-cards" :class="addition.additionalClass">
                <div class="card-body"></div>
                <div class="card-end">
                  <h5>{{ addition.additionalTitle }}</h5>
                  <div class="row">
                    <div class="col-6" v-show="selected == 1">
                      <p v-show="!addition.fixedRange">
                        <small v-show="!addition.perItem">від</small>
                        {{ addition.additionalCost }}
                        <small
                          v-if="addition.dollar"
                        >$</small>
                        <small v-else-if="addition.perItem">грн / шт</small>
                        <small v-else>грн</small>
                      </p>
                      <p v-show="addition.fixedRange">
                        <small v-show="!addition.perItem">від</small>
                        {{ addition.additionalCost }}
                        <small>До</small>
                        {{ addition.additionalCostHigh }}
                        <small
                          v-if="addition.dollar"
                        >$</small>

                        <small v-else-if="addition.perItem">грн / шт</small>
                        <small v-else>грн</small>
                      </p>
                    </div>
                    <div class="col-6" v-show="selected == 2">
                      <p v-show="!addition.fixedRange">
                        <small v-show="!addition.perItem">від</small>
                        {{ addition.additionalCostVar1 }}
                        <small
                          v-if="addition.dollar"
                        >$</small>
                        <small v-else-if="addition.perItem">грн / шт</small>
                        <small v-else>грн</small>
                      </p>
                      <p v-show="addition.fixedRange">
                        <small v-show="!addition.perItem">від</small>
                        {{ addition.additionalCost }}
                        <small>До</small>
                        {{ addition.additionalCostHigh }}
                        <small
                          v-if="addition.dollar"
                        >$</small>

                        <small v-else-if="addition.perItem">грн / шт</small>
                        <small v-else>грн</small>
                      </p>
                    </div>
                    <div class="col-6" v-show="selected == 3">
                      <p v-show="!addition.fixedRange">
                        <small v-show="!addition.perItem">від</small>
                        {{ addition.additionalCostVar2 }}
                        <small
                          v-if="addition.dollar"
                        >$</small>
                        <small v-else-if="addition.perItem">грн / шт</small>
                        <small v-else>грн</small>
                      </p>
                      <p v-show="addition.fixedRange">
                        <small v-show="!addition.perItem">від</small>
                        {{ addition.additionalCost }}
                        <small>До</small>
                        {{ addition.additionalCostHigh }}
                        <small
                          v-if="addition.dollar"
                        >$</small>

                        <small v-else-if="addition.perItem">грн / шт</small>
                        <small v-else>грн</small>
                      </p>
                    </div>

                    <div class="col-6 text-right pl-0">
                      <nuxt-link :to="addition.additionalLink" class="btn">Читати більше</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm/>

      <progressSection/>
    </div>
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
      titleTemplate: "контакти - %s!",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри."
        }
      ]
    };
  },
  asyncData() {
    return {
      image: "./img/services-car-goup-all.png",
      description:
        " white mercedes , jeep grand cherokee srt white & Black Range Rover Piano",
      isActive: false,
      selectedVariant: 0,
      polishingClass: "service-one",
      selected: undefined,
      variants: [
        {
          variantId: 1,
          variantTitle: "Ⅰ категорія",
          variantDescription: "середній бізнес спорт купе",
          variantImage: "./img/services-car-goup-var-1.png"
        },
        {
          variantId: 2,
          variantTitle: "ⅠⅠ категорія",
          variantDescription: "середній кросовер позашляховик",
          variantImage: "./img/services-car-goup-var-2.png"
        },
        {
          variantId: 3,
          variantTitle: "ⅠⅠⅠ категорія",
          variantDescription: "повнорозмірний кросовер позашляховик",
          variantImage: "./img/services-car-goup-var-3.png"
        }
      ],
      polishing: [
        {
          polishingId: "01",
          polishingTitle: "Полірування автомобіля",
          polishingCost: "5999",
          polishingCostVar1: "6999",
          polishingCostVar2: "8499",
          polishingLink: "Полірування",
          polishingClass: "service-one"
        },
        {
          polishingId: "02",
          polishingTitle: "Полірування фар",
          polishingCost: "600",
          polishingCostVar1: "700",
          polishingCostVar2: "800",
          polishingLink: "Поліруванняфар",
          polishingClass: "service-two"
        },
        {
          polishingId: "03",
          polishingTitle: "Полірування вставок салону",
          polishingCost: "500",
          polishingCostVar1: "600",
          polishingCostVar2: "700",
          polishingLink: "Вставкисалону",
          polishingClass: "service-three"
        },
        {
          polishingId: "04",
          polishingTitle: "Полірування центральних стійок",
          polishingCost: "800",
          polishingCostVar1: "900",
          polishingCostVar2: "1000",
          polishingLink: "Центральністійки",
          polishingClass: "service-four"
        }
      ],
      cleaners: [
        {
          cleanersId: "05",
          cleanersTitle: "Хімчистка",
          cleanersCost: "1999",
          cleanersCostVar1: "2499",
          cleanersCostVar2: "3199",
          cleanersLink: "Хімчистка",
          cleanersClass: "service-five"
        },
        {
          cleanersId: "06",
          cleanersTitle: "Хімчистка колесних арок, підвіски, дисків",
          cleanersCost: "800",
          cleanersCostVar1: "0",
          cleanersCostVar2: "0",
          cleanersLink: "Колісніарки",
          cleanersClass: "service-six"
        },
        {
          cleanersId: "07",
          cleanersTitle: "Хімчистка передніх сидінь",
          cleanersCost: "275",
          cleanersCostVar1: "330",
          cleanersCostVar2: "385",
          cleanersLink: "передніхсидінь",
          cleanersClass: "service-seven"
        },
        {
          cleanersId: "08",
          cleanersTitle: "Хімчистка задніх сидінь",
          cleanersCost: "495",
          cleanersCostVar1: "605",
          cleanersCostVar2: "660",
          cleanersLink: "задніхсидінь",
          cleanersClass: "service-eight"
        }
      ],
      WaxCovers: [
        {
          WaxCoversId: "09",
          WaxCoversTitle: "Покриття твердим універсальним воском Soft 99",
          WaxCoversCost: "1200",
          WaxCoversCostVar1: "1300",
          WaxCoversCostVar2: "1400",
          WaxCoversLink: "Покриттявоском",
          WaxCoversClass: "service-nine"
        },
        {
          WaxCoversId: "10",
          WaxCoversTitle: "Рідке скло",
          WaxCoversCost: "3000",
          WaxCoversCostVar1: "0",
          WaxCoversCostVar2: "0",
          WaxCoversLink: "Рідкескло",
          WaxCoversClass: "service-ten"
        }
      ],
      ceramicCoating: [
        {
          ceramicCoatingId: "11",
          ceramicCoatingCost: "12999",
          ceramicCoatingCostVar1: "14499",
          ceramicCoatingCostVar2: "15999",
          ceramicCoatingLink: "Керамічнепокриття"
        }
      ],
      PreSalePreparations: [
        {
          PreSalePreparationsId: "12",
          PreSalePreparationsCost: "1100",
          PreSalePreparationsCostVar1: "1200",
          PreSalePreparationsCostVar2: "1300",
          PreSalePreparationsLink: "Передпродажнапідготовка"
        }
      ],

      additional: [
        {
          additionalId: "13",
          additionalTitle: "Реставнація подряпин на кузові",
          additionalCost: "130",
          additionalCostHigh: "250",
          fixedRange: true,
          additionalLink: "Реставраціяподряпин",
          additionalClass: "service-13"
        },
        {
          additionalId: "14",
          additionalTitle: "Перешиття шкіряних деталей салону",
          additionalCost: "500",
          additionalCostHigh: "3000",
          fixedRange: true,
          additionalLink: "Перешиття ",
          additionalClass: "service-14"
        },
        {
          additionalId: "15",
          additionalTitle: "Антидощ",
          additionalCost: "600",
          additionalCostHigh: "1200",
          fixedRange: true,
          additionalLink: "Антидощ",
          additionalClass: "service-15"
        },
        {
          additionalId: "16",
          additionalTitle: "Мийка мотору парою",
          additionalCost: "500",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Мийкамотору",
          additionalClass: "service-16"
        },
        {
          additionalId: "17",
          additionalTitle: "Шумоізоляція",
          additionalCost: "330",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          dollar: true,
          additionalLink: "ШУМОІЗОЛЯЦІЯ",
          additionalClass: "service-17"
        },
        {
          additionalId: "18",
          additionalTitle: "Видалення запахів Бактерецидна обробка",
          additionalCost: "500",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "БАКТЕРЕЦИДНАОБРОБКА",
          additionalClass: "service-18"
        },
        {
          additionalId: "19",
          additionalTitle: "Видалення вмятин без покраски PDR",
          additionalCost: "0",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Видаленнявмятин",
          additionalClass: "service-19"
        },
        {
          additionalId: "20",
          additionalTitle: "Поклейка антигравійної плівки",
          additionalCost: "1000",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "антигравійноїплівки",
          additionalClass: "service-20"
        },
        {
          additionalId: "21",
          additionalTitle: "Очистка кондиціонера",
          additionalCost: "1200",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Очисткакондиціонера",
          additionalClass: "service-21"
        },
        {
          additionalId: "22",
          additionalTitle: "Чистка дисків",
          additionalCost: "250",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          perItem: true,
          additionalLink: "ЧИСТКАДИСКІВ",
          additionalClass: "service-22"
        },
        {
          additionalId: "23",
          additionalTitle: "Керамічне покриття сидінь",
          additionalCost: "500",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          perItem: true,
          additionalLink: "КЕРАМІЧНЕПОКРИТТЯСИДІНЬ",
          additionalClass: "service-23"
        },
        {
          additionalId: "24",
          additionalTitle: "Озонація",
          additionalCost: "1000",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Озонація",
          additionalClass: "service-24"
        }
      ]
    };
  },
  methods: {
    changeCars(variantImage) {
      setTimeout(() => (this.image = variantImage), 500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");

.choose-brand {
  .choose-brand-desc {
    font-family: $mainFont;
  }
}

.btn {
  padding: 7px 23px;
  background-color: $lightColor;
  border-radius: 50px;
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;

  color: #000000;
  line-height: normal;
  text-align: center;
  border: 1px solid $redColor;
  box-sizing: border-box;
  border-radius: 50px;
  text-decoration: none;
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;
}

.btn:hover {
  color: $lightColor;
  background-color: $redColor;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.activeBtn {
  color: $lightColor;
  background-color: $redColor;
  box-shadow: none;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.hideMe {
  display: none;
}

.car-toggle {
  margin-top: 48px;
}

.red {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;
  text-align: center;

  color: $redColor;
}

.choose-brand button.btn {
  padding: 12px 37px;
  background-color: $redColor;
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
}

.choose-brand button.btn:hover {
  color: $redColor;
  background-color: $lightColor;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.choose-brand button.btn:hover:after {
  color: $redColor;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.choose-brand button.btn:after {
  color: $lightColor;
  float: right;
  font-size: 20px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f054";
  margin-left: 20px;
  margin-right: -20px;
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;
}

select.brand,
select.model {
  -webkit-appearance: none;
  -o-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

  background-image: url(~assets/img/servicesSelect.png);
  background-position: 95% center;
  background-repeat: no-repeat;

  cursor: pointer;

  height: 48px;
  margin-top: 20px;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 50px;

  &.active,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  }
}

form.choose-brand {
  margin-top: 40px;
  margin-bottom: 40px;
}

form.choose-brand p {
  font-family: "$mainFont";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  text-align: center;

  color: $darkColor;
}

.card-heading,
.fab-header {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: normal;

  color: $darkColor;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.fab-header:before,
.fab-header:after {
  content: "";
  border: 1px solid $darkColor;
  margin: 0 20px 0 0;
  flex: 1 0 40px;
}

.fab-header:after {
  margin: 0 0 0 20px;
}

.jumbotron.services {
  margin: 0;
  padding: 0;

  .services-container {
    padding: 10px 0 0 0;
  }

  h2 {
    padding-top: 25px;
    margin: 30px auto;
  }

  .card-deck,
  .cards-grouppings-3,
  .testing {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .card {
      background-color: $darkColor;
      box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);

      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      -ms-border-radius: 20px;
      -o-border-radius: 20px;

      margin: 10px auto;

      &.four-cards {
        height: 277px;
        width: 100%;
        min-width: 277px;
        max-width: 277px;
      }

      &.two-cards {
        height: 277px;
        width: 100%;

        max-width: 555px;

        hr {
          width: 100%;
          border: 0.75px solid $lightColor;
          margin: 0;
        }

        .subtext {
          font-family: $mainFont;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: normal;

          color: $lightColor;

          padding: 0;
        }
      }

      &.two-cards-seprate-titles {
        height: 277px;
        width: 100%;

        max-width: 555px;

        hr {
          width: 100%;
          border: 0.75px solid $lightColor;
          margin: 0;
        }

        .subtext {
          font-family: $mainFont;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: normal;

          color: $lightColor;

          padding: 0;
        }
      }

      &.three-cards {
        height: 277px;
        width: 100%;
        min-width: 260px;
        max-width: 368px;
      }

      &.service-one {
        background-image: url("~assets/img/services1.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-two {
        background-image: url("~assets/img/services2.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-three {
        background-image: url("~assets/img/services3.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-four {
        background-image: url("~assets/img/services4.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-five {
        background-image: url("~assets/img/services5.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-six {
        background-image: url("~assets/img/services6.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-seven {
        background-image: url("~assets/img/services7.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-eight {
        background-image: url("~assets/img/services8.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-nine {
        background-image: url("~assets/img/services9.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-ten {
        background-image: url("~assets/img/services10.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-eleven {
        background-image: url("~assets/img/services11.png");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: scale-down;
      }

      &.service-twelve {
        background-image: url("~assets/img/services12.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-13 {
        background-image: url("~assets/img/services13.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-14 {
        background-image: url("~assets/img/services14.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-15 {
        background-image: url("~assets/img/services15.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-16 {
        background-image: url("~assets/img/services16.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-17 {
        background-image: url("~assets/img/services17.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-18 {
        background-image: url("~assets/img/services18.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-19 {
        background-image: url("~assets/img/services19.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-20 {
        background-image: url("~assets/img/services20.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-21 {
        background-image: url("~assets/img/services21.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-22 {
        background-image: url("~assets/img/services22.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-23 {
        background-image: url("~assets/img/services23.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      &.service-24 {
        background-image: url("~assets/img/services24.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: scale-down;
      }

      .card-body {
        height: 212px;
        box-sizing: border-box;
        padding: 20px;
        margin-bottom: 10px;
      }

      .card-end {
        background-color: rgba(0, 0, 0, 0.64);
        backdrop-filter: blur(5px);
        border-radius: 0px 0px 20px 20px;
        box-sizing: border-box;
        padding: 0 10px;

        h5 {
          font-family: $mainFont;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: normal;

          color: $lightColor;

          box-sizing: border-box;
          padding-top: 5px;
        }

        p {
          padding: 7px 0;
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: normal;
          margin-bottom: 18px;

          color: $redColor;

          &.subtext {
            margin-bottom: 5px;
          }

          small {
            font-size: 14px;
            font-family: $mainFont;
            font-style: normal;
            font-weight: bold;
            line-height: normal;
          }
        }

        .btn {
          font-family: $secondaryFont;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: normal;
          background-color: transparent;
          border: $redColor 1px solid;

          color: $lightColor;
          padding: 8px 10px;
        }
      }
    }
  }
}
</style>
