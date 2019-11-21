<template>
  <div>
    <div class="jumbotron">
      <sercivesBreadcrumbs
        :heading="heading"
        class="desktop-tablet-only"
      />
      <div class="container text-left">
        <h2 class="info-pages text-center mobile-only">
          {{ heading }}
        </h2>
        <div class="row">
          <div class="col-xl-6 text-center">
            <b-img-lazy
              src="~/assets/img/ЧИСТКАДИСКІВ.jpg"
              :alt="heading"
            />
          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">
              {{ heading }}
            </h2>
            <p class>
              {{ firstParagraph }}
            </p>
            <p class>
              {{ secondParagraph }}
            </p>
            <p class>
              {{ thirdParagraph }}
            </p>

            <h2 class="pt-2">
              ЩО ВХОДИТЬ В ПОСЛУГУ?
            </h2>
            <ul class="ml-3">
              <li
                v-for="(items, index) in inclusiveInService"
                :key="index"
                class="list-unstyled"
                style="margin-left: -16px;"
              >
                {{ items.services }}
              </li>
            </ul>
          </div>
        </div>

        <h2 class="red">
          {{ timeTaken }}
        </h2>

        <div class="row mx-auto">
          <div class="col-6 mx-auto p-0 before img-fluid">
            <font class="before-image-text">
              До
            </font>
          </div>

          <div class="col-6 mx-auto p-0 after img-fluid">
            <font class="after-image-text">
              Після
            </font>
          </div>
        </div>

        <servicesYoutubeVideo
          :video-url="videoUrl"
          :title="`${heading} Video`"
        />

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
  data () {
    return {
      service: 'Чистка дисків',
      heading: 'ЧИСТКА ДИСКІВ',
      category1: '250 грн',
      category2: '300 грн',
      category3: '300 грн',
      videoUrl: 'https://www.youtube.com/embed/__BVWfgMeC4',
      firstParagraph:
        'Унікальна методика мийки, використовувана в нашій компанії для дбайливого догляду за колісними дисками, передбачає комплексний підхід. Досвідчені фахівці проводять дбайливе усунення забруднень з дисків авто, застосовуючи якісні засоби. ',
      secondParagraph:
        'Після ретельного очищення, не залишається розлучень та інших негативних проявів.',
      thirdParagraph:
        'Чим довше бруд, бітум, стружка з гальмівних колодок, гума з коліс, дорожня хімія, солі та інші забруднення будуть перебувати на ваших дисках, тим більше ризик, що трохи згодом вони будуть виглядати каламутними, пожовклими і, звичайно, пошкодженими.',
      inclusiveInService: [
        {
          services:
            'При попаданні на дискову поверхню засіб взаємодіє з гальмівною стружкою, що застрягла в лаку, розщеплює її і виводить з рідиною, змінюючи при цьому колір. І чим більше забруднені диски, тим більш насичений колір матиме рідина. Ефект ви побачите відразу після ополіскування дисків водою - вони стають більш блискучими і помітно гладкими.'
        }
      ],
      timeTaken: 'Час виконання послуги 1 день'
    }
  },
  mounted () {
    if (process.client) {
      this.$scrollTo('#top-contact', 100, { force: true })
    }
  },
  head () {
    return {
      title: this.heading.slice(0, 60),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.firstParagraph.slice(0, 320)
        }
      ]
    }
  }
}
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
