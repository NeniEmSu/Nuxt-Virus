<template>
  <div>
    <nav class="container desktop-only" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">Головна</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Послуги і ціни</li>
      </ol>
    </nav>
    <div class="container text-center desktop-big-tab-only p-0 pt-4">
      <picture>
        <source :srcset="require(`~/assets/imgWebP/${image + '.webp'}`)" type="image/webp">
        <img
          class="col-12 m-auto img-fluid"
          :src="require(`~/assets/img/${image + '.jpg'}`)"
          :alt="description"
        >
      </picture>

      <div class="col-md-7 m-auto car-toggle">
        <div class="row text-center">
          <div v-for="variant in variants" :key="variant.variantId" class="col-md-4 mx-auto">
            <a
              href="#"
              class="btn"
              :class="{ activeBtn: selected == variant.variantId }"
              @click.prevent="
                changeCars(variant.variantImage), (selected = variant.variantId)
              "
            >{{ variant.variantTitle }}</a>
            <p class="mt-2 mb-0">{{ variant.variantDescription }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="jumbotron mobile-only pb-1">
      <div class="container">
        <div
          class="card none mx-auto"
          @click.prevent="(selected = 1)"
          :class="{ hideMe: selected == 2 || selected == 3 }"
        >
          <div class="row no-gutters">
            <div class="col-6">
              <img src="~/assets/img/mercedes-png-white-m.png" class="card-img img-fluid" alt="...">
            </div>
            <div class="col-6">
              <div class="card-body p-0 pl-1">
                <h5 class="card-title text-left">Ⅰ категорія</h5>
                <hr>
                <div class="row">
                  <div class="col-6">
                    <p class="card-text text-left">•середній</p>
                    <p class="card-text text-left">•бізнес</p>
                  </div>
                  <div class="col-6">
                    <p class="card-text text-left">•спорт купе</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card none mx-auto"
          @click.prevent="(selected = 2)"
          :class="{ hideMe: selected == 1 || selected == 3 }"
        >
          <div class="row no-gutters">
            <div class="col-6">
              <img
                src="~/assets/img/png-hd-of-car-jeep-grand-cherokee-srt-white-car-png-image-car-hd-png-1550.png"
                class="card-img img-fluid"
                alt="..."
              >
            </div>
            <div class="col-6">
              <div class="card-body p-0 pl-1">
                <h5 class="card-title text-left">ⅠⅠ категорія</h5>
                <hr>
                <p class="card-text text-left">•середній кросовер</p>
                <p class="card-text text-left">•позашляховик</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card none mx-auto"
          @click.prevent="(selected = 3)"
          :class="{ hideMe: selected == 1 || selected == 2 }"
        >
          <div class="row no-gutters">
            <div class="col-6">
              <img
                src="~/assets/img/PNGPIX-COM-Black-Range-Rover-Piano-Car-PNG-Image.png"
                class="card-img img-fluid"
                alt="Black-Range-Rover-Piano-Car"
              >
            </div>
            <div class="col-6">
              <div class="card-body p-0 pl-1">
                <h5 class="card-title text-left">ⅠⅠⅠ категорія</h5>
                <hr>
                <p class="card-text text-left">•позашляховик</p>
                <p class="card-text text-left">•повнорозмірний кросовер</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="jumbotron choose-brand-container pt-2 pb-2"
      :class="{ hideMe: selected !== undefined }"
    >
      <div class="container text-center">
        <form class="choose-brand">
          <h3 class="col-12 red">Оберіть категорію автомобіля</h3>
          <p class="col-12 choose-brand-desc">Введіть можель свого авто для визначення категорії</p>

          <div class="form-group mx-auto">
            <label hidden for="brand">Марка</label>
            <select id="brand" aria-describedby="brand" class="form-control brand">
              <option>Марка</option>
              <option>Марка</option>
              <option>Марка</option>
              <option>Марка</option>
            </select>
          </div>

          <div class="form-group mx-auto">
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
    </div>

    <div class :class="{ hideMe: selected == undefined }">
      <div class="jumbotron services">
        <div class="container services-container">
          <!-- Полірування -->
          <h2 class="text-center fab-header">Полірування</h2>

          <div class="row">
            <div
              v-for="polish in polishing"
              :key="polish.polishingId"
              class="card polishing card__hover mx-auto"
            >
              <img
                class="card-img"
                :src="require(`~/assets/img/${polish.polishingImg + '.jpg'}`)"
                :alt="polish.polishingTitle"
              >
              <div class="card-img-overlay">
                <h5 class="card-title">{{ polish.polishingTitle }}</h5>
                <div class="row">
                  <div class="col-6 pr-0">
                    <p v-show="selected == 1" class>
                      <small>від</small>
                      {{ polish.polishingCost }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 2" class>
                      <small>від</small>
                      {{ polish.polishingCostVar1 }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 3" class>
                      <small>від</small>
                      {{ polish.polishingCostVar2 }}
                      <small>грн</small>
                    </p>
                  </div>
                  <div class="col-6 text-right pl-0">
                    <nuxt-link :to="polish.polishingLink" class="btn">Читати більше</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="card-deck m-0 p-0">
            <div
              v-for="polish in polishing"
              :key="polish.polishingId"
              class="card four-cards"
              :class="polish.polishingClass"
            >
              <div class="card-body"></div>
              <div class="card-end">
                <h5>{{ polish.polishingTitle }}</h5>
                <div class="row">
                  <div class="col-6 pr-0">
                    <p v-show="selected == 1" class>
                      <small>від</small>
                      {{ polish.polishingCost }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 2" class>
                      <small>від</small>
                      {{ polish.polishingCostVar1 }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 3" class>
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
          </div>-->

          <!-- Хімчистка -->
          <h2 class="text-center fab-header">Хімчистка</h2>

          <div class="row">
            <div
              v-for="cleaner in cleaners"
              :key="cleaner.cleanersId"
              class="card cleaning card__hover mx-auto"
            >
              <img
                class="card-img"
                :src="require(`~/assets/img/${cleaner.cleanersImg + '.jpg'}`)"
                :alt="cleaner.cleanersTitle"
              >
              <div class="card-img-overlay cleaning">
                <h5 class="card-title">{{ cleaner.cleanersTitle }}</h5>
                <div class="row">
                  <div class="col-6 pr-0">
                    <p v-show="selected == 1" class>
                      <small>від</small>
                      {{ cleaner.cleanersCost }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 2" class>
                      <small>від</small>
                      {{ cleaner.cleanersCostVar1 }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 3" class>
                      <small>від</small>
                      {{ cleaner.cleanersCostVar2 }}
                      <small>грн</small>
                    </p>
                  </div>
                  <div class="col-6 text-right pl-0">
                    <nuxt-link :to="cleaner.cleanersLink" class="btn">Читати більше</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card-deck">
            <div
              v-for="cleaner in cleaners"
              :key="cleaner.cleanersId"
              class="card four-cards"
              :class="cleaner.cleanersClass"
            >
              <div class="card-body"></div>
              <div class="card-end">
                <h5>{{ cleaner.cleanersTitle }}</h5>
                <div class="row">
                  <div class="col-6 pr-0">
                    <p v-show="selected == 1" class>
                      <small>від</small>
                      {{ cleaner.cleanersCost }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 2" class>
                      <small>від</small>
                      {{ cleaner.cleanersCostVar1 }}
                      <small>грн</small>
                    </p>
                    <p v-show="selected == 3" class>
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
          </div>-->

          <!-- Воскове покриття -->
          <h2 class="text-center fab-header">Воскове покриття</h2>
          <div class="testing">
            <div class="row">
              <div
                v-for="WaxCover in WaxCovers"
                :key="WaxCover.WaxCoversId"
                class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto store-item p-0 p-lg-2"
              >
                <div class="card two-cards" :class="WaxCover.WaxCoversClass">
                  <div class="card-body"></div>
                  <div class="card-end">
                    <h5>{{ WaxCover.WaxCoversTitle }}</h5>
                    <div class="row">
                      <div class="col-6 pr-0">
                        <p v-show="selected == 1" class>
                          <small>від</small>
                          {{ WaxCover.WaxCoversCost }}
                          <small>грн</small>
                        </p>
                        <p v-show="selected == 2" class>
                          <small>від</small>
                          {{ WaxCover.WaxCoversCostVar1 }}
                          <small>грн</small>
                        </p>
                        <p v-show="selected == 3" class>
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
                v-for="ceramicCoat in ceramicCoating"
                :key="ceramicCoat.ceramicCoatingId"
                class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto p-0 p-lg-2"
              >
                <h2 class="text-center card-heading">Керамічне покриття</h2>
                <div class="card two-cards-seprate-titles service-eleven">
                  <div class="card-body"></div>

                  <div class="card-end">
                    <h5 class="col-12 px-0">Керамічне покриття кузова</h5>
                    <hr>
                    <div class="row">
                      <div class="col-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">Двухфазна мийка</p>
                      </div>
                      <div class="col-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">Очищення кузова від бітуму</p>
                      </div>
                      <div class="col-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">Легке вілновлююче полірування</p>
                      </div>
                      <div class="col-3 mt-2 text-left mx-md-auto">
                        <p class="subtext">Керамічне покриття окремих деталей</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-md-8 text-lg-right pr-0">
                        <p v-show="selected == 1" class>
                          <small>від</small>
                          {{ ceramicCoat.ceramicCoatingCost }}
                          <small>грн</small>
                        </p>
                        <p v-show="selected == 2" class>
                          <small>від</small>
                          {{ ceramicCoat.ceramicCoatingCostVar1 }}
                          <small>грн</small>
                        </p>
                        <p v-show="selected == 3" class>
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
                v-for="PreSalePrep in PreSalePreparations"
                :key="PreSalePrep.PreSalePreparationsId"
                class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto p-0 p-lg-2"
              >
                <h2 class="text-center card-heading">Передпродажна підготовка</h2>
                <div class="card two-cards-seprate-titles service-twelve">
                  <div class="card-body"></div>

                  <div class="card-end">
                    <h5 class="col-12 px-0">Комплекс</h5>
                    <hr style="width: 100%;">
                    <div class="row">
                      <div class="col-4 mt-2 text-left mx-md-auto">
                        <p class="subtext">Трьохфазна мийка авто + Чистка ковроліну підлоги</p>
                      </div>
                      <div class="col-4 mt-2 text-left mx-md-auto">
                        <p class="subtext">Чистка дверних карт + Чистка панелі</p>
                      </div>
                      <div class="col-4 mt-2 text-left mx-md-auto">
                        <p class="subtext">
                          Чистка воздуховодів + Чистка сидінь і стелі +
                          Ароматизація салону
                        </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-md-8 text-lg-right pr-0">
                        <p v-show="selected == 1" class>
                          <small>від</small>
                          {{ PreSalePrep.PreSalePreparationsCost }}
                          <small>грн</small>
                        </p>
                        <p v-show="selected == 2" class>
                          <small>від</small>
                          {{ PreSalePrep.PreSalePreparationsCostVar1 }}
                          <small>грн</small>
                        </p>
                        <p v-show="selected == 3" class>
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
              v-for="addition in additional"
              :key="addition.additionalId"
              class="col-10 col-sm-12 col-md-5 col-lg-4 mx-auto p-0 p-lg-2"
            >
              <div class="card three-cards" :class="addition.additionalClass">
                <div class="card-body"></div>
                <div class="card-end">
                  <h5>{{ addition.additionalTitle }}</h5>
                  <div class="row">
                    <div v-show="selected == 1" class="col-6">
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
                    <div v-show="selected == 2" class="col-6">
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
                    <div v-show="selected == 3" class="col-6">
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

      <ContactForm :service="service"/>

      <progressSection/>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

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
  data() {
    return {
      service: null,
      image: "services-car-goup-all",
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
          variantImage: "services-car-goup-var-1"
        },
        {
          variantId: 2,
          variantTitle: "ⅠⅠ категорія",
          variantDescription: "середній кросовер позашляховик",
          variantImage: "services-car-goup-var-2"
        },
        {
          variantId: 3,
          variantTitle: "ⅠⅠⅠ категорія",
          variantDescription: "повнорозмірний кросовер позашляховик",
          variantImage: "services-car-goup-var-3"
        }
      ],
      polishing: [
        {
          polishingId: "01",
          polishingTitle: "Полірування автомобіля",
          polishingCost: "5999",
          polishingCostVar1: "6999",
          polishingCostVar2: "8499",
          polishingLink: "Послуги/Полірування",
          polishingClass: "service-one",
          polishingImg: "services1"
        },
        {
          polishingId: "02",
          polishingTitle: "Полірування фар",
          polishingCost: "600",
          polishingCostVar1: "700",
          polishingCostVar2: "800",
          polishingLink: "Послуги/Поліруванняфар",
          polishingClass: "service-two",
          polishingImg: "services2"
        },
        {
          polishingId: "03",
          polishingTitle: "Полірування вставок салону",
          polishingCost: "500",
          polishingCostVar1: "600",
          polishingCostVar2: "700",
          polishingLink: "Послуги/Вставкисалону",
          polishingClass: "service-three",
          polishingImg: "services3"
        },
        {
          polishingId: "04",
          polishingTitle: "Полірування центральних стійок",
          polishingCost: "800",
          polishingCostVar1: "900",
          polishingCostVar2: "1000",
          polishingLink: "Послуги/Центральністійки",
          polishingClass: "service-four",
          polishingImg: "services4"
        }
      ],
      cleaners: [
        {
          cleanersId: "05",
          cleanersTitle: "Хімчистка",
          cleanersCost: "1999",
          cleanersCostVar1: "2499",
          cleanersCostVar2: "3199",
          cleanersLink: "Послуги/Хімчистка",
          cleanersClass: "service-five",
          cleanersImg: "services5"
        },
        {
          cleanersId: "06",
          cleanersTitle: "Хімчистка колесних арок, підвіски, дисків",
          cleanersCost: "800",
          cleanersCostVar1: "0",
          cleanersCostVar2: "0",
          cleanersLink: "Послуги/Колісніарки",
          cleanersClass: "service-six",
          cleanersImg: "services6"
        },
        {
          cleanersId: "07",
          cleanersTitle: "Хімчистка передніх сидінь",
          cleanersCost: "275",
          cleanersCostVar1: "330",
          cleanersCostVar2: "385",
          cleanersLink: "Послуги/передніхсидінь",
          cleanersClass: "service-seven",
          cleanersImg: "services7"
        },
        {
          cleanersId: "08",
          cleanersTitle: "Хімчистка задніх сидінь",
          cleanersCost: "495",
          cleanersCostVar1: "605",
          cleanersCostVar2: "660",
          cleanersLink: "Послуги/задніхсидінь",
          cleanersClass: "service-eight",
          cleanersImg: "services8"
        }
      ],
      WaxCovers: [
        {
          WaxCoversId: "09",
          WaxCoversTitle: "Покриття твердим універсальним воском Soft 99",
          WaxCoversCost: "1200",
          WaxCoversCostVar1: "1300",
          WaxCoversCostVar2: "1400",
          WaxCoversLink: "Послуги/Покриттявоском",
          WaxCoversClass: "service-nine"
        },
        {
          WaxCoversId: "10",
          WaxCoversTitle: "Рідке скло",
          WaxCoversCost: "3000",
          WaxCoversCostVar1: "0",
          WaxCoversCostVar2: "0",
          WaxCoversLink: "Послуги/Рідкескло",
          WaxCoversClass: "service-ten"
        }
      ],
      ceramicCoating: [
        {
          ceramicCoatingId: "11",
          ceramicCoatingCost: "12999",
          ceramicCoatingCostVar1: "14499",
          ceramicCoatingCostVar2: "15999",
          ceramicCoatingLink: "Послуги/Керамічнепокриття"
        }
      ],
      PreSalePreparations: [
        {
          PreSalePreparationsId: "12",
          PreSalePreparationsCost: "1100",
          PreSalePreparationsCostVar1: "1200",
          PreSalePreparationsCostVar2: "1300",
          PreSalePreparationsLink: "Послуги/Передпродажнапідготовка"
        }
      ],

      additional: [
        {
          additionalId: "13",
          additionalTitle: "Реставнація подряпин на кузові",
          additionalCost: "130",
          additionalCostHigh: "250",
          fixedRange: true,
          additionalLink: "Послуги/Реставраціяподряпин",
          additionalClass: "service-13"
        },
        {
          additionalId: "14",
          additionalTitle: "Перешиття шкіряних деталей салону",
          additionalCost: "500",
          additionalCostHigh: "3000",
          fixedRange: true,
          additionalLink: "Послуги/Перешиття",
          additionalClass: "service-14"
        },
        {
          additionalId: "15",
          additionalTitle: "Антидощ",
          additionalCost: "600",
          additionalCostHigh: "1200",
          fixedRange: true,
          additionalLink: "Послуги/Антидощ",
          additionalClass: "service-15"
        },
        {
          additionalId: "16",
          additionalTitle: "Мийка мотору парою",
          additionalCost: "500",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Послуги/Мийкамотору",
          additionalClass: "service-16"
        },
        {
          additionalId: "17",
          additionalTitle: "Шумоізоляція",
          additionalCost: "330",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          dollar: true,
          additionalLink: "Послуги/ШУМОІЗОЛЯЦІЯ",
          additionalClass: "service-17"
        },
        {
          additionalId: "18",
          additionalTitle: "Видалення запахів Бактерецидна обробка",
          additionalCost: "500",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Послуги/БАКТЕРЕЦИДНАОБРОБКА",
          additionalClass: "service-18"
        },
        {
          additionalId: "19",
          additionalTitle: "Видалення вмятин без покраски PDR",
          additionalCost: "0",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Послуги/Видаленнявмятин",
          additionalClass: "service-19"
        },
        {
          additionalId: "20",
          additionalTitle: "Поклейка антигравійної плівки",
          additionalCost: "1000",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Послуги/антигравійноїплівки",
          additionalClass: "service-20"
        },
        {
          additionalId: "21",
          additionalTitle: "Очистка кондиціонера",
          additionalCost: "1200",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Послуги/Очисткакондиціонера",
          additionalClass: "service-21"
        },
        {
          additionalId: "22",
          additionalTitle: "Чистка дисків",
          additionalCost: "250",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          perItem: true,
          additionalLink: "Послуги/ЧИСТКАДИСКІВ",
          additionalClass: "service-22"
        },
        {
          additionalId: "23",
          additionalTitle: "Керамічне покриття сидінь",
          additionalCost: "500",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          perItem: true,
          additionalLink: "Послуги/КЕРАМІЧНЕПОКРИТТЯСИДІНЬ",
          additionalClass: "service-23"
        },
        {
          additionalId: "24",
          additionalTitle: "Озонація",
          additionalCost: "1000",
          additionalCostVar1: "0",
          additionalCostVar2: "0",
          additionalLink: "Послуги/Озонація",
          additionalClass: "service-24"
        }
      ]
    };
  },
  methods: {
    changeCars(variantImage) {
      this.image = variantImage;
    }
  }
};
</script>

<style lang="scss" scoped>
.card.polishing,
.card.cleaning {
  background-color: $darkColor;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border: 0;

  margin-bottom: 10px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;

  width: 100%;
  min-width: 277px;
  max-width: 277px;
  height: 277px;

  img {
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
    border-radius: 20px;

    width: 100%;
    min-width: 277px;
    max-width: 277px;
    height: 277px;
    border: 0;
  }

  .card-title {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: $lightColor;
    text-align: left;
    margin-bottom: 5px;
  }
}
.cleaning .card-img.overlay {
  top: 70%;
}
.card-img-overlay {
  top: 70%;
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
    border-radius: 50px;

    color: $lightColor;
    padding: 8px 10px;
  }
}

.card__hover {
  transition: transform 500ms;
  -webkit-transition: transform 500ms;
  -moz-transition: transform 500ms;
  -ms-transition: transform 500ms;
  -o-transition: transform 500ms;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: "";
    opacity: 0;
    z-index: -1;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.01, 1.01, 1);
    -webkit-transform: scale3d(1.01, 1.01, 1);
    -moz-transform: scale3d(1.01, 1.01, 1);
    -ms-transform: scale3d(1.01, 1.01, 1);
    -o-transform: scale3d(1.01, 1.01, 1);

    &::after {
      opacity: 1;
    }
  }
}

@include mediaMd {
  .card.polishing,
  .card.cleaning {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
    border-radius: 10px;

    height: 210px;
    width: 100%;
    min-width: 210px;
    max-width: 210px;

    img {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
      border-radius: 10px;

      height: 210px;
      width: 100%;
      min-width: 210px;
      max-width: 210px;
    }

    .card-title {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      color: $lightColor;
      text-align: left;
      margin-bottom: 5px;
    }
  }

  .card-img-overlay {
    top: 70%;
    background-color: rgba(0, 0, 0, 0.64);
    backdrop-filter: blur(5px);
    border-radius: 0px 0px 10px 10px;
    box-sizing: border-box;
    padding: 0 5px;

    h5 {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 4px;
    }

    p {
      padding: 2px 0;
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 12px;

      &.subtext {
        margin-bottom: 5px;
      }

      small {
        font-size: 10px;
        line-height: 12px;
      }
    }

    .btn {
      font-size: 10px;
      line-height: 12px;

      padding: 4px 5px;
    }
  }
  .card-img.overlay.cleaning {
    top: 65%;
  }
}

@include mediaSm {
  .card.polishing,
  .card.cleaning {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    border: 0;

    height: 163px;
    width: 100%;
    min-width: 163px;
    max-width: 163px;

    img {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
      border-radius: 10px;

      height: 163px;
      width: 100%;
      min-width: 163px;
      max-width: 163px;
    }

    .card-title {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      color: $lightColor;
      text-align: left;
      margin-bottom: 5px;
    }
  }

  .card-img-overlay {
    top: 50%;
    background-color: rgba(0, 0, 0, 0.64);
    backdrop-filter: blur(5px);
    border-radius: 0px 0px 10px 10px;
    box-sizing: border-box;
    padding: 0 5px;

    h5 {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 4px;
    }

    p {
      padding: 2px 0;
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 12px;

      &.subtext {
        margin-bottom: 5px;
      }

      small {
        font-size: 10px;
        line-height: 12px;
      }
    }

    .btn {
      font-size: 10px;
      line-height: 12px;

      padding: 4px 5px;
    }
  }
  .card-img.overlay.cleaning {
    top: 30%;
  }
}

@include mediaXSm {
  .card.polishing,
  .card.cleaning {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    border: 0;

    height: 158px;
    width: 100%;
    min-width: 158px;
    max-width: 158px;

    img {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
      border-radius: 10px;

      height: 158px;
      width: 100%;
      min-width: 158px;
      max-width: 158px;
    }

    .card-title {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      color: $lightColor;
      text-align: left;
      margin-bottom: 5px;
    }
  }

  .card-img-overlay {
    top: 40%;
    background-color: rgba(0, 0, 0, 0.64);
    backdrop-filter: blur(5px);
    border-radius: 0px 0px 10px 10px;
    box-sizing: border-box;
    padding: 0 5px;

    h5 {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 4px;
    }

    p {
      padding: 2px 0;
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 12px;

      &.subtext {
        margin-bottom: 5px;
      }

      small {
        font-size: 10px;
        line-height: 12px;
      }
    }

    .btn {
      font-size: 10px;
      line-height: 12px;

      padding: 4px 5px;
    }
  }
  .card-img.overlay.cleaning {
    top: 30%;
  }
}

@include mediaXXSm {
  .card.polishing,
  .card.cleaning {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
    border-radius: 10px;

    height: 135px;
    width: 100%;
    min-width: 135px;
    max-width: 135px;

    img {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
      border-radius: 10px;

      height: 135px;
      width: 100%;
      min-width: 135px;
      max-width: 135px;
    }

    .card-title {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      color: $lightColor;
      text-align: left;
      margin-bottom: 5px;
    }
  }

  .card-img-overlay {
    top: 40%;
    background-color: rgba(0, 0, 0, 0.64);
    backdrop-filter: blur(5px);
    border-radius: 0px 0px 10px 10px;
    box-sizing: border-box;
    padding: 0 2.5px;

    h5 {
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 2px;
    }

    p {
      padding: 1px 0;
      font-size: 10px;
      line-height: 12px;
      margin-top: 6px;

      small {
        font-size: 8px;
        line-height: 10px;
      }
    }

    .btn {
      font-size: 8px;
      line-height: 10px;

      padding: 2px 2.5px;
    }
  }
  .card-img.overlay.cleaning {
    top: 10%;
  }
}
</style>


<style lang="scss" scoped>
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
  height: 20px;
  float: right;
  content: url("~assets/img/chevron-right.webp");
  line-height: 32px;
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
  width: 50%;

  margin: 20px auto 0 auto;
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
      border: 0;

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
        background-image: url("~assets/img/services1.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-two {
        background-image: url("~assets/img/services2.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-three {
        background-image: url("~assets/img/services3.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-four {
        background-image: url("~assets/img/services4.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-five {
        background-image: url("~assets/img/services5.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-six {
        background-image: url("~assets/img/services6.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-seven {
        background-image: url("~assets/img/services7.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-eight {
        background-image: url("~assets/img/services8.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-nine {
        background-image: url("~assets/img/services9.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-ten {
        background-image: url("~assets/img/services10.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-eleven {
        background-image: url("~assets/img/services11.jpg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: scale-down;
      }

      &.service-twelve {
        background-image: url("~assets/img/services12.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-13 {
        background-image: url("~assets/img/services13.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-14 {
        background-image: url("~assets/img/services14.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-15 {
        background-image: url("~assets/img/services15.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-16 {
        background-image: url("~assets/img/services16.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-17 {
        background-image: url("~assets/img/services17.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-18 {
        background-image: url("~assets/img/services18.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-19 {
        background-image: url("~assets/img/services19.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-20 {
        background-image: url("~assets/img/services20.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-21 {
        background-image: url("~assets/img/services21.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-22 {
        background-image: url("~assets/img/services22.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-23 {
        background-image: url("~assets/img/services23.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }

      &.service-24 {
        background-image: url("~assets/img/services24.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
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

.mobile-only {
  display: none;
}

.choose-brand-container {
  background-color: $lightColor;
}

.none {
  width: 100%;
  max-width: 500px;

  cursor: pointer;

  background: $lightColor;
  border-radius: 10px;
  border: 0;
  min-height: 80px;
  max-height: 80px;
  height: 100%;
  margin-bottom: 20px;
}

.none .card-img {
  width: auto;
  height: 80px;
  object-fit: contain;
  object-position: center;
}
.none h5 {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: $darkColor;

  margin-bottom: 5px;
}

.none p {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  text-align: center;

  color: $darkColor;

  margin-bottom: 5px;
}

.none hr {
  border: 1px solid #c4c4c4;
  padding: 0;
  margin: 0 0 5px 0;
}
@include mediaMenu {
  .desktop-only {
    display: none;
  }
}

@include mediaLg {
  .choose-brand-container {
    background-color: #e9ecef;
  }

  .desktop-big-tab-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }

  select.brand,
  select.model {
    width: 75%;
  }

  .fab-header:before,
  .fab-header:after {
    display: none;
  }

  .fab-header:after {
    display: none;
  }

  form.choose-brand {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .none {
    width: 100%;
    max-width: 500px;

    cursor: pointer;

    background: $lightColor;
    border-radius: 10px;
    border: 0;
    min-height: 100px;
    max-height: 100px;
    height: 100%;
    margin-bottom: 20px;
  }

  .none .card-img {
    width: auto;
    height: 100px;
    object-fit: contain;
    object-position: center center;
  }
  .none h5 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 22px;

    color: $darkColor;

    margin-bottom: 5px;
  }

  .none p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    text-align: center;

    color: $darkColor;

    margin-bottom: 5px;
  }

  .none hr {
    border: 1px solid #c4c4c4;
    padding: 0;
    margin: 0 0 5px 0;
  }
}

@include mediaMd {
  .choose-brand-container {
    background-color: #e9ecef;
  }
  .desktop-big-tab-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }

  select.brand,
  select.model {
    width: 100%;
  }

  .fab-header:before,
  .fab-header:after {
    display: none;
  }

  .fab-header:after {
    display: none;
  }

  form.choose-brand {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
@include mediaSm {
  .jumbotron.services {
    h2 {
      padding-top: 0px;
      margin: 0 auto 10px auto;

      font-size: 20px;
      line-height: 23px;
    }

    .card-deck,
    .cards-grouppings-3,
    .testing {
      .card {
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);

        border-radius: 10px;

        &.four-cards {
          height: 163px;
          width: 100%;
          min-width: 163px;
          max-width: 163px;
        }

        &.two-cards {
          height: 163px;
          width: 100%;

          max-width: 163px;

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
          height: 162px;
          width: 100%;

          max-width: 335px;

          hr {
            width: 100%;
            border: 0.75px solid $lightColor;
            margin: 0;
          }

          .subtext {
            font-size: 8px;
            line-height: 9px;
          }
        }

        &.three-cards {
          height: 162px;
          width: 100%;
          min-width: 162px;
          max-width: 162px;
        }

        .card-body {
          height: 80px;
          box-sizing: border-box;
          padding: 10px;
          margin-bottom: 5px;
        }

        .card-end {
          background-color: rgba(0, 0, 0, 0.64);
          backdrop-filter: blur(5px);
          border-radius: 0px 0px 10px 10px;
          box-sizing: border-box;
          padding: 0 5px;

          h5 {
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 4px;
          }

          p {
            padding: 2px 0;
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 12px;

            &.subtext {
              margin-bottom: 5px;
            }

            small {
              font-size: 10px;
              line-height: 12px;
            }
          }

          .btn {
            font-size: 10px;
            line-height: 12px;

            padding: 4px 5px;
          }
        }
      }
    }
  }
}
</style>
