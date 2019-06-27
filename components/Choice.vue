<template>
  <section class="choix">
    <nuxt-link v-for="link in page.links" :key="link.value" :to="link.to">
      <img :src="getImage(link.image)" :alt="link.label">
      <span>{{ link.label }}</span>
    </nuxt-link>
  </section>
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
  data() {
    return {
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
    getImage(id) {
      return require(`@/assets/images/${id}`)
    },
    onScroll() {
      if (this.canScroll === true) {
        if (event.deltaY < 0) {
          if (this.page.prev) {
            this.$router.push({ path: this.page.prev })
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  display: flex;
  a{
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;

    &:hover{
      img{
        width: 65vw;
      }
      z-index: 9;
    }

    &:nth-child(1){
      left: 0;
      clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);

      span{
        left: 5%;
        bottom: 5%;
      }
    }

    &:nth-child(2){
      right: 0;
      clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);

      span{
        top: 5%;
        right: 5%;
        text-align: right;
      }
    }
  }

  img{
    transition: width 0.5s ease;
    width: 56vw;
    height: 100vh;
  }

  span{
    position: absolute;
    font-size: 65px;
    text-transform: uppercase;
    width: 500px;
    z-index: 9;
    font-weight: bold;
  }
}
</style>
