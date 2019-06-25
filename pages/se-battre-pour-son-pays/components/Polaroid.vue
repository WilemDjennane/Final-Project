<template>
  <section>
    <h1> {{ page.title }} </h1>
    <div class="content">
      <span v-for="image in page.images" :key="image.value" >
        <img :src="getImage(image.name)" :alt="image.name">
      </span>
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
  position: relative;
  background-color: #222222;
  height: 100vh;
  width: 100vw;

  h1{
    font-size: 35px;
    font-weight: bold;
  }

  .content{
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }

  span{
    background-color: #ffffff;
    width: 480px;
    height: 440px;
    padding: 30px 30px 60px 30px;

    &:nth-child(2){
      transform: rotate(15deg);
    }

    &:nth-child(3){
      transform: rotate(-15deg);
    }
  }

  img{
    width: 100%;
    height: 100%;
  }
}
</style>
