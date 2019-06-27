<template>
  <div>
    <video :src="getVideo(page.video)" autoplay loop />
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
      default: () => []
    }
  },
  methods: {
    getVideo(id) {
      return require(`@/assets/videos/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
video{
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
