<template>
  <div class="root">
    <navbar :is-top="isTop" />
    <hero />
    <about />
    <custom-footer />
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
    window.addEventListener('scroll', function() {
      that.isTop = window.scrollY < 50
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
</style>
