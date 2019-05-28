<template>
  <div class="mt-5">
    <div class="row mx-auto">
      <carsLightbox
        :images="audi"
        :title="title1"
        :subtitle="subtitle1"
        :thumbnail="thumbnail1"
        :thumbnailWebP="thumbnailWebP1"
      />
      <carsLightbox
        :images="bmw"
        :title="title2"
        :subtitle="subtitle2"
        :thumbnail="thumbnail2"
        :thumbnailWebP="thumbnailWebP2"
      />
      <carsLightbox
        :images="mini"
        :title="title3"
        :subtitle="subtitle3"
        :thumbnail="thumbnail3"
        :thumbnailWebP="thumbnailWebP3"
      />
      <carsLightbox
        :images="mercedes"
        :title="title4"
        :subtitle="subtitle4"
        :thumbnail="thumbnail4"
        :thumbnailWebP="thumbnailWebP4"
      />
      <carsLightbox
        :images="rover"
        :title="title5"
        :subtitle="subtitle5"
        :thumbnail="thumbnail5"
        :thumbnailWebP="thumbnailWebP5"
      />
      <carsLightbox
        :images="forester"
        :title="title6"
        :subtitle="subtitle6"
        :thumbnail="thumbnail6"
        :thumbnailWebP="thumbnailWebP6"
      />
      <carsLightbox
        :images="hundai"
        :title="title7"
        :subtitle="subtitle7"
        :thumbnail="thumbnail7"
        :thumbnailWebP="thumbnailWebP7"
      />
      <carsLightbox
        :images="volkswagen"
        :title="title8"
        :subtitle="subtitle8"
        :thumbnail="thumbnail8"
        :thumbnailWebP="thumbnailWebP8"
      />
      <carsLightbox
        :images="ninth"
        :title="title9"
        :subtitle="subtitle9"
        :thumbnail="thumbnail9"
        :thumbnailWebP="thumbnailWebP9"
      />
      <carsLightbox
        :images="tenth"
        :title="title10"
        :subtitle="subtitle10"
        :thumbnail="thumbnail10"
        :thumbnailWebP="thumbnailWebP10"
      />
    </div>
  </div>
</template>

<script>
import carsLightbox from "@/components/gallery/carsLightbox";
export default {
  components: {
    carsLightbox
  },
  data() {
    return {
      title1: "Volkswagen",
      subtitle1: "Bettle",
      thumbnail1: "/img/car1.png",
      thumbnailWebP1: "/imgWebP/car1.webp",
      audi: [
        "/img/gallery/1/1.jpg",
        "/img/gallery/1/2.jpg",
        "/img/gallery/1/3.jpg",
        "/img/gallery/1/4.jpg",
        "/img/gallery/1/5.jpg",
        "/img/gallery/1/6.jpg",
        "/img/gallery/1/7.jpg",
        "/img/gallery/1/8.jpg",
        "/img/gallery/1/9.jpg",
        "/img/gallery/1/10.jpg"
      ],
      title2: "Toyota",
      subtitle2: "Optima",
      thumbnail2: "/img/car2.png",
      thumbnailWebP2: "/imgWebP/car2.webp",
      bmw: [
        "/img/gallery/2/1.jpg",
        "/img/gallery/2/2.jpg",
        "/img/gallery/2/3.jpg",
        "/img/gallery/2/4.jpg",
        "/img/gallery/2/5.jpg",
        "/img/gallery/2/6.jpg"
      ],
      title3: "Skoda",
      subtitle3: "Superb",
      thumbnail3: "/img/car3.png",
      thumbnailWebP3: "/imgWebP/car3.webp",
      mini: [
        "/img/gallery/3/1.jpg",
        "/img/gallery/3/2.jpg",
        "/img/gallery/3/3.jpg",
        "/img/gallery/3/4.jpg",
        "/img/gallery/3/5.jpg",
        "/img/gallery/3/6.jpg",
        "/img/gallery/3/7.jpg"
      ],
      title4: "Tesla",
      subtitle4: "Model",
      thumbnail4: "/img/car4.png",
      thumbnailWebP4: "/imgWebP/car4.webp",
      mercedes: [
        "/img/gallery/4/1.jpg",
        "/img/gallery/4/2.jpg",
        "/img/gallery/4/3.jpg",
        "/img/gallery/4/4.jpg",
        "/img/gallery/4/5.jpg"
      ],
      title5: "Nissan",
      subtitle5: "Juke",
      thumbnail5: "/img/car2.png",
      thumbnailWebP5: "/imgWebP/car2.webp",
      rover: [
        "/img/gallery/5/1.jpg",
        "/img/gallery/5/2.jpg",
        "/img/gallery/5/3.jpg",
        "/img/gallery/5/4.jpg",
        "/img/gallery/5/5.jpg",
        "/img/gallery/5/6.jpg"
      ],
      title6: "Range Rover",
      subtitle6: "Evoque TDN",
      thumbnail6: "/img/car6.png",
      thumbnailWebP6: "/imgWebP/car6.webp",
      forester: [
        "/img/gallery/6/1.jpg",
        "/img/gallery/6/2.jpg",
        "/img/gallery/6/3.jpg",
        "/img/gallery/6/4.jpg",
        "/img/gallery/6/5.jpg"
      ],
      title7: "Jaguar",
      subtitle7: "XE",
      thumbnail7: "/img/car7.png",
      thumbnailWebP7: "/imgWebP/car7.webp",
      hundai: [
        "/img/gallery/7/1.jpg",
        "/img/gallery/7/2.jpg",
        "/img/gallery/7/3.jpg",
        "/img/gallery/7/5.jpg",
        "/img/gallery/7/6.jpg",
        "/img/gallery/7/9.jpg"
      ],
      title8: "Mini",
      subtitle8: "Cooper S",
      thumbnail8: "/img/car8.png",
      thumbnailWebP8: "/imgWebP/car8.webp",
      volkswagen: [
        "/img/gallery/8/1.jpg",
        "/img/gallery/8/2.jpg",
        "/img/gallery/8/3.jpg",
        "/img/gallery/8/4.jpg",
        "/img/gallery/8/5.jpg",
        "/img/gallery/8/6.jpg",
        "/img/gallery/8/7.jpg"
      ],
      title9: "Jaguar",
      subtitle9: "XJL",
      thumbnail9: "/img/car3.png",
      thumbnailWebP9: "/imgWebP/car3.webp",
      ninth: [
        "/img/gallery/9/1.jpg",
        "/img/gallery/9/2.jpg",
        "/img/gallery/9/3.jpg",
        "/img/gallery/9/4.jpg",
        "/img/gallery/9/5.jpg",
        "/img/gallery/9/6.jpg",
        "/img/gallery/9/7.jpg",
        "/img/gallery/9/8.jpg"
      ],
      title10: "Mercedes Benz",
      subtitle10: "GLK 220",
      thumbnail10: "/img/car1.png",
      thumbnailWebP10: "/imgWebP/car1.webp",
      tenth: [
        "/img/gallery/10/1.jpg",
        "/img/gallery/10/2.jpg",
        "/img/gallery/10/3.jpg",
        "/img/gallery/10/4.jpg",
        "/img/gallery/10/5.jpg",
        "/img/gallery/10/6.jpg",
        "/img/gallery/10/7.jpg",
        "/img/gallery/9/8.jpg"
      ]
    };
  }
};
</script>
