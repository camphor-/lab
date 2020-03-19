<template>
  <component
    :is="isInternalLink(path) ? 'nuxt-link' : 'a'"
    class="show-schedule button is-white"
    :to="isInternalLink(path) ? path : ''"
    :href="isInternalLink(path) ? '' : path"
  >
    <span class="button-inner">
      {{ text }}
    </span>
  </component>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  margin-top: 10px;
  border-radius: 2000px;
  transition: color 0.2s;
  color: white;
  background-image: linear-gradient(60deg, orange, #ff001d);
  background-repeat: no-repeat;
  border: none;

  &::before {
    transition: 0.5s ease;
    transition-property: opacity;
    border-radius: inherit;
    background-image: linear-gradient(60deg, #ff001d, orange);
    opacity: 0;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }
  &:hover {
    color: white;
    &::before {
      opacity: 1;
    }
  }
  > .button-inner {
    z-index: 2;
  }
}
</style>
