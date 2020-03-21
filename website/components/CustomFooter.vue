<template>
  <div>
    <footer class="footer-root">
      <div class="links">
        <p>
          <a>GitHub</a>
        </p>
        <p>
          <a>CAMPHOR-</a>
        </p>
        <p>
          <a>Twitter</a>
        </p>
        <p>
          <a>Facebook</a>
        </p>
      </div>
      <div class="has-text-centered">©2020 CAMPHOR-</div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer-root {
  padding: 20px 50px 10px;
  background: #eee;
  > .links a {
    line-height: 2;
    color: #555;
    &:hover {
      color: #777;
    }
  }
}
</style>
