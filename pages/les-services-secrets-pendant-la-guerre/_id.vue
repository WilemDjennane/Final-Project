<template>
  <section>
    <RightContent v-if="page.id === '2'" :page="page" />
    <Polaroid v-if="page.id === '4'" :page="page" />
    <Video v-if="page.video" :page="page" />
    <EndMenu v-if="page.id === 'menu'" :page="page" />
    <Timeline :timeline="timeline" />
  </section>
</template>

<script>
import Video from '../../components/Video'
import RightContent from '../../components/RightContent'
import Timeline from '../../components/Timeline'
import EndMenu from '../../components/EndMenu'
import Polaroid from './components/Polaroid'

const data = require('./les-services-secrets-pendant-la-guerre.json')

export default {
  transition: {
    name: 'slide',
    duration: 500
  },
  components: {
    RightContent,
    Video,
    Timeline,
    EndMenu,
    Polaroid
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
