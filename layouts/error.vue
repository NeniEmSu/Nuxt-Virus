<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        fill="#DBE1EC"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        ></path>
      </svg>-->
      <img src="~assets/img/404.png" alt="404 imgage in a house" class="img-fluid">
      <div class="title">Ой, щось пішло не так!</div>
      <p class="description">
        <nuxt-link to="/" class="error-link nuxt-link-active">Повернутися назад</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtError",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        }
      ]
    };
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || `<%= messages.client_error %>`;
    }
  }
};
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