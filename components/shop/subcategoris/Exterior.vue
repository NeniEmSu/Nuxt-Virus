<template>
  <section>
    <div class="sub-categories row">
      <button>
        Средства для химчистки салона
      </button>
      <button>
        Средства для кожи в салоне
      </button>
      <button>
        Средства для пластика в салоне
      </button>
      <button>
        Ароматизаторы, устранители запахов
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
