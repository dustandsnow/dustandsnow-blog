<template>
    <img :src="backimg" alt="" width="100%" height="100%">
</template>

<script>
export default {
  name: 'lunbo',
  data () {
    return {
      backidex: 1,
      backimg: require('../assets/lunbo1.jpg')
    }
  },
  created () {
    setInterval(this.next, 1000)
  },
  methods: {
    next () {
      this.backidex++
      if (this.backidex > 4) {
        this.backidex = 1
      }
      this.backimg = require(`../assets/lunbo${this.backidex}.jpg`)
    }
  }
}
</script>

<style scoped>

</style>
