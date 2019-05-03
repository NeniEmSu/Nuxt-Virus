<template>
  <div class="jumbotron">
    <div class="container mx-auto contact">
      <div class="card p-5">
        <form class="text-right" method="POST" action="includes/contactForm.inc.php">
          <h3 class="text-left px-0">
            <span class="red">
              ДІЗНАТИСЯ ВАРТІСТЬ
              ДЕТЕЙЛІНГА
            </span>
            <br>ДЛЯ ВАШОГО АВТОМОБІЛЯ
          </h3>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label hidden for="carModel">Введіть модель авто</label>
                <input
                  type="text"
                  id="carModel"
                  name="carModel"
                  class="form-control mx-auto"
                  aria-describedby="carModel"
                  placeholder="Введіть модель авто"
                >
              </div>
              <div class="form-group">
                <label hidden for="typeOfWork">Оберіть тип робіт</label>
                <select id="typeOfWork" aria-describedby="typeOfWork" class="form-control mx-auto">
                  <option>Оберіть тип робіт</option>
                  <option>Оберіть тип робіт</option>
                  <option>Оберіть тип робіт</option>
                  <option>Оберіть тип робіт</option>
                </select>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label hidden for="name">Ім’я</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control mx-auto"
                  aria-describedby="name"
                  placeholder="Ім’я*"
                >
              </div>
              <div class="form-group">
                <label hidden for="phone">Телефон</label>
                <input
                  type="number"
                  id="phone"
                  aria-describedby="phone"
                  name="phone"
                  class="form-control mx-auto"
                  placeholder="Телефон*"
                >
              </div>

              <button type="submit" name="submit" class="contact-btn">ВІДПРАВИТИ</button>
            </div>
          </div>
          <p class="text-left col-12 w-md-50 px-0">
            Відправте запит, і наш
            менеджер
            зв’яжеться з вами
            найближчим
            часом
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
