<template>
  <div class="pb-16">
    <h1 class="font-display text-3xl md:text-6xl inline-block my-2 text-green-400">
      {{ presentation.title }}
    </h1>
    <Youtube v-if="presentation.youtube" :id="presentation.youtube" class="mt-8" />
    <div v-else class="box">
      <div class="box-inner">
        <p>Recording currently not available. If this is a recent talk, the recording will likely follow soon.</p>
      </div>
    </div>
    <div v-if="presentation.body.children.length > 0" class="box">
      <div class="box-inner">
        <details v-if="presentation.body.children.length > 0" class="cursor-pointer">
          <summary class="font-bold text-xl">
            Transcript
          </summary>
          <nuxt-content :document="presentation" class="prose max-w-none mt-4 mb-16" />
        </details>
      </div>
    </div>
    <div class="col-contain">
      <div class="box">
        <div class="box-inner">
          <h2 class="font-bold mb-4 text-xl">
            Description
          </h2>
          <p>
            {{ presentation.description }}
          </p>
        </div>
      </div>
      <div class="box">
        <div class="box-inner">
          <h2 class="font-bold mb-4 text-xl">
            Last Presented
          </h2>
          <p>{{ $dateFns.format(presentation.latest, 'do MMMM yyyy') }}</p>
        </div>
      </div>
      <div class="box">
        <div class="box-inner">
          <h2 class="font-bold mb-4 text-xl">
            Events
          </h2>
          <ul class="space-y-2">
            <li v-for="event in presentation.events" :key="event">
              {{ event }}
            </li>
          </ul>
        </div>
      </div>
      <div v-if="presentation.resources" class="box">
        <div class="box-inner">
          <h2 class="font-bold mb-4 text-xl">
            Resources
          </h2>
          <ul class="space-y-2">
            <li v-for="resource in presentation.resources" :key="resource.url">
              <a class="underline" :href="resource.url">{{ resource.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const presentation = await $content('presentations', params.slug).fetch()
    return { presentation }
  },
  head () {
    return {
      title: `${this.presentation.title} - Kevin Lewis`,
      meta: [
        { hid: 'description', name: 'description', content: this.presentation.description },
        { property: 'og:image', content: `https://lws-io.netlify.app/api/og/template=presentation/title=${this.presentation.title}` }
      ]
    }
  }
}
</script>

<style lang="postcss">
  .box {
    @apply p-1 bg-green-400 inline-block w-full mt-4
  }
  .box-inner {
    @apply p-4 bg-white
  }
  .col-contain {
    columns: 2;
    column-gap: 1em;
  }
  @media (max-width: 768px) {
    .col-contain {
      columns: 1
    }
  }
</style>
