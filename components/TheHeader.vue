<template>
  <header>
    <div class="top-contacts">
      <div class="container p-0">
        <ul>
          <li>
            <a href="/контакти#map-top">
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
          <nuxt-link class="navbar-brand logo" to="/">
            <img src="~/assets/img/virus-logo.svg" alt="virus logo">
          </nuxt-link>
        </div>

        <div class="menu">
          <ul>
            <nuxt-link to="/" tag="li">
              <a>Головна</a>
            </nuxt-link>

            <nuxt-link to="/Послуги" tag="li">
              <a>Послуги і ціни</a>
            </nuxt-link>

            <nuxt-link to="/акції" tag="li">
              <a>Акції</a>
            </nuxt-link>

            <nuxt-link to="/магазин" tag="li">
              <a>Магазин</a>
            </nuxt-link>

            <nuxt-link to="/блог" tag="li">
              <a>Блог</a>
            </nuxt-link>

            <nuxt-link to="/пронас" tag="li">
              <a>Про нас</a>
            </nuxt-link>

            <nuxt-link to="/контакти" tag="li">
              <a>Контакти</a>
            </nuxt-link>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scope="scoped">
.nuxt-link-exact-active a {
  border: 1px solid #d41f26;
  box-sizing: border-box;
  border-radius: 50px;
}
</style>
