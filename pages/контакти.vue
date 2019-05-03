<template>
  <div>
    <div class="contact-heading-image"></div>

    <div class="jumbotron" style="margin-top : 0;">
      <div class="container text-center process">
        <div class="row">
          <div class="col-md-4">
            <h4>Графік роботи</h4>
            <img src="img/contactPageClock.png" alt="image of a clock">
            <p>
              пн-пт 9:00 до 19:00
              сб-нд Вихідний
            </p>
          </div>
          <div class="col-md-4">
            <h4>Телефон</h4>
            <a href="tel:+380673334040">
              <img src="img/contactPagePhone.png" alt=" image of a phone icon">
            </a>
            <p>+38 (067) 333-40-40</p>
          </div>
          <div class="col-md-4">
            <h4>Пошта</h4>
            <a href="mailto:deteylingvirus@gmail.com">
              <img src="img/contactPageMail.png" alt="image of a mail icon">
            </a>
            <p>deteylingvirus@gmail.com</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <hr class="map-separator offset" id="map-top">

        <img src="img/icons8-marker-100.png" alt="Location marker icon">

        <div id="map"></div>
        <div class="contact-page-socials">
          <h4>Більше інформації тут:</h4>
          <a target="_blank" href="https://www.instagram.com/virusdetailing/">
            <img src="img/contacPageIg.png" alt="Instagram icon">
          </a>
          <a target="_blank" href="https://www.facebook.com/virus.te.ua/">
            <img src="img/contactPageFb.png" alt="Facebook icon">
          </a>
        </div>
      </div>
    </div>

    <ContactForm/>

    <progressSection/>
    <!-- google map Api call -->
    <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKJciVrAvST8C9SJzwkjmHFnoPM8FwooY&callback=initMap"
    ></script>

    <!-- displaying map -->
    <script>
  function initMap() {
    let location = {
      lat: 49.558033,
      lng: 25.56692
    };
    let map = new google.maps.Map(document.querySelector("#map"), {
      zoom: 16,
      center: location
    });
    let marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
    </script>
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
