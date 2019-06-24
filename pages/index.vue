<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.subtitle }}</p>
    <img :src="getImage(page.images)" alt="home_image">
  </div>
</template>

<script>
const data = require('./home.json')

export default {
  data: function () {
    return {
      page: data
    }
  },
  methods: {
    getImage(name) {
      return require(`../assets/images/${name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5)
  }

  h1{
    position: relative;
    font-weight: bold;
    font-size: 80px;
    z-index: 1;

     &::before {
       position: absolute;
       content: '';
       transform: translate(-50%);
       bottom: -5px;
       left: 50%;
       width: 130px;
       height: 4px;
       background-color: #7CA8BD;

     }
  }
  p{
    margin: 20px 0 0 0;
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
    object-fit: cover
  }
}
</style>
