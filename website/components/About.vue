<template>
  <div class="about-root">
    <div class="container">
      <div id="join" v-in-viewport class="section join">
        <h2 class="title">CAMPHOR- Lab に参加する</h2>
        <p>
          CAMPHOR- のSlackの #lab チャンネルに参加してください。GitHubのCAMPHOR-
          Org.でlabチームに招待します。 CAMPHOR-
          のSlackに入っていない場合はCAMPHOR- HOUSE に遊びに来てください！
        </p>
        <primary-button
          :path="'https://camph.net/schedule/'"
          :text="'開館スケジュールを見る'"
        ></primary-button>
      </div>
      <div id="suggestion" v-in-viewport class="section new-idea">
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
            <primary-button
              :path="'https://github.com/camphor-/lab/issues'"
              :text="'Issueを見る'"
            ></primary-button>
          </div>
        </div>
      </div>
      <div id="resources" v-in-viewport class="section resources">
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
      <div id="projects" v-in-viewport class="section projects">
        <h2 class="title">プロジェクトに参加する</h2>
        <div>
          Issueでアイディアを探しましょう。参加したいアイディアを見つけたら、コメントしましょう！
        </div>
        <primary-button
          :path="'https://github.com/camphor-/lab/issues'"
          :text="'Issueを見る'"
        ></primary-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about-root {
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

.join {
  > .show-schedule {
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
<script>
import PrimaryButton from '@/components/PrimaryButton'
export default {
  components: { PrimaryButton }
}
</script>
