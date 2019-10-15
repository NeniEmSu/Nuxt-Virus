<template>
  <section>
    <div class="sub-categories row">
      <button>
        Для наружного пластика и резины
      </button>
      <button>
        Очистители двигателя
      </button>
      <button>
        Очистители и обезжириватели
      </button>
      <button>
        Очистители кузова и хрома
      </button>
      <button>
        Средства для колесных дисков
      </button>
      <button>
        Средства для шин
      </button>
      <button>
        Очистители стекол
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

    &:hover {
      color: $redColor;
    }
  }
}
</style>
