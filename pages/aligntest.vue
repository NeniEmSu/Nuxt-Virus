<template>
  <div class="container news-list">
    <div class="news-item odd">
      <div class="news-image">
        <img
          class="news-image"
          src="penguin.jpg"
        >
      </div>
      <div class="news-info">
        <p class="news-info">
          Lorem ipsum dolor sit ... sapientem honestatis.
        </p>
      </div>
    </div>

    <div class="news-item even">
      <div class="news-image">
        <img
          class="news-image"
          src="walrus.jpg"
        >
      </div>
      <div class="news-info">
        <p class="news-info">
          Mel et dolores luptatum ... dicta alienum.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img.news-image {
  background: #dadada;
  height: 50px;
  width: 50px;
}
p.news-info {
  margin-top: 0;
}
.news-item {
  clear: both;
  border-top: 1px solid #dadada;
}
.odd div.news-info {
  float: right;
}
.odd div.news-image {
  float: left;
}
.even div.news-info {
  float: left;
}
.even div.news-image {
  float: right;
}
</style>
