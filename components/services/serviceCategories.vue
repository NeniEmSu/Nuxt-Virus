<template>
  <div class="col-sm-10 col-xl-7 m-auto">
    <div class="row text-center">
      <div class="col-lg-12 col-xl-4 mx-auto work-cost-btn">
        <a class="btn col-md-4 col-xl-12 m-auto m-lg-2 category-selector" href="#">Ⅰ категорія</a>
        <p class="pricing col-md-4 col-xl-12 m-auto m-lg-2 text-center">{{category1}}</p>
        <p class="mt-2 mb-0 col-md-4 col-xl-12 m-auto m-lg-2 text-center">середній бізнес спорт купе</p>
      </div>
      <div class="col-lg-12 col-xl-4 mx-auto work-cost-btn">
        <a href="#" class="btn col-md-4 col-xl-12 m-auto m-lg-2 category-selector">ⅠⅠ категорія</a>
        <p class="pricing col-md-4 col-xl-12 m-auto m-lg-2 text-center">{{category2}}</p>
        <p
          class="mt-2 mb-0 col-md-4 col-xl-12 m-auto m-lg-2 text-center"
        >середній кросовер позашляховик</p>
      </div>
      <div class="col-lg-12 col-xl-4 mx-auto work-cost-btn">
        <a href="#" class="btn col-md-4 col-xl-12 m-auto m-lg-2 category-selector">ⅠⅠⅠ категорія</a>
        <p class="pricing col-md-4 col-xl-12 m-auto m-lg-2 text-center">{{category3}}</p>
        <p
          class="mt-2 mb-0 col-md-4 col-xl-12 m-auto m-lg-2 text-center"
        >повнорозмірний кросовер позашляховик</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category1: {
      type: String,
      default: "0",
      required: true
    },
    category2: {
      type: String,
      default: "0",
      required: true
    },
    category3: {
      type: String,
      default: "0",
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;

  color: $darkColor;
}

li {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: $darkColor;
}

.work-cost-btn {
  margin: 10px auto;
  display: inline;
}

.pricing {
  font-family: $mainFont;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: normal;

  color: $headingsFontColor;
}

.active {
  font-family: $mainFont;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: normal;

  color: $redColor;
}

.btn.category-selector {
  padding: 7px 23px;
  background-color: transparent;
  border-radius: 50px;
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;

  color: $darkColor;
  line-height: normal;
  text-align: center;
  border: 1px solid $redColor;
  box-sizing: border-box;
  border-radius: 50px;
  text-decoration: none;
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;

  margin-top: 20px;
  margin-bottom: 20px;
}

.btn.category-selector.btn:hover {
  color: $lightColor;
  background-color: $redColor;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.btn.category-selector.activeBtn {
  color: $lightColor;
  background-color: $redColor;
  box-shadow: none;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.contact h3,
.contact h3 span.red {
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
}

.before,
.after {
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $darkColor;
  background-position: center;

  min-height: 286px;
  max-height: 286px;
  width: 100%;
}

.before-image-text,
.after-image-text {
  position: relative;
  top: 40%;
  left: 40%;
  color: $lightColor;

  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 70px;

  align-items: center;
}

@include mediaMenu {
  h1.info-pages {
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;

    color: $darkColor;
  }

  p,
  li {
    font-size: 18px;
    line-height: 20px;
  }

  .btn.category-selector {
    padding: 7px 23px;
    font-size: 22px;
    line-height: 24px;
  }

  .pricing {
    font-family: $mainFont;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;

    color: $headingsFontColor;
  }

  .work-cost-btn {
    display: flex;
    padding: 0;
  }

  .before,
  .after {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkColor;
    background-position: center;

    min-height: 260px;
    max-height: 286px;
    width: 100%;
  }

  .before-image-text,
  .after-image-text {
    position: relative;
    top: 40%;
    left: 40%;
    color: $lightColor;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
  }
}

@include mediaLg {
  p,
  li {
    font-size: 16px;
    line-height: 18px;
  }

  .btn.category-selector {
    padding: 6px 20px;
    font-size: 22px;
    line-height: 24px;
  }

  .pricing {
    font-family: $mainFont;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;

    color: $headingsFontColor;
  }

  .work-cost-btn {
    display: flex;
    padding: 0;
  }

  .before,
  .after {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkColor;
    background-position: center;

    min-height: 200px;
    max-height: 286px;
    width: 100%;
  }

  .before-image-text,
  .after-image-text {
    position: relative;
    top: 40%;
    left: 40%;
    color: $lightColor;

    font-size: 20px;
    line-height: 22px;

    align-items: center;
  }
}

@include mediaMd {
  p,
  li {
    font-size: 16px;
    line-height: 18px;
  }

  .btn.category-selector {
    padding: 6px 20px;
    font-size: 14px;
    line-height: 16px;
  }

  .pricing {
    font-family: $mainFont;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;

    color: $headingsFontColor;
  }

  .work-cost-btn {
    display: flex;
    padding: 0;
  }

  .before,
  .after {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkColor;
    background-position: center;

    min-height: 120px;
    max-height: 286px;
    width: 100%;
  }

  .before-image-text,
  .after-image-text {
    position: relative;
    top: 30%;
    left: 40%;
    color: $lightColor;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    align-items: center;
  }
}

@include mediaSm {
  p,
  li {
    font-size: 16px;
    line-height: 18px;
  }

  .btn.category-selector {
    padding: 6px 20px;
    font-size: 12px;
    line-height: 14px;
  }

  .pricing {
    font-family: $mainFont;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;

    color: $headingsFontColor;
  }

  .work-cost-btn {
    display: flex;
    padding: 0;
  }

  .before,
  .after {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkColor;
    background-position: center;

    min-height: 120px;
    max-height: 286px;
    width: 100%;
  }

  .before-image-text,
  .after-image-text {
    position: relative;
    top: 20%;
    left: 40%;
    color: $lightColor;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    align-items: center;
  }
}

@include mediaXSm {
  p,
  li {
    font-size: 13px;
    line-height: 15px;
  }

  .btn.category-selector {
    padding: 6px 20px;
    font-size: 12px;
    line-height: 14px;
  }

  .pricing {
    font-family: $mainFont;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;

    color: $headingsFontColor;
  }

  .work-cost-btn {
    display: flex;
    padding: 0;
  }

  .before,
  .after {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkColor;
    background-position: center;

    min-height: 100px;
    max-height: 286px;
    width: 100%;
  }

  .before-image-text,
  .after-image-text {
    position: relative;
    top: 20%;
    left: 40%;
    color: $lightColor;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    align-items: center;
  }
}

@include mediaXXSm {
  p,
  li {
    font-size: 10px;
    line-height: 12px;
    text-align: left;
  }

  .btn.category-selector {
    padding: 6px 12px;
    font-size: 12px;
    line-height: 14px;
  }

  .pricing {
    font-family: $mainFont;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 18px;

    color: $headingsFontColor;
  }

  .work-cost-btn {
    display: flex;
    padding: 0;
  }

  .before,
  .after {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: $darkColor;
    background-position: center;

    min-height: 86px;
    max-height: 286px;
    width: 100%;
  }

  .before-image-text,
  .after-image-text {
    position: relative;
    top: 20%;
    left: 40%;
    color: $lightColor;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    align-items: center;
  }
}
</style>

