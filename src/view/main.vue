<template>
    <div>
      <bspnav></bspnav>
      <div class="content">
        <div class="left">
          <info></info>
        </div>
        <div class="modden">
          <router-view></router-view>
        </div>
        <div class="right">
          <card></card>
        </div>
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
  .content{
    margin-top: 76px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .left{
    width: 20%;
    float: left;
    margin: 0 10px 0 10px;
  }
  .modden{
    width: 58%;
    float: left;
    /*margin-right: 20px;*/
  }
  .right{
    width: 20%;
    float: right;
  }
</style>
