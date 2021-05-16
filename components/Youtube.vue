<template>
  <div class="p-1" :class="bg">
    <div class="aspect-w-16 aspect-h-9">
      <iframe
        class=""
        :src="`https://www.youtube.com/embed/${id}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    bg: {
      type: String,
      required: false,
      default: 'bg-green-400'
    }
  }
}
</script>
