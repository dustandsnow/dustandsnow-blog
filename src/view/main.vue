<template>
    <div>
      <bspnav ></bspnav>
      <div class="container">
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Bspnav from '../components/bspnav'
import Card from './document'
import Info from './info'
export default {
  name: '',
  components: {Info, Card, Bspnav},
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
    this.$router.push({
      path: '/relist'
    })
  }
}
</script>

<style scoped>
  .container{
    margin-top: 76px;
  }
</style>
