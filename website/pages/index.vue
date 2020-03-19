<template>
  <div class="root">
    <navbar />
    <div class="parallax-root">
      <hero />
      <about />
    </div>
  </div>
</template>
<script>
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'

export default {
  components: {
    Hero,
    Navbar,
    About
  }
}
</script>

<style lang="scss" scoped>
.parallax-root {
  perspective: 100px;
  perspective-origin: top center;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
