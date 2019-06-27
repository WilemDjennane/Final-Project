<template>
  <section>
    <div>
      <h1> {{ page.title }} </h1>
    </div>
    <article>
      <nuxt-link v-for="link in page.links" :key="link.value" :to="link.to">
        <img :src="getImage(link.image)" :alt="link.image">
        <div class="content">
          <span>{{ link.label }}</span>
        </div>
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
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &>div{
    display: flex;
    height: 30vh;
    align-items: center;
  }

  h1{
    position: relative;
    transform: translateY(-20px);
    font-size: 35px;
    padding: 0 0 0 5%;
    color: #000000;
    text-transform: uppercase;
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      bottom: -10px;
      width: 150px;
      height: 5px;
      background-color: #7CA8BD;
     }
  }

  article{
    width: 100vw;
    height: 75vh;
    display: flex;
  }

  a{
    position: relative;
    width: 50vw;
    color: #ffffff;
    text-decoration: none;

    &:hover::before{
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::before{
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      transition: background-color 0.5s ease;
      z-index: 1;
    }
  }

  img{
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .content{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 9;

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
