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
              src="~assets/img/Очисткакондиціонера.jpg"
              :alt="heading"
            />
          </div>
          <div class="col-xl-6">
            <h2 class="info-pages desktop-only">
              {{ heading }}
            </h2>
            <p>
              {{ question }}{{ firstParagraph }}
              <br>
              {{ secondParagraph }}
              <br>
              {{ titleOne }}
              <br>
              {{ thirdParagraph }}
              <br>
              {{ titleTwo }}
              <br>
              {{ fourthParagraph }}
              <br>
              {{ titleThree }}
              <br>
              {{ fifthParagraph }}
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
          content: `${this.firstParagraph} ${this.secondParagraph}`.slice(0, 320)
        }
      ]
    }
  },
  data () {
    return {
      service: 'Очистка кондиціонера',
      heading: 'ОЧИСТКА КОНДИЦІОНЕРА',
      category1: '1200 грн',
      category2: '1200 грн',
      category3: '1200 грн',
      question:
        ' Навіщо взагалі потрібна антибактеріальна чистка кондиціонера?',
      firstParagraph:
        ' Навіщо взагалі потрібна антибактеріальна чистка кондиціонера?',
      secondParagraph:
        "Звідки в салоні автомобіля з'являється неприємний запах? Одним з основних джерел неприємного запаху в машині є наявність і поширення в повітрі хвороботворних бактерій, що виникає через загальне забруднення системи кондиціонування. Якщо не проводити регулярне чищення кондиціонера раз в три-чотири місяці, то неприємний запах в салоні стане вашим постійним супутником в дорозі і джерелом поганого настрою на весь день. Антибактеріальна чистка кондиціонера особливо актуальна для тих, у кого є маленькі діти, для курців, автовласників, які страждають на алергію. Ось деякі можливі негативні наслідки забруднення системи кондиціонування:",
      titleOne: '- Бактерії',
      thirdParagraph:
        "В системі утворюється конденсат, шкідливий для здоров'я. Бруд, вміщений у вологе середовище, починає розкладатися. Внаслідок цього, хвороботворні бактерії і грибки, підхоплені потоками повітря, швидко поширюються і це може негативно позначитися на вашому здоров'ї.",
      titleTwo: '- Алергія',
      fourthParagraph:
        'Різко збільшується ймовірність алергічної реакції навіть у тих людей, які ніколи не стикалися з такою проблемою.',
      titleThree: '- Легіонельоз',
      fifthParagraph:
        'Хвороба, причиною якої є бактерії, що живуть у вологому, брудному середовищі. Всі ці можливі ризики є достатньою причиною для того, щоб зробити антибактеріальну чистку кондиціонера автомобіля.',

      inclusiveInService: [
        {
          services:
            'Дезінфекція кондиціонера автомобіля за допомогою хімічних речовин. Препарат знищує всі поселення мікробів, бактерій і грибків, а крім того на тривалий час (до одного року) оберігає внутрішні поверхні кліматичної установки від нового нашестя невидимих ворогів.'
        }
      ],
      timeTaken: 'Час виконання послуги до 1 години'
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
