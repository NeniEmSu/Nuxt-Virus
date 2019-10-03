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
              src="~assets/img/Рідкескло.jpg"
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
            <p class>
              {{ fourthParagraph }}
            </p>
          </div>
        </div>
        <h2 class="pt-2">
          ЩО ВХОДИТЬ В ПОСЛУГУ?
        </h2>
        <ul class="ml-3">
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
      service: '9',
      heading: 'Рідке скло',
      category1: '3000 грн',
      category2: '3000 грн',
      category3: '3000 грн',
      videoUrl: 'https://www.youtube.com/embed/NpEaa2P7qZI',
      firstParagraph:
        'Рідке скло для авто - популярний склад для створення на кузові машини гідрофобного шару, що додає лакофарбовому покриттю блиск і маскує дрібні дефекти. Відмінна риса цього складу - вміст діоксиду кремнію: при грамотному нанесенні саме він надає автомобілю ефект тільки що зробленого полірування і перешкоджає забрудненню.',
      secondParagraph:
        'Переваги рідкого скла для машини Відштовхування води. Гідрофобне покриття автомобіля відштовхує бруд і не дає їй застигати на поверхні ЛКП завдяки наявності в рідкому склі силікону.',
      thirdParagraph:
        'Поява антистатичного ефекту. Покриття запобігає накопиченню статичної електрики.',
      fourthParagraph:
        'Захисні властивості. Особливим чином нанесений на поверхню кузова склад заповнює мікропори, незначні дефекти емалі і лаку, підвищуючи їх стійкість до механічного впливу. Помітне поліпшення виду машини. Автомобіль, оброблений із застосуванням рідкого скла, виглядає новим: ЛКП красиво сяє, відштовхує пил і краплі води.',
      inclusiveInService: [
        {
          services:
            'авто відмивається від звичайних і складних забруднень (налиплої смоли і комах);'
        },
        {
          services: 'кузов обробляється знежирювачем;'
        },
        {
          services:
            'поверхню двічі полірується спеціальними пастами, в т.ч. фари і хромовані деталі;'
        },
        {
          services:
            'майстри приступають до нанесення рідкого скла для авто з дотриманням всіх технологічних норм;'
        },
        {
          services:
            'В ціну послуги входять всі перераховані процедури. Після нанесення рідкого скла машину бажано не мити протягом 10-14 днів, щоб не порушити цілісність покриття.'
        }
      ],
      timeTaken: 'Час виконання послуги 1-2 дні'
    }
  },
  mounted () {
    if (process.client) {
      this.$scrollTo('#top-contact', 0, { force: true })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/servicesPages.scss";
</style>
