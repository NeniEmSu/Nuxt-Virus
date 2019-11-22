<template>
  <div>
    <div class="contact-heading-image desktop-only">
      <nav
        class="container mt-2"
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
            <h1>контакти</h1>
          </li>
        </ol>
      </nav>
    </div>

    <div class="jumbotron">
      <div class="container text-center process">
        <div class="row">
          <div class="col-4 mx-auto">
            <h4>Графік роботи</h4>
            <img
              src="~/assets/img/contactPageClock.png"
              class="img-fluid"
              alt="image of a clock"
            >
            <p>пн-пт 9:00 до 19:00 сб-нд Вихідний</p>
          </div>

          <div class="col-4 mx-auto">
            <h4>Пошта</h4>
            <a href="mailto:deteylingvirus@gmail.com">
              <img
                src="~/assets/img/contactPageMail.png"
                class="img-fluid"
                alt="image of a mail icon"
              >
            </a>
            <p class="text-center">
              deteylingvirus@gmail.com
            </p>
          </div>

          <div class="col-4 mx-auto">
            <h4>Телефон</h4>
            <a href="tel:+380673334040">
              <img
                src="~/assets/img/contactPagePhone.png"
                class="img-fluid"
                alt=" image of a phone icon"
              >
            </a>
            <p>+38 (067) 333-40-40</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <hr
          id="map-top"
          class="map-separator offset desktop-only"
        >

        <img
          src="~/assets/img/icons8-marker-100.png"
          class="desktop-only"
          alt="Location marker icon"
        >

        <GmapMap
          id="map"
          :center="center"
          :zoom="16"
          map-type-id="terrain"
        >
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :position="m.position"
            :clickable="true"
            @click="center = m.position"
          />
        </GmapMap>

        <div class="contact-page-socials">
          <h4>Більше інформації тут:</h4>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/virusdetailing/"
          >
            <img
              src="~/assets/img/contacPageIg.png"
              alt="Instagram icon"
            >
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/virus.te.ua/"
          >
            <img
              src="~/assets/img/contactPageFb.png"
              alt="Facebook icon"
            >
          </a>
        </div>
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
  data () {
    return {
      center: { lat: 49.558033, lng: 25.56692 },
      markers: [{ position: { lat: 49.558033, lng: 25.56692 } }]
    }
  },
  head () {
    return {
      title: 'Детейлінг центр Virus Тернопіль.',
      titleTemplate: 'контакти - %s!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'контакти - Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри.'
        }
      ]
    }
  }

}
</script>

<style lang="scss">
.contact-page-socials {
  padding-bottom: 40px;
}
</style>

<style lang="scss" scoped>
.contact-heading-image {
  margin-top: -10.5px;
  background: #000000;
  background-image: url("~assets/img/contactPageHeadImg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 280px;
}

.process {
  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    align-items: center;

    color: #3e3e3e;
    text-decoration: none;
  }
}

.map-separator {
  margin: 40px 0;
  opacity: 0.6;
  border: 1px solid #000000;
}

#map {
  margin: 40px auto;
  height: 685px;
  width: 100%;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  transition: all ease-in-out 500ms;
  -webkit-transition: all ease-in-out 500ms;
  -moz-transition: all ease-in-out 500ms;
  -ms-transition: all ease-in-out 500ms;
  -o-transition: all ease-in-out 500ms;
}

#map:hover:enabled {
  transform: scale(1.005);
  -webkit-transform: scale(1.005);
  -moz-transform: scale(1.005);
  -ms-transform: scale(1.005);
  -o-transform: scale(1.005);
}

.offset:before {
  height: -8rem;
  margin-top: -8rem;
  content: "";
  display: block;
}
@include mediaMenu {
  #map {
    margin: 20px auto;
    height: 450px;
    width: 100%;
  }

  .desktop-only {
    display: none;
  }
}

@include mediaSm {
  .process {
    padding-top: 20px;
    h4 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;

      align-items: center;

      color: $darkColor;
    }

    img {
      width: 35px;
      height: 35px;
    }

    p {
      font-family: $mainFont;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;

      color: #3e3e3e;

      text-align: center;
    }
  }

  .contact-page-socials {
    padding-bottom: 10px;

    h4 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;

      align-items: center;
      text-align: center;

      color: $darkColor;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }

  #map {
    margin: 20px auto;
    height: 250px;
    width: 100%;
  }
}
</style>
