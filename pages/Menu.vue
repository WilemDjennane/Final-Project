<template>
  <section>
    <article>
      <img src="../assets/images/menu_1.jpg" alt>
      <span>
        <p>Les services secrets pendant la guerre</p>
        <nuxt-link to="/" class="button">Découvrir</nuxt-link>
      </span>
    </article>
    <article>
      <img src="../assets/images/menu_2.jpg" alt>
      <span>
        <p>Deux resistantes, deux destins différents</p>
        <nuxt-link to="/" class="button">Découvrir</nuxt-link>
      </span>
    </article>
    <article>
      <img src="../assets/images/menu_3.jpg" alt>
      <span>
        <p>Se battre pour son pays</p>
        <nuxt-link to="/se-battre-pour-son-pays/1" class="button">Découvrir</nuxt-link>
      </span>
    </article>
    <article>
      <span>
        <p>Après la guerre</p>
        <nuxt-link to="apres-la-guerre" class="button">Découvrir</nuxt-link>
      </span>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 100vh;

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      background: linear-gradient(
        0deg,
        rgba(31, 31, 31, 0.5),
        rgba(31, 31, 31, 0.5)
      );
      height: 100%;
      width: 100%;
    }

    &:nth-child(1) {
      grid-area: 1 / 1 / 3 / 2;
    }

    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }

    &:nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
    }

    &:nth-child(4) {
      grid-area: 2 / 2 / 3 / 4;
      width: 100%;
      background-color: #222222;

      p {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 30px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
    }
    span {
      position: absolute;
      z-index: 9;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 10%;

      p {
        font-size: 20px;
        letter-spacing: 0.05em;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
</style>
