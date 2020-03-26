<template>
  <footer class="footer-root">
    <ul class="links">
      <li v-for="(link, idx) in links" :key="idx">
        <a :href="link.href" :target="link.target" rel="noopener noreferrer">
          {{ link.title }}
        </a>
      </li>
    </ul>
    <div class="has-text-centered">©2020 CAMPHOR-</div>
  </footer>
</template>
<script>
const links = [
  {
    title: 'GitHub of CAMPHOR- Lab',
    href: 'https://github.com/camphor-/lab',
    target: '_blank'
  },
  { title: 'CAMPHOR-', href: 'https://camph.net/', target: '_blank' },
  {
    title: 'Twitter',
    href: 'https://twitter.com/CamphorKyoto',
    target: '_blank'
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/Camphorcamphor/',
    target: '_blank'
  }
]
export default {
  computed: {
    links() {
      return links
    }
  }
}
</script>

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
