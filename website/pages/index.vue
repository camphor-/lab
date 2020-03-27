<template>
  <div class="root">
    <navbar :is-top="isTop" />
    <!--  #parallax-root の外は実質fixedになります。パララックス効果を実現するためにhtmlはoverflow-y: hidden;になっています。  -->
    <div id="parallax-root">
      <hero />
      <about />
      <custom-footer />
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import CustomFooter from '@/components/CustomFooter'
import { smoothScrollTo } from '@/plugins/smooth_scroll'

export default {
  components: {
    Hero,
    Navbar,
    About,
    CustomFooter
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
.root {
  background: linear-gradient(60deg, #ff001d, orange);
}

#parallax-root {
  perspective: 100px;
  perspective-origin: top center;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
