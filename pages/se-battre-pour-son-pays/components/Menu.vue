<template>
  <section class="choix">
    <nuxt-link v-for="link in page.links" :key="link.value" :to="link.to">
      <img :src="getImage(link.image)" :alt="link.title">
      <span>{{ link.title }}</span>
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
  a{
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;

    &::before{
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
    }

    &:nth-child(1){

      &::before{
        background-color: rgba(71, 31, 31, 0.5)
      }

      span{
        bottom: 5%;
        left: 5%;
      }
    }

    &:nth-child(2){
      right: 0;
      clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0 100%);

      &::before{
        background-color: rgba(9, 21, 64, 0.5)
      }

      span{
        top: 5%;
        right: 5%;
        text-align: right;
      }
    }
  }

  img{
    width: 60vw;
    height: 100vh;
    object-fit: cover;

  }

  span{
    position: absolute;
    font-size: 65px;
    text-transform: uppercase;
    width: 50%;
  }
}
</style>
