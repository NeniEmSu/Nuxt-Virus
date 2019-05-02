<template>
  <header>
    <div class="top-contacts">
      <div class="container p-0">
        <ul>
          <li>
            <a href="контакти#map-top mt-n5">
              <span class="hide">Україна, м. Тернопіль, вул. Приміська 15А</span>

              <i class="fa fa-map-marker-alt bounce mx-1"></i>
            </a>
          </li>
          <li>
            <a href="tel:+380673334040">
              <span class="hide-sm">+38 (067) 333-40-40</span>
              <i class="fas fa-phone faa-ring animated mx-1"></i>
            </a>
          </li>
          <li>
            <a href="mailto:deteylingvirus@gmail.com">
              <span class="hide-md">deteylingvirus@gmail.com</span>

              <i class="fa fa-envelope faa-horizontal animated mx-1"></i>
            </a>
          </li>

          <li class="facebook">
            <a href="https://www.facebook.com/virus.te.ua/" target="_blank">
              <img src="~/assets/img/icons8-facebook-filled-100.png" alt="icons facebook filled">
            </a>
          </li>

          <li class="instagram">
            <a href="https://www.instagram.com/virusdetailing/" target="_blank">
              <img src="~/assets/img/icons8-instagram-filled-100.png" alt="icons instagram filled">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <nav>
        <div class="menu-icon">
          <i class="fa fa-bars fa-2x"></i>
        </div>

        <div class="logo">
          <router-link class="navbar-brand logo" to="index">
            <img src="~/assets/img/virus-logo.svg" alt="virus logo">
          </router-link>
        </div>

        <div class="menu">
          <ul>
            <li>
              <router-link to="index">Головна</router-link>
            </li>
            <li>
              <router-link to="Послуги">Послуги і ціни</router-link>
            </li>
            <li>
              <router-link to="акції">Акції</router-link>
            </li>
            <li>
              <router-link to="магазин">Магазин</router-link>
            </li>
            <li>
              <router-link to="блог">Блог</router-link>
            </li>
            <li>
              <router-link to="пронас">Про нас</router-link>
            </li>
            <li>
              <router-link to="контакти">Контакти</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>
