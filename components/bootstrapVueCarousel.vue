<template>
  <mdb-container class="mt-5">
    <mdb-multi-carousel :interval="8000" showControls showIndicators slide>
      <template>
        <mdb-carousel-item>
          <mdb-row class="carousel__item">
            <mdb-col md="4">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <mdb-row class="carousel__item">
            <mdb-col md="4">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <mdb-row class="carousel__item">
            <mdb-col md="4">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-card class="mb-2">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg" alt="Card image cap" waves></mdb-card-image>
                <mdb-card-body>
                  <mdb-card-title>Card title</mdb-card-title>
                  <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                  <mdb-btn color="primary">Button</mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
      </template>
      <template v-slot:mobile>
        <mdb-carousel-item class="carousel__item">
          <mdb-card class="mb-2">
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Card image cap" waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
          <mdb-card class="mb-2">
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap" waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
          <mdb-card class="mb-2">
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap" waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
        <mdb-card class="mb-2">
          <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" alt="Card image cap" waves></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Button</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
        <mdb-card class="mb-2">
          <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" alt="Card image cap" waves></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Button</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
        <mdb-card class="mb-2">
          <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" alt="Card image cap" waves></mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>Card title</mdb-card-title>
            <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
            <mdb-btn color="primary">Button</mdb-btn>
          </mdb-card-body>
        </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
          <mdb-card class="mb-2">
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" alt="Card image cap" waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
          <mdb-card class="mb-2">
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" alt="Card image cap" waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-carousel-item>
        <mdb-carousel-item class="carousel__item">
          <mdb-card class="mb-2">
            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg" alt="Card image cap" waves></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn color="primary">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-carousel-item>
      </template>
    </mdb-multi-carousel>
  </mdb-container>
</template>

<script>
  import { mdbMultiCarousel, mdbCarouselItem, mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
  export default {
    name: 'CarouselPage',
    components: {
      mdbMultiCarousel,
      mdbCarouselItem,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn
    }
  }
</script>


<style scoped>
  .carousel__item {
    padding: 10px;
  }
</style>