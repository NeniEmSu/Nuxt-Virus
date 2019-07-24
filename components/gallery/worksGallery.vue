<template>
  <div>
    <div class="row mx-auto">
      <carsLightbox
        :images="first"
        :title="title1"
        :subtitle="subtitle1"
        :thumbnail="thumbnail1"
      />
      <carsLightbox
        :images="second"
        :title="title2"
        :subtitle="subtitle2"
        :thumbnail="thumbnail2"
      />
      <carsLightbox
        :images="third"
        :title="title3"
        :subtitle="subtitle3"
        :thumbnail="thumbnail3"
      />
      <carsLightbox
        :images="fourth"
        :title="title4"
        :subtitle="subtitle4"
        :thumbnail="thumbnail4"
      />
      <carsLightbox
        :images="fifth"
        :title="title5"
        :subtitle="subtitle5"
        :thumbnail="thumbnail5"
      />
      <carsLightbox
        :images="sixth"
        :title="title6"
        :subtitle="subtitle6"
        :thumbnail="thumbnail6"
      />
      <carsLightbox
        :images="seventh"
        :title="title7"
        :subtitle="subtitle7"
        :thumbnail="thumbnail7"
      />
      <carsLightbox
        :images="eighth"
        :title="title8"
        :subtitle="subtitle8"
        :thumbnail="thumbnail8"
      />
      <carsLightbox
        :images="ninth"
        :title="title9"
        :subtitle="subtitle9"
        :thumbnail="thumbnail9"
      />
      <carsLightbox
        :images="tenth"
        :title="title10"
        :subtitle="subtitle10"
        :thumbnail="thumbnail10"
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
  data () {
    return {
      title1: "Volkswagen",
      subtitle1: "Bettle",
      thumbnail1: "car1",
      first: [
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/1.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/2.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/3.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/4.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/5.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/6.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/7.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/8.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/9.jpg")
        },
        {
          title: "Volkswagen Bettle",
          url: require("~/assets/img/gallery/1/10.jpg")
        }
      ],
      title2: "Toyota",
      subtitle2: "Optima",
      thumbnail2: "car2",

      second: [
        {
          title: "Toyota Optima",
          url: require("~/assets/img/gallery/2/1.jpg")
        },
        {
          title: "Toyota Optima",
          url: require("~/assets/img/gallery/2/2.jpg")
        },
        {
          title: "Toyota Optima",
          url: require("~/assets/img/gallery/2/3.jpg")
        },
        {
          title: "Toyota Optima",
          url: require("~/assets/img/gallery/2/4.jpg")
        },
        {
          title: "Toyota Optima",
          url: require("~/assets/img/gallery/2/5.jpg")
        },
        { title: "Toyota Optima", url: require("~/assets/img/gallery/2/6.jpg") }
      ],
      title3: "Skoda",
      subtitle3: "Superb",
      thumbnail3: "car3",

      third: [
        require("~/assets/img/gallery/3/1.jpg"),
        require("~/assets/img/gallery/3/2.jpg"),
        require("~/assets/img/gallery/3/3.jpg"),
        require("~/assets/img/gallery/3/4.jpg"),
        require("~/assets/img/gallery/3/5.jpg"),
        require("~/assets/img/gallery/3/6.jpg"),
        require("~/assets/img/gallery/3/7.jpg")
      ],
      title4: "Tesla",
      subtitle4: "Model",
      thumbnail4: "car4",
      fourth: [
        require("~/assets/img/gallery/4/1.jpg"),
        require("~/assets/img/gallery/4/2.jpg"),
        require("~/assets/img/gallery/4/3.jpg"),
        require("~/assets/img/gallery/4/4.jpg"),
        require("~/assets/img/gallery/4/5.jpg")
      ],
      title5: "Nissan",
      subtitle5: "Juke",
      thumbnail5: "car5",

      fifth: [
        require("~/assets/img/gallery/5/1.jpg"),
        require("~/assets/img/gallery/5/2.jpg"),
        require("~/assets/img/gallery/5/3.jpg"),
        require("~/assets/img/gallery/5/4.jpg"),
        require("~/assets/img/gallery/5/5.jpg"),
        require("~/assets/img/gallery/5/6.jpg")
      ],
      title6: "Range Rover",
      subtitle6: "Evoque TDN",
      thumbnail6: "car6",

      sixth: [
        require("~/assets/img/gallery/6/1.jpg"),
        require("~/assets/img/gallery/6/2.jpg"),
        require("~/assets/img/gallery/6/3.jpg"),
        require("~/assets/img/gallery/6/4.jpg"),
        require("~/assets/img/gallery/6/5.jpg")
      ],
      title7: "Jaguar",
      subtitle7: "XE",
      thumbnail7: "car7",

      seventh: [
        require("~/assets/img/gallery/7/1.jpg"),
        require("~/assets/img/gallery/7/2.jpg"),
        require("~/assets/img/gallery/7/3.jpg"),
        require("~/assets/img/gallery/7/5.jpg"),
        require("~/assets/img/gallery/7/6.jpg"),
        require("~/assets/img/gallery/7/9.jpg")
      ],
      title8: "Mini",
      subtitle8: "Cooper S",
      thumbnail8: "car8",

      eighth: [
        require("~/assets/img/gallery/8/1.jpg"),
        require("~/assets/img/gallery/8/2.jpg"),
        require("~/assets/img/gallery/8/3.jpg"),
        require("~/assets/img/gallery/8/4.jpg"),
        require("~/assets/img/gallery/8/5.jpg"),
        require("~/assets/img/gallery/8/6.jpg"),
        require("~/assets/img/gallery/8/7.jpg")
      ],
      title9: "Jaguar",
      subtitle9: "XJL",
      thumbnail9: "car9",

      ninth: [
        require("~/assets/img/gallery/9/1.jpg"),
        require("~/assets/img/gallery/9/2.jpg"),
        require("~/assets/img/gallery/9/3.jpg"),
        require("~/assets/img/gallery/9/4.jpg"),
        require("~/assets/img/gallery/9/5.jpg"),
        require("~/assets/img/gallery/9/6.jpg"),
        require("~/assets/img/gallery/9/7.jpg"),
        require("~/assets/img/gallery/9/8.jpg")
      ],
      title10: "Mercedes Benz",
      subtitle10: "GLK 220",
      thumbnail10: "car10",

      tenth: [
        require("~/assets/img/gallery/10/1.jpg"),
        require("~/assets/img/gallery/10/2.jpg"),
        require("~/assets/img/gallery/10/7.jpg"),
        require("~/assets/img/gallery/10/3.jpg"),
        require("~/assets/img/gallery/10/4.jpg"),
        require("~/assets/img/gallery/10/5.jpg"),
        require("~/assets/img/gallery/10/6.jpg"),
        require("~/assets/img/gallery/10/8.jpg")
      ]
    };
  }
};
</script>
