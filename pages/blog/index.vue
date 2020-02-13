<template>
  <section>
    <div class="container text-center heading p-0 mt-xl-n1">
      <nav
        class="container mb-n4 desktop-only"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">
              Головна
            </nuxt-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >
            Блог
          </li>
        </ol>
      </nav>
      <h1>Блог</h1>
    </div>
    <hr class="top-separator">
    <vue-page-transition name="fade">
      <div v-if="!$apollo.queries.posts.loading">
        <div v-if="posts.length < 1">
          <h4 class="text-center my-5">
            На жаль, на даний момент у нас немає жодних публікацій у блозі. Перевірте пізніше.
          </h4>
        </div>

        <div
          v-for="(post, index) in posts"
          v-else
          :key="`${post.title} ${post._created}`"
          class="card-container container"
        >
          <div class="card mx-auto">
            <img
              class="card-img img-fliud"
              :src="
                `${imageApiUrl}&src=${post.image.path}&fill=scale&w=1170&h=300&f[brighten]=0&o=true`
              "
              :alt="`${post.title} background image `"
            >
            <div class="card-img-overlay pl-2 py-0 row">
              <div class="col-8 m-auto py-0 post-detail h-100 d-flex flex-column justify-content-center text-left">
                <div class="inner">
                  <div class="tags">
                    <span
                      v-for="(tag, i) in post.tags"
                      :key="tag"
                      class="desktop-tablet-only tag"
                    >
                      {{ tag }}&nbsp;<span v-if="i !== post.tags.length - 1">|</span>&nbsp;
                    </span>
                  </div>
                  <nuxt-link :to="{ name: 'blog-title_slug-id', params: {title_slug: post.title_slug, id: post._id } }">
                    <h2 class="card-title text-white">
                      {{ post.title }}
                    </h2>
                  </nuxt-link>
                  <p class="card-text">
                    Дата створення {{ post._created | toDate }}
                  </p>
                </div>
              </div>
              <div class="col-4 m-auto px-0 text-right">
                <nuxt-link
                  class="btn"
                  :to="{ name: 'blog-title_slug-id', params: {title_slug: post.title_slug, id: post._id } }"
                >
                  ЧИТАТИ
                </nuxt-link>
              </div>
            </div>
          </div>
          <hr
            v-if="index !== posts.length - 1"
            class="separator"
          >
        </div>
      </div>
    </vue-page-transition>

    <!-- <div class="text-center">
      <jw-pagination
        v-if="posts.length > 3"
        :page-size="3"
        :max-pages="10"
        :initial-page="1"
        :items="posts"
        :styles="customStyles"
        :labels="customLabels"
        @changePage="onChangePage"
      />
    </div> -->

    <contactForm />
    <progressSection />
  </section>
</template>

<script>
import gql from 'graphql-tag'

