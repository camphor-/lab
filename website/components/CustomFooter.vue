<template>
  <footer class="footer-root">
    <div class="columns">
      <ul class="column list-items">
        <li v-for="(link, idx) in links" :key="idx">
          <a :href="link.href" :target="link.target" rel="noopener noreferrer">
            {{ link.title }}
          </a>
        </li>
      </ul>
      <ul class="column lisences">
        <li>
          Illustrations by
          <a
            href="https://www.humaaans.com/"
            target="_blank"
            rel="noopener noreferrer"
            >humaaans.com</a
          >
        </li>
      </ul>
    </div>
    <div class="has-text-centered">&copy;2020 CAMPHOR-</div>
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
    href: 'https://twitter.com/camphor_kyoto',
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
  > .columns {
    max-width: 900px;
    margin: 0 auto;
  }
  .list-items a {
    line-height: 2;
    color: #555;
    &:hover {
      color: #777;
    }
  }
}
</style>
