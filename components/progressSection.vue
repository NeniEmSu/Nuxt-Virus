<template>
  <div class="jumbotron">
    <div class="container text-center process">
      <div class="row">
        <div class="col-3">
          <picture>
            <source
              srcset="~/assets/imgWebP/icons8-paint-palette-96.webp"
              type="image/webp"
            >
            <img
              src="~/assets/img/icons8-paint-palette-96.png"
              class="img-fluid"
              alt="icons paint palette"
            >
          </picture>

          <div>
            <h6>Великий спектр послуг</h6>
          </div>
        </div>
        <div class="col-3">
          <picture>
            <source
              srcset="~/assets/imgWebP/icons8-service-filled-100.webp"
              type="image/webp"
            >
            <img
              src="~/assets/img/icons8-service-filled-100.png"
              class="img-fluid"
              alt="icons service filled"
            >
          </picture>

          <div>
            <h6>Персонал та сервіс</h6>
          </div>
        </div>
        <div class="col-3">
          <picture>
            <source
              srcset="~/assets/imgWebP/icons8-discount-filled-100.webp"
              type="image/webp"
            >
            <img
              src="~/assets/img/icons8-discount-filled-100.png"
              class="img-fluid"
              alt="icons discount filled"
            >
          </picture>

          <div>
            <h6>Лояльність</h6>
          </div>
        </div>
        <div class="col-3">
          <picture>
            <source
              srcset="~/assets/imgWebP/icons8-gift-filled-100(1).webp"
              type="image/webp"
            >
            <img
              src="~/assets/img/icons8-gift-filled-100(1).png"
              class="img-fluid"
              alt="icons gift filled"
            >
          </picture>

          <div>
            <h6>Ексклюзивні пропозиції</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.process {
  margin-top: 40px;
  padding-bottom: 40px;

  h6 {
    margin-top: 30px;
  }

  img {
    text-decoration: none;
    transition: ease-in-out 350ms;
    -webkit-transition: ease-in-out 350ms;
    -moz-transition: ease-in-out 350ms;
    -ms-transition: ease-in-out 350ms;
    -o-transition: ease-in-out 350ms;

    &:hover {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
    }
  }
}

@include mediaSm {
  .process {
    margin-top: 20px;
    padding-bottom: 20px;

    h6 {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 15px;
      align-items: center;
      text-align: center;
    }
  }
}

@include mediaXSm {
  .process {
    margin-top: 20px;
    padding-bottom: 20px;

    h6 {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 13px;
      align-items: center;
      text-align: center;
    }
  }
}

@include mediaMd {
  .process {
    margin-top: 20px;
    padding-bottom: 20px;

    img {
      width: 32px;
      height: 32px;
    }

    h6 {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
      align-items: center;
      text-align: center;
    }
  }
}

@include mediaSm {
  .process {
    margin-top: 20px;
    padding-bottom: 20px;

    img {
      width: 30px;
      height: 30px;
    }

    h6 {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
      align-items: center;
      text-align: center;
    }
  }
}

@include mediaXSm {
  .process {
    margin-top: 20px;
    padding-bottom: 20px;

    img {
      width: 28px;
      height: 28px;
    }

    h6 {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
      align-items: center;
      text-align: center;
    }
  }
}

@include mediaXXSm {
  .process {
    margin-top: 20px;
    padding-bottom: 20px;

    img {
      width: 25px;
      height: 25px;
    }

    h6 {
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
      align-items: center;
      text-align: center;
    }
  }
}
</style>
