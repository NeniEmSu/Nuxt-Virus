<template>
  <section class="container">
    <nav
      class="container mb-n4 p-0 desktop-only"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">
            Головна
          </nuxt-link>
        </li>
        <li class="breadcrumb-item">
          <nuxt-link to="/blog">
            Блог
          </nuxt-link>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >
          {{ post.title }}
        </li>
      </ol>
    </nav>
    <article class="py-5">
      <div class="text-grey-dark font-bold text-sm tracking-wide">
        <p class="row">
          <span class="mx-auto  col-md-3">Опубліковано: {{ post._created | toDate }}</span> <br>
          <span
            v-show="post._modified !== post._created"
            class="mx-auto col-md-3"
          >Оновлено: {{ post._modified | toDate }}</span> <br>
          <span class=" mx-auto col-md-3 ">Теги:
            <nuxt-link
              v-for="tag in post.tags"
              :key="tag"
              :to="'/blog/category/' + tag"
              class="text-capitalize text-link"
            >
              {{ `${tag}` }}&nbsp;&nbsp;
            </nuxt-link>
          </span>
        </p>
      </div>
      <h1 class="mt-2">
        {{ post.title }}
      </h1>

      <div class="">
        {{ post.excerpt }}
      </div>
      <style>
        li {
        margin-left: 20px;
        }

        ol {
        margin-left: 0px;
        }
      </style>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="post.content" />
      <div class="mt-5 text-center">
        <nuxt-link
          to="/blog"
          class="more-blogs"
        >
          Знайти більше повідомлень у блогах!
        </nuxt-link>
      </div>

      <div class="comments mt-5">
        <vue-disqus
          shortname="https-beta-virus-te-ua"
          :identifier="post._id"
        />
      </div>
    </article>
  </section>
</template>

<script>

export default {
  components: {
  },

  computed: {
    comments () {
      return this.post.comments
        ? this.post.comments.filter(comment => !comment.parent_id)
        : []
    }
  },
  async asyncData ({ app, params, error, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      const { data } = await app.$axios.post(
        'https://admin.virus.te.ua/api/collections/get/posts?token=9fc49d5af4dda3c961d71b489540a4&rspc=1',
        JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )

      if (!data.entries) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }

      return { post: data.entries[0] }
    }
  },

  head () {
    return {
      title: this.post.title.slice(0, 60),
      meta: [
        { hid: 'description', name: 'description', content: `${this.post.title} - ${this.post.excerpt}`.slice(0, 320) }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.more-blogs {
  display: block;
  max-width: 450px;
  padding: 10px 32px;
  margin: auto;
  background: $redColor;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  font-family: $secondaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: normal;
  text-align: center;
  color: $lightColor;
  border: 0;
  text-decoration: none;
  transition: all ease-in-out 500ms;
  -webkit-transition: all ease-in-out 500ms;
  -moz-transition: all ease-in-out 500ms;
  -ms-transition: all ease-in-out 500ms;
  -o-transition: all ease-in-out 500ms;

  &:hover {
    color: $redColor;
    background: $lightColor;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
}

@include mediaMenu {
  .desktop-only {
    display: none;
  }
}
</style>
