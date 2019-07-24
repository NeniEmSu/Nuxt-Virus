<template>
  <div>
    <TheNavbar />

    <main>
      <transition
        name="fade"
        mode="out-in"
      >
        <nuxt />
      </transition>
    </main>

    <TheFooter />

  </div>
</template>
<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheFooter,
    TheNavbar
  },

  head () {
    return {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@charset "UTF-8";

body {
  background-color: $backgroudColor;
  color: $darkColor;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  margin-top: 150px;

  font-family: $mainFont;
  line-height: 1.5;
}

img {
  height: auto;
  max-width: 100%;
}

figure {
  margin: 0 0 20px 0;
  padding: 0;
  text-align: center;
}

figcaption {
  display: block;
  text-align: center;
  font-size: 0.8rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline: none !important;
  font-family: $mainFont;
}

figure {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 1500ms;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

button {
  cursor: pointer;
}

::-webkit-scrollbar-track {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  background-color: $backgroudColor;
}

::-webkit-scrollbar {
  border-radius: 50px;
  width: 10px;
  background-color: $backgroudColor;
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(149, 150, 150);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

select {
  -webkit-appearance: none;
  -o-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;

  background-image: url("~assets/img/select.png");
  background-position: 95% center;
  background-repeat: no-repeat;

  cursor: pointer;

  &.active,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  }
}

select option {
  background-color: $lightColor;
  color: $darkColor;
  text-align: center;
  white-space: pre-line;
  font-weight: 400;
}
.jumbotron {
  margin: 0 !important;
  padding: 20px 0 0px 0;
}

main {
  position: relative;
  min-height: 80vh;
  height: 100%;
}

.container {
  padding: 0 20px;
}

.breadcrumb {
  background-color: transparent;
  box-shadow: none;
  padding: 12px 0;

  li {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #8b8b8b;
  }

  a {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #8b8b8b;

    :hover {
      color: #8c8c8c;
    }
  }
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #8b8b8b;
  content: "\232a";
  font-size: 18px;
  line-height: 18px;
}

@include mediaMenu {
  body {
    margin-top: 55px;
  }
  main {
    position: relative;
    min-height: 80vh;
    height: 100%;
  }
}

@include mediaXSm {
  .breadcrumb {
    padding: 12px 0;

    li {
      font-size: 16px;
      line-height: 18px;
    }

    a {
      font-size: 16px;
      line-height: 18px;
    }
  }

  .breadcrumb-item + .breadcrumb-item::before {
    font-size: 16px;
    line-height: 16px;
  }
}

@include mediaXSm {
  .breadcrumb {
    padding: 12px 0;

    li {
      font-size: 13px;
      line-height: 14px;
    }

    a {
      font-size: 13px;
      line-height: 14px;
    }
  }

  .breadcrumb-item + .breadcrumb-item::before {
    font-size: 13px;
    line-height: 13px;
  }
}
</style>
