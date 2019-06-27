<template>
  <section>
    <RightContent v-if="page.id === '2'" :page="page" />
    <Video v-if="page.video" :page="page" />
    <Polaroid v-if="page.id === '3'" :page="page" />
    <Conclusion v-if="page.id === '4'" :page="page" />
    <EndMenu v-if="page.id === 'menu'" :page="page" />
    <Timeline :timeline="timeline" />
  </section>
</template>

<script>
import RightContent from '../../../components/RightContent'
import Video from '../../../components/Video'
import Conclusion from '../../../components/Conclusion'
import Timeline from '../../../components/Timeline'
import EndMenu from '../../../components/EndMenu'
import Polaroid from './components/Polaroid'

const data = require('./sophie-scholl.json')

export default {
  transition: {
    name: 'slide',
    duration: 500
  },
  components: {
    RightContent,
    Video,
    Conclusion,
    Polaroid,
    Timeline,
    EndMenu
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
