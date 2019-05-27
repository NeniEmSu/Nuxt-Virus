<template>
  <div class="mt-5">
    <div class="container cars-card">
      <h2>Наші роботи</h2>

      <div class="row mx-auto">
        <carsLightbox :images="audi" :title="title1" :subtitle="subtitle1" :workclass="workclass1"/>
        <carsLightbox :images="bmw" :title="title2" :subtitle="subtitle2" :workclass="workclass2"/>
        <carsLightbox :images="mini" :title="title3" :subtitle="subtitle3" :workclass="workclass3"/>
        <carsLightbox
          :images="mercedes"
          :title="title4"
          :subtitle="subtitle4"
          :workclass="workclass4"
        />
        <carsLightbox
          :images="rover"
          :title="title5"
          :subtitle="subtitle5"
          :workclass="workclass5"
        />
        <carsLightbox
          :images="forester"
          :title="title6"
          :subtitle="subtitle6"
          :workclass="workclass6"
        />
        <carsLightbox
          :images="hundai"
          :title="title7"
          :subtitle="subtitle7"
          :workclass="workclass7"
        />
        <carsLightbox
          :images="volkswagen"
          :title="title8"
          :subtitle="subtitle8"
          :workclass="workclass8"
        />
      </div>
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
      title1: "Audi",
      subtitle1: "A6",
      workclass1: "work-one",
      audi: [
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "/imgWebP/top1.webp"
      ],
      title2: "BMW 4",
      subtitle2: "Series",
      workclass2: "work-two",
      bmw: [
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title3: "Mini Cooper",
      subtitle3: "Works",
      workclass3: "work-three",
      mini: [
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title4: "Mercedes",
      subtitle4: "GLS",
      workclass4: "work-four",
      mercedes: [
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title5: "Range",
      subtitle5: "Rover",
      workclass5: "work-five",
      rover: [
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title6: "Subaru",
      subtitle6: "Forester",
      workclass6: "work-six",
      mercedes: [
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title7: "Hundai",
      subtitle7: "Santa Fe",
      workclass7: "work-seven",
      hundai: [
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title8: "Wolksvagen",
      subtitle8: "Touareg",
      workclass8: "work-eight",
      volkswagen: [
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    };
  }
};
</script>
