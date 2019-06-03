<template>
  <section class="container">

  <div class="card bg-dark text-light mx-auto img-fliud" v-for="(post, key) in posts" :key="key">
  <img class="card-img img-fliud" :src="post.image.path" alt="Card image">
  <div class="card-img-overlay">
    <div>
      <a v-for="tag in post.tags" :key="tag" :href="'/category/'+tag" class="ml-1">{{ tag }} | </a>
    </div>
    <a :href="'/'+post.title_slug">
    <h2 class="card-title">{{ post.title }}</h2>
    </a>
    <p class="card-text text-primary" v-html="post.excerpt"></p>
    <p class="card-text text-primary" >Date Created {{ post._created | toDate }}</p>
    <a class="text-info border-0 btn btn-primary bg-dark" :href="'/'+post.title_slug">
            Read more
   </a>
  </div>
</div>
    <!-- <div class=my-5>
      <ul class="p-0">
        <li class="mb-3" v-for="(post, key) in posts" :key="key">
          <div class="text-dark font-bold text-left">
            <a v-for="tag in post.tags" :key="tag" :href="'/category/'+tag" class="ml-1">{{ tag }}</a>
          </div>
            <p>{{ post._created | toDate }}</p>
            <a :href="'/'+post.title_slug" class="text-dark">
          
            <h2 class="my-2 text-dark">
              {{ post.title }}
            </h2>
          </a>

          <img style=" " :src="post.image.path" >

          <div class="mb-2" v-html="post.excerpt">
          </div>
          <a class="text-info " :href="'/'+post.title_slug">
            Read more
          </a>
        </li>
      </ul>
    </div> -->
  </section>
</template>

<script>
export default {
  async asyncData ({ app }) {
    const { data } = await app.$axios.post(process.env.POSTS_URL,
    JSON.stringify({
        filter: { published: true },
        sort: {_created:-1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' }
    })

    return { posts: data.entries }
  }
}
</script>

<style scoped>
.card{
  border: none;
 margin: 40px auto;
}

a{text-decoration: none}

img{
  object-fit: cover;
  object-position: center;
  width: auto; 
  height: 320px;
  border-radius: 20px;
}

li{
  list-style: none;
}
</style>
