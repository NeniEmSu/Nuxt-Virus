<template>
  <div class="container">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper mx-auto">
        <card class="mt-2 mb-5 swiper-slide"/>
        <card class="mt-2 mb-5 swiper-slide"/>
        <card class="mt-2 mb-5 swiper-slide"/>
        <card class="mt-2 mb-5 swiper-slide"/>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "4",
        centeredSlides: false,
        spaceBetween: 40,
        keyboard: {
          enabled: true
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  },
  mounted() {
    console.log("app init", this);
    setTimeout(() => {
      this.banners.push("/5.jpg");
      console.log("banners update");
    }, 3000);
    console.log(
      "This is current swiper instance object",
      this.mySwiper,
      "I will slideTo banners 3"
    );
    this.mySwiper.slideTo(3);
  }
};
</script>


<style lang="scss" scoped>
.my-swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>
