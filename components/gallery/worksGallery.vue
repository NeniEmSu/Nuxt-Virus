<template>
  <div class="mt-5">
    <div class="row mx-auto">
      <carsLightbox :images="audi" :title="title1" :subtitle="subtitle1" :thumbnail="thumbnail1"/>
      <carsLightbox :images="bmw" :title="title2" :subtitle="subtitle2" :thumbnail="thumbnail2"/>
      <carsLightbox :images="mini" :title="title3" :subtitle="subtitle3" :thumbnail="thumbnail3"/>
      <carsLightbox
        :images="mercedes"
        :title="title4"
        :subtitle="subtitle4"
        :thumbnail="thumbnail4"
      />
      <carsLightbox :images="rover" :title="title5" :subtitle="subtitle5" :thumbnail="thumbnail5"/>
      <carsLightbox
        :images="forester"
        :title="title6"
        :subtitle="subtitle6"
        :thumbnail="thumbnail6"
      />
      <carsLightbox :images="hundai" :title="title7" :subtitle="subtitle7" :thumbnail="thumbnail7"/>
      <carsLightbox
        :images="volkswagen"
        :title="title8"
        :subtitle="subtitle8"
        :thumbnail="thumbnail8"
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
      title1: "Audi",
      subtitle1: "A6",
      thumbnail1: "/img/car1.png",
      audi: [
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp"
      ],
      title2: "BMW 4",
      subtitle2: "Series",
      thumbnail2: "/img/car2.png",
      bmw: [
        "/img/1(1).jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title3: "Mini Cooper",
      subtitle3: "Works",
      thumbnail3: "/img/car3.png",
      mini: [
        "/img/1(2).jpg",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title4: "Mercedes",
      subtitle4: "GLS",
      thumbnail4: "/img/car4.png",
      mercedes: [
        "/img/1(3).jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title5: "Range",
      subtitle5: "Rover",
      thumbnail5: "/img/car5.png",
      rover: [
        "/img/1(4).jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title6: "Subaru",
      subtitle6: "Forester",
      thumbnail6: "/img/car6.png",
      forester: [
        "/img/1(5).jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title7: "Hundai",
      subtitle7: "Santa Fe",
      thumbnail7: "/img/car7.png",
      hundai: [
        "/img/1(6).jpg",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      title8: "Wolksvagen",
      subtitle8: "Touareg",
      thumbnail8: "/img/car8.png",
      volkswagen: [
        "/img/1(7).jpg",
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
