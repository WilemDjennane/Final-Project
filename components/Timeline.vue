<template>
  <section>
    <article>
      <nuxt-link to="/menu">
        <img :src="getImage('home.svg')" alt="">
      </nuxt-link>
    </article>
    <article>
      <div v-for="line in timeline" :key="line.value">
        <nuxt-link :to="line.id" />
        <span>{{ line.title }}</span>
      </div>
    </article>
    <article>
      <img :src="getImage('scrollMouse.svg')" alt="">
    </article>
  </section>
</template>

<script>
export default {
  props: {
    timeline: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    getAudio(id) {
      return require(`@/assets/audios/${id}`)
    },
    getImage(id) {
      return require(`@/assets/images/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 9;

  article{
    position: absolute;

    &:nth-child(1) {
      left: 5%;
    }
    &:nth-child(2) {
      width: 60vw;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::before{
        content: '';
        position: absolute;
        width: 99%;
        height: 5px;
        background-color: #ffffff;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        z-index: -1;
      }

      div{
        position: relative;
        transition: transform 0.3s ease;
        display: flex;
        width: 10px;
        height: 10px;
        align-items: center;
        justify-content: space-between;

        a{
          position: absolute;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          background-color: #ffffff;
          border-radius: 50%;

          &:hover:not(.nuxt-link-active){
           transform: scale(1.8);

            &+span{
              display: block;
            }
          }

           &.nuxt-link-active{
            transform: scale(1.8);
            background-color: #7CA8BD;

            &+span{
              display: block;
            }
          }
        }
        span{
          position: absolute;
          bottom: 40px;
          left: 50%;
          width: 150px;
          display: none;
          padding: 10px 15px;
          text-align: center;
          font-size: 10px;
          font-weight: bold;
          background-color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          transform: translate(-50%, -50%);
          border-radius: 15px;
        }
      }
    }
    &:nth-child(3){
      transform: translate(-50%, -50%);
      top: 60%;
      right: 5%;

      img{
        height: 60px;
        animation: scroll 1.5s infinite;

        @keyframes scroll {
          0%,
          100%{
            transform: translateY(5px)
          }
          50%{
            transform: translateY(-5px)
          }
        }
      }
    }
  }
  img{
    width: 30px;
  }
}
</style>
