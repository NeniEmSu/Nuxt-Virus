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
        "/imgWebP/top1.webp",
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    };
  }
};
</script>

<style>
</style>
