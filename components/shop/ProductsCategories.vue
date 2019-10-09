<template>
  <div>
    <div class="categories row">
      <button class="col-2 active">
        Зовнішня мийка
      </button>
      <button class="col-2">
        Екстер’єр
      </button>
      <button class="col-2">
        Інтер’єр
      </button>
      <button class="col-2">
        Полірування
      </button>
      <button class="col-2">
        Захист
      </button>
      <button class="col-2">
        Аксесуари
      </button>
    </div>

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
  </div>
</template>

<script>
export default {

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

    &:hover {
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
  margin-bottom: 30px;

  button {
    padding: 11px 6px;
    background: #e5e5e5;
    border-radius: 50px;
    border: none;
    outline: none;
    margin: auto 0 auto 15px;

    &:hover {
      color: $redColor;
    }
  }
}
</style>
