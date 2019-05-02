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

    <div class="jumbotron">
      <div class="container mx-auto contact">
        <div class="card p-5">
          <form class="text-right" method="POST" action="includes/contactForm.inc.php">
            <h3 class="text-left px-0">
              <span class="red">
                ДІЗНАТИСЯ ВАРТІСТЬ
                ДЕТЕЙЛІНГА
              </span>
              <br>ДЛЯ ВАШОГО АВТОМОБІЛЯ
            </h3>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label hidden for="carModel">Введіть модель авто</label>
                  <input
                    type="text"
                    id="carModel"
                    name="carModel"
                    class="form-control mx-auto"
                    aria-describedby="carModel"
                    placeholder="Введіть модель авто"
                  >
                </div>
                <div class="form-group">
                  <label hidden for="typeOfWork">Оберіть тип робіт</label>
                  <select
                    id="typeOfWork"
                    aria-describedby="typeOfWork"
                    class="form-control mx-auto"
                  >
                    <option>Оберіть тип робіт</option>
                    <option>Оберіть тип робіт</option>
                    <option>Оберіть тип робіт</option>
                    <option>Оберіть тип робіт</option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label hidden for="name">Ім’я</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control mx-auto"
                    aria-describedby="name"
                    placeholder="Ім’я*"
                  >
                </div>
                <div class="form-group">
                  <label hidden for="phone">Телефон</label>
                  <input
                    type="number"
                    id="phone"
                    aria-describedby="phone"
                    name="phone"
                    class="form-control mx-auto"
                    placeholder="Телефон*"
                  >
                </div>

                <button type="submit" name="submit" class="contact-btn">ВІДПРАВИТИ</button>
              </div>
            </div>
            <p class="text-left col-12 w-md-50 px-0">
              Відправте запит, і наш
              менеджер
              зв’яжеться з вами
              найближчим
              часом
            </p>
          </form>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <div class="container text-center process">
        <div class="row">
          <div class="col-md-3">
            <img src="img/icons8-paint-palette-96.png" alt="icons paint palette">
            <div>
              <h6>Великий спектр послуг</h6>
            </div>
          </div>
          <div class="col-md-3">
            <img src="img/icons8-service-filled-100.png" alt="icons service filled">
            <div>
              <h6>Персонал та сервіс</h6>
            </div>
          </div>
          <div class="col-md-3">
            <img src="img/icons8-discount-filled-100.png" alt="icons discount filled">
            <div>
              <h6>Лояльність</h6>
            </div>
          </div>
          <div class="col-md-3">
            <img src="img/icons8-gift-filled-100(1).png" alt="icons gift filled">
            <div>
              <h6>Ексклюзивні пропозиції</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/js/map.js";
export default {};
</script>

<style>
</style>
