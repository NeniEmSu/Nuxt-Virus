<template>
  <div class="sidenav-container">
    <div v-if="toggleSidebar" class="backdrop" @click="$store.dispatch('nav/toggleSidebar')"></div>

    <transition name="slide-side">
      <div v-if="toggleSidebar" class="sidenav">
        <app-links></app-links>
      </div>
    </transition>
  </div>
</template>

<script>
import AppLinks from "~/components/appLinks";
export default {
  components: { AppLinks },
  computed: {
    toggleSidebar() {
      return this.$store.getters["nav/toggleSidebar"];
    }
  }
};
</script>

<style lang="scss" scope="scoped">
@import "~assets/scss/config.scss";

@include mediaMenu {
  .menu ul li {
    display: block;
    text-align: center;
  }

  .menu {
    line-height: 60px;
    text-align: center;
  }

  .menu ul {
    list-style: none;
    background: transparent;
    padding: 0;
    text-align: right;
    margin: 0;
  }

  .menu ul li a {
    text-decoration: none;
    color: $lightColor;
    font-size: 16px;
    padding: 9px 32px;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    text-align: center;

    &.active {
      border: 1px solid #d41f26;
      box-sizing: border-box;
      border-radius: 50px;
    }

    &:hover {
      border: 1px solid #d41f26;
      box-sizing: border-box;
      border-radius: 50px;
      text-decoration: none;
      color: $redColor;
    }
  }
}

.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav {
  margin-top: 140px;
  height: auto;
  width: 300px;
  background-color: black;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  text-align: center;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
