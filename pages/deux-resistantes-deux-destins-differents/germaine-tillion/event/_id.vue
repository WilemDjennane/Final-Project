<template>
  <section>
    <RightContent v-if="page.id === '1'" :page="page" />
    <LeftContent v-if="page.id === '2'" :page="page" />
    <Timeline :page="page" />
  </section>
</template>

<script>
import RightContent from '../../../../components/RightContent'
import LeftContent from '../../../../components/LeftContent'

const data = require('./event.json')

export default {
  transition: {
    name: 'slide'
  },
  components: {
    RightContent,
    LeftContent
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
