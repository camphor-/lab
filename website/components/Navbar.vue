<template>
  <div>
    <nav class="navbar is-transparent" :class="{ 'navbar-visible': isTop }">
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
          <div v-for="(item, idx) in menuItems" :key="idx" class="navbar-item">
            <a
              v-smooth-scroll
              class="navbar-button"
              :href="item.href"
              :target="item.target"
            >
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <div v-if="showMenu" class="menu-bg" @click="onClickMenuBg"></div>
      <div class="menu" :class="{ 'menu-visible': showMenu }">
        <ul class="menu-list">
          <li v-for="(item, idx) in menuItems" :key="idx">
            <a :href="item.href" :target="item.target">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const menuItems = [
  { title: '参加する', href: '#join', target: '' },
  { title: '提案する', href: '#suggestion', target: '' },
  { title: 'リソース', href: '#resources', target: '' },
  { title: 'プロジェクト', href: '#projects', target: '' },
  { title: 'CAMPHOR- について', href: 'https://camph.net', target: '_blank' }
]

export default {
  props: {
    isTop: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showMenu: false,
      menuItems
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
  opacity: 0;
  transition: all 1s;
  transform: translateY(-100px);

  &.navbar-visible {
    transform: translateY(0);
    opacity: 1;
  }

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
  transform: translateX(300px);
  transition: all 0.5s ease-in-out;
  &.menu-visible {
    position: fixed;
    transform: translateX(0);
  }
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
