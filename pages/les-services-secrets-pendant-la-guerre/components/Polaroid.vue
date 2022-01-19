<template>
  <section>
    <article>
      <div v-for="image in page.images" :key="image.value">
        <img :src="getImage(image.name)" :alt="image.name">
        <p>{{ image.label }}</p>
      </div>
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

  &>div{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;

    &>img{
      margin: 2%;
      width: 40px;
      height: 40px;
    }
  }
}

article{
  position: absolute;
  height: 100vh;
  display: grid;
  width: 100vw;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  top: 10%;

  div{
    width: 350px;
    height: 350px;
    padding: 20px 20px 40px 20px;
    background-color: #ffffff;

    &:nth-child(1){
      transform: rotate(15deg);

      p{
        transform: rotate(-15deg);
      }
    }

    &:nth-child(2){
      transform: rotate(-15deg);

      p{
        transform: rotate(15deg) translateX(-200px);
      }
    }

    img{
      width: 100%;
      height: 100%;
    }
    p{
      width: 500px;
      margin: 150px 0 0 0;
      text-align: center;
    }

  }
}
</style>
