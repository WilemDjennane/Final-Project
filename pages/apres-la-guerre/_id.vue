<template>
  <section>
    <Content v-if="page.id === '1' || page.id === '3'" :page="page" />
    <Video v-if="page.video" :page="page" />
    <Timeline :timeline="timeline" />
  </section>
</template>

<script>
import Content from '../../components/Content'
import Video from '../../components/Video'
import Timeline from '../../components/Timeline'

const data = require('./apres-la-guerre.json')

export default {
  transition: {
    name: 'slide'
  },
  components: {
    Content,
    Video,
    Timeline
  },
  data() {
    return {
      page: data.find(p => p.id === this.$route.params.id),
      timeline: data,
      canScroll: false
    }
  },
  beforeMount() {
    setTimeout(() => {
      this.canScroll = true
    }, 1500)
    window.addEventListener('wheel', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.onScroll)
  },
  methods: {
    onScroll() {
      if (this.canScroll === true) {
        if (event.deltaY < 0) {
          if (this.page.prev) {
            this.$router.push({ path: this.page.prev })
          }
        }
        if (event.deltaY > 0) {
          if (this.page.next) {
            this.$router.push({ path: this.page.next })
          }
        }
      }
    }
  }
}
</script>
