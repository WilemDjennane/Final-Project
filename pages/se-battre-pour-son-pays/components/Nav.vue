<template>
  <section>
    <nuxt-link :to="page.to" class="actual">
      <img :src="getImage(page.image)" :alt="page.title">
      <span> {{ page.title }} </span>
    </nuxt-link>
    <nuxt-link to="/Menu">
      <img src="@/assets/images/MenuBack.jpg" alt="">
      <span>Menu</span>
    </nuxt-link>
    <nuxt-link :to="page.restart">
      <span>Recommencer</span>
    </nuxt-link>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #222222;
  height: 100vh;
  z-index: -3;

  a{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.actual::before{
      content: '';
      position: absolute;
      background-color: rgba(9, 21, 64, 0.5);
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }

  img{
    top: 0;
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 1;
  }

  span{
    z-index: 9;
  }
}
</style>
