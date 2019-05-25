<template>
  <div>
    <div class="contact-heading-image"></div>

    <div class="jumbotron" style="margin-top : 0;">
      <div class="container text-center process">
        <div class="row">
          <div class="col-md-4">
            <h4>Графік роботи</h4>
            <img src="~/assets/img/contactPageClock.png" alt="image of a clock">
            <p>пн-пт 9:00 до 19:00 сб-нд Вихідний</p>
          </div>
          <div class="col-md-4">
            <h4>Телефон</h4>
            <a href="tel:+380673334040">
              <img src="~/assets/img/contactPagePhone.png" alt=" image of a phone icon">
            </a>
            <p>+38 (067) 333-40-40</p>
          </div>
          <div class="col-md-4">
            <h4>Пошта</h4>
            <a href="mailto:deteylingvirus@gmail.com">
              <img src="~/assets/img/contactPageMail.png" alt="image of a mail icon">
            </a>
            <p>deteylingvirus@gmail.com</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <hr id="map-top" class="map-separator offset">

        <img src="~/assets/img/icons8-marker-100.png" alt="Location marker icon">

        <GmapMap
          id="map"
          :options="{
              zoomControl: true,
               mapTypeControl: true,
              scaleControl: true,
              streetViewControl: true,
              rotateControl: true,
              fullscreenControl: true,
              disableDefaultUi: false
            }"
          :center="center"
          :zoom="16"
          map-type-id="terrain"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
          />
        </GmapMap>

        <div class="contact-page-socials">
          <h4>Більше інформації тут:</h4>
          <a target="_blank" href="https://www.instagram.com/virusdetailing/">
            <img src="~/assets/img/contacPageIg.png" alt="Instagram icon">
          </a>
          <a target="_blank" href="https://www.facebook.com/virus.te.ua/">
            <img src="~/assets/img/contactPageFb.png" alt="Facebook icon">
          </a>
        </div>
      </div>
    </div>

    <ContactForm/>

    <progressSection/>
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
  },
  data() {
    return {
      center: { lat: 49.558033, lng: 25.56692 },
      markers: [{ position: { lat: 49.558033, lng: 25.56692 } }]
    };
  }
};
</script>

<style lang="scss">
.contact-page-socials {
  padding-bottom: 40px;
}
</style>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";

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
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;
}

#map:hover {
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
}

@include mediaSm {
  #map {
    margin: 20px auto;
    height: 380px;
    width: 100%;
  }
}
</style>
