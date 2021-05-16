<template>
  <div>
    <h1 class="font-display text-3xl md:text-6xl inline-block my-2 text-blue-400">
      Articles
    </h1>
    <div class="pb-8">
      <Article v-for="article in articles" :key="article.title" :article="article" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles').sortBy('published', 'desc').fetch()
    return { articles }
  },
  head () {
    return {
      title: 'Articles - Kevin Lewis',
      meta: [
        { property: 'og:image', content: 'https://lws-io.netlify.app/api/og/template=article/title=Articles' }
      ]
    }
  }
}
</script>
