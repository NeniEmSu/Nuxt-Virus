<template>
  <div>
    <div class="container text-center top-grid p-0 pt-4">
      <h1 class="text-left">
        Ми
        <br>пропонуємо
      </h1>
      <div class="row p-0">
        <nuxt-link to="/Полірування">
          <h2 class="top1">ПОЛІРУВАННЯ</h2>
          <img
            class="img-fluid one mr-1 mb-1"
            style="position: relative"
            src="img/top1.png"
            alt="black car from its back with word ПОЛІРУВАННЯ over."
          >
        </nuxt-link>
        <nuxt-link to="/Покриттявоском">
          <h2 class="top2">
            ВОСКОВЕ
            <br>ПОКРИТТЯ
          </h2>
          <img
            class="two img-fluid"
            src="img/top2.png"
            alt="orange car left headlight with text ВОСКОВЕ ПОКРИТТЯ over."
          >
        </nuxt-link>
        <nuxt-link to="/Мийкамотору">
          <h2 class="top3">
            МИЙКА
            <br>МОТОРУ
          </h2>
          <img
            class="three img-fluid mt-1"
            src="img/top3.png"
            alt="hood of a car showing it's engine with the text МИЙКА МОТОРУ over."
          >
        </nuxt-link>
        <div class="col-md">
          <nuxt-link to="/Хімчистка">
            <h2 class="top4">ХІМЧИСТКА</h2>
            <img
              class="four img-fluid mt-n3"
              style="margin-top: -16px;"
              src="img/top4.png"
              alt="image from the angle of a cars stearing wheel with the text ХІМЧИСТКА over."
            >
          </nuxt-link>

          <nuxt-link to="/Реставраціяподряпин">
            <h2 class="top5">
              РЕСТАВРАЦІЯ
              <br>СКОЛІВ
            </h2>
            <img
              class="five img-fluid mt-n3"
              style="margin-top: -16px;"
              src="img/top5.png"
              alt="Image of a blue car from the back at low angle showing it's left tyre with the text РЕСТАВРАЦІЯ
                            СКОЛІВ over."
            >
          </nuxt-link>
          <nuxt-link to="/КЕРАМІЧНЕПОКРИТТЯСИДІНЬ">
            <h2 class="top6">КЕРАМІЧНЕ ПОКРИТТЯ</h2>
            <img
              class="six img-fluid mt-2"
              src="img/top6.png"
              alt="a black saloon car from it's right side with the text КЕРАМІЧНЕ ПОКРИТТЯ over."
            >
          </nuxt-link>
        </div>
        <nuxt-link to="/Передпродажнапідготовка">
          <h2 class="top7">
            ПЕРЕДПРОДАЖНА
            <br>ПІДГОТОВКА
          </h2>
          <img
            class="seven img-fluid mt-2"
            src="img/top7.png"
            alt="image of a white car from it's front with other cars in the background and the text ПЕРЕДПРОДАЖНА
                        ПІДГОТОВКА over."
          >
        </nuxt-link>
      </div>
    </div>

    <div class="jumbotron recomendations">
      <div class="container text-center">
        <h2 class="text-left">Рекомендуємо</h2>

        <div class="card-deck">
          <div
            class="owl-carousel owl-theme"
            :loop="true"
            :nav="false"
            :responsiveClass="true"
            :margin="20"
            :autoplay="true"
            :autoplayHoverPause="true"
            :touchDrag="true"
            :pullDrag="true"
            :responsive="{0:{items:1,nav:false},768:{items:2,nav:true,margin:10},1200:{items:3,nav:true,margin:10,loop:true}}"
          >
            <div class="item">
              <div class="card one card__hover">
                <img src="img/86.png" class="card-img-top img-fluid" alt="Koch Chemie Fresh UP">
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Koch Chemie Fresh UP</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card two card__hover">
                <img
                  src="img/9BFZEPHIR-1.png"
                  class="card-img-top img-fluid"
                  alt="Rupes Coarse Zephir Gloss"
                >
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Rupes Coarse Zephir Gloss</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card three card__hover">
                <img
                  src="img/MaskGroup(3).png"
                  class="card-img-top img-fluid small-img"
                  alt="Soft 99"
                >
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Soft 99</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card four card__hover">
                <img src="img/86.png" class="card-img-top img-fluid" alt="Koch Chemie Fresh UP">
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Koch Chemie Fresh UP</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card five card__hover">
                <img
                  src="img/9BFZEPHIR-1.png"
                  class="card-img-top img-fluid"
                  alt="Rupes Coarse Zephir Gloss"
                >
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Rupes Coarse Zephir Gloss</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card six card__hover">
                <img
                  src="img/MaskGroup(3).png"
                  alt="Soft 99"
                  class="card-img-top img-fluid small-img"
                >
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Soft 99</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card seven card__hover">
                <img src="img/86.png" alt="Koch Chemie Fresh UP" class="card-img-top img-fluid">
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Koch Chemie Fresh UP</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card eight card__hover">
                <img
                  src="img/9BFZEPHIR-1.png"
                  class="card-img-top img-fluid"
                  alt="Rupes Coarse Zephir Gloss"
                >
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Rupes Coarse Zephir Gloss</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div class="card nine card__hover">
                <img
                  src="img/MaskGroup(3).png"
                  class="card-img-top img-fluid small-img"
                  alt="Soft 99"
                >
                <hr>
                <div class="card-body">
                  <h5 class="card-title text-left">Soft 99</h5>
                  <div class="text-left">
                    <small>
                      <s>2975 грн</s>
                    </small>
                    <p class="card-text">
                      2 900
                      <span>ГРН</span>
                    </p>
                  </div>
                  <div class="text-right mt-n5">
                    <small class="discount">В наявності</small>
                    <br>
                    <a href="магазин" class="btn">Купити</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="магазин" class="btn">Показати більше</a>
      </div>
    </div>

    <div class="container cars-card">
      <h2>Наші роботи</h2>
      <div class="row mx-auto">
        <div class="text-center col-xl-6">
          <a
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('audi')"
            id="card-1"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card p-0 mx-auto one">
              <div class="row text-center card__hover_two work-one img-fluid">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Audi
                    <span>A6</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            class
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('bmw')"
            id="card-2"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card p-0 mx-auto two">
              <div class="row text-center card__hover_two work-two">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    BMW
                    <span>4 Series</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('cooper')"
            id="card-3"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto three">
              <div class="row text-center card__hover_two work-three">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Mini Cooper
                    <span>Works</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('merin')"
            id="card-4"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto four">
              <div class="row text-center card__hover_two work-four">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Mercedes
                    <span>GLS</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('rover')"
            id="card-5"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto five">
              <div class="row text-center card__hover_two work-five">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Range
                    <span>Rover</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('subaru')"
            id="card-6"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto six">
              <div class="row text-center card__hover_two work-six">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Subaru
                    <span>Forester</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('santa_fe')"
            id="card-7"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto seven">
              <div class="row text-center card__hover_two work-seven">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Hundai
                    <span>Santa Fe</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="text-center col-xl-6">
          <a
            onClick="if (!window.__cfRLUnblockHandlers) return false; openGallery('vw')"
            id="card-8"
            data-cf-modified-74bf624512b1c6414329bcb4-
          >
            <div class="card mx-auto eight">
              <div class="row text-center card__hover_two work-eight">
                <div class="col-8"></div>
                <div class="col-sm-4 my-auto">
                  <h4>
                    Wolksvagen
                    <span>Touareg</span>
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <ContactForm/>

    <progressSection/>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

    <script>
  // owlCarousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 0
      },
      1200: {
        items: 3,
        margin: 10,
        loop: true
      }
    },
    margin: 20,
    autoplay: true,
    autoplayHoverPause: true
  });
    </script>
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm.vue";
import progressSection from "@/components/progressSection.vue";

