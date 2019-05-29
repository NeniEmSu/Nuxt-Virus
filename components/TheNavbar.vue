<template>
  <header
    class="header"
    id="header"
    v-click-outside="closeMobileNavbar"
    v-handle-scroll="closeMobileNavbar"
  >
    <TheTopContact/>
    <div class="container">
      <div class="logo">
        <nuxt-link class="navbar-brand logo" to="/">
          <img src="~/assets/img/virus-logo.svg" alt="virus logo">
        </nuxt-link>
      </div>

      <div class="btn-hamburger" @click="mobileNavOpen = !mobileNavOpen">
        <img src="~/assets/img/menu.svg" alt="menu Icon">
      </div>

      <nav class="navbar" :class="{'navbar-open': mobileNavOpen}">
        <app-links></app-links>
        <div
          class="close-hamburger text-right text-black p-2"
          style="font-size: 30px; cursor: pointer; color: black;  margin-top: -260px;"
          @click.stop="hide"
        >&times;</div>
      </nav>
    </div>
  </header>
</template>

<script>
import clickOutside from "@/directives/click-outside";
import handleScroll from "@/directives/handle-scroll";
import AppLinks from "~/components/appLinks";
import TheTopContact from "~/components/TheTopContact";
export default {
  components: { TheTopContact, AppLinks },
  directives: {
    clickOutside,
    handleScroll
  },
  data() {
    return {
      userDropdownOpen: false,
      mobileNavOpen: false
    };
  },
  computed: {},
  methods: {
    closeUserDropdown() {
      this.userDropdownOpen = false;
    },
    closeMobileNavbar() {
      this.mobileNavOpen = false;
    },
    hide() {
      this.mobileNavOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url("~assets/imgWebP/Хедер.webp");
  background-size: cover;
  background-color: $darkColor;
  width: 100%;
  height: 140px;
  left: 0px;
  top: 0px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);

  a {
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;

    &:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }
}

.nuxt-link-exact-active a {
  border: 1px solid #d41f26;
  box-sizing: border-box;
  border-radius: 50px;
}

.logo {
  float: left;

  padding-top: 5px;
  line-height: 80px;

  img {
    height: 2.4rem;
  }
}

.btn-hamburger {
  cursor: pointer;
  height: 30px;
  width: 30px;
  float: right;
  position: relative;
  margin-left: 20px;
  display: none;
}

@include mediaMenu {
  .navbar {
    display: none;
    position: absolute;
    z-index: 10;
    padding: 10px 10px 10px;
    background: $lightColor;
    width: 100%;
    left: 0;
    top: 50px;
  }

  .logo {
    float: left;
    padding-top: 5px;
    line-height: 40px;

    margin-top: -5px;
    img {
      height: 1.8rem;
    }
  }
  .top-contacts {
    display: none;
  }

  header {
    height: 50px;
  }

  .btn-hamburger {
    margin-top: 10px;
    display: block;
  }

  .drawer-toggle {
    display: block;
    font-size: 18px;
  }

  .navbar-open {
    display: flex;
    transition: all 0.6s ease;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);
    border-radius: 0px 0px 20px 20px;
  }

  .close-hamburger {
    display: block;
  }
}
</style>


