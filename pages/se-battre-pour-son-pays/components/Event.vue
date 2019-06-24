<template>
  <section>
    <h1> {{ page.title }} </h1>
    <div class="container">
      <article v-for="link in page.links" :key="link.value">
        <img :src="getImage(link.image)" :alt="link.image">
        <div class="content">
          <span>{{ link.title }}</span>
          <nuxt-link :to="link.to" class="button">
            Découvrir
          </nuxt-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
const data = require('../se-battre-pour-son-pays.json')

export default {
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1{
    font-size: 35px;
    height: 25vh;
    display: flex;
    align-items: center;
    padding: 0 0 0 5%;
    color: #000000;
    text-transform: uppercase;
    font-weight: bold;
  }

  .container{
    width: 100vw;
    height: 75vh;
    display: flex;
  }

  article{
    position: relative;
    width: 50vw;

    &::before{
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
      z-index: -1;
    }
  }

  img{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -2;
  }

  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span{
      font-size: 25px;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
      padding: 0 10%;
    }
  }
}
</style>