export default {
  components: {
    ContactForm,
    progressSection
  },

  head() {
    return {
      title:
        "Детейлінг центр Virus Тернопіль. Хімчистка, полірування, реставрація авто",
      titleTemplate: "Virus - %s!",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Детейлінг студія Virus - комплексний догляд за Вашим авто. Передпродажна підготовка, хімчистка салону, полірування кузова, керамічне покритя, перетяжка руля, реставрація шкіри."
        }
      ]
    };
  }
};
</script>

<style scoped>
.top-grid h2 {
  position: absolute;
  z-index: 1;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: normal;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding: 5px;
}

.top1 {
  margin-top: 260px;
  margin-left: 70px;
}

.top2 {
  margin-top: 130px;
  margin-left: 500px;
}

.top3 {
  margin-top: 450px;
  margin-left: 250px;
}

.top4 {
  margin-top: 0px;
  margin-left: 150px;
}

.top5 {
  margin-top: -100px;
  margin-left: 580px;
  text-align: left;
}

.top6 {
  margin-top: 250px;
  margin-left: 250px;
}

.top7 {
  margin-top: 150px;
  margin-left: 100px;
  text-align: left;
}

@media screen and (min-width: 991px) and (max-width: 1199.9px) {
  .top1 {
    margin-top: 230px;
    margin-left: 30px;
  }

  .top2 {
    margin-top: 80px;
    margin-left: 300px;
  }

  .top3 {
    margin-top: 280px;
    margin-left: 130px;
  }

  .top4 {
    margin-top: 0px;
    margin-left: 150px;
  }

  .top5 {
    margin-top: -80px;
    margin-left: 400px;
    text-align: left;
  }

  .top6 {
    margin-top: 160px;
    margin-left: 170px;
  }

  .top7 {
    margin-top: 120px;
    margin-left: 50px;
    text-align: left;
  }
}

