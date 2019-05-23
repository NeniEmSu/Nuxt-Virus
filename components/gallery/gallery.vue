<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>

    <div
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      class="image"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '300px',
        height: '200px'
      }"
      @click="index = imageIndex"
    ></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      images: [
        "https://dummyimage.com/800/ffffff/000000",
        "https://dummyimage.com/1600/ffffff/000000",
        "https://dummyimage.com/1280/000000/ffffff",
        "https://dummyimage.com/400/000000/ffffff"
      ],
      index: null
    };
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

.close:not(:disabled):not(.disabled) {
  cursor: pointer;
  color: white;
}

a .close:hover {
  cursor: pointer;
  color: white;
}

a:not([href]):not([tabindex]) {
  color: white;
}
</style>
