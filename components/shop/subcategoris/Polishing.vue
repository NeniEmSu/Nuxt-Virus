<template>
  <section>
    <div class="sub-categories row">
      <button>
        Круги для полірування
      </button>
      <button>
        Пасти для полірування
      </button>
      <button>
        Машини для полірування
      </button>
      <button>
        Аксесуари для полірування
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