@media screen and (min-width: 767px) and (max-width: 990.9px) {
  .top-grid h2 {
    position: absolute;
    z-index: 1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: normal;
    letter-spacing: 0.1em;
    color: #ffffff;
  }

  .top1 {
    margin-top: 150px;
    margin-left: 12px;
  }

  .top2 {
    margin-top: 60px;
    margin-left: 220px;
  }

  .top3 {
    margin-top: 200px;
    margin-left: 90px;
  }

  .top4 {
    margin-top: 0px;
    margin-left: 75px;
  }

  .top5 {
    margin-top: -60px;
    margin-left: 250px;
  }

  .top6 {
    margin-top: 120px;
    margin-left: 85px;
  }

  .top7 {
    margin-top: 90px;
    margin-left: 25px;
  }
}

@media screen and (max-width: 766.9px) {
  .top-grid h2 {
    position: absolute;
    z-index: 1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
  }

  .top1 {
    margin-top: 480px;
    margin-left: 200px;
  }

  .top2 {
    margin-top: 100px;
    margin-left: 350px;
  }

  .top3 {
    margin-top: 20px;
    margin-left: 20px;
  }

  .top4 {
    margin-top: 20px;
    margin-left: 230px;
  }

  .top5 {
    margin-top: 350px;
    margin-left: 300px;
  }

  .top6 {
    margin-top: 20px;
    margin-left: 120px;
  }

  .top7 {
    margin-top: 20px;
    margin-left: 20px;
  }
}

@media screen and (max-width: 700.9px) {
  .top4 {
    margin-top: 20px;
    margin-left: 180px;
  }

  .top6 {
    margin-top: 20px;
    margin-left: 95px;
  }
}

@media screen and (max-width: 560.9px) {
  .top-grid h2 {
    position: absolute;
    z-index: 1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
  }

  .top1 {
    margin-top: 450px;
    margin-left: 180px;
  }

  .top2 {
    margin-top: 80px;
    margin-left: 280px;
  }

  .top3 {
    margin-top: 20px;
    margin-left: 20px;
  }

  .top4 {
    margin-top: 20px;
    margin-left: 180px;
  }

  .top5 {
    margin-top: 280px;
    margin-left: 240px;
  }

  .top6 {
    margin-top: 20px;
    margin-left: 100px;
  }

  .top7 {
    margin-top: 20px;
    margin-left: 20px;
  }
}

@media screen and (max-width: 450px) {
  .top-grid h2 {
    position: absolute;
    z-index: 1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
  }

  .top1 {
    margin-top: 320px;
    margin-left: 120px;
  }

  .top2 {
    margin-top: 60px;
    margin-left: 230px;
  }

  .top3 {
    margin-top: 460px;
    margin-left: 260px;
  }

  .top4 {
    margin-top: 20px;
    margin-left: 150px;
  }

  .top5 {
    margin-top: 250px;
    margin-left: 180px;
  }

  .top6 {
    margin-top: 130px;
    margin-left: 40px;
  }

  .top7 {
    margin-top: 50px;
    margin-left: 20px;
  }
}

