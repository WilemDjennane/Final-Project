<template>
  <section>
    <article>
      <h1>Disclaimer</h1>
      <p>Ce site à été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés ne sont en aucun cas exploités à des fins commerciales et ne seront pas publiés</p>
    </article>
  </section>
</template>

<script>
export default {
  transition: {
    name: 'slide',
    duration: 500
  },
  beforeMount() {
    setTimeout(() => {
      this.onScroll()
    }, 5000)
  },
  beforeDestroy() {
    this.onScroll()
  },
  methods: {
    onScroll() {
      this.$router.push({ path: '/home' })
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
  background: #222222;

  article{
    width: 50%;
    text-align: center;
  }
  h1{
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }
  p{
    margin: 20px 0 0 0;
    line-height: 30px;
  }
}
</style>
