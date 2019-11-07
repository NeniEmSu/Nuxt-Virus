<template>
  <div>
    <nav
      class="container desktop-only"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">
            Головна
          </nuxt-link>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          <h1>Про нас</h1>
        </li>
      </ol>
    </nav>

    <div class="aboutUs-heading-image" />
    <div class="jumbotron about-content">
      <div class="container">
        <p>
          Це місце, де огляд за автомобілем здійснюється комплексно і
          професійно, де деталям і дрібницям приділяється особлива увага. Ми
          пропагуємо світові тенденції у відновленні, захисті та підтримці краси
          екстер'єру та інтер'єру автомобілів. Сьогодні ми можемо захистити
          кузов автомобіля від агресивних впливів навколишнього середовища,
          хімічних реагентів, сколів і подряпин, збільшити блиск і глибину
          кольору покриття, захистити оптику від старіння, здійснити глибоку та
          делікатну хімчистку салону, відновити шкіру та багато іншого.
          <br>
          <br>В роботі ми використовуємо виключно професійні засоби від
          провідних світових виробників. Кожен з них гарантує незмінно високу
          якість і чудову ефективність своєї продукції.
        </p>
        <div class="video-text row">
          <div class="col-xl-7">
            <iframe
              class="video"
              loading="lazy"
              :src="videoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div class="col-xl-5">
            <p class="pt-3">
              Це місце, де огляд за автомобілем здійснюється комплексно і
              професійно, де деталям і дрібницям приділяється особлива увага. Ми
              пропагуємо світові тенденції у відновленні, захисті та підтримці
              краси екстер'єру та інтер'єру автомобілів. Сьогодні ми можемо
              захистити кузов автомобіля від агресивних впливів навколишнього
              середовища, хімічних реагентів, сколів і подряпин, збільшити блиск
              і глибину кольору покриття, захистити оптику від старіння,
              здійснити глибоку та делікатну хімчистку салону, відновити шкіру
              та багато іншого.
            </p>
          </div>
        </div>
        <p class="pt-md-3">
          Це місце, де огляд за автомобілем здійснюється комплексно і
          професійно, де деталям і дрібницям приділяється особлива увага. Ми
          пропагуємо світові тенденції у відновленні, захисті та підтримці краси
          екстер'єру та інтер'єру автомобілів. Сьогодні ми можемо захистити
          кузов автомобіля від агресивних впливів навколишнього середовища,
          хімічних реагентів, сколів і подряпин, збільшити блиск і глибину
          кольору покриття, захистити оптику від старіння, здійснити глибоку та
          делікатну хімчистку салону, відновити шкіру та багато іншого.
        </p>
      </div>
    </div>

    <ContactForm />

    <progressSection />
  </div>
</template>

<script>
export default {
  meta: {
    animation: 'fade-in-down'
  },
  head () {
    return {
      title: 'Детейлінг центр Virus Тернопіль.',
      titleTemplate: 'про Нас - %s!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'про Нас - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри.'
        }
      ]
    }
  },
  data () {
    return {
      videoUrl: 'https://www.youtube.com/embed/NpEaa2P7qZI'
    }
  }

}
</script>

<style lang="scss" scoped>
.aboutUs-heading-image {
  margin-top: -10.5px;
  background: $lightColor;
  background-image: url(~assets/img/aboutUsHead.jpg) !important;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  width: 100%;
  height: 30vh;

  border-bottom: 3px solid #000000;
}

.video {
  width: 100%;
  max-width: 585px;
  height: 100%;
  max-height: 300px;

  background: #000000;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
}

.about-content {
  padding-bottom: 40px;
}

@include mediaSm {
  .desktop-only {
    display: none;
  }
}
</style>
