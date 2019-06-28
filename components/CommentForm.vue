<template>
  <form @submit="checkForm" method="post" :id="parent_id ? `reply-${parent_id}` : ''">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            placeholder="Твоє ім'я"
            class="col-12 mx-auto p-2"
          >
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Ваша електронна адреса"
            class="col-12 mx-auto p-2"
          >
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group mx-auto">
        <textarea
          v-model="comment"
          name="comment"
          rows="6"
          :placeholder="parent_id ? `Відповідати на ${parent_name}...` : 'Додати коментар'"
          class="col-12 mx-auto p-2"
        ></textarea>
      </div>
    </div>
    <div class>
      <div class="form-group text-left">
        <input v-model="notify_replies" type="checkbox">
        <span class="text-center">Повідомляти мене, коли хто-небудь відповість</span>
      </div>
    </div>

    <input
      type="text"
      name="website"
      v-model="website"
      class="hidden opacity-0 z-0"
      hidden
      tabindex="-1"
      autocomplete="off"
    >

    <div class="mb-4">
      <div class="form-group">
        <input v-show="loading === false" id="btn" type="submit" value="Додати коментар">
        <button
          v-show="loading ===false"
          type="loading"
          aria-label="loading"
          name="loading"
          id="btn-loading"
          class="btn-loading"
        >
          Вантаження
          <font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin"/>
        </button>
      </div>
    </div>
    <div v-if="errors.length" class="mb-4 text-danger">
      <b>Виправте такі помилки:</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div v-if="success" class="text-success mb-4">
      <b>Ваш коментар зараз очікує модерації</b>
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "commentForm",
  props: {
    post_id: String,
    parent_id: String,
    parent_name: String
  },

  data: function() {
    return {
      errors: [],
      name: null,
      email: null,
      comment: null,
      notify_replies: false,
      website: null,
      loading: false,
      success: false
    };
  },

  methods: {
    checkForm: function(e) {
      this.errors = [];
      this.success = false;

      if (!this.name) {
        this.errors.push("Name required");
      }
      if (!this.email) {
        this.errors.push("Email required");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required");
      }
      if (!this.comment) {
        this.errors.push("Comment required");
      }

      if (!this.errors.length) {
        this.submitForm();
      }

      e.preventDefault();
    },

    submitForm: function() {
      this.loading = true;

      axios
        .post(
          process.env.commentUrl,
          JSON.stringify({
            form: {
              post_id: this.post_id,
              parent_id: this.parent_id,
              name: this.name,
              email: this.email,
              comment: this.comment,
              notify_replies: this.notify_replies,
              website: this.website //honeypot field
            }
          }),
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then(({ data }) => {
          this.loading = false;

          if (data.error) {
            this.errors.push(data.error);
          } else if (data.name && data.email && data.comment) {
            this.name = this.email = this.comment = null;
            this.success = true;
          }
        })
        .catch(error => {
          this.loading = false;

          this.errors.push("Сталася помилка. Повторіть спробу пізніше");
        });
    },

    validEmail: function(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style lang="scss" scoped>
input#name,
input#email {
  height: 40px;
  width: 100%;
  border: 2px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 50px;
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: normal;
  color: $headingsFontColor;

  &:focus {
    border: 2px solid $redColor;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
  }
}

textarea {
  border: 2px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 20px;
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: normal;
  color: $headingsFontColor;

  &:focus {
    border: 2px solid $redColor;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
  }
}

input#btn {
  padding: 10px 35px;
  background: $redColor;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;
  text-align: center;
  color: $lightColor;
  border: 0;
}

#btn-loading {
  padding: 10px 35px;
  background: $redColor;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;
  text-align: center;
  color: $lightColor;
  border: 0;
  cursor: wait;
  opacity: 0.65;
}
</style>
