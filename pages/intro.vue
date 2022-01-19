<template>
  <section>
    <aside class="introduction">
      <h1 class="introduction__title">
        {{ page.title }}
      </h1>
      <p>{{ page.description }}</p>
    </aside>
    <aside class="information">
      <div v-for="data in page.datas" :key="data.value" class="div__content">
        <p>
          <span>{{ data.number1 }}</span>
          <i v-if="data.text">{{ data.text }}</i>
          <span v-if="data.number2 || data.number2">{{ data.number2 }}</span>
          {{ data.description }}
        </p>
      </div>
    </aside>
  </section>
</template>

<script>
const data = require('./intro.json')

export default {
  transition: {
    name: 'slide',
    duration: 500
  },
  data: function () {
    return {
      page: data,
      canScroll: false
    }
  },
  beforeMount() {
    setTimeout(() => {
      this.canScroll = true
    }, 1500)
    window.addEventListener('wheel', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.onScroll)
  },
  methods: {
    onScroll() {
      if (this.canScroll === true) {
        if (event.deltaY < 0) {
          if (this.page.prev) {
            this.$router.push({ path: this.page.prev })
          }
        }
        if (event.deltaY > 0) {
          if (this.page.next) {
            this.$router.push({ path: this.page.next })
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
section {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #222222;

  .introduction {
    margin: 5% 0 0 5%;

    &__title {
      position: relative;
      text-transform: uppercase;
      font-size: 35px;
      font-weight: bold;
      margin: 0 0 40px 0;

      &::before {
        position: absolute;
        content: "";
        width: 150px;
        height: 5px;
        background-color: #7ca8bd;
        bottom: -10px;
      }
    }
    p {
      width: 60%;
    }
  }

  .information {
    display: flex;
    width: 100vw;
    height: 70vh;
    justify-content: center;
    align-items: center;

    .div__content {
      height: 300px;
      width: 300px;
      text-align: center;
      font-size: 16px;
      line-height: 30px;
      border-radius: 50%;
      background: white;
      color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2%;
      margin: 0 5px;

      &:nth-child(odd) {
        display: flex;
        height: 250px;
        width: 250px;
        // background-color: rgba(255, 255, 255, 0.6);
      }
    }
    span {
      font-size: 40px;
      color: #7ca8bd;
      font-weight: bold;
    }
  }
}
</style>
