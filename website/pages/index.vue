<template>
  <div class="root">
    <navbar />
    <hero />
    <about />
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
.root {
  perspective: 100px;
  perspective-origin: top center;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
