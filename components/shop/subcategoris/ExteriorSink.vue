<template>
  <section>
    <div class="sub-categories row">
      <button>
        Предварительная мойка
      </button>
      <button>
        Активная пена
      </button>
      <button>
        Шампуни для ручной мойки
      </button>
      <button>
        Ускорители сушки (воски)
      </button>
      <button>
        Средства для Наномойки
      </button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
