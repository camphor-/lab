<template>
  <nav class="navbar is-transparent">
    <a role="button" class="navbar-burger" aria-label="menu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="navbar-button" href="#">
            CAMPHOR-
          </a>
        </div>
        <div class="navbar-item">
          <a class="navbar-button" href="#">
            参加する
          </a>
        </div>

        <div class="navbar-item">
          <a class="navbar-button" href="#">
            提案する
          </a>
        </div>
        <div class="navbar-item">
          <a class="navbar-button" href="#">
            リソース
          </a>
        </div>
        <div class="navbar-item">
          <a class="navbar-button" href="#">
            プロジェクト
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  z-index: 2;
  background: transparent;
  width: 100vw;
  padding: 15px;

  > .navbar-burger {
    color: white;
  }

  .navbar-item {
    align-items: baseline;
    > .navbar-button {
      font-size: 1.2rem;
      color: white;
      padding-bottom: 2px;
      &:hover {
        border-bottom: white solid 2px;
      }
    }
  }
}
</style>
