<template>
  <section>
    <Menu v-if="page.id === '1'" />
    <LeftContent v-if="page.id === '1.1'" />
    <RightContent v-if="page.id === '2.1'" />
    <Video v-if="page.video" />
    <Event v-if="page.id === '1.3'" />
    <Conclusion v-if="page.id === '1.4'" />
    <Nav v-if="page.id === '1.5' || page.id === '2.3'" />
    <Polaroid v-if="page.id === '2.2'" />
  </section>
</template>

<script>
import Menu from './components/Menu'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import Video from './components/Video'
import Event from './components/Event'
import Conclusion from './components/Conclusion'
import Nav from './components/Nav'
import Polaroid from './components/Polaroid'

const data = require('./se-battre-pour-son-pays.json')

export default {
  transition: {
    name: 'slide',
    duration: '500'
  },
  components: {
    Menu,
    LeftContent,
    RightContent,
    Video,
    Event,
    Conclusion,
    Nav,
    Polaroid
  },
  data() {
    return {
      page: data.find(p => p.id === this.$route.params.id),
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
    setTimeout(() => {
      this.canScroll = true
    }, 1500)
    window.removeEventListener('wheel', this.onScroll)
  },
  methods: {
    getImage(id) {
      return require(`@/assets/images/${id}`)
    },
    onScroll() {
      if (this.canScroll === true) {
        if (event.deltaY < 0) {
          if (this.page.prev) {
            this.$router.push({ path: `/se-battre-pour-son-pays/${this.page.prev}` })
          }
        }
        if (event.deltaY > 0) {
          if (this.page.next) {
            this.$router.push({ path: `/se-battre-pour-son-pays/${this.page.next}` })
          }
        }
      }
    }
  }
}
</script>
