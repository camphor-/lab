<template>
  <div class="about-root">
    <div class="container">
      <section id="join" v-in-viewport class="section join">
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
      </section>
      <section id="suggestion" v-in-viewport class="section new-idea">
        <h2 class="title">新しいアイディアを提案する</h2>
        <div class="columns is-vcentered">
          <div class="column is-two-fifths">
            <img src="@/assets/connect-idea.png" alt="new-idea" />
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
      </section>
      <section id="resources" v-in-viewport class="section resources">
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
            <img src="@/assets/available-resources.png" alt="resources" />
          </div>
        </div>
      </section>
      <section id="projects" v-in-viewport class="section projects">
        <h2 class="title">プロジェクトに参加する</h2>
        <div>
          Issueでアイディアを探しましょう。参加したいアイディアを見つけたら、コメントしましょう！
        </div>
        <primary-button
          :path="'https://github.com/camphor-/lab/issues'"
          :text="'Issueを見る'"
        ></primary-button>
      </section>
      <section id="about-camphor" v-in-viewport class="section about-camphor">
        <h2 class="title">CAMPHOR- について</h2>
        <div class="columns is-vcentered">
          <div class="column">
            <img src="@/assets/camphor.png" alt="CAMPHOR-" />
          </div>
          <div class="column">
            <div>
              京都のエンジニアやデザイナーを目指す学生のためのコミュニティです。
              エンジニアリング・デザイン・プロダクト開発などへの関心を共通点とする、
              様々なバックグラウンドを持つ学生が集まっています。 CAMPHOR-
              HOUSEというコミュニティスペースを運営や、技術系イベントを開催しています。
            </div>
            <primary-button
              :path="'https://camph.net'"
              :text="'CAMPHOR- のページ'"
            ></primary-button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton'
export default {
  components: { PrimaryButton }
}
</script>

<style lang="scss" scoped>
.about-root {
  background-color: white;
  padding: 50px 0;
  > .container {
    max-width: 900px;
    padding: 0 10px;
    > .section {
      margin-bottom: 30px;
      opacity: 0.5;
      visibility: hidden;
      transform: translateY(50px);
      transition: all 1s ease;
      &.in-viewport {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
      }
    }

    > .resources {
      .column > p {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
