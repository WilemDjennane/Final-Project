<template>
  <section>
    <RightContent v-if="page.id === '1.3.1.1'" />
    <LeftContent v-if="page.id === '1.3.2.2'" />
    <Video v-if="page.video" />
    <header>
      <nuxt-link :to="page.prev" class="button">précédent</nuxt-link>
      <nuxt-link :to="page.next" class="button">suivant</nuxt-link>
    </header>
  </section>
</template>

<script>
import RightContent from '../components/RightContent'
import LeftContent from '../components/LeftContent'
import Video from '../components/Video'

const data = require('../se-battre-pour-son-pays.json')

export default {
  components: {
    RightContent,
    LeftContent,
    Video
  },
  data: function () {
    return {
      page: data.find(p => p.id === this.$route.params.id)
    }
  },
  methods: {
    getImage(id) {
      return require(`@/assets/images/${id}`)
    }
  }
}
</script>
