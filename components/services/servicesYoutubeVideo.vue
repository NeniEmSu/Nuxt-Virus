<template>
  <div class="youtube-video-container">
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String,
      default: "https://www.youtube.com/embed/NpEaa2P7qZI",
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.youtube-video-container {
  width: 100%;
  max-width: 792px;
  height: 440px;

  background: #000000;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);

  margin: 40px auto;

  iframe {
    width: 100%;
    max-width: 792px;
    height: 440px;
  }
}

@include mediaLg {
  .youtube-video-container {
    height: 380px;

    iframe {
      height: 380px;
    }
  }
}

@include mediaMd {
  .youtube-video-container {
    height: 320px;

    iframe {
      height: 320px;
    }
  }
}

@include mediaSm {
  .youtube-video-container {
    height: 200px;

    iframe {
      height: 200px;
    }
  }
}

@include mediaXSm {
  .youtube-video-container {
    margin: 20px auto;
    height: 180px;

    iframe {
      height: 180px;
    }
  }
}

@include mediaXXSm {
  .youtube-video-container {
    margin: 20px auto;
    height: 180px;

    iframe {
      height: 180px;
    }
  }
}
</style>