@media screen and (max-width: 375px) {
  .top-grid h2 {
    position: absolute;
    z-index: 1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
  }

  .top1 {
    margin-top: 300px;
    margin-left: 20px;
  }

  .top2 {
    margin-top: 60px;
    margin-left: 180px;
  }

  .top3 {
    margin-top: 380px;
    margin-left: 200px;
  }

  .top4 {
    margin-top: 20px;
    margin-left: 100px;
  }

  .top5 {
    margin-top: 210px;
    margin-left: 150px;
  }

  .top6 {
    margin-top: 110px;
    margin-left: 30px;
  }
}

@media screen and (max-width: 320px) {
  .top-grid h2 {
    position: absolute;
    z-index: 1;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 20px !important;
    line-height: normal;
    letter-spacing: 0.1em;
    text-align: left;
    color: #ffffff;
  }

  .top1 {
    margin-top: 280px;
    margin-left: 80px;
  }

  .top2 {
    margin-top: 80px;
    margin-left: 170px;
  }

  .top3 {
    margin-top: 370px;
    margin-left: 200px;
  }

  .top4 {
    margin-top: 20px;
    margin-left: 100px;
    padding: 10px;
  }

  .top5 {
    margin-top: 200px;
    margin-left: 150px;
  }

  .top6 {
    margin-top: 100px;
    margin-left: 40px;
  }

  .top7 {
    margin-top: 40px;
    margin-left: 20px;
    padding: 10px;
  }
}
</style>


<style lang="scss" scoped>
@import "~assets/scss/config.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900");
main {
  .top-grid {
    h2 a {
      color: $lightColor;
    }

    a[rel="bookmark"]:hover + .meta * {
      color: $redColor;
    }

    a h2 {
      transition: all ease-in-out 300ms;
      -webkit-transition: all ease-in-out 300ms;
      -moz-transition: all ease-in-out 300ms;
      -ms-transition: all ease-in-out 300ms;
      -o-transition: all ease-in-out 300ms;

      &:hover {
        text-decoration: none;
        color: $redColor;
        transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        -ms-transform: scale(1.02);
        -o-transform: scale(1.02);
        color: $redColor;
      }
    }

    a img {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      opacity: 1;
      transition: all ease-in-out 300ms;
      -webkit-transition: all ease-in-out 300ms;
      -moz-transition: all ease-in-out 300ms;
      -ms-transition: all ease-in-out 300ms;
      -o-transition: all ease-in-out 300ms;

      &:hover {
        opacity: 0.99;
        text-decoration: none;
        color: $redColor;
        transform: scale(1.01);
        -webkit-transform: scale(1.01);
        -moz-transform: scale(1.01);
        -ms-transform: scale(1.01);
        -o-transform: scale(1.01);
        color: $redColor;
      }

      &.one {
        width: 373.96px;
        height: 410px;
        border-radius: 20px 0 0 0;
        -webkit-border-radius: 20px 0 0 0;
        -moz-border-radius: 20px 0 0 0;
        -ms-border-radius: 20px 0 0 0;
        -o-border-radius: 20px 0 0 0;
      }

      &.two {
        width: 780.1px;
        height: 340px;
        border-radius: 0 20px 0 0;
        -webkit-border-radius: 0 20px 0 0;
        -moz-border-radius: 0 20px 0 0;
        -ms-border-radius: 0 20px 0 0;
        -o-border-radius: 0 20px 0 0;
      }

      &.three {
        width: 373.96px;
        height: 532px;
      }

      &.four {
        width: 448.32px;
        height: 274px;
      }

      &.five {
        border: 0.15px grey solid;
        width: 325.85px;
        height: 274px;
      }

      &.six {
        width: 778.1px;
        height: 318px;
      }

      &.seven {
        width: 1156px;
        height: 364px;
        border-radius: 0 0 20px 20px;
        -webkit-border-radius: 0 0 20px 20px;
        -moz-border-radius: 0 0 20px 20px;
        -ms-border-radius: 0 0 20px 20px;
        -o-border-radius: 0 0 20px 20px;
      }
    }

    .col-md {
      margin: 0;
      padding: 0;
      margin-top: -3rem;
      margin-left: -0.5rem;
    }
  }

  h1 {
    color: $headingsFontColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 47px;
    letter-spacing: -0.05em;
    margin-bottom: 20px;
  }

  .row {
    img {
      padding: 0;
      margin: 0;
    }

    a {
      margin: 0;
      padding: 0;
    }
  }
}

