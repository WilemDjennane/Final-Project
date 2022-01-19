<template>
  <section>
    <div class="content">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
    </div>
    <img :src="getImage(page.image)" :alt="page.title">
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
section {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #222222;

  .content {
    display: flex;
    padding: 0 25% 0 5%;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
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
