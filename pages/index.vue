<template>
  <div class="pb-1">
    <hero />
    <div class="md:grid md:grid-cols-2 md:gap-8 mb-12 md:mb-24">
      <latest-articles :articles="articles" class="mb-8 md:mb-0" />
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
