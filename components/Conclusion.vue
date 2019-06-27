<template>
  <section>
    <audio :src="getAudio(page.audio)" autoplay />
    <article>
      <h1>{{ page.title }}</h1>
      <img :src="getImage('speaker.svg')" :alt="page.title">
      <p>{{ page.description }}</p>
    </article>
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
  methods: {
    getAudio(id) {
      return require(`@/assets/audios/${id}`)
    },
    getImage(id) {
      return require(`@/assets/images/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  background-color: #222222;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    h1, p {
      text-align: center;
    }

    h1{
      font-size: 35px;
      text-transform: uppercase;
      font-weight: bold;
    }

    img{
      margin: 40px 0 0 0;
      width: 40px;
    }

    p{
      margin: 40px 0 0 0;
      line-height: 30px;
    }
  }
}

</style>
