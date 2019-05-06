<template>
  <div class="jumbotron">
    <div class="container text-center process">
      <div class="row">
        <div class="col-md-3">
          <img src="img/icons8-paint-palette-96.png" alt="icons paint palette">
          <div>
            <h6>Великий спектр послуг</h6>
          </div>
        </div>
        <div class="col-md-3">
          <img src="img/icons8-service-filled-100.png" alt="icons service filled">
          <div>
            <h6>Персонал та сервіс</h6>
          </div>
        </div>
        <div class="col-md-3">
          <img src="img/icons8-discount-filled-100.png" alt="icons discount filled">
          <div>
            <h6>Лояльність</h6>
          </div>
        </div>
        <div class="col-md-3">
          <img src="img/icons8-gift-filled-100(1).png" alt="icons gift filled">
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
@import "~assets/scss/config.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");
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
@import "~assets/scss/mobileResponsive.scss";
</style>

