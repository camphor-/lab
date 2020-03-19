<template>
  <div class="root">
    <navbar />
    <hero />
    <div class="main-root">
      <div class="container">
        <div v-in-viewport class="section join">
          <h2 class="title">CAMPHOR- Lab に参加する</h2>
          <p>
            CAMPHOR- のSlackの #lab
            チャンネルに参加してください。GitHubのCAMPHOR-
            Org.でlabチームに招待します。 CAMPHOR-
            のSlackに入っていない場合はCAMPHOR- HOUSE に遊びに来てください！
          </p>
          <a
            class="show-schedule button is-white"
            href="https://camph.net/schedule/"
            target="_blank"
          >
            <span class="button-inner">
              開館スケジュールを見る
            </span>
          </a>
        </div>
        <div v-in-viewport class="section new-idea">
          <h2 class="title">新しいアイディアを提案する</h2>
          <div class="columns is-vcentered">
            <div class="column is-two-fifths">
              <img
                src="https://github.com/camphor-/lab/raw/master/assets/connect-idea.png"
                alt="new-idea"
              />
            </div>
            <div class="column">
              <p>
                Issueとして新しいアイディアを提案しましょう！
                「新しいWebサービスを作りたい」、「CAMPHOR-
                のSlackのbotに機能を追加したい」、「CAMPHOR-
                でイベントを開催したい」など、技術に関することならなんでもOKです！最初はSlackでカジュアルにアイディアを投稿しても大丈夫です。
              </p>
              <a
                class="button is-white"
                href="https://github.com/camphor-/lab/issues"
                target="_blank"
              >
                <span class="button-inner">
                  Issueを見る
                </span>
              </a>
            </div>
          </div>
        </div>
        <div v-in-viewport class="section resources">
          <h2 class="title">CAMPHOR- のリソースを使う</h2>
          <div class="columns is-vcentered">
            <div class="column">
              <p>
                CAMPHOR- Labで提案されたプロジェクトは、CAMPHOR-
                のリソースを使って開発することができます。例えば、Raspberry
                Pi、Oculus Questなどを使った開発、CAMPHOR-
                HOUSEを使ったイベントの開催などを行うことができます。
              </p>
              <h3 class="title is-4">現在使用可能なリソース</h3>
              <div class="content">
                <ul>
                  <li>CAMPHOR- HOUSE</li>
                  <li>Raspberry Pi</li>
                  <li>Oculus Quest x2</li>
                  <li>Philips Hue フルカラーランプ x3</li>
                </ul>
                <p>etc.</p>
              </div>
            </div>
            <div class="column">
              <img
                src="https://github.com/camphor-/lab/raw/master/assets/available-resources.png"
                alt="resources"
              />
            </div>
          </div>
        </div>
        <div v-in-viewport class="section projects">
          <h2 class="title">プロジェクトに参加する</h2>
          <div>
            Issueでアイディアを探しましょう。参加したいアイディアを見つけたら、コメントしましょう！
          </div>
          <a
            class="button is-white"
            href="https://github.com/camphor-/lab/issues"
            target="_blank"
          >
            <span class="button-inner">
              Issueを見る
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Hero,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.root {
  perspective: 100px;
  perspective-origin: top center;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.main-root {
  background-color: white;
  padding: 50px 0;
  > .container {
    max-width: 900px;
    padding: 0 10px;
    > div {
      margin-bottom: 30px;
    }

    > .resources {
      .column > p {
        margin-bottom: 20px;
      }
    }
  }
}

.about {
  max-width: 900px;
}

.join {
  > .show-schedule {
  }
}

.button {
  margin-top: 10px;
  border-radius: 0;
  transition: color 0.2s;
  color: white;
  background-image: linear-gradient(60deg, orange, #ff001d);
  background-repeat: no-repeat;
  &::before {
    transition: 0.5s ease;
    transition-property: opacity;
    background-image: linear-gradient(60deg, #ff001d, orange);
    opacity: 0;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }
  &:hover {
    color: white;
    &::before {
      opacity: 1;
    }
  }
  > .button-inner {
    z-index: 2;
  }
}

.section {
  opacity: 0.5;
  visibility: hidden;
  transform: translateY(50px);
  transition: all 1s ease;
}

.section.in-viewport {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
</style>
