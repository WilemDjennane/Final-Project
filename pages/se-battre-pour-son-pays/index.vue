<template>
  <section>
    <Choice :page="page" />
  </section>
</template>

<script>
import Choice from '../../components/Choice'

const data = require('./se-battre-pour-son-pays.json')

export default {
  transition: {
    name: 'slide',
    duration: 500
  },
  components: {
    Choice
  },
  data() {
    return {
      page: data,
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
