<template>
  <div
    class="card mb-3 mx-auto card__hover_two work-card img-fluid"
    style="width: 100%; max-width: 540px;"
  >
    <no-ssr>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </no-ssr>
    <div
      @click="index = 0"
      v-b-tooltip.hover
      title="Переглянути більше зображень!"
    >
      <div class="row no-gutters">
        <div
          class="col-9 p-0"
          style="-webkit-clip-path: polygon(0 0, 100% 0, 84% 100%, 0% 100%);
clip-path: polygon(0 0, 100% 0, 84% 100%, 0% 100%);
"
        >
          <picture style="border-top-left-radius: 22px; border-bottom-left-radius: 22px;">
            <source
              :srcset="require(`~/assets/imgWebP/${thumbnail + '.webp'}`)"
              type="image/webp"
            />
            <img
              style=" border-top-left-radius: 22px; border-bottom-left-radius: 22px;"
              :src="require(`~/assets/img/${thumbnail + '.png'}`)"
              class="img-fluid"
              :alt="title"
            />
          </picture>
        </div>
        <div class="col-3">
          <div class="card-body h-100 d-flex flex-column justify-content-center text-center p-0 pr-2">
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
  props: {
    thumbnail: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      index: null
    };
  }
};
</script>

<style lang="scss" scoped>
.work-card {
  background: #000000;
  border-radius: 22px;
  cursor: pointer;
  border: 0;

  img {
    object-fit: cover;
    object-position: right;
    margin-left: 0px;
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
