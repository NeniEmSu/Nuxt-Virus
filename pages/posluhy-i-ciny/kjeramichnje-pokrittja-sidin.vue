<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h2 class="info-pages mobile-only">{{ heading }}</h2>
        <div class="row">
          <div class="col-xl-6 text-center">
            <img
              src="~assets/img/КЕРАМІЧНЕПОКРИТТЯСИДІНЬ.jpg"
              :alt="heading"
            >
          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">{{ heading }}</h2>
            <p class>{{ firstParagraph }}</p>
            <p class>{{ secondParagraph }}</p>
            <p class>{{ thirdParagraph }}</p>
            <p class>{{ fourthParagraph }}</p>
            <p class>{{ fifthParagraph }}</p>
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

export default {


  head () {
    return {
      title: this.heading.slice(0, 60),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.firstParagraph.slice(0, 320)
        }
      ]
    }
  },
  data () {
    return {
      service: "22",
      heading: "КЕРАМІЧНЕ ПОКРИТТЯ СИДІНЬ",
      category1: "500 грн",
      category2: "500 грн",
      category3: "500 грн",
      firstParagraph:
        "Як зберегти салон нового автомобіля чистим надовго? Як продовжити ефект від детейлінг-хімчистки салону? Як уникнути появи плям на текстилі і шкірі?",
      secondParagraph:
        'Спеціально для цих цілей існує послуга "керамічне покриття салону". Захисне покриття створює гідрофобний ефект, і бруд при попаданні в салон не вбирається в матеріал, а залишається на його поверхні - і її легко видалити за допомогою вологої фібри. Варіанти захисту можуть бути різні:',
      thirdParagraph:
        "Можна захистити тільки водійське сидіння, або тільки всі шкіряні лементи салону, або тільки текстиль, або ж весь салон цілком.",
      fourthParagraph:
        "Якщо захист нанесено правильно, то шкіра і пластик в салоні залишаться матовими, вони не повинні блистіти.",
      fifthParagraph:
        "Термін служби такого покриття близько 4 місяців (залежить від умов експлуатації) - саме те проїздити від хімчистки до хімчистки!",
      inclusiveInService: [
        {
          services:
            "Підготовка поверхні до нанесення захисного покриття (знежирення)"
        },
        {
          services: "Нанесення захисного покриття"
        }
      ],
      timeTaken: "Час виконання послуги 1 день"
    };
  },
  mounted () {
    if (process.client) {
      this.$scrollTo("#top-contact", 100, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";

.before {
  background-image: url("~assets/img/beforeAfter12_001.jpg");
}

.after {
  background-image: url("~assets/img/beforeAfter12_002.jpg");
}
</style>
