<template>
  <section class="container">
    <nav class="container mb-n4 p-0 desktop-only" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <nuxt-link to="/">Головна</nuxt-link>
        </li>
        <li class="breadcrumb-item">
          <nuxt-link to="/блог">Блог</nuxt-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ post.title }}</li>
      </ol>
    </nav>
    <article class="my-5">
      <div class="text-grey-dark font-bold text-sm tracking-wide">
        <p>{{ post._created | toDate }}</p>
        <span class="ml-1 text-xs">•</span>
        <nuxt-link
          v-for="(tag, key) in post.tags"
          :key="key"
          :to="'/category/'+tag"
        >{{ tag }}&nbsp;|&nbsp;</nuxt-link>
        <span class="mx-1 text-xs">•</span>
        <a href="#" v-scroll-to="'#comments'" class="text-dark">
          {{ post.comments ? post.comments.length : 0 }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="12"
            height="12"
            preserveAspectRatio="xMinYMin"
            class="text-grey-dark fill-current"
          >
            <path
              d="M3 .565h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.57v-4.006a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3z"
            ></path>
          </svg>
        </a>
      </div>
      <h1 class="mt-2">{{ post.title }}</h1>
      <div
        class="mt-4 markdown"
        v-html="$options.filters.parseMd(post.excerpt + '\n' + post.content)"
      ></div>

      <div class="mt-5 text-center text-secondary">
        <nuxt-link to="/блог" class="pr-2 text-secondary">Знайти більше повідомлень у блогах!</nuxt-link>
      </div>
      <div id="comments" class="mt-8 mb-4 pt-3 border-t-2">
        <h2 class="mb-2">Comments</h2>
        <comment-form class="border-b-2" :post_id="post._id"/>
      </div>

      <ul class="list-reset">
        <comment
          v-for="comment in comments"
          :key="comment._id"
          :post_id="post._id"
          :all="post.comments"
          :comment="comment"
        />
      </ul>
    </article>
  </section>
</template>

<script>
import CommentForm from "~/components/CommentForm.vue";
import Comment from "~/components/Comment.vue";

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

      if (!data.entries) {
        return error({ message: "404 Page not found", statusCode: 404 });
      }

      return { post: data.entries[0] };
    }
  },

  components: {
    CommentForm,
    Comment
  },

  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: "description", name: "description", content: this.post.excerpt }
      ]
    };
  },

  computed: {
    comments: function() {
      return this.post.comments
        ? this.post.comments.filter(comment => !comment.parent_id)
        : [];
    }
  },
  mounted() {
    if (process.client) {
      this.$scrollTo("#top-contact", 0, { force: true });
    }
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

