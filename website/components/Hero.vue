<template>
  <div>
    <div class="hero-background"></div>
    <div class="lab-hero">
      <div class="columns is-variable is-5 is-desktop">
        <div v-in-viewport class="lab-title column has-text-white">
          <h1 class="is-size-1">CAMPHOR- Lab</h1>
          <p class="is-size-4">アイディアを形にしよう</p>
          <p>
            CAMPHOR- Lab
            はプロダクトを作りたい学生やプロジェクトを始めたい学生が集まるグループです。自分の考えるアイディアを提案し、共感する仲間を集めましょう。興味のあるプロジェクトを見つけたら参加して一緒に作業をしましょう。CAMPHOR-
            のリソースを使って開発することもできます!
          </p>
        </div>
        <div v-in-viewport class="camphor-lab-image column">
          <img alt="CAMPHOR- Lab" src="@/assets/camphor-oss.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero-background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(60deg, #ff001d, orange);
}

.lab-hero {
  background-image: url('~assets/hero_bottom.svg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  bottom: 0;
  width: 100vw;
  height: 40vw;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  margin-top: 5vw;
  padding-bottom: 10vw;
  box-sizing: content-box;

  > .columns {
    margin: 0 auto;
    height: 100%;
    justify-content: center;
    align-items: center;

    > .lab-title {
      display: flex;
      flex-flow: column nowrap;
      height: 100%;
      justify-content: center;
      padding-left: 5vw;
      visibility: hidden;
      transform: translate3d(-700px, 50px, 0);
      transition: all 1s;

      &.in-viewport {
        visibility: visible;
        transform: translate3d(30px, -40px, 20px) scale(0.8);
      }
    }

    > .camphor-lab-image {
      height: 100%;
      position: relative;
      left: 40px;
      visibility: hidden;
      transform: translate3d(700px, 0, 0);
      transition: all 1s;

      > img {
        position: absolute;
        bottom: 0;
      }

      &.in-viewport {
        visibility: visible;
        transform: translate3d(200px, 150px, -40px) scale(1.2);
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .lab-hero {
    background-image: url('~assets/hero_bottom_s.svg');
    height: 730px;
    > .columns {
      > .lab-title {
        height: 450px;
        padding: 0 20px;
        &.in-viewport {
          transform: translate(0, -50px) translateZ(20px) scale(0.8);
        }
      }

      > .camphor-lab-image {
        left: 0;
        margin: 0 auto;
        max-width: 500px;
        > img {
          position: relative;
        }
        &.in-viewport {
          transform: translate3d(0px, 150px, -10px) scale(1.2);
        }
      }
    }
  }
}
</style>
