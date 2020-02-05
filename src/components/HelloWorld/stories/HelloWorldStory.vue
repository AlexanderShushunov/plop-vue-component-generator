<template>
  <div class="case">
    <a href="/link/to/markup">Markup from Sketch, Figma, etc</a>
    <HelloWorld msg="Hi"/>
  </div>
</template>

<script>
import HelloWorld from '../HelloWorld'

export default {
  name: 'HelloWorldStory',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .case {
    margin: 10px;
  }
</style>
