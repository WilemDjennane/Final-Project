<template>
  <section>
    <h1>{{ page.title }}</h1>
    <p v-for="description in page.descriptions" :key="description.value">
      {{ description.text }}
    </p>
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
  }
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222222;

  h1{
    position: absolute;
    top: 5%;
    left: 5%;
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;

    &::before{
      content: '';
      position: absolute;
      width: 150px;
      height: 5px;
      background-color:#7CA8BD;
      bottom: -10px;
    }
  }

  p{
    margin: 25px 0;
    width: 70%;
    line-height: 30px;
  }
}
</style>
