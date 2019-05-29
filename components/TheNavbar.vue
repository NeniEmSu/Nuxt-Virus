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
        <!-- use .btn-humburger-active to open the menu -->
        <img src="~/assets/img/menu.svg" alt="menu Icon">
      </div>

      <!-- use .navbar-open to open nav -->
      <nav class="navbar" :class="{'navbar-open': mobileNavOpen}">
        <app-links></app-links>
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

.btn-hamburger .top {
  top: 7px;
}

.btn-hamburger .middle {
  top: 16px;
}

.btn-hamburger .bottom {
  top: 26px;
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

    margin-top: -15px;
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

  .navbar-open .navbar-item,
  .navbar-open .navbar-mobile-item {
    margin: 6px 0;
  }

  .navbar-open ul {
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 20px;
  }
}

@include mediaSm {
}
</style>