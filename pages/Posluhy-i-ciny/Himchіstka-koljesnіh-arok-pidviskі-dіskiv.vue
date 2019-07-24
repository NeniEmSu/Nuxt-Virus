<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h1 class="info-pages text-center mobile-only">{{ heading }}</h1>
        <div class="row">
          <div class="col-xl-6 text-center">
            <img
              src="~assets/img/Колісніарки.jpg"
              :alt="heading"
            >
          </div>
          <div class="col-xl-6">
            <h1 class="info-pages desktop-only">{{ heading }}</h1>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>

            <h2 class="pt-2">ЩО ВХОДИТЬ В ПОСЛУГУ?</h2>
            <ul class="ml-3">
              <li
                v-for="(items, heading) in inclusiveInService"
                :key="heading"
              > {{items.services}}</li>
            </ul>
          </div>
        </div>

        <h2 class="red">{{ timeTaken }}</h2>

        <div class="row mx-auto">
          <div class="col-6 mx-auto p-0 before img-fluid">
            <font class="before-image-text">До</font>
          </div>

          <div class="col-6 mx-auto p-0 after img-fluid">
            <font class="after-image-text">Після</font>
          </div>
        </div>

        <serviceCategories
          :category1="category1"
          :category2="category2"
          :category3="category3"
        />
      </div>
    </div>

    <ContactForm :service="service" />

    <progressSection />
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";
import sercivesBreadcrumbs from "@/components/breadcrumbs/sercivesBreadcrumbs.vue";
export default {
  layout: "Services",
  components: {
    ContactForm,
    progressSection,
    sercivesBreadcrumbs
  },

  head () {
    return {
      title: "Детейлінг центр Virus Тернопіль.",
      titleTemplate: this.heading + " - %s!",
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
  data () {
    return {
      service: "3",
      heading: "ПОЛІРУВАННЯ центральних стійок",
      category1: "800 грн",
      category2: "800 грн",
      category3: "800 грн",
      question: "Для чого полірувати стійки?",
      firstParagraph:
        "Своєчасна і професійна хімчистка колісних арок і підвіски автомобіля з подальшою консервацією вузлів допоможе сповільнити налипання бруду і розвиток корозії, а також збереже деталі максимально чистими і візуально новими.",
      secondParagraph: "Після весняної сльоти така послуга - просто must have.",
      thirdParagraph:
        'Погодьтеся, шикарний позашляховик з блискучим кузовом і бездоганно чистим салоном на брудних дисках і шарами бруду на підвісці виглядає вже не "вау"!',
      inclusiveInService: [
        {
          services: "Бережна мийка кузова"
        },
        {
          services: "Хімчистка колісних арок і підвіски"
        },
        {
          services: "Обробка вузлів підвіски консервантом"
        },
        {
          services: "Хімчистка автомобільних дисків"
        }
      ],
      timeTaken: "Час виконання послуги 1 день"
    };
  },
  mounted () {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter6_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter6_002.jpg");
}
</style>
