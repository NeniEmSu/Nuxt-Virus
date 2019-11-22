<template>
  <section>
    <div class="sub-categories row">
      <button>
        Протирочные материалы
      </button>
      <button>
        Распылители, триггеры, пенники
      </button>
      <button>
        Ведра для мойки
      </button>
      <button>
        Щетки, аппликаторы, кисти для интерьера
      </button>
      <button>
        Мочалки, скребки, щётки для экстерьера
      </button>
      <button>
        Мебель для детейлинга
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
