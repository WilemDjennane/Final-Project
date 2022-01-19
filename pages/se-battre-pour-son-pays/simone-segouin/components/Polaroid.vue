<template>
  <section>
    <audio :src="getAudio(page.audio)" autoplay />
    <div>
      <h1>{{ page.title }}</h1>
      <img :src="getImage(page.icon)" :alt="page.icon">
    </div>
    <article>
      <div v-for="image in page.images" :key="image.value">
        <img :src="getImage(image.name)" :alt="image.name">
      </div>
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
    getImage(id) {
      return require(`@/assets/images/${id}`)
    },
    getAudio(id) {
      return require(`@/assets/audios/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  background-color: #222222;
  height: 100vh;
  width: 100vw;

  &>div{
    display: flex;
    padding: 5% 0 5% 10%;
    align-items: center;

    &>img{
      margin: 0 0 0 2%;
      width: 40px;
      height: 40px;
    }
  }

  h1{
    position: relative;
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;

    &::before{
      content: '';
      position: absolute;
      width: 150px;
      height: 4px;
      background-color: #7CA8BD;
      bottom: -10px;
    }
  }
}

article{
  position: absolute;
  height: 100vh;
  display: grid;
  width: 100vw;
  justify-items: center;
  grid-template-columns: 1fr 1fr;

  div{
    width: 400px;
    height: 300px;
    padding: 20px 20px 40px 20px;
    background-color: #ffffff;

    &:nth-child(2){
      transform: rotate(15deg);
    }

    &:nth-child(3){
      transform: rotate(-15deg) translateY(-80px) translateX(250px);
    }

    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
