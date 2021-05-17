<template>
  <a :href="article.redirect || article.path" class="block border-b text-gray-600" :class="{'py-8': !slim, 'py-4': slim}">
    <h2 class="text-blue-400 capitalize" :class="{'mb-4 text-lg': !slim, 'mb-2 text-sm w-full md:truncate': slim}">
      {{ article.title }}
    </h2>
    <p v-if="article.description && !slim" class="mb-6">
      {{ article.description }}<span>{{ article.description.slice(-1) == "." ? '..' : '...' }}</span>
    </p>
    <div class="text-xs capitalize space-x-3">
      <span>{{ $dateFns.format(article.published, 'do MMMM yyyy') }}</span>
      <span v-if="article.redirect_text">&bull;</span>
      <span v-if="article.redirect_text" class="inline-flex items-center">
        {{ article.redirect_text }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="ml-2 h-3"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    },
    slim: {
      type: Boolean,
      required: false
    }
  }
}
</script>
