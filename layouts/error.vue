<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <picture>
        <source
          srcset="~/assets/imgWebP/404.webp"
          type="image/webp"
        >
        <img
          src="~/assets/img/404.png"
          alt="404 imgage in a house"
          class="img-fluid"
        >
      </picture>

      <div class="title">
        Ой, щось пішло не так!
      </div>
      <p class="description">
        <nuxt-link
          to="/"
          class="error-link nuxt-link-active"
        >
          Повернутися назад
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || `<%= messages.client_error %>`
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>

<style scoped>
.__nuxt-error-page {
  padding: 1rem;
  background: #f7f8fb;
  color: #47494e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.__nuxt-error-page .error {
  max-width: 450px;
}
.__nuxt-error-page .title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  align-items: center;
  text-align: center;

  color: #8b8b8b;
  margin-top: 20px;
  margin-bottom: 8px;
}
.__nuxt-error-page .description {
  color: #7f828b;
  line-height: 21px;
  margin-bottom: 10px;
  margin-top: 40px;
}
.__nuxt-error-page a {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  align-items: center;
  text-align: center;

  padding: 10px 18px;

  color: #ffffff;
  text-decoration: none;

  background: #d41f26;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
}
</style>
