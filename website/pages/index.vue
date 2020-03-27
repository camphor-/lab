<template>
  <div class="root">
    <navbar :is-top="isTop" />
    <hero :scroll-y="scrollY" />
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
      scrollY: 0
    }
  },
  computed: {
    isTop() {
      return this.scrollY < 50
    }
  },
  watch: {
    isTop() {
      if (this.isTop) {
        // トップにスクロールした際にアンカーリンクを削除
        window.history.replaceState(
          null,
          '',
          location.pathname + location.search
        )
      }
    }
  },
  mounted() {
    // スクロール位置を取得
    const that = this
    window.addEventListener('scroll', function() {
      that.scrollY = window.scrollY
    })

    // アンカーリンクがあったらその位置までスクロール
    if (document.getElementById(location.hash.substring(1))) {
      const scrollTo = document.getElementById(location.hash.substring(1))
      smoothScrollTo(scrollTo, {})
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  background: linear-gradient(60deg, #ff001d, orange);
}
</style>
