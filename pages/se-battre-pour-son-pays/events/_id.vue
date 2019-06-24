<template>
  <section>
    <div v-if="page.id === '1.3.1.1'">
      <div>
        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>
      </div>
      <img :src="getImage(page.image)" :alt="page.image">
    </div>
    <div v-if="page.id === '1.3.2.2'">
      <div>
        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>
      </div>
      <img :src="getImage(page.image)" :alt="page.image">
    </div>
    <Video v-if="page.video" />
  </section>
</template>

<script>
import Video from '../components/Video'

const data = require('../se-battre-pour-son-pays.json')

export default {
  components: {
    Video
  },
  data: function () {
    return {
      page: data.find(p => p.id === this.$route.params.id)
    }
  },
  methods: {
    getImage(id) {
      return require(`@/assets/images/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  width: 100vw;
  height: 100vh;
  color: #000000;
  display: flex;
  justify-content: flex-end;

  div{
    padding: 0 5% 0 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    z-index: 9;
    background: linear-gradient(-90deg, #ffffff 70%, rgba(34, 34, 34, 0) 100%);
  }

  h1{
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p{
      font-size: 16px;
      font-weight: lighter;
      margin: 60px 0 0 0;
    }

  img{
    position: absolute;
    left: 0;
  }
}

</style>
