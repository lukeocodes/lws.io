<template>
  <div>
    <h2 class="font-display text-2xl my-2 text-blue-400">
      Latest Articles
    </h2>
    <div class="pb-4">
      <Article v-for="article in articles" :key="article.title" :article="article" :slim="true" />
    </div>
    <n-link to="/articles" class="btn bg-blue-400">
      See all articles
    </n-link>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
