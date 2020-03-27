<template>
  <div class="hero-background">
    <div class="lab-hero">
      <div class="columns is-variable is-5 is-desktop">
        <div v-in-viewport.once class="hero-description column has-text-white">
          <h1 class="hero-title">CAMPHOR- Lab</h1>
          <p class="is-size-4">アイディアを形にしよう</p>
          <p>
            CAMPHOR- Lab
            はプロダクトを作りたい学生やプロジェクトを始めたい学生が集まるグループです。自分の考えるアイディアを提案し、共感する仲間を集めましょう。興味のあるプロジェクトを見つけたら参加して一緒に作業をしましょう。CAMPHOR-
            のリソースを使って開発することもできます!
          </p>
        </div>
        <div v-in-viewport.once class="camphor-lab-image column">
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
  z-index: -1;
}

.lab-hero {
  background-image: url('~assets/hero_bottom.svg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 15px;
  width: 100vw;
  height: 40vw;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  padding-top: 5vw;
  padding-bottom: 10vw;
  box-sizing: content-box;

  > .columns {
    margin: 0 auto;
    height: 100%;
    justify-content: center;
    align-items: center;

    > .hero-description {
      display: flex;
      flex-flow: column nowrap;
      height: 100%;
      justify-content: center;
      padding-left: 5vw;
      padding-top: 0;
      visibility: hidden;
      position: relative;
      bottom: 50px;
      right: 400px;
      transition: all 1s;

      &.in-viewport {
        visibility: visible;
        right: 0;
      }

      > .hero-title {
        font-size: 2.4rem;
      }
    }

    > .camphor-lab-image {
      height: 100%;
      position: relative;
      left: 400px;
      visibility: hidden;
      transition: all 1s;

      > img {
        position: absolute;
        bottom: 0;
      }

      &.in-viewport {
        visibility: visible;
        left: 0;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .lab-hero {
    background-image: url('~assets/hero_bottom_s.svg');
    height: 730px;
    > .columns {
      > .hero-description {
        height: 450px;
        padding: 0 20px;
        &.in-viewport {
        }
      }

      > .camphor-lab-image {
        left: 200px;
        margin: 0 auto;
        max-width: 500px;

        > img {
          position: relative;
        }

        &.in-viewport {
        }
      }
    }
  }
}
</style>
