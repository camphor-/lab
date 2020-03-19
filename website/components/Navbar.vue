<template>
  <div>
    <nav class="navbar is-transparent">
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': showMenu }"
        aria-label="menu"
        @click="onClickBurger"
      >
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
    <div v-show="showMenu">
      <div class="menu-bg" @click="onClickMenuBg"></div>
      <div class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
        <ul class="menu-list">
          <li><a>Team Settings</a></li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">
          Transactions
        </p>
        <ul class="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    onClickBurger() {
      this.showMenu = true
    },
    onClickMenuBg() {
      this.showMenu = false
    }
  }
}
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

.menu {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  background: white;
  z-index: 2;
  height: 100%;
  box-shadow: -2px 0px 3px rgba(0, 0, 0, 0.1);
}
.menu-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>
