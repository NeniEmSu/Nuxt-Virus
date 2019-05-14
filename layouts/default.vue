<template>
  <div>
    <TheHeader/>
    <main>
      <transition name="fade" mode="out-in">
        <nuxt/>
      </transition>
    </main>

    <TheFooter/>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

    <!-- Online chat support -->
    <script type="74bf624512b1c6414329bcb4-text/javascript">
  (function () {
      var widget_id = 'j9oYCawnP2';
      var d = document;
      var w = window;

      function l() {
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = '//code.jivosite.com/script/widget/' + widget_id;
          var ss = document.getElementsByTagName('script')[0];
          ss.parentNode.insertBefore(s, ss);
      }
      if (d.readyState == 'complete') {
          l();
      } else {
          if (w.attachEvent) {
              w.attachEvent('onload', l);
          } else {
              w.addEventListener('load', l, false);
          }
      }
  })();
    </script>

    <script
      src="https://ajax.cloudflare.com/cdn-cgi/scripts/a2bd7673/cloudflare-static/rocket-loader.min.js"
      data-cf-settings="74bf624512b1c6414329bcb4-|49"
      defer
    ></script>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  },

  head() {
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
@import "~assets/scss/config.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");

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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline: none !important;
  font-family: $mainFont;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  background-color: $backgroudColor;
  color: set-text-color($backgroudColor);
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;

  font-family: $mainFont;
}

button {
  cursor: pointer;
}

::-webkit-scrollbar-track {
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
  margin-top: 140px;
  min-height: 80vh;
  height: 100%;
}
</style>
