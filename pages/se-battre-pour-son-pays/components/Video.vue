<template>
  <div class="">
    <video :src="getVideo(page.video)" autoplay />
    <header>
      <nuxt-link :to="page.prev" class="button">Précédent</nuxt-link>
      <nuxt-link :to="page.next" class="button">Suivant</nuxt-link>
    </header>
  </div>
</template>

<script>
const data = require('../se-battre-pour-son-pays.json')

export default {
  data: function () {
    return {
      page: data.find(p => p.id === this.$route.params.id)
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