.jumbotron.recomendations {
  background: #f2f2f2;
  padding: 40px 0;
  margin: 0;
  margin-top: 40px;

  a .btn {
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;

    &:hover {
      color: $redColor;
      background: $lightColor;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }

  h2 {
    color: $headingsFontColor;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 47px;
    letter-spacing: -0.05em;
    margin-bottom: 40px;
  }

  .card-deck {
    // Currently disabled but this is used for there styling
    .owl-carousel .owl-nav button.owl-next,
    .owl-carousel .owl-nav button.owl-prev {
      background: 0 0;
      color: $redColor;
      border: none;
      padding: 0 !important;
      font: inherit;
      font-size: 42px;
      cursor: pointer !important;
      margin-top: -40px;
    }

    .owl-theme .owl-nav.disabled + .owl-dots {
      margin-top: -5px;
      z-index: 3;
      outline: none;
    }

    .card {
      width: 100%;
      max-width: 343px;
      min-width: 285px;
      height: 343px;
      background: $lightColor;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;

      img {
        align-self: center;

        &.small-img {
          width: 100%;
          height: auto;
          max-width: 343px;
          min-height: 200px;
          object-fit: scale-down;
        }
      }

      &.one,
      &.four,
      &.seven {
        img {
          width: 209px;
          height: auto;
        }
      }

      &.two,
      &.five,
      &.eight {
        img {
          margin: 8.5px 0;
          width: 182px;
          height: auto;
        }
      }

      &.three,
      &.six,
      &.nine {
        img {
        }
      }

      hr {
        width: 270px;
        align-self: center;
        margin: 0;
        border: 1px solid #c4c4c4;
      }

      .card-title {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: normal;
        color: $darkColor;
      }

      small {
        s {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: normal;
          text-align: center;
          text-decoration-line: line-through;
          color: $redColor;
        }
      }

      .card-text {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 28px;
        letter-spacing: -0.05em;
        color: $headingsFontColor;

        span {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 10px;
          text-align: center;
        }
      }

      .discount {
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;
        color: #239a0f;
        margin-right: 22px;
      }

      a .btn {
        padding: 10px 30px;
        background: $redColor;
        border-radius: 50px;
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        text-align: center;
        color: $lightColor;
        text-decoration: none;
        transition: ease-in-out 300ms;
        -webkit-transition: ease-in-out 300ms;
        -moz-transition: ease-in-out 300ms;
        -ms-transition: ease-in-out 300ms;
        -o-transition: ease-in-out 300ms;

        &:hover {
          color: $redColor;
          background: $lightColor;
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
        }
      }
    }

    .card__hover {
      transition: transform 500ms;
      -webkit-transition: transform 500ms;
      -moz-transition: transform 500ms;
      -ms-transition: transform 500ms;
      -o-transition: transform 500ms;

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.15);
        content: "";
        opacity: 0;
        z-index: -1;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;
      }

      &:hover,
      &:focus {
        transform: scale3d(1.01, 1.01, 1);
        -webkit-transform: scale3d(1.01, 1.01, 1);
        -moz-transform: scale3d(1.01, 1.01, 1);
        -ms-transform: scale3d(1.01, 1.01, 1);
        -o-transform: scale3d(1.01, 1.01, 1);

        &::after {
          opacity: 1;
        }
      }
    }
  }

  .btn {
    padding: 10px 32px;
    background: $redColor;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
    border-radius: 50px;
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: normal;
    text-align: center;
    color: $lightColor;
    border: none;
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;

    &:hover {
      color: $redColor;
      background: $lightColor;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }

    &.see-more {
      margin-top: 40px;
    }
  }
}

