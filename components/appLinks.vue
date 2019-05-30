<template>
  <div class="menu">
    <ul class="nav-list">
      <nuxt-link v-for="(item, i) in items" :key="i" :to="item.to" tag="li" class="nav-item">
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

<style lang="scss" scoped>

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
  display: inline-flex;
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

.nuxt-link-exact-active a {
  border: 1px solid #d41f26;
  box-sizing: border-box;
  border-radius: 50px;
}

@include mediaMenu {
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
    display: flex;
  }

  .menu ul li {
    a {
      text-decoration: none;
      color: $darkColor;
      font-size: 18px;
      line-height: 21px;
      padding: 10px 0 10px 30px;
      font-family: $secondaryFont;
      font-style: normal;
      font-weight: normal;
      text-align: center;
      border: none !important;
    }

    &.active {
      box-sizing: border-box;
      color: $redColor;
    }

    &:hover {
      text-decoration: none;
      color: $redColor;
    }

    &.nuxt-link-exact-active a {
      border: none;
      box-sizing: border-box;
      border-radius: 0px;
      color: $redColor;
    }
  }
}
</style>
