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
      <h1>Блог Сторінка {{ page }}</h1>
    </div>
    <hr class="top-separator">
    <div
      v-for="(post, index) in posts"
      :key="`${post.title} ${post._created}`"
      class="card-container container"
    >
      <div class="card mx-auto">
        <img
          class="card-img img-fliud"
          :src="post.image.path"
          alt="Card image"
        >
        <div class="card-img-overlay pl-2 py-0 row">
          <div class="col-8 m-auto py-0 post-detail">
            <div>
              <nuxt-link
                v-for="tag in post.tags"
                :key="tag"
                :to="'/blog/category/' + tag"
                class="desktop-tablet-only"
              >
                {{ tag }}&nbsp;<span>|</span>&nbsp;
              </nuxt-link>
              <span class="mx-1 text-xs text-light desktop-tablet-only">•</span>
              <!-- <span class="text-light">
                {{ post.comments ? post.comments.length : 0 }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="12"
                  height="12"
                  preserveAspectRatio="xMinYMin"
                  class="text-light fill-current"
                >
                  <path d="M3 .565h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.57v-4.006a2 2 0 0 1-2-2v-9a3 3 0 0 1 3-3z" />
                </svg>
              </span> -->
            </div>
            <nuxt-link :to="'/blog/' + post.title_slug">
              <h2 class="card-title text-white">
                {{ post.title }}
              </h2>
            </nuxt-link>
            <p class="card-text">
              Date Created {{ post._created | toDate }}
            </p>
          </div>
          <div class="col-4 m-auto px-0 text-right">
            <nuxt-link
              class="btn"
              :to="'/blog/' + post.title_slug"
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
    <div class="container">
      <div class="text-center my-3">
        <nuxt-link
          :to="page === '2' ? '/blog' : `/blog/pages/${Number(page) - 1}`"
          class="text-info pr-2"
        >
          Попередня сторінка
        </nuxt-link>
        <nuxt-link
          v-if="hasNext"
          :to="`/blog/pages/${Number(page) + 1}`"
          class="text-info pl-2"
        >
          Наступна сторінка
        </nuxt-link>
      </div>
    </div>
    <contactForm />
    <progressSection />
  </section>
</template>

<script>
export default {
  async asyncData ({ app, params, error, payload }) {
    if (payload) {
      return {
        posts: payload.posts,
        page: params.page,
        hasNext: payload.hasNext
      }
    } else {
      const { data } = await app.$axios.post(
        'https://admin.virus.te.ua/api/collections/get/posts?token=9fc49d5af4dda3c961d71b489540a4',
        JSON.stringify({
          filter: { published: true },
          limit: process.env.PER_PAGE,
          skip: (params.page - 1) * process.env.PER_PAGE,
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }

      return {
        posts: data.entries,
        page: params.page,
        hasNext:
          Number((params.page - 1) * process.env.PER_PAGE) +
          Number(process.env.PER_PAGE) <
          data.total
      }
    }
  },

  head () {
    return {
      title: `Блог - Детейлінг центр Virus Тернопіль - Сторінка ${this.page}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Усі повідомлення в блозі в номері сторінки ${this.page}, Детейлінг центр Virus Тернопіль.`
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
  }

  .post-detail {
    padding-left: 75px;
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

    @include easeInOut;
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

  a {
    text-decoration: none;
    color: $lightColor;

    &:hover {
      color: $headingsFontColor;
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
      padding-left: 20px;
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
