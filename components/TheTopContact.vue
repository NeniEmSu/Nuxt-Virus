<template>
  <div class="top-contacts">
    <div class="container p-0">
      <ul>
        <li>
          <nuxt-link to="/контакти#map-top">
            <span>Україна, м. Тернопіль, вул. Приміська 15А</span>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="bounce mx-1 fa-lg"/>
          </nuxt-link>
        </li>
        <li>
          <a href="tel:+380673334040">
            <span>+38 (067) 333-40-40</span>
            <font-awesome-icon :icon="['fas', 'phone']" class="faa-ring animated mx-1 fa-lg"/>
          </a>
        </li>
        <li>
          <a href="mailto:deteylingvirus@gmail.com">
            <span>deteylingvirus@gmail.com</span>
            <font-awesome-icon
              :icon="['fa', 'envelope']"
              class="faa-horizontal animated mx-1 fa-lg"
            />
          </a>
        </li>

        <li class="facebook">
          <a href="https://www.facebook.com/virus.te.ua/" target="_blank">
            <picture>
              <source srcset="~/assets/imgWebP/icons8-facebook-filled-100.webp" type="image/webp">
              <img src="~/assets/img/icons8-facebook-filled-100.png" alt="icons facebook filled">
            </picture>
          </a>
        </li>

        <li class="instagram">
          <a href="https://www.instagram.com/virusdetailing/" target="_blank">
            <picture>
              <source srcset="~/assets/imgWebP/icons8-instagram-filled-100.webp" type="image/webp">
              <img src="~/assets/img/icons8-instagram-filled-100.png" alt="icons instagram filled">
            </picture>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/config.scss";

.top-contacts {
  background: $darkColor;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;

  i {
    font-size: 20px;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    line-height: 20px;
  }

  ul {
    list-style: none;
    overflow: hidden;
    padding: 0;
    text-align: center;
    margin: 0;
    height: 40px;
    line-height: 40px;
  }

  ul li {
    display: inline-block;
    padding: 0 20px;
    margin: 0;
    height: 40px;
    line-height: 40px;

    &.instagram,
    &.facebook {
      float: right;
    }
  }

  ul li a,
  img {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: $lightColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    text-align: center;
    transition: all ease-in-out 300ms;
    -webkit-transition: all ease-in-out 300ms;
    -moz-transition: all ease-in-out 300ms;
    -ms-transition: all ease-in-out 300ms;
    -o-transition: all ease-in-out 300ms;

    &:hover {
      text-decoration: none;
      color: $redColor;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }

  .bounce {
    display: inline-block;
    position: relative;
    -moz-animation: bounce 1000ms infinite linear;
    -o-animation: bounce 1000ms infinite linear;
    -webkit-animation: bounce 1000ms infinite linear;
    animation: bounce 1000ms infinite linear;
  }

  @-webkit-keyframes bounce {
    0% {
      top: 0;
    }

    50% {
      top: -0.2em;
    }

    70% {
      top: -0.3em;
    }

    100% {
      top: 0;
    }
  }

  @-moz-keyframes bounce {
    0% {
      top: 0;
    }

    50% {
      top: -0.2em;
    }

    70% {
      top: -0.3em;
    }

    100% {
      top: 0;
    }
  }

  @-o-keyframes bounce {
    0% {
      top: 0;
    }

    50% {
      top: -0.2em;
    }

    70% {
      top: -0.3em;
    }

    100% {
      top: 0;
    }
  }

  @-ms-keyframes bounce {
    0% {
      top: 0;
    }

    50% {
      top: -0.2em;
    }

    70% {
      top: -0.3em;
    }

    100% {
      top: 0;
    }
  }

  @keyframes bounce {
    0% {
      top: 0;
    }

    50% {
      top: -0.2em;
    }

    70% {
      top: -0.3em;
    }

    100% {
      top: 0;
    }
  }

  .ring {
    display: inline-block;
    position: relative;
    -moz-animation: ring 500ms infinite linear;
    -o-animation: ring 500ms infinite linear;
    -webkit-animation: ring 500ms infinite linear;
    animation: ring 500ms infinite linear;
  }

  @-webkit-keyframes ring {
    0% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }

    2% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    4% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }

    6% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }

    8% {
      -webkit-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }

    10% {
      -webkit-transform: rotate(22deg);
      transform: rotate(22deg);
    }

    12% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }

    14% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }

    16% {
      -webkit-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }

    18% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }

    20% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes ring {
    0% {
      -webkit-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }

    2% {
      -webkit-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    4% {
      -webkit-transform: rotate(-18deg);
      -ms-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }

    6% {
      -webkit-transform: rotate(18deg);
      -ms-transform: rotate(18deg);
      transform: rotate(18deg);
    }

    8% {
      -webkit-transform: rotate(-22deg);
      -ms-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }

    10% {
      -webkit-transform: rotate(22deg);
      -ms-transform: rotate(22deg);
      transform: rotate(22deg);
    }

    12% {
      -webkit-transform: rotate(-18deg);
      -ms-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }

    14% {
      -webkit-transform: rotate(18deg);
      -ms-transform: rotate(18deg);
      transform: rotate(18deg);
    }

    16% {
      -webkit-transform: rotate(-12deg);
      -ms-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }

    18% {
      -webkit-transform: rotate(12deg);
      -ms-transform: rotate(12deg);
      transform: rotate(12deg);
    }

    20% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  .faa-ring.animated,
  .faa-ring.animated-hover:hover,
  .faa-parent.animated-hover:hover > .faa-ring {
    -webkit-animation: ring 2s ease infinite;
    animation: ring 2s ease infinite;
    transform-origin: 50% 0px none;
  }

  @-webkit-keyframes horizontal {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    6% {
      -webkit-transform: translate(5px, 0);
      transform: translate(5px, 0);
    }

    12% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    18% {
      -webkit-transform: translate(5px, 0);
      transform: translate(5px, 0);
    }

    24% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    30% {
      -webkit-transform: translate(5px, 0);
      transform: translate(5px, 0);
    }

    36% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes horizontal {
    0% {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    6% {
      -webkit-transform: translate(5px, 0);
      -ms-transform: translate(5px, 0);
      transform: translate(5px, 0);
    }

    12% {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    18% {
      -webkit-transform: translate(5px, 0);
      -ms-transform: translate(5px, 0);
      transform: translate(5px, 0);
    }

    24% {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    30% {
      -webkit-transform: translate(5px, 0);
      -ms-transform: translate(5px, 0);
      transform: translate(5px, 0);
    }

    36% {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  .faa-horizontal.animated,
  .faa-horizontal.animated-hover:hover,
  .faa-parent.animated-hover:hover > .faa-horizontal {
    -webkit-animation: horizontal 2s ease infinite;
    animation: horizontal 2s ease infinite;
  }
}

@include mediaMenu {
  .top-contacts {
    display: none;
  }
}
</style>
