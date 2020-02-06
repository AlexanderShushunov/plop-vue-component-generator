<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState('user', [
      'name'
    ])
  }
}
</script>

<style scoped lang="scss">
  .hello {
    border-top: #2c3e50 1px solid;
  }
</style>
