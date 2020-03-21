<template>
  <div>
    <navbar :is-top="isTop" />
    <!--  #parallax-root の外は実質fixedになります。パララックス効果を実現するためにhtmlはoverflow-y: hidden;になっています。  -->
    <div id="parallax-root">
      <hero />
      <about />
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
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import { smoothScrollTo } from '@/plugins/smooth_scroll'

export default {
  components: {
    Hero,
    Navbar,
    About
  },
  data() {
    return {
      isTop: true
    }
  },
  watch: {
    isTop() {
      if (this.isTop) {
        location.replace('#')
      }
    }
  },
  mounted() {
    const that = this
    document
      .getElementById('parallax-root')
      .addEventListener('scroll', function() {
        that.isTop = this.scrollTop < 50
      })

    if (document.getElementById(location.hash.substring(1))) {
      const scrollTo = document.getElementById(location.hash.substring(1))
      const scrollRoot = document.getElementById('parallax-root')
      smoothScrollTo(scrollTo, { scrollRoot })
    }
  }
}
</script>

<style lang="scss" scoped>
#parallax-root {
  perspective: 100px;
  perspective-origin: top center;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.footer-root {
  padding: 20px 50px;
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
