<template>
  <div class="card bg-dark text-white">
    <img
      class="card-img"
      src="~assets/img/services1.jpg"
      alt="Card image"
    >
    <div class="card-img-overlay">
      <h5 class="card-title">
        Car polishing
      </h5>
      <div class="row">
        <div class="col-6">
          <p class="card-text">
            <small>від</small>
            5999
            <small>грн</small>
          </p>
        </div>
        <div class="col-6">
          <nuxt-link
            to="#"
            class="btn"
          >
            Читати більше
          </nuxt-link>
        </div>
      </div>
      <p class="card-text" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
  background-color: $darkColor;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border: 0;

  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;

  width: 100%;
  min-width: 277px;
  max-width: 277px;
  height: 277px;
}

img {
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border-radius: 16.7347px;

  width: 100%;
  min-width: 277px;
  max-width: 277px;
  height: 277px;
  border: 0;
}

.card-title {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: $lightColor;
  text-align: left;
  margin-bottom: 5px;
}

.card-text {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 11px;

  color: #8b8b8b;
  text-align: left;
  margin-bottom: 3px;
}

.card-img-overlay {
  top: 195px;
  background-color: rgba(0, 0, 0, 0.64);
  backdrop-filter: blur(5px);
  border-radius: 0px 0px 20px 20px;
  box-sizing: border-box;
  padding: 0 10px;

  h5 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: normal;

    color: $lightColor;

    box-sizing: border-box;
    padding-top: 5px;
  }

  p {
    padding: 7px 0;
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: normal;
    margin-bottom: 18px;

    color: $redColor;

    &.subtext {
      margin-bottom: 5px;
    }

    small {
      font-size: 14px;
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
    }
  }
}

.btn {
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  background-color: transparent;
  border: $redColor 1px solid;
  border-radius: 50px;

  color: $lightColor;
  padding: 8px 10px;
}

.card__hover {
  transition: transform 500ms;
  -webkit-transition: transform 500ms;
  -moz-transition: transform 500ms;
  -ms-transition: transform 500ms;
  -o-transition: transform 500ms;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: "";
    opacity: 0;
    z-index: -1;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }

  &:hover:enabled,
  &:focus {
    transform: scale3d(1.01, 1.01, 1);
    -webkit-transform: scale3d(1.01, 1.01, 1);
    -moz-transform: scale3d(1.01, 1.01, 1);
    -ms-transform: scale3d(1.01, 1.01, 1);
    -o-transform: scale3d(1.01, 1.01, 1);

    &::after {
      opacity: 1;
    }
  }
}

@include mediaMd {
  .mobile-only {
    display: block;
  }

  .desktop-only {
    display: none;
  }

  .card {
    background: #ffffff;
    box-shadow: 0px 4px 13.3333px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    width: 100%;
    min-width: 160px;
    max-width: 160px;
    height: 160px;
  }

  .card-body {
    padding: 2.5px 10px;
  }

  .card-img-top {
    border-radius: 10px;
    width: 160px;
    height: 100%;
    min-height: 80px;
    max-height: 80px;
    object-fit: scale-down;
    object-position: center;
  }

  .card-title {
    font-size: 12px;
    line-height: 14px;
  }

  .card-footer {
    padding: 4px 52px;
    background: #d41f26;
    border-radius: 0px 0px 10px 10px;

    border: 0;

    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }

  .card-price {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;

    letter-spacing: -0.05em;
    text-align: left;

    color: #8b8b8b;

    margin: auto;
    padding-top: 5px;

    span {
      font-size: 14px;
    }
  }

  .discount {
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    align-items: center;
    text-align: right;

    color: #239a0f;
  }
}

@include mediaSm {
  .mobile-only {
    display: block;
  }

  .desktop-only {
    display: none;
  }

  .card {
    background: #ffffff;
    box-shadow: 0px 4px 13.3333px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    width: 100%;
    min-width: 160px;
    max-width: 160px;
    height: 160px;
  }

  .card-body {
    padding: 2.5px 10px;
  }

  .card-img-top {
    border-radius: 10px;
    width: 160px;
    height: 100%;
    min-height: 80px;
    max-height: 80px;
    object-fit: scale-down;
    object-position: center;
  }

  .card-title {
    font-size: 12px;
    line-height: 14px;
  }

  .card-footer {
    padding: 4px 52px;
    background: #d41f26;
    border-radius: 0px 0px 10px 10px;

    border: 0;

    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }

  .card-price {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;

    letter-spacing: -0.05em;
    text-align: left;

    color: #8b8b8b;

    margin: auto;
    padding-top: 5px;

    span {
      font-size: 14px;
    }
  }

  .discount {
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    align-items: center;
    text-align: right;

    color: #239a0f;
  }
}

@include mediaXXSm {
  .card {
    background: #ffffff;
    box-shadow: 0px 4px 13.3333px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    width: 100%;
    min-width: 130px;
    max-width: 130px;
    height: 130px;
  }

  .card-body {
    padding: 1.25px 5px;
  }

  .card-img-top {
    border-radius: 10px;
    width: 130px;
    height: 100%;
    min-height: 55px;
    max-height: 55px;
    object-fit: scale-down;
    object-position: center;
  }

  .card-title {
    font-size: 12px;
    line-height: 14px;
  }

  .card-footer {
    padding: 4px 25px;
    background: #d41f26;
    border-radius: 0px 0px 10px 10px;

    border: 0;

    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    align-items: center;
    text-align: center;

    color: $lightColor;
  }

  .card-price {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;

    letter-spacing: -0.05em;
    text-align: left;

    color: #8b8b8b;

    margin: auto;
    padding-top: 5px;

    span {
      font-size: 12px;
    }
  }

  .discount {
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    align-items: center;
    text-align: right;

    color: #239a0f;
  }
}
</style>
