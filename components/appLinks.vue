<template>
  <div class="menu">
    <ul class="nav-list">
      <nuxt-link
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        tag="li"
        class="nav-item"
        @click="$store.dispatch('nav/toggleSidebar')"
      >
        <a>{{ item.title }}</a>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      items: [
        {
          title: 'Головна',
          to: '/'
        },
        {
          title: 'Послуги і ціни',
          to: '/Послуги'
        },
        {
          title: 'Акції',
          to: '/акції'
        },
        {
          title: 'Магазин',
          to: '/магазин'
        },
        {
          title: 'Блог',
          to: '/блог'
        },
        {
          title: 'Про нас',
          to: '/пронас'
        },
        {
          title: 'Контакти',
          to: '/контакти'
        }
      ]
    }
  },
  computed: {
    toggleSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    }
  }
}
</script>

<style lang="scss" scope="scoped">
@import '~assets/scss/config.scss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Condensed:400,700|Roboto:400,500,700,900');
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url('~assets/img/Хедер.png');
  background-size: cover;
  width: 100%;
  position: absolute;
  height: 140px;
  left: 0px;
  top: 0px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);

  a {
    text-decoration: none;
    transition: ease-in-out 300ms;
    -webkit-transition: ease-in-out 300ms;
    -moz-transition: ease-in-out 300ms;
    -ms-transition: ease-in-out 300ms;
    -o-transition: ease-in-out 300ms;

    &:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
  }
}

.menu {
  margin-left: 0;
  position: relative;
  line-height: 90px;
}

.menu ul {
  list-style: none;
  background: transparent;
  overflow: hidden;
  padding: 0;
  text-align: right;
  margin: 0;
}

.menu ul li {
  display: inline-block;
}

.menu ul li a {
  text-decoration: none;
  color: $lightColor;
  font-size: 16px;
  padding: 9px 32px;
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  text-align: center;

  &.active {
    border: 1px solid #d41f26;
    box-sizing: border-box;
    border-radius: 50px;
  }

  &:hover {
    border: 1px solid #d41f26;
    box-sizing: border-box;
    border-radius: 50px;
    text-decoration: none;
    color: $redColor;
  }
}

.drawer-toggle {
  position: relative;
  z-index: 99;
  line-height: 60px;
  text-align: right;
  box-sizing: border-box;
  padding: 15px 24px;
  cursor: pointer;
  color: $redColor;
  display: none;
}

.nuxt-link-exact-active a {
  border: 1px solid #d41f26;
  box-sizing: border-box;
  border-radius: 50px;
}

@include mediaMenu {
  .app-links .menu {
    display: none;
  }
}
</style>
