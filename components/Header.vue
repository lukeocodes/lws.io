<template>
  <header class="bg-white py-4 mb-8 block border-b-2">
    <nav class=" px-4 space-x-6 md:mb-3 max-w-6xl mx-auto text-gray-800 text-lg flex justify-between md:block">
      <n-link to="/" class="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 font-display">
        Kevin Lewis
      </n-link>
      <n-link v-for="link in nav" :key="link.path" :to="link.path" class="hidden md:inline-block">
        {{ link.display }}
      </n-link>

      <!-- Mobile -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer md:hidden" viewBox="0 0 20 20" fill="currentColor" @click="menu = !menu">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </nav>
    <nav :class="{'hidden': !menu}" class="bg-gray-200 px-4 py-2 mx-4 mt-4 mb-2 md:hidden">
      <n-link v-for="link in nav" :key="link.path" :to="link.path" class="block py-2">
        {{ link.display }}
      </n-link>
      <div class="space-x-3 text-sm max-w-6xl mx-auto my-2">
        <div class="space-x-3">
          <a v-for="link in socials" :key="link.url" :href="link.url">{{ link.display }}</a>
        </div>
      </div>
    </nav>
    <nav class="space-x-3 px-4 text-sm max-w-6xl mx-auto text-gray-600 hidden md:flex">
      <div class="space-x-3">
        <a v-for="link in socials" :key="link.url" :href="link.url">{{ link.display }}</a>
      </div>
      <span>&bull;</span>
      <div class="space-x-3">
        <a v-for="link in external" :key="link.url" :href="link.url">{{ link.display }}</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menu: false,
      nav: [
        { path: '/about', display: 'About' },
        { path: '/articles', display: 'Articles' },
        { path: '/presentations', display: 'Presentations' }
      ],
      socials: [
        { url: 'https://twitter.com/_phzn', display: 'Twitter' },
        { url: 'https://github.com/phazonoverload', display: 'GitHub' },
        { url: 'https://twitch.tv/phazonoverload', display: 'Twitch' },
        { url: 'https://instagram.com/_phzn', display: 'Instagram' },
        { url: 'https://linkedin.com/in/phazonoverload', display: 'LinkedIn' }
      ],
      external: [
        { url: 'https://yougotthis.io', display: 'You Got This' }
      ]
    }
  }
}
</script>

<style scoped>
  .bg-gradient-to-r {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
