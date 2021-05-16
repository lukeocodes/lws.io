<template>
  <div>
    <h1 class="font-display text-3xl md:text-6xl inline-block my-2 text-green-400">
      Presentations
    </h1>
    <div class="pb-8">
      <Presentation v-for="presentation in presentations" :key="presentation.title" :presentation="presentation" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const presentations = await $content('presentations').sortBy('latest', 'desc').fetch()
    return { presentations }
  },
  head () {
    return {
      title: 'Presentations - Kevin Lewis',
      meta: [
        { property: 'og:image', content: 'https://lws.io/api/og/template=presentation/title=Presentations' }
      ]
    }
  }
}
</script>
