<template>
  <section class="introduction">
    <div class="introduction__text">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
    </div>
    <img :src="getImage(page.image)" :alt="page.title">
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
.introduction {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #222222;

  &__text {
    padding: 0 20% 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
    z-index: 9;
    background: linear-gradient(90deg, #222222 70%, rgba(34, 34, 34, 0) 100%);

    h1 {
      font-size: 35px;
      line-height: 40px;
      text-transform: uppercase;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      line-height: 30px;
      font-weight: lighter;
      margin: 60px 0 0 0;
    }
  }
  img {
    position: absolute;
    right: 0;
    height: 100vh;
  }
}
</style>
