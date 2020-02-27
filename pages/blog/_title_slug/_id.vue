
<template>
  <section
    v-if="!$apollo.queries.singlePost.loading"
    class="container"
  >
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
          {{ singlePost[0].title }}
        </li>
      </ol>
    </nav>
    <article class="py-5">
      <div class="text-grey-dark font-bold text-sm tracking-wide">
        <p class="row">
          <span class="mx-auto  col-md-3">Опубліковано: {{ singlePost[0]._created | toDate }}</span> <br>
          <span
            v-show=" singlePost[0]._modified !== singlePost[0]._created"
            class="mx-auto col-md-3"
          >Оновлено: {{ singlePost[0]._modified | toDate }}</span> <br>
          <span class=" mx-auto col-md-3 tags">Теги:
            <p
              v-for="(tag, i) in singlePost[0].tags"
              :key="tag"
              class="text-capitalize text-link tag"
            >
              {{ `${tag}` }}&nbsp;<span v-if="i !== singlePost[0].tags.length - 1">|</span>&nbsp;
            </p>
          </span>
        </p>
      </div>
      <h1 class="mt-2">
        {{ singlePost[0].title }}
      </h1>

      <div class="">
        {{ singlePost[0].excerpt }}
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
      <div v-html=" singlePost[0].content" />
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
          :identifier=" singlePost[0]._id"
        />
      </div>
    </article>
  </section>
</template>

<script>
import gql from 'graphql-tag'
// import axios from 'axios'

export default {
  name: 'SinglePost',
  apollo: {
    singlePost: {
      query: gql`
      query getSinglePost($id: String) {
       singlePost: postsCollection(_id: $id, filter: {Published: true} ) {
          _id
          _created
          _modified
          content
          title
          title_slug
          excerpt
          tags
          image{
            path
          }

      }
      }
      `,
      variables () {
        return {
          id: this.$route.params.id
        }
      }

    }
  },

  data () {
    return {
      imageApiUrl: process.env.IMAGE_LINK
    }
  },
  head () {
    if (!this.$apollo.queries.singlePost.loading) {
      return {
        title: this.singlePost[0].title.slice(0, 60),
        meta: [
          { hid: 'description', name: 'description', content: `${this.singlePost[0].title} - ${this.singlePost[0].excerpt}`.slice(0, 320) }
        ]
      }
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
  @include easeInOut;

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

.tags {
  display: flex;
  .tag {
    color: #000000;
  }
}

@include mediaMenu {
  .desktop-only {
    display: none;
  }
}
</style>
