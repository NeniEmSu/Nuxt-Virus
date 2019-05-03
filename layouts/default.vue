<template>
  <div>
    <TheHeader/>
    <main>
      <nuxt/>
    </main>

    <TheFooter/>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

    <script>
  $(document).ready(function() {
    $(".menu-icon").on("click", function() {
      $("nav ul").toggleClass("showing");
    });
  });
    </script>

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
  }
};
</script>

<style>
</style>
