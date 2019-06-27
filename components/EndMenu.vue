<template>
  <section>
    <article>
      <nuxt-link v-for="link in page.links" :key="link.value" :to="link.to">
        {{ link.label }}
      </nuxt-link>
      <nuxt-link to="/menu">
        Menu
      </nuxt-link>
      <nuxt-link to="1">
        <img :src="getImage('replay.svg')" alt="replay">
      </nuxt-link>
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
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  background-color: #222222;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  article{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
      text-transform: uppercase;
      text-decoration: none;
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
      margin: 20px 0;
    }
  }
}
</style>
