<template>
  <div class="mt-5">
    <h1>lightbox</h1>
    <Lightbox :thumbnail="images[0]" :images="images"/>
  </div>
</template>

<script>
import Lightbox from "@/components/gallery/Lightbox";
export default {
  components: {
    Lightbox
  },
  data() {
    return {
      images: [
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
        "https://static.carsdn.co/cldstatic/wp-content/uploads/img812810844-1551980833760.jpg",
        "/imgWebP/top1.webp"
      ]
    };
  }
};
</script>

<style>
</style>
