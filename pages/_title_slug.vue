<template>
  <section class="container">
    <nav class="container mb-n4 p-0 desktop-only" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">Головна</nuxt-link>
        </li>
        <li class="breadcrumb-item">
          <a href="/блог">Блог</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ post.title }}</li>
      </ol>
    </nav>
    <article class="my-5">
      <div class="text-grey-dark font-bold text-sm tracking-wide">
        <p>{{ post._created | toDate }}</p>
        <a
          v-for="(tag, key) in post.tags"
          :key="key"
          :href="'/category/'+tag"
        >{{ tag }}&nbsp;|&nbsp;</a>
      </div>
      <h1 class="mt-2">{{ post.title }}</h1>
      <div
        class="mt-4 markdown"
        v-html="$options.filters.parseMd(post.excerpt + '\n' + post.content)"
      ></div>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { post: payload };
    } else {
      let { data } = await app.$axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
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

      return { post: data.entries[0] };
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: "description", name: "description", content: this.post.excerpt }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@include mediaMenu {
  .desktop-only {
    display: none;
  }
}
</style>

