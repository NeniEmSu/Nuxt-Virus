<template>
  <div>
    <no-ssr>
      <LightGallery :images="images" :index="index" :disable-scroll="true" @close="index = null"/>
    </no-ssr>

    <div
      @click="index = 0"
      class="card mb-3 mx-auto card__hover_two work-card img-fluid"
      style="width: 100%; max-width: 540px;"
      title="View more images!"
    >
      <div class="row no-gutters">
        <div class="col-9 p-0">
          <picture>
            <source :srcset="require(`~/assets/imgWebP/${thumbnail + '.webp'}`)" type="image/webp">
            <img
              :src="require(`~/assets/img/${thumbnail + '.png'}`)"
              class="img-fluid"
              :alt="title"
            >
          </picture>
        </div>
        <div class="col-3">
          <div
            class="card-body h-100 d-flex flex-column justify-content-center text-center p-0 pr-2"
          >
            <h4>
              {{title}}
              <span>{{subtitle}}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Volkswagen",
      subtitle: "Bettle",
      thumbnail: "car1",
      images: [
        { title: "img 1", url: "https://i.ibb.co/SBT0Rs3/1.jpg" },
        { title: "img 2", url: "https://i.ibb.co/kJgJ0hn/2.jpg" },
        { title: "img 3", url: "https://i.ibb.co/b6Bhfz0/3.jpg" },
        { title: "img 4", url: "https://i.ibb.co/nDhzsVD/4.jpg" },
        { title: "img 5", url: "https://i.ibb.co/wLv8sTR/5.jpg" },
        { title: "img 6", url: "https://i.ibb.co/R7HtSzr/6.jpg" },
        { title: "img 7", url: "https://i.ibb.co/vQWv3Bm/7.jpg" },
        { title: "img 8", url: "https://i.ibb.co/vwdSchM/8.jpg" },
        { title: "img 9", url: "https://i.ibb.co/S0CBfwy/9.jpg" },
        { title: "img 10", url: "https://i.ibb.co/YX8kT5L/10.jpg" }
      ],
      index: null
    };
  }
};
</script>

<style lang="scss" scoped>
.lightbox {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
}
.lightbox-image img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 120px);
  margin: auto;
}

.work-card {
  background: #000000;
  border-radius: 22px;
  cursor: pointer;

  img {
    object-fit: cover;
    object-position: left;
    margin-left: -1px;
  }

  h4 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    text-align: right;
    letter-spacing: 0.05em;

    color: $lightColor;

    span {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }
  }
}

.card__hover_two {
  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale3d(0, 0, 1);
    transition: transform 0.3s ease-out 0s;
    background: rgba(255, 255, 255, 0.1);
    content: "";
    pointer-events: none;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }

  &::before {
    transform-origin: left top;
  }

  &::after {
    transform-origin: right bottom;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      transform: scale3d(1, 1, 1);
    }
  }
}

@include mediaSm {
  .work-card {
    img {
      object-fit: cover;
      object-position: left;
      margin-left: -1px;
    }

    h4 {
      font-size: 14px;
      line-height: 15px;
      span {
        font-size: 14px;
        line-height: 15px;
      }
    }
  }
}

@include mediaXSm {
  .work-card {
    img {
      object-fit: cover;
      object-position: left;
      margin-left: -1px;
    }
    h4 {
      font-size: 12px;
      line-height: 13px;
      span {
        font-size: 12px;
        line-height: 13px;
      }
    }
  }
}

@include mediaXXSm {
  .work-card {
    img {
      object-fit: cover;
      object-position: left;
      margin-left: -2px;
    }
    h4 {
      font-size: 8px;
      line-height: 9px;
      span {
        font-size: 8px;
        line-height: 9px;
      }
    }
  }
}
</style>

