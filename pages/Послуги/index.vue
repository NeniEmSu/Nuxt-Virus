<template>

<div >

           <div class="container text-center p-0 pt-4" id="services-page">

                <img class="col-12  m-auto img-fluid" :src="image" :alt="description" />

                <div class="row p-1">
                    <div class="col-md-7 row m-auto car-toggle">
                        <div class="col-md-4 m-auto" v-for=" variant in variants" :key="variant.variantId">
                            <a href="#" class="btn"
                                @click.prevent="changeCars(variant.variantImage), selected  = variant.variantId "
                                :class="{activeBtn:selected  == variant.variantId}">{{ variant.variantTitle }}</a>
                            <p class="mt-2 mb-0">{{ variant.variantDescription }}</p>
                        </div>
                    </div>
                </div>



                <form class="choose-brand" :class="{hideMe:selected  !== undefined}">
                    <h3 class="col-12 red">Оберіть категорію автомобіля</h3>
                    <p class="col-12 choose-brand-desc">Введіть можель свого авто для визначення категорії
                    </p>

                    <div class="form-group w-25 mx-auto">
                        <!-- <div class="form-group w-50 mx-auto" :class="{hideMe:selected  !== undefined}"> -->
                        <label hidden for="brand">Марка</label>
                        <select id="brand" aria-describedby="brand" class="form-control brand">
                            <option>Марка</option>
                            <option>Марка</option>
                            <option>Марка</option>
                            <option>Марка</option>
                        </select>
                    </div>


                    <div class="form-group w-25 mx-auto">
                        <!-- <div class="form-group w-50 mx-auto" :class="{hideMe:selected  !== undefined}"> -->
                        <label hidden for="model">Модель</label>
                        <select id="model" aria-describedby="model" class="form-control model">
                            <option>Модель</option>
                            <option>Модель</option>
                            <option>Модель</option>
                            <option>Модель</option>
                        </select>
                    </div>

                    <!-- <button type="submit" class="btn" :class="{hideMe:selected  !== undefined}">Вибрати
                        </i></button> -->
                    <button type="submit" class="btn">Вибрати
                        </i></button>
                    <!-- <button type="submit" class="btn" @click.prevent="selected = undefined"
                        :class="{hideMe:selected  == undefined}">Іншу категорія</i></button> -->
                </form>

            </div>
            <div class="mt-3" :class="{hideMe:selected  == undefined}">
                <div class="jumbotron services">
                    <div class="container services-container">

                        <!-- Полірування -->
                        <h2 class="text-center fab-header">Полірування</h2>
                        <div class="card-deck m-0 p-0">
                            <div class="card four-cards" v-for=" polish in polishing" :key="polish.polishingId"
                                :class="polish.polishingClass">
                                <div class="card-body">
                                </div>
                                <div class="card-end">
                                    <h5>{{ polish.polishingTitle }}</h5>
                                    <div class="row">
                                        <div class="col-6 pr-0">
                                            <p class="" v-show="selected == 1">
                                                <small>від

                                                </small>
                                                {{ polish.polishingCost }}
                                                <small>
                                                    грн
                                                </small>
                                            </p>
                                            <p class="" v-show="selected == 2">
                                                <small>від

                                                </small>
                                                {{ polish.polishingCostVar1 }}
                                                <small>
                                                    грн
                                                </small>
                                            </p>
                                            <p class="" v-show="selected == 3">
                                                <small>від

                                                </small>
                                                {{ polish.polishingCostVar2 }}
                                                <small>
                                                    грн
                                                </small>
                                            </p>
                                        </div>

                                        <div class="col-6 m-0 p-0">
                                            <a :href="polish.polishingLink" class="btn">
                                                Читати більше
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Хімчистка -->
                        <h2 class="text-center fab-header">Хімчистка</h2>
                        <div class="card-deck">
                            <div class="card four-cards" v-for=" cleaner in  cleaners" :key="cleaner.cleanersId"
                                :class="cleaner.cleanersClass">
                                <div class="card-body"></div>
                                <div class="card-end">
                                    <h5>{{ cleaner.cleanersTitle }}</h5>
                                    <div class="row">

                                        <div class="col-6 pr-0">
                                            <p class="" v-show="selected == 1">
                                                <small>від

                                                </small>
                                                {{ cleaner.cleanersCost }}
                                                <small>
                                                    грн
                                                </small>
                                            </p>
                                            <p class="" v-show="selected == 2">
                                                <small>від

                                                </small>
                                                {{ cleaner.cleanersCostVar1 }}
                                                <small>
                                                    грн
                                                </small>
                                            </p>
                                            <p class="" v-show="selected == 3">
                                                <small>від

                                                </small>
                                                {{ cleaner.cleanersCostVar2 }}
                                                <small>
                                                    грн
                                                </small>
                                            </p>
                                        </div>

                                        <div class="col-6 m-0 p-0">
                                            <a :href="cleaner.cleanersLink" class="btn">
                                                Читати більше
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Воскове покриття -->
                        <h2 class="text-center fab-header">Воскове покриття</h2>
                        <div class="testing">
                            <div class="row">

                                <div class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto  store-item p-0 p-lg-2 "
                                    v-for=" WaxCover in  WaxCovers" :key="WaxCover.WaxCoversId">
                                    <div class="card two-cards" :class="WaxCover.WaxCoversClass">

                                        <div class="card-body">
                                        </div>
                                        <div class="card-end">
                                            <h5>{{ WaxCover.WaxCoversTitle }}</h5>
                                            <div class="row">
                                                <div class="col-6 pr-0">
                                                    <p class="" v-show="selected == 1">
                                                        <small>від

                                                        </small>
                                                        {{ WaxCover.WaxCoversCost }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                    <p class="" v-show="selected == 2">
                                                        <small>від

                                                        </small>
                                                        {{ WaxCover.WaxCoversCostVar1 }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                    <p class="" v-show="selected == 3">
                                                        <small>від

                                                        </small>
                                                        {{ WaxCover.WaxCoversCostVar2 }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                </div>
                                                <div class="col-6 col-md-4 text-right">
                                                    <a :href="WaxCover.WaxCoversLink" class="btn">
                                                        Читати більше
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="testing">


                            <div class="row">
                                <div class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto p-0 p-lg-2 "
                                    v-for=" ceramicCoat in  ceramicCoating" :key="ceramicCoat.ceramicCoatingId">
                                    <h2 class="text-center card-heading ">Керамічне покриття</h2>
                                    <div class="card two-cards-seprate-titles  service-eleven">


                                        <div class="card-body"> </div>


                                        <div class="card-end">
                                            <h5 class="col-12 px-0">Керамічне покриття кузова</h5>
                                            <hr>
                                            <div class="row">
                                                <div class="col-md-3 mt-2 text-left  mx-md-auto">
                                                    <p class="subtext">Двухфазна мийка</p>
                                                </div>
                                                <div class="col-md-3  mt-2 text-left  mx-md-auto">
                                                    <p class="subtext">Очищення кузова
                                                        від бітуму</p>
                                                </div>
                                                <div class="col-md-3  mt-2 text-left  mx-md-auto">
                                                    <p class="subtext">Легке вілновлююче
                                                        полірування</p>
                                                </div>
                                                <div class="col-md-3  mt-2 text-left mx-md-auto">
                                                    <p class="subtext">Керамічне покриття
                                                        окремих деталей</p>
                                                </div>
                                            </div>


                                            <div class="row">

                                                <div class="col-6 col-md-8 text-lg-right pr-0">
                                                    <p class="" v-show="selected == 1">
                                                        <small>від

                                                        </small>
                                                        {{ ceramicCoat.ceramicCoatingCost }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                    <p class="" v-show="selected == 2">
                                                        <small>від

                                                        </small>
                                                        {{ ceramicCoat.ceramicCoatingCostVar1 }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                    <p class="" v-show="selected == 3">
                                                        <small>від

                                                        </small>
                                                        {{ ceramicCoat.ceramicCoatingCostVar2 }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                </div>
                                                <div class="col-6 col-md-4 text-right">
                                                    <a :href="ceramicCoat.ceramicCoatingLink" class="btn">
                                                        Читати більше
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <!-- Передпродажна підготовка -->
                                <div class="col-10 col-sm-12 col-md-9 col-lg-6 mx-auto p-0 p-lg-2 "
                                    v-for=" PreSalePrep in  PreSalePreparations"
                                    :key="PreSalePrep.PreSalePreparationsId">
                                    <h2 class="text-center card-heading">Передпродажна підготовка</h2>
                                    <div class="card two-cards-seprate-titles  service-twelve">


                                        <div class="card-body">

                                        </div>

                                        <div class="card-end">
                                            <h5 class="col-12 px-0">Комплекс</h5>
                                            <hr style="width: 100%;">
                                            <div class="row">
                                                <div class="col-md-4 mt-2 text-left mx-md-auto">
                                                    <p class="subtext">Трьохфазна мийка авто
                                                        + Чистка ковроліну підлоги</p>
                                                </div>
                                                <div class="col-md-4 mt-2 text-left mx-md-auto">
                                                    <p class="subtext">Чистка дверних карт
                                                        + Чистка панелі</p>
                                                </div>
                                                <div class="col-md-4 mt-2 text-left mx-md-auto">
                                                    <p class="subtext">Чистка воздуховодів
                                                        + Чистка сидінь і стелі
                                                        + Ароматизація салону</p>
                                                </div>

                                            </div>

                                            <div class="row">

                                                <div class="col-6 col-md-8 text-lg-right pr-0">
                                                    <p class="" v-show="selected == 1">
                                                        <small>від

                                                        </small>
                                                        {{ PreSalePrep.PreSalePreparationsCost }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                    <p class="" v-show="selected == 2">
                                                        <small>від

                                                        </small>
                                                        {{ PreSalePrep.PreSalePreparationsCostVar1 }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                    <p class="" v-show="selected == 3">
                                                        <small>від

                                                        </small>
                                                        {{ PreSalePrep.PreSalePreparationsCostVar2 }}
                                                        <small>
                                                            грн
                                                        </small>
                                                    </p>
                                                </div>
                                                <div class="col-6 col-md-4 text-right">
                                                    <a :href="PreSalePrep.PreSalePreparationsLink" class="btn">
                                                        Читати більше
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>

                        <h2 class="text-center fab-header">Додаткові послуги</h2>

                        <div class="row cards-grouppings-3">

                            <div class="col-10 col-sm-12 col-md-5 col-lg-4 mx-auto p-0 p-lg-2"
                                v-for=" addition in  additional" :key="addition.additionalId">
                                <div class="card three-cards " :class="addition.additionalClass">

                                    <div class="card-body">
                                    </div>
                                    <div class="card-end">
                                        <h5>{{ addition.additionalTitle }}</h5>
                                        <div class="row">
                                            <div class="col-6" v-show="selected == 1">
                                                <p v-show="!addition.fixedRange">
                                                    <small v-show="!addition.perItem">
                                                        від
                                                    </small>
                                                    {{ addition.additionalCost }}
                                                    <small v-if="addition.dollar">
                                                        $
                                                    </small>
                                                    <small v-else-if="addition.perItem">
                                                        грн / шт
                                                    </small>
                                                    <small v-else>
                                                        грн
                                                    </small>
                                                </p>
                                                <p v-show="addition.fixedRange">
                                                    <small v-show="!addition.perItem">
                                                        від
                                                    </small>
                                                    {{ addition.additionalCost }}
                                                    <small>
                                                        До
                                                    </small>
                                                    {{ addition.additionalCostHigh }}
                                                    <small v-if="addition.dollar">
                                                        $
                                                    </small>

                                                    <small v-else-if="addition.perItem">
                                                        грн / шт
                                                    </small>
                                                    <small v-else>
                                                        грн
                                                    </small>
                                                </p>
                                            </div>
                                            <div class="col-6" v-show="selected == 2">
                                                <p v-show="!addition.fixedRange">
                                                    <small v-show="!addition.perItem">
                                                        від
                                                    </small>
                                                    {{ addition.additionalCostVar1 }}
                                                    <small v-if="addition.dollar">
                                                        $
                                                    </small>
                                                    <small v-else-if="addition.perItem">
                                                        грн / шт
                                                    </small>
                                                    <small v-else>
                                                        грн
                                                    </small>
                                                </p>
                                                <p v-show="addition.fixedRange">
                                                    <small v-show="!addition.perItem">
                                                        від
                                                    </small>
                                                    {{ addition.additionalCost }}
                                                    <small>
                                                        До
                                                    </small>
                                                    {{ addition.additionalCostHigh }}
                                                    <small v-if="addition.dollar">
                                                        $
                                                    </small>

                                                    <small v-else-if="addition.perItem">
                                                        грн / шт
                                                    </small>
                                                    <small v-else>
                                                        грн
                                                    </small>
                                                </p>
                                            </div>
                                            <div class="col-6" v-show="selected == 3">
                                                <p v-show="!addition.fixedRange">
                                                    <small v-show="!addition.perItem">
                                                        від
                                                    </small>
                                                    {{ addition.additionalCostVar2 }}
                                                    <small v-if="addition.dollar">
                                                        $
                                                    </small>
                                                    <small v-else-if="addition.perItem">
                                                        грн / шт
                                                    </small>
                                                    <small v-else>
                                                        грн
                                                    </small>
                                                </p>
                                                <p v-show="addition.fixedRange">
                                                    <small v-show="!addition.perItem">
                                                        від
                                                    </small>
                                                    {{ addition.additionalCost }}
                                                    <small>
                                                        До
                                                    </small>
                                                    {{ addition.additionalCostHigh }}
                                                    <small v-if="addition.dollar">
                                                        $
                                                    </small>

                                                    <small v-else-if="addition.perItem">
                                                        грн / шт
                                                    </small>
                                                    <small v-else>
                                                        грн
                                                    </small>
                                                </p>
                                            </div>

                                            <div class="col-6 text-right  pl-0">
                                                <a :href="addition.additionalLink" class="btn">
                                                    Читати більше
                                                </a>
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
  }
};
</script>

<style>
</style>
