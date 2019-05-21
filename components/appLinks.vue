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
          title: "Головна",
          to: "/"
        },
        {
          title: "Послуги і ціни",
          to: "/Послуги"
        },
        {
          title: "Акції",
          to: "/акції"
        },
        {
          title: "Магазин",
          to: "/магазин"
        },
        {
          title: "Блог",
          to: "/блог"
        },
        {
          title: "Про нас",
          to: "/пронас"
        },
        {
          title: "Контакти",
          to: "/контакти"
        }
      ]
    };
  },
  computed: {
    toggleSidebar() {
      return this.$store.getters["nav/toggleSidebar"];
    }
  }
};
</script>

<style lang="scss" scope="scoped">
@import "~assets/scss/config.scss";
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
