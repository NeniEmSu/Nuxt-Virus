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
              src="~assets/img/Покриттявоском.jpg"
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
          </div>
        </div>
        <h2 class="pt-2">
          ЩО ВХОДИТЬ В ПОСЛУГУ?
        </h2>
        <ul class="ml-3">
          В наші студії твердий віск наноситься в чистому закритому приміщенні в
          такій послідовності:
          <li
            v-for="(items, heading) in inclusiveInService"
            :key="heading"
          >
            {{ items.services }}
          </li>
        </ul>

        <h2 class="red">
          {{ timeTaken }}
        </h2>

        <servicesYoutubeVideo :video-url="videoUrl" />

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
          hid: 'description',
          name: 'description',
          content: this.firstParagraph.slice(0, 320)
        }
      ]
    }
  },
  data () {
    return {
      service: '8',
      heading: 'Покриття твердим воском',
      category1: '1200 грн',
      category2: '1300 грн',
      category3: '1400 грн',
      videoUrl: 'https://www.youtube.com/embed/NpEaa2P7qZI',
      firstParagraph:
        'Воскове покриття авто - це додатковий захист вашого автомобіля від подряпин, пилу, дрібних відколів, що неодмінно відбувається з машиною при її щоденній експлуатації.',
      secondParagraph:
        'Рекомендується застосовувати послугу обробки воском навіть якщо ви користуєтеся мийними засобами на його основі. Детейлінг-студія Virus надає послугу з нанесення воску на ваш автомобіль. Ми користуємося тільки екологічно чистими матеріалами, які не викликають алергії.',
      thirdParagraph:
        'Обробка авто воском полягає в нанесенні на лакофарбове покриття спеціального воску тонким шаром. Після нанесення на поверхні кузова утворюється тонка плівка з антистатичним і гідрофобним ефектом. Це знімає з покриття лаком електричну напругу. Також кузов машини не буде схильний до пилу і бруду. Буде досягнутий водовідштовхувальний ефект.',
      inclusiveInService: [
        {
          services:
            'Ручна мийка, покриття кузова спеціальним миючим шампунем від забруднень і жиру;'
        },
        {
          services: 'Сушка вимитої поверхні;'
        },
        {
          services:
            'Нанесення твердого воску на невеликі площі і розтирання за допомогою губки;'
        },
        {
          services:
            'Висихання воску. Про повному висиханні утворюється  матова плівка;'
        },
        {
          services:
            'Розполірування висохлого твердого воску на поверхні кузова авто спеціальною мікрофіброю.'
        }
      ],
      timeTaken: 'Час виконання послуги 1 день'
    }
  },
  mounted () {
    if (process.client) {
      this.$scrollTo('#top-contact', 100, { force: true })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";
</style>
