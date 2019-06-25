<template>
  <section>
    <article>
      <h1> {{ page.title }} </h1>
      <p> {{ page.description }} </p>
    </article>
    <header>
      <nuxt-link :to="page.prev" class="button">Précédent</nuxt-link>
      <nuxt-link :to="page.next" class="button">Suivant</nuxt-link>
    </header>
  </section>
</template>

<script>
const data = require('../se-battre-pour-son-pays.json')

export default {
  data: function () {
    return {
      page: data.find(p => p.id === this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  background-color: #222222;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  article{
    width: 50%;

    h1, p {
      text-align: center;
    }

    h1{
      font-size: 35px;
      text-transform: uppercase;
      font-weight: bold;
    }

    p{
      margin: 60px 0 0 0;
      line-height: 30px;
    }
  }
}

</style>
