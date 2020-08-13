<template>
    <div>
      <bspnav></bspnav>
      <lunbo class="container-fluid"></lunbo>
      <div class="container">
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Bspnav from '../components/bspnav'
import Card from './document'
import Info from './info'
import Lunbo from '../components/lunbo'
export default {
  name: '',
  components: {Lunbo, Info, Card, Bspnav},
  data () {
    return {
    }
  },
  mounted () {
  }
}

</script>

<style scoped>
  .container{
    margin-top: -70px;
  }
  .container-fluid{
    height: 800px;
  }
</style>
