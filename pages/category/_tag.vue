<template>
  <section class="container">
    <div class="my-5">
      <h1 class="mb-3">Posts tagged with "{{ category }}"</h1>
      <ul class="flex flex-col w-full p-0">
        <li class="mb-6 w-full list-reset" v-for="(post, key) in posts" :key="key">
          <div class="text-grey-dark font-bold text-sm tracking-wide">
            <nuxt-link
              v-for="(tag, key) in post.tags"
              :key="key"
              :to="'/category/'+tag"
            >{{ tag }}&nbsp;|&nbsp;</nuxt-link>
          </div>
          <p>{{ post._created | toDate }}</p>

          <nuxt-link :to="'/'+post.title_slug" class="no-underline">
            <h2 class="my-2 text-grey-darkest text-lg lg:text-xl">{{ post.title }}</h2>
          </nuxt-link>

          <div class="page-content md:block text-base mb-2" v-html="post.excerpt"></div>
          <nuxt-link class="text-info" :to="'/'+post.title_slug">Read more</nuxt-link>
          <hr>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
export default {
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { posts: payload, category: params.tag };
    } else {
      let { data } = await app.$axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true, tags: { $has: params.tag } },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (!data.entries[0]) {
        return error({ message: "404 Page not found", statusCode: 404 });
      }

      return { posts: data.entries, category: params.tag };
    }
  },
  head() {
    return {
      title: `Повідомлення з тегами ${this.category}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Усі публікації в блогах класифікуються як ${this.category}.`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

hr {
  border: 1px solid $headingsFontColor;
}
</style>

