<template>
  <div
    @click.prevent="show"
    class="card mb-3 mx-auto card__hover_two work-card img-fluid"
    style="width: 100%; max-width: 540px;"
    title="View more images!"
  >
    <div class="row no-gutters">
      <div class="col-9 p-0">
        <picture>
          <source :srcset="require(`~/assets/imgWebP/${thumbnail + '.webp'}`)" type="image/webp">
          <img :src="require(`~/assets/img/${thumbnail + '.png'}`)" class="img-fluid" :alt="title">
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

    <div class="lightbox m-auto text-center" v-if="visible" @click="hide">
      <div
        class="text-right text-white p-2"
        style="font-size: 50px; cursor: pointer;"
        @click.stop="hide"
      >&times;</div>
      <div class="row h-75 m-auto">
        <div
          class="col-1 text-left my-auto p-0"
          style="font-size: 50px; line-height: 52px; cursor: pointer;"
          @click.stop="prev"
          :class="{'invisible': ! hasPrev()}"
        >
          <svg
            class="pointer-events-none"
            fill="#fff"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
            <path d="M0-.5h24v24H0z" fill="none"></path>
          </svg>
        </div>
        <div class="lightbox-image col-10 my-auto p-2" @click.stop>
          <img class="img-fluid" :src="images[index]">
        </div>
        <div
          class="col-1 text-right my-auto p-0 ml-n3"
          style="font-size: 50px; line-height: 52px; cursor: pointer;"
          @click.stop="next"
          :class="{'invisible': ! hasNext()}"
        >
          <svg
            class="pointer-events-none"
            fill="#fff"
            height="48"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            <path d="M0-.25h24v24H0z" fill="none"></path>
          </svg>
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
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
          case "Escape":
            this.hide();
            break;
        }
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown);
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
