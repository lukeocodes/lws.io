<template>
  <div class="pb-1">
    <hero />
    <div class="grid md:grid-cols-2 gap-8 md:gap-4 mb-12 md:mb-24">
      <latest-articles :articles="articles" />
      <latest-presentations :presentations="presentations" />
    </div>
    <you-got-this />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const presentations = await $content('presentations').sortBy('latest', 'desc').limit(3).fetch()
    const articles = await $content('articles').sortBy('published', 'desc').limit(3).fetch()
    return { presentations, articles }
  },
  head () {
    return {
      meta: [
        { property: 'og:image', content: 'https://lws.io/api/og/template=main/title=Kevin Lewis - Developer Advocate & Event Organizer' }
      ]
    }
  }
}
</script>