.cars-card {
  margin-bottom: 40px;

  h2 {
    font-family: $secondaryFont;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 39px;
    letter-spacing: -0.05em;
    color: $headingsFontColor;
    margin: 40px 0;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0 !important;
    margin-left: -1px !important;
  }

  .card {
    background: #000000;
    width: 100%;
    max-width: 580px;
    min-width: 540px;
    height: 168px;
    margin: 5px 0;
    justify-content: center;
    justify-items: center;
    align-self: center;
    padding: 0 !important;
    cursor: pointer;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;

    .work-one {
      box-sizing: border-box;
      background-image: url("~assets/img/car1.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: border-box;
      height: 100%;
      max-height: 168px;
    }

    .work-two {
      background-image: url("~assets/img/car2.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: border-box;
      height: 100%;
    }

    .work-three {
      background-image: url("~assets/img/car3.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-four {
      background-image: url("~assets/img/car4.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-five {
      background-image: url("~assets/img/car5.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-six {
      background-image: url("~assets/img/car6.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-seven {
      background-image: url("~assets/img/car7.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    .work-eight {
      background-image: url("~assets/img/car8.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left;
      background-origin: padding-box;
      height: 100%;
    }

    h4 {
      font-family: $mainFont;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: normal;
      text-align: right;
      letter-spacing: 0.05em;
      color: $lightColor;
      margin-right: 5px;

      span {
        font-family: $mainFont;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;
        text-align: right;
        letter-spacing: 0.05em;
        color: $lightColor;
      }
    }

    img {
      height: 168px;
      margin-left: -1px;
    }
  }

  .card__hover_two {
    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: scale3d(0, 0, 1);
      transition: transform 0.3s ease-out 0s;
      background: rgba(255, 255, 255, 0.1);
      content: "";
      pointer-events: none;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      -ms-border-radius: 20px;
      -o-border-radius: 20px;
    }

    &::before {
      transform-origin: left top;
    }

    &::after {
      transform-origin: right bottom;
    }

    &:hover,
    &:focus {
      &::before,
      &::after {
        transform: scale3d(1, 1, 1);
      }
    }
  }
}

@include mediaMenu {
  .cars-card {
    .card {
      max-width: 580px;
      min-width: 200px;
    }

    h2 {
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 62px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
      text-align: center;
    }
  }
}

@include mediaLg2 {
  .top-grid {
    h1 {
      text-align: center !important;
    }

    .row {
      margin-left: 80px;
      margin-right: 40px;
    }

    a img {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      opacity: 0.9;
      transition: all ease-in-out 300ms;
      -webkit-transition: all ease-in-out 300ms;
      -moz-transition: all ease-in-out 300ms;
      -ms-transition: all ease-in-out 300ms;
      -o-transition: all ease-in-out 300ms;

      &:hover {
        opacity: 1;
        text-decoration: none;
        color: $redColor;
        transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        -ms-transform: scale(1.02);
        -o-transform: scale(1.02);
      }

      &.one {
        width: 249.306666667px !important;
        height: 273.333333333px !important;
        border-radius: 20px 0 0 0;
        -webkit-border-radius: 20px 0 0 0;
        -moz-border-radius: 20px 0 0 0;
        -ms-border-radius: 20px 0 0 0;
        -o-border-radius: 20px 0 0 0;
      }

      &.two {
        width: 520.066666667px !important;
        height: 226.666666667px !important;
        border-radius: 0 20px 0 0;
        -webkit-border-radius: 0 20px 0 0;
        -moz-border-radius: 0 20px 0 0;
        -ms-border-radius: 0 20px 0 0;
        -o-border-radius: 0 20px 0 0;
      }

      &.three {
        width: 249.306666667px !important;
        height: 354.666666667px !important;
      }

      &.four {
        width: 298.88px !important;
        height: 182.666666667px !important;
      }

      &.five {
        width: 217.233333333px !important;
        height: 182.666666667px !important;
      }

      &.six {
        width: 518.733333333px !important;
        height: 212px !important;
      }

      &.seven {
        width: 770.666666667px !important;
        height: 242.666666667px !important;
        border-radius: 0 0 20px 20px;
        -webkit-border-radius: 0 0 20px 20px;
        -moz-border-radius: 0 0 20px 20px;
        -ms-border-radius: 0 0 20px 20px;
        -o-border-radius: 0 0 20px 20px;
      }
    }

    .col-md {
      margin: 0;
      padding: 0;
      margin-top: -1.8rem !important;
      margin-left: -4rem !important;
    }
  }

  .jumbotron {
    margin-right: 0px;

    &.recomendations {
      padding-left: 0px;
      padding-right: 2rem;

      h2 {
        text-align: center !important;
      }

      .item {
        margin-left: 0px;
      }
    }
  }
}

@include mediaLg {
  .top-grid {
    h1 {
      text-align: center !important;
    }

    .row {
      margin-left: 80px;
      margin-right: 40px;
    }

    a img {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      opacity: 0.9;
      transition: all ease-in-out 300ms;
      -webkit-transition: all ease-in-out 300ms;
      -moz-transition: all ease-in-out 300ms;
      -ms-transition: all ease-in-out 300ms;
      -o-transition: all ease-in-out 300ms;

      &:hover {
        opacity: 1;
        text-decoration: none;
        color: $redColor;
        transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        -ms-transform: scale(1.02);
        -o-transform: scale(1.02);
      }

      &.one {
        width: 186.98px !important;
        height: 205px !important;
        border-radius: 20px 0 0 0;
        -webkit-border-radius: 20px 0 0 0;
        -moz-border-radius: 20px 0 0 0;
        -ms-border-radius: 20px 0 0 0;
        -o-border-radius: 20px 0 0 0;
      }

      &.two {
        width: 390.05px !important;
        height: 170px !important;
        border-radius: 0 20px 0 0;
        -webkit-border-radius: 0 20px 0 0;
        -moz-border-radius: 0 20px 0 0;
        -ms-border-radius: 0 20px 0 0;
        -o-border-radius: 0 20px 0 0;
      }

      &.three {
        width: 186.98px !important;
        height: 266px !important;
      }

      &.four {
        width: 224.16px !important;
        height: 137px !important;
      }

      &.five {
        width: 162.925px !important;
        height: 137px !important;
      }

      &.six {
        width: 389.05px !important;
        height: 159px !important;
      }

      &.seven {
        width: 578px !important;
        height: 182px !important;
        border-radius: 0 0 20px 20px;
        -webkit-border-radius: 0 0 20px 20px;
        -moz-border-radius: 0 0 20px 20px;
        -ms-border-radius: 0 0 20px 20px;
        -o-border-radius: 0 0 20px 20px;
      }
    }

    .col-md {
      margin: 0;
      padding: 0;
      margin-top: -1rem !important;
      margin-left: -0.99rem !important;
    }
  }

  .jumbotron {
    margin-right: 0px;

    &.recomendations {
      padding-left: 0px;
      padding-right: 0px;

      h2 {
        text-align: center !important;
      }

      .item {
        margin-left: -12px;
      }
    }
  }
}

@include mediaMd {
  .top-grid {
    a img {
      box-shadow: none !important;
      opacity: 1 !important;
      transition: all ease-in-out 300ms;
      -webkit-transition: all ease-in-out 300ms;
      -moz-transition: all ease-in-out 300ms;
      -ms-transition: all ease-in-out 300ms;
      -o-transition: all ease-in-out 300ms;

      &:hover {
        opacity: 1;
        text-decoration: none;
        color: $redColor;
        transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        -ms-transform: scale(1.02);
        -o-transform: scale(1.02);
      }
    }

    .one,
    .two,
    .three,
    .four,
    .five,
    .six,
    .seven {
      width: 100vw !important;
      height: auto !important;
      margin: 0px 0 !important;
      padding: 5px !important;
    }

    .one {
      border-radius: 20px 20px 0 0 !important;
      -webkit-border-radius: 20px 20px 0 0 !important;
      -moz-border-radius: 20px 20px 0 0 !important;
      -ms-border-radius: 20px 20px 0 0 !important;
      -o-border-radius: 20px 20px 0 0 !important;
    }

    .two {
      border-radius: 0 !important;
      -webkit-border-radius: 0 !important;
      -moz-border-radius: 0 !important;
      -ms-border-radius: 0 !important;
      -o-border-radius: 0 !important;
    }

    h1 {
      text-align: center !important;
      font-size: 62px;
      line-height: 47px;
      letter-spacing: -0.05em;
      margin-bottom: 40px;
    }

    a {
      margin: 0 auto !important;
      padding: 0 !important;

      img {
        margin: 0 auto !important;
        padding: 0 !important;
      }
    }

    .col-md {
      margin: 0 !important;
      padding: 0 !important;

      .four,
      .five,
      .six {
        width: 100vw !important;
        height: auto !important;
        margin: 0px 0 !important;
        padding: 5px !important;
      }

      a {
        margin: 0 auto !important;
        padding: 0 !important;

        img {
          margin: 0 auto !important;
          padding: 0 !important;
        }
      }
    }
  }
}

@include mediaSm {
  .top-grid {
    h1 {
      text-align: center !important;
      font-size: 62px;
      line-height: 47px;
      letter-spacing: -0.05em;
      margin-bottom: 40px;
    }

    a {
      margin: 0 auto !important;
      padding: 0 !important;

      img {
        margin: 0 auto !important;
        padding: 0 !important;
      }
    }

    .col-md {
      margin: 0 auto !important;
      padding: 0 !important;

      a {
        margin: 0 auto !important;
        padding: 0 !important;

        img {
          margin: 0 auto !important;
          padding: 0 !important;
        }
      }
    }
  }

  .recomendations {
    padding-left: 20px;
    padding-right: 0px;

    h2 {
      text-align: center !important;
    }

    .item {
      margin-left: 18px;
    }
  }

  .cars-card {
    margin-bottom: 40px;

    h2 {
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: bold;
      font-size: 80px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
    }

    .card {
      background: transparent;
      border-radius: 20px;

      max-width: 580px;
      height: 168px;
      margin: 5px 0;
      justify-content: center;
      justify-items: center;
      align-self: center;
      padding: 0;
      border: 0;

      h4 {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: normal;
        text-align: center;
        letter-spacing: 0.05em;
        color: $lightColor;
        margin-right: 10px;
        background: $darkColor;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;

        span {
          font-family: $mainFont;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: normal;
          text-align: right;
          letter-spacing: 0.05em;
          color: $lightColor;
        }
      }
    }
  }

  .cars-card {
    .card {
      .work-one {
        box-sizing: border-box;
        background-image: url("~assets/img/1.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: border-box;
        height: 100%;
        max-height: 168px;
      }

      .work-two {
        background-image: url("~assets/img/1(1).png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: border-box;
        height: 100%;
      }

      .work-three {
        background-image: url("~assets/img/1(2).png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-four {
        background-image: url("~assets/img/1(3).png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-five {
        box-sizing: border-box;
        background-image: url("~assets/img/1(4).png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-six {
        background-image: url("~assets/img/1(5).png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-seven {
        background-image: url("~assets/img/1(6).png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }

      .work-eight {
        background-image: url("~assets/img/1(7).png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-origin: padding-box;
        height: 100%;
      }
    }
  }
}

@include mediaXSm {
  .recomendations {
    text-align: center;

    h2 {
      color: $headingsFontColor;
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 50px !important;
      line-height: 47px;
      letter-spacing: -0.05em;
      margin-bottom: 40px;
    }
  }

  .recomendations {
    padding-left: 10px;
    padding-right: 0px;

    h2 {
      text-align: center !important;
    }

    .item {
      margin-left: 10px;
    }
  }

  .cars-card {
    text-align: center;

    h2 {
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 50px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
    }
  }
}

@include mediaXXSm {
  .cars-card {
    text-align: center;

    h2 {
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 39px;
      letter-spacing: -0.05em;
      color: $headingsFontColor;
      margin: 40px 0;
    }
  }

  .recomendations {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;

    h2 {
      color: $headingsFontColor;
      font-family: "Roboto Condensed", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 42px !important;
      line-height: 47px;
      letter-spacing: -0.05em;
      margin-bottom: 40px;
    }

    .item {
      margin-left: 5px;
    }

    .card-deck .card {
      width: 100%;
      max-width: 240px;
      min-width: 240px;
      height: 343px;
      background: $lightColor;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      margin-bottom: 40px;
      justify-items: center;
      margin-left: auto;
      margin-right: auto;

      hr {
        width: 80%;
        align-self: center;
        margin: 0;
        border: 1px solid $borderColor;
      }

      hr {
        width: 80%;
      }

      .card-text {
        font-family: $mainFont;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.05em;
        color: $headingsFontColor;

        span {
          font-family: $mainFont;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 10px;
          text-align: center;
        }
      }

      .btn {
        padding: 10px 28px !important;
        background: $redColor;
        border-radius: 50px;
        font-family: $secondaryFont;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: normal;
        text-align: center;
        color: $lightColor;
        text-decoration: none;
        transition: ease-in-out 300ms;
        -webkit-transition: ease-in-out 300ms;
        -moz-transition: ease-in-out 300ms;
        -ms-transition: ease-in-out 300ms;
        -o-transition: ease-in-out 300ms;

        &:hover {
          color: $redColor;
          background: $lightColor;
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
        }
      }
    }
  }
}
</style>
