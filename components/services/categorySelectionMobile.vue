<template>
  <div class="container">
    <div class="card mb-3 none p-1 mx-auto">
      <div class="row no-gutters">
        <div class="col-6">
          <img
            src="~/assets/img/mercedes-png-white-m.png"
            class="card-img img-fluid"
            alt="..."
          >
        </div>
        <div class="col-6">
          <div class="card-body p-0 pl-1">
            <h5 class="card-title text-left">Ⅰ категорія</h5>
            <hr>
            <div class="row">
              <div class="col-6">
                <p class="card-text text-left">•середній</p>
                <p class="card-text text-left">•бізнес</p>
              </div>
              <div class="col-6">
                <p class="card-text text-left">•спорт купе</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 none p-1 mx-auto">
      <div class="row no-gutters">
        <div class="col-6">
          <img
            src="~/assets/img/png-hd-of-car-jeep-grand-cherokee-srt-white-car-png-image-car-hd-png-1550.png"
            class="card-img img-fluid"
            alt="..."
          >
        </div>
        <div class="col-6">
          <div class="card-body p-0 pl-1">
            <h5 class="card-title text-left">ⅠⅠ категорія</h5>
            <hr>
            <p class="card-text text-left">•середній кросовер</p>
            <p class="card-text text-left">•позашляховик</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3 none p-1 mx-auto">
      <div class="row no-gutters">
        <div class="col-6">
          <img
            src="~/assets/img/PNGPIX-COM-Black-Range-Rover-Piano-Car-PNG-Image.png"
            class="card-img img-fluid"
            alt="..."
          >
        </div>
        <div class="col-6">
          <div class="card-body p-0 pl-1">
            <h5 class="card-title text-left">ⅠⅠⅠ категорія</h5>
            <hr>
            <p class="card-text text-left">•позашляховик</p>
            <p class="card-text text-left">•повнорозмірний кросовер</p>
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
.none {
  width: 100%;
  max-width: 590px;

  background: $lightColor;
  border-radius: 10px;
  border: 0;
  min-height: 80px;
  max-height: 80px;
  height: 100%;
}

.none .card-img {
  width: auto;
  height: 80px;
  object-fit: contain;
  object-position: center;
}
.none h5 {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: $darkColor;

  margin-bottom: 5px;
}

.none p {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  text-align: center;

  color: $darkColor;

  margin-bottom: 5px;
}

.none hr {
  border: 1px solid #c4c4c4;
  padding: 0;
  margin: 0 0 5px 0;
}
</style>