const customStyles = {
  ul: {
    border: 'none'
  },
  li: {
    display: 'inline-block',
    border: 'none'
  },
  a: {
    color: 'white',
    backgroundColor: '#D41F26',
    outline: 'none',
    borderRadius: '20px'
  }
}

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
}
export default {
  meta: {
    animation: 'fade-in-down'
  },
  apollo: {
    posts: {
      query: gql`
      query getPosts {
       posts: postsCollection(filter: {published: true} ) {
         _id
        _created
        title
        title_slug
        excerpt
        tags
        image{
          path
        }
       }
      }
      `
    }
  },

  data () {
    return {
      customStyles,
      customLabels,
      pageOfItems: [],
      imageApiUrl: 'https://admin.virus.te.ua/api/cockpit/image?token=9fc49d5af4dda3c961d71b489540a4&rspc=1&rspc=1'
    }
  },

  mounted () {
    if (process.client) {
      this.$scrollTo('#top-contact', 100, { force: true })
    }
  },

  // methods: {
  //   onChangePage (pageOfItems) {
  //     this.pageOfItems = pageOfItems
  //     if (process.client) {
  //       // window.scrollTo({ top: 0, behavior: 'smooth' })
  //       document.body.scrollTop = document.documentElement.scrollTop = 0
  //     }
  //   }

  // },

  head () {
    return {
      title: 'Детейлінг центр Virus Тернопіль.',
      titleTemplate: 'блог - %s!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Повідомлення в блозі - Усі пізні повідомлення в блозі на номері сторінці 1 від Детейлінг центр Virus Тернопіль.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: $mainFont;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 33px;
  letter-spacing: 0;

  color: $darkColor;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1:before,
h1:after {
  content: "";
  border: 1px solid $darkColor;
  margin: 0 20px 0 0;
  flex: 1 0 20px;
}

h1:after {
  margin: 0 0 0 20px;
}

.heading {
  margin: 33px auto;
}

.top-separator {
  margin: 0 0 20px 0;
  border: 3px solid $darkColor;
}

.card {
  height: 100%;
  min-height: 300px;
  max-height: 420px;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  border-radius: 0;
  background-color: $darkColor;
  margin-bottom: 20px;
  border: 0;

  img {
    object-fit: cover;
    object-position: center;
    width: auto;
    height: 320px;
    clear: both;
  }

  .post-detail {
    float: right;
    left: 5px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    .inner {
      padding-left: 75px;
    }
  }

  h2 {
    font-family: $mainFont;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: normal;

    color: $lightColor;
  }

  p {
    font-family: $mainFont;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #f2f2f2;
  }

  .btn {
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
    padding: 12px 50px;
    margin-right: 75px;

    transition: all ease-in-out 500ms;
    -webkit-transition: all ease-in-out 500ms;
    -moz-transition: all ease-in-out 500ms;
    -ms-transition: all ease-in-out 500ms;
    -o-transition: all ease-in-out 500ms;
  }

  .btn:hover,
  .btn.active {
    color: $redColor;
    background-color: $lightColor;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }

  .tags {
    display: flex;
    .tag {
      text-transform: capitalize;
      color: $lightColor;
    }
  }
}

li {
  list-style: none;
}

.separator {
  margin: 0 0 20px 0;
  opacity: 0.6;
  border: 1px solid $darkColor;
}

@include mediaMenu {
  .desktop-only {
    display: none;
  }

  h1 {
    font-size: 30px;
    line-height: 33px;
  }

  h1:before,
  h1:after {
    display: none;
  }

  .top-separator {
    display: none;
  }

  .card {
    height: 100%;
    min-height: 180px;
    max-height: 180px;
    margin-bottom: 20px;
    border: 0;

    img,
    .card-img-overlay {
      object-fit: cover;
      object-position: center;
      width: auto;
      height: 180px;
    }

    h2 {
      font-size: 18px;
      line-height: 20px;

      margin-bottom: 12px;
    }

    a,
    p {
      font-size: 16px;
      line-height: 18px;
    }

    .btn {
      font-size: 16px;
      line-height: 18px;

      padding: 6px 22px;
    }
  }
  .separator {
    display: none;
  }
}

@include mediaMd {
}

@include mediaSm {
  .desktop-tablet-only {
    display: none;
  }
  h1 {
    font-size: 20px;
    line-height: 23px;
  }

  h1:before,
  h1:after {
    display: none;
  }

  .top-separator {
    display: none;
  }

  .card {
    height: 100%;
    min-height: 100px;
    max-height: 100px;
    margin-bottom: 10px;
    border: 0;

    img,
    .card-img-overlay {
      object-fit: cover;
      object-position: center;
      width: auto;
      height: 100px;
    }

    .post-detail {
      .inner {
        padding-left: 20px;
      }
    }

    h2 {
      font-size: 12px;
      line-height: 14px;

      margin-bottom: 6px;
    }

    a {
      font-size: 10px;
      line-height: 10px;
    }

    p {
      font-size: 10px;
      line-height: 12px;
    }

    .btn {
      font-size: 14px;
      line-height: 16px;

      padding: 6px 16px;
      margin-right: 20px;
    }
  }
  .separator {
    display: none;
  }
}
</style>
