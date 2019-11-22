<template>
  <section>
    <div class="sub-categories row">
      <button>
        Полироли/антицарапины
      </button>
      <button>
        Быстрый блеск/полимеры
      </button>
      <button>
        Твердые воски
      </button>
      <button>
        Глейзы
      </button>
      <button>
        Силанты
      </button>
      <button>
        Нанокерамика/Жидкое стекло
      </button>
      <button>
        Защитные покрытия для пластика
      </button>
      <button>
        Защитные покрытия для стекол
      </button>
      <button>
        Защитные покрытия для кожи
      </button>
      <button>
        Защитные покрытия для ткани
      </button>
      <button>
        Защитные покрытия для колёс
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
