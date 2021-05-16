<template>
  <div>
    <h1 class="font-display text-3xl md:text-6xl inline-block my-2 text-blue-400">
      {{ article.title }}
    </h1>
    <div class="grid md:grid-cols-3 gap-8 mt-8">
      <main class="md:col-span-2 order-2 md:order-1">
        <nuxt-content :document="article" class="prose max-w-none mb-16" />
      </main>
      <aside class="order-1 md:order-2">
        <div class="box">
          <div class="box-inner">
            <p>
              Published {{ $dateFns.format(article.published, 'do MMMM yyyy') }}
            </p>
          </div>
        </div>
        <div v-if="article.redirect" class="box mt-8">
          <div class="box-inner">
            <a :href="article.redirect" class="underline">
              Post on {{ article.redirect_text }}
            </a>
          </div>
        </div>
        <div class="box mt-8">
          <div class="box-inner">
            <h2 class="font-bold mb-4 text-xl">
              In this article
            </h2>
            <ul class="space-y-2">
              <li v-for="link in article.toc" :key="link.id">
                <n-link :to="`#${link.id}`">
                  {{ link.text }}
                </n-link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head () {
    return {
      title: `${this.article.title} - Kevin Lewis`,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description }
      ]
    }
  }
}
</script>

<style lang="postcss">
  .prose a {
    color: #76a9fa !important
  }
  .prose img {
    width: 100%;
    border: 4px solid #76a9fa;
  }
  .box {
    @apply p-1 bg-blue-400 to-blue-400 inline-block w-full
  }
  .box-inner {
    @apply p-4 bg-white
  }
</style>
