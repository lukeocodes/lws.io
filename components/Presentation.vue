<template>
  <n-link :to="presentation.path" class="block border-b text-gray-600" :class="{'py-8': !slim, 'py-4': slim}">
    <h2 class="text-green-400 capitalize" :class="{'mb-4 text-lg': !slim, 'mb-2 text-sm w-full truncate': slim}">
      {{ presentation.title }}
    </h2>
    <p v-if="!slim" class="mb-6">
      {{ presentation.description }}
    </p>
    <div class="text-xs capitalize space-x-3">
      <span>{{ presentation.type }}</span>
      <span>&bull;</span>
      <span>Last Seen {{ $dateFns.format(presentation.latest, 'MMMM yyyy') }}</span>
    </div>
  </n-link>
</template>

<script>
export default {
  props: {
    presentation: {
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
