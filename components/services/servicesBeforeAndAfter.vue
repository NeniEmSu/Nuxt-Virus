<template>
  <div class="row mx-auto">
    <div class="col-6 mx-auto p-0 before img-fluid">
      <!-- :style="{ backgroundImage: `url(~assets/img/${image})` }"
      :style="{ backgroundImage: 'url(' + require(@/assets/img/${page.image}) + ')' }"
      -->
      <font class="before-image-text">
        До
      </font>
    </div>

    <div class="col-6 mx-auto p-0 after img-fluid">
      <font class="after-image-text">
        Після
      </font>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      image: 'beforeAfter1_001.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
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
