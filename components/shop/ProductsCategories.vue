<template>
  <div>
    <div class="categories row">
      <button
        class="col-2"
        :class="{ active: currentProductsDisplayed === 1}"
        @click="Show1"
      >
        Зовнішня мийка
      </button>
      <button
        class="col-2"
        :class="{ active: currentProductsDisplayed === 2}"
        @click="Show2"
      >
        Екстер’єр
      </button>
      <button
        class="col-2"
        :class="{ active: currentProductsDisplayed === 3}"
        @click="Show3"
      >
        Інтер’єр
      </button>
      <button
        class="col-2"
        :class="{ active: currentProductsDisplayed === 4}"
        @click="Show4"
      >
        Полірування
      </button>
      <button
        class="col-2"
        :class="{ active: currentProductsDisplayed === 5}"
        @click="Show5"
      >
        Захист
      </button>
      <button
        class="col-2"
        :class="{ active: currentProductsDisplayed === 6}"
        @click="Show6"
      >
        Аксесуари
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentProductsDisplayed: {
      type: Number,
      default: 1,
      required: true
    }
  },
  methods: {
    Show1 () {
      this.$emit('changedView', 1)
    },
    Show2 () {
      this.$emit('changedView', 2)
    },
    Show3 () {
      this.$emit('changedView', 3)
    },
    Show4 () {
      this.$emit('changedView', 4)
    },
    Show5 () {
      this.$emit('changedView', 5)
    },
    Show6 () {
      this.$emit('changedView', 6)
    }
  }

}
</script>

<style lang="scss" scoped>
.categories {
  margin-bottom: 30px;

  button {
    height: 80px;
    background: $lightColor;
    border: none;
    outline: none;

    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;

    color: $darkColor;

    &:hover:enabled {
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      color: $redColor;
    }

    &.active {
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      color: $redColor;
    }
  }
}

.sub-categories {
  margin-bottom: 15px;

  button {
    padding: 11px 6px;
    background: #e5e5e5;
    border-radius: 50px;
    border: none;
    outline: none;
    margin: auto 0 15px 15px;

    &:hover:enabled {
      color: $redColor;
    }
  }
}
</style>
