<template>
  <section>
    <h1>{{ page.title }}</h1>
    <p>{{ page.subtitle }}</p>
    <img :src="getImage(page.image)" :alt="page.image">
  </section>
</template>

<script>
const data = require('./home.json')

export default {
  transition: {
    name: 'slide',
    duration: 500
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
    document.addEventListener('wheel', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('wheel', this.onScroll)
  },
  methods: {
    getImage(name) {
      return require(`../assets/images/${name}`)
    },
    onScroll() {
      if (event.deltaY > 0) {
        if (this.page.next) {
          this.$router.push({ path: this.page.next })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: '';
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5)
  }

  h1{
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 80px;
    z-index: 1;

     &::before {
        position: absolute;
        content: '';
        transform: translate(-50%);
        bottom: -10px;
        left: 50%;
        width: 130px;
        height: 4px;
        background-color: #7CA8BD;
     }
  }

  p{
    margin: 25px 0 0 0;
    font-weight: 450;
    font-style: italic;
    font-size: 20px;
     z-index: 1;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -5;
  }
}
</style>
