<template>
  <section>
    <div class="content">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
    </div>
    <img :src="getImage(page.image)" :alt="page.image">
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
  width: 100vw;
  height: 100vh;
  color: #222222;
  display: flex;
  justify-content: flex-end;

  .content{
    padding: 0 5% 0 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    height: 100vh;
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
    height: 100vh;
    top: 0;
    left: 0;
  }
}

</style>
