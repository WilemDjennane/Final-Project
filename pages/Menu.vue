<template>
  <section>
    <nuxt-link v-for="menu in page.menu" :key="menu.value" :to="menu.to">
      <img v-if="menu.image" :src="getImage(menu.image)" :alt="menu.label">
      <span>{{ menu.label }}</span>
    </nuxt-link>
  </section>
</template>

<script>
const data = require('./menu.json')

export default {
  transition: {
    name: 'slide',
    duration: 500
  },
  data() {
    return {
      page: data,
      canScrol: false
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
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 100vh;

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: #ffffff;

    &:hover::before{
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::before {
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
      height: 100%;
      width: 100%;
      transition: background-color 0.5s ease;
    }

    &:nth-child(1) {
      grid-area: 1 / 1 / 3 / 2;
    }

    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }

    &:nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
    }

    &:nth-child(4) {
      grid-area: 2 / 2 / 3 / 4;
      width: 100%;
      background-color: #222222;
    }

    img {
      width: 100%;
      height: 100%;
      user-select: none;
    }

    span {
      position: absolute;
      justify-content: center;
      padding: 0 10%;
      font-size: 25px;
      font-weight: bold;
      line-height: 30px;
      text-align: center;
      z-index: 9;
    }
  }
}
</style>
