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
        <div class="col-md-1 mb-3">
          <nuxt-link to="/магазин">
            <img src="~assets/img/chevron-right.png" alt="chevron-right">
          </nuxt-link>
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="main-image col-lg-4">
              <div class="image-showcase col-12 text-center">
                <img
                  :src="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
                  class="mx-auto img-fluid"
                  :alt="product.name"
                >
              </div>
              <div class="small-more-images">
                <div class="row mx-auto">
                  <img
                    :src="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
                    :alt="product.name"
                    class="col-4 mx-auto mt-2 more-images"
                  >
                  <img
                    :src="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
                    :alt="product.name"
                    class="col-4 mx-auto mt-2 more-images"
                  >
                  <img
                    :src="`${imageApiUrl}&src=${product.Image.path}&w=200&h=200&f[brighten]=0&o=true`"
                    :alt="product.name"
                    class="col-4 mx-auto mt-2 more-images"
                  >
                </div>
              </div>
            </div>

            <div class="main-text col-lg-8 text-center text-md-left">
              <h1 class="details-page-header">{{product.name}}</h1>
              <p class="my-lg-5">{{ product.Description }}</p>
              <div class="row">
                <div class="col-md-6 text-center text-md-left my-auto">
                  <small class="mb-2 detail-discount-cost">
                    <s>2975 грн</s>
                  </small>
                  <p id="store-item-price" class="detail-cost">
                    {{product.Price}}
                    <span>ГРН</span>
                  </p>
                </div>
                <div class="col-md-6 text-center mt-lg-n3">
                  <small class="detail-discount">В наявності</small>
                  <br>
                  <a
                    href="#"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 mt-2">
          <div class="cart-icon text-center mx-auto">
            <modalComponent :cart="cart"/>
          </div>
        </div>
      </div>

      <hr style="border: 1px solid #C4C4C4; margin: 40px 0; width: 100%;">

      <h2 class="text-center my-2">Схожі товари та пропозиції</h2>

      <div class="text-center mx-auto p-0">
        <cardsSlider/>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
      <script
        id="snipcart"
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        data-api-key="ZThkMTZkM2EtNzBlNC00ZjQ2LWI2YTEtMjE0ZTE4YTk0OTkwNjM2OTYwNjIxMDU5MDExMDc4"
      ></script>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { product: payload };
    } else {
      let { data } = await app.$axios.post(
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

      if (!data.entries) {
        return error({ message: "404 Page not found", statusCode: 404 });
      }

      return { product: data.entries[0] };
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

  computed: {},
  mounted() {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
  }
};
</script>

<style lang="scss" scoped>
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

.detail-discount {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: normal;
  text-align: center;

  color: #239a0f;
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
</style>

