<template>
  <section class="container">
    <nav class="container mb-n4 p-0 desktop-only" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">Головна</nuxt-link>
        </li>
        <li class="breadcrumb-item">
          <nuxt-link to="/магазин">магазин</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
      </ol>
    </nav>
    <div class="container pt-5">
      <div class="row mx-auto">
        <div class="col-lg-1 mb-3 desktop-only">
          <nuxt-link to="/магазин">
            <img src="~assets/img/chevron-right.png" alt="chevron-right" />
          </nuxt-link>
        </div>
        <div class="col-12 col-xl-10">
          <div class="row">
            <div class="main-image col-4 p-0">
              <div class="image-showcase col-12 text-center p-0">
                <img
                  :src="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
                  class="mx-auto img-fluid"
                  :alt="product.name"
                />
              </div>
              <div class="small-more-images">
                <div class="row mx-auto">
                  <!-- <img
                    :v-for="galimg in product.Gallery"
                    :src="`${imageApiUrl}&src=${product.Gallery[0 || 1 || 2].path}&w=200&h=200&f[brighten]=0&o=true`"
                    :alt="product.Gallery[0 || 1 || 2].meta.title"
                    :title="product.Gallery[0 || 1 || 2].meta.title"
                    class="col-4 mx-auto mt-2 more-images"
                  />-->
                  <img
                    :src="`${imageApiUrl}&src=${product.Gallery[0].path}&w=200&h=200&f[brighten]=0&o=true`"
                    :alt="product.Gallery[0].meta.title"
                    :title="product.Gallery[0].meta.title"
                    class="col-4 mx-auto mt-2 more-images"
                  />
                  <img
                    :src="`${imageApiUrl}&src=${product.Gallery[1].path}&w=200&h=200&f[brighten]=0&o=true`"
                    :alt="product.Gallery[1].meta.title"
                    :title="product.Gallery[1].meta.title"
                    class="col-4 mx-auto mt-2 more-images"
                  />
                  <img
                    :src="`${imageApiUrl}&src=${product.Gallery[2].path}&w=200&h=200&f[brighten]=0&o=true`"
                    :alt="product.Gallery[2].meta.title"
                    :title="product.Gallery[2].meta.title"
                    class="col-4 mx-auto mt-2 more-images"
                  />
                </div>
              </div>
            </div>

            <div class="main-text col-8 text-center text-md-left">
              <h1 class="details-page-header">{{product.name}}</h1>
              <p class="my-lg-5 desktop-tablet-only">{{ product.Description }}</p>
              <div class="row">
                <div class="col-6 text-center text-md-left my-auto pr-0">
                  <small class="mb-2 detail-discount-cost">
                    <s>2975 грн</s>
                  </small>
                  <p id="store-item-price" class="detail-cost">
                    {{product.Price}}
                    <span>ГРН</span>
                  </p>
                </div>
                <div class="col-6 text-center mt-lg-n3 p-0">
                  <small v-show="product.Stock === true" class="inStock">В наявності</small>
                  <small v-show="product.Stock === false" class="notInStock">Не в наявності</small>
                  <br />
                  <button
                    v-show="product.Stock === true"
                    class="btn add-to-cart snipcart-add-item card-footer-item"
                    data-item-url="/"
                    :data-item-id="product._id"
                    :data-item-name="product.name"
                    :data-item-price="product.Price"
                    :data-item-image="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
                    :data-item-description="product.Overview"
                    :data-item-shippable="false"
                  >
                    Додати
                    до корзини +
                  </button>
                  <button
                    v-show="product.Stock === false"
                    class="btn add-to-cart card-footer-item"
                    style="cursor: not-allowed;"
                  >
                    Додати
                    до корзини +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1 mt-2 desktop-only">
          <div class="cart-icon text-center mx-auto">
            <modalComponent :cart="cart" />
          </div>
        </div>
      </div>

      <p class="mt-3 sm-xsm-xxsm-only">{{ product.Description }}</p>

      <hr style="border: 1px solid #C4C4C4; margin: 40px 0; width: 100%;" />

      <h2 class="text-center my-2 relatedProducts">Схожі товари та пропозиції</h2>

      <no-ssr>
        <carousel
          :autoplay="true"
          :nav="false"
          :items="4"
          :lazyLoad="true"
          :v-lazy="true"
          :loop="true"
          :mouseDrag="true"
          :touchDrag="true"
          :autoplayHoverPause="true"
          :responsive="{0:{items:1,nav:false},350:{items:2,nav:false},550:{items:3,nav:false},767:{items:2,nav:false},992:{items:3,nav:false},1200:{items:4,nav:false}}"
        >
          <card
            class="mb-5 mx-auto"
            v-for="product in products"
            :key="product._id"
            :name="product.name"
            :summary="product.Overview"
            :price="product.Price"
            :image="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
            :link="'/магазин/'+product.name_slug"
            :stock="product.Stock"
          />
        </carousel>
      </no-ssr>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script
        id="snipcart"
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        data-api-key="ZThkMTZkM2EtNzBlNC00ZjQ2LWI2YTEtMjE0ZTE4YTk0OTkwNjM2OTYwNjIxMDU5MDExMDc4"
      ></script>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { product: payload };
    } else {
      const product = await axios.post(
        process.env.PRODUCT_URL,
        JSON.stringify({
          filter: { Published: true, name_slug: params.name_slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      const products = await axios.get(
        process.env.PRODUCT_URL,
        JSON.stringify({
          filter: { Published: true },
          limit: 4,
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (!product.data.entries || !products.data.entries) {
        return error({ message: "404 Page not found", statusCode: 404 });
      }

      return {
        product: product.data.entries[0],
        products: products.data.entries
      };
    }
  },

  data() {
    return {
      cart: 0,
      imageApiUrl: process.env.IMAGE_URL
    };
  },

  head() {
    return {
      title: this.product.name,
      titleTemplate: "%s! - Virus",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.product.Overview
        }
      ]
    };
  },

  mounted() {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
.sm-xsm-xxsm-only {
  display: none;
}

h1.details-page-header {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: normal;
  margin-top: 10px;

  color: #000000;
}

.image-showcase {
  margin-top: 10px;
  margin-bottom: 22px;
}

.image-showcase img {
  background: url("~assets/img/86.jpg");
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
}

.more-images {
  max-height: 73px;
  min-height: 73px;
  height: 100%;
  max-width: 73px;
  min-width: 73px;
  margin-top: 4px;
  width: 100%;
  object-fit: scale-down;
  object-position: center;
  background: url("~assets/img/86.jpg");
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}

.detail-cost {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 38px;
  letter-spacing: -0.05em;

  color: #8b8b8b;
}

.detail-discount-cost {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;
  text-align: center;
  text-decoration-line: line-through;

  color: #d7000b;
}

.inStock {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: normal;
  text-align: center;

  color: #239a0f;
}

.notInStock {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: normal;
  text-align: center;

  color: $redColor;
}

.btn.add-to-cart {
  padding: 12px 36px;
  background: #d41f26;
  border-radius: 50px;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: normal;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);

  margin-top: 5px;
}

.btn:hover {
  color: #d41f26;
  background: #ffffff;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.relatedProducts {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  align-items: center;

  color: #8b8b8b;
}

@include mediaMenu {
  .desktop-only,
  .sm-xsm-xxsm-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .more-images {
    max-height: 63px;
    min-height: 63px;
    height: 100%;
    max-width: 63px;
    min-width: 63px;
    margin-top: 4px;
    width: 100%;
    object-fit: scale-down;
    object-position: center;
    background: url("~assets/img/86.jpg");
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }
}

@include mediaMd {
  .desktop-only,
  .desktop-tablet-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .more-images {
    max-height: 40px;
    min-height: 40px;
    height: 100%;
    max-width: 40px;
    min-width: 40px;
    margin-top: 4px;
    width: 100%;
    object-fit: scale-down;
    object-position: center;

    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }
}

@include mediaSm {
  .desktop-only {
    display: none;
  }

  .mobile-only,
  .sm-xsm-xxsm-only {
    display: block;
  }

  h1.details-page-header {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin-top: 0px;

    color: #000000;
  }

  .image-showcase {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .image-showcase img {
    min-height: 100px;
    max-height: 100px;
    height: 100%;
    min-width: 100px;
    max-width: 100px;
    width: 100%;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #8b8b8b;
  }

  .more-images {
    display: none;
  }

  .detail-cost {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 93.75%;
    letter-spacing: -0.05em;

    color: #8b8b8b;
    margin-bottom: -10px;
  }

  .detail-discount-cost {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-decoration-line: line-through;

    color: #d7000b;
    padding-top: 25px;
  }

  .inStock {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #239a0f;
  }

  .notInStock {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: $redColor;
  }

  .btn.add-to-cart {
    padding: 7px 4px;
    background: #d41f26;
    border-radius: 50px;
    font-family: "Roboto Condensed", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);

    margin-top: 0px;
  }

  .more-images {
    display: none;
  }

  .relatedProducts {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    align-items: center;

    color: #8b8b8b;
  }
}

@include mediaXXXSm {
  .desktop-only {
    display: none;
  }

  .mobile-only,
  .sm-xsm-xxsm-only {
    display: block;
  }

  h1.details-page-header {
    font-size: 14px;
    line-height: 16px;
    margin-top: 0px;

    color: #000000;
  }

  .image-showcase {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .image-showcase img {
    min-height: 90px;
    max-height: 90px;
    height: 100%;
    min-width: 90px;
    max-width: 90px;
    width: 100%;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  .more-images {
    display: none;
  }

  .detail-cost {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 93.75%;
    letter-spacing: -0.05em;

    color: #8b8b8b;
    margin-bottom: -10px;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #8b8b8b;
  }

  .detail-discount-cost {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    text-decoration-line: line-through;

    color: #d7000b;
    padding-top: 25px;
  }

  .inStock {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    text-align: center;

    color: #239a0f;
  }

  .notInStock {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    text-align: center;

    color: $redColor;
  }

  .btn.add-to-cart {
    padding: 2px 1px;
    background: #d41f26;
    border-radius: 50px;
    font-family: "Roboto Condensed", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 12px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);

    margin-top: 0px;
  }

  .more-images {
    display: none;
  }
}
</style>

