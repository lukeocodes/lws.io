<template>
  <div>
    <h2 class="font-display text-2xl my-2 text-green-400">
      Latest Presentations
    </h2>
    <div class="pb-4">
      <presentation v-for="presentation in presentations" :key="presentation.title" :presentation="presentation" :slim="true" />
    </div>
    <n-link to="/presentations" class="btn bg-green-400">
      See all presentations
    </n-link>
  </div>
</template>

<script>
export default {
  props: {
    presentations: {
      type: Array,
      required: true
    }
  }
}
</script>
