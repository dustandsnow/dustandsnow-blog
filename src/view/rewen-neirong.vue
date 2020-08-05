<template>
    <div >
      <div v-for="wen in wenzhangji" :key="wen.id">
        <pre  v-if="wen.id === $route.params.id">    {{wen.content}}</pre>
      </div>
      <svg @click="daoh" @mousemove="daoh" class="bi bi-list-ul" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
      <ul v-if="xianshi" @mouseleave="daoh" class="list-group">
        <li class="list-group-item" v-for="item in rewen" :key="item.id" @click="zhuanhan(item.id)">{{item.title}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'neirong',
  data () {
    return {
      wenzhangji: [],
      rewen: [],
      xianshi: '',
      chishu: ''
    }
  },
  created () {
    this.axios.get('../../static/' + this.$route.params.shuju)
      .then(res => {
        this.wenzhangji = res.data.wenzhang
      })
    this.axios.get('../../static/renmen.json')
      .then(res => {
        this.rewen = res.data.remen
      })
  },
  methods: {
    daoh: function () {
      this.chishu++
      if (this.chishu % 2 === 1) {
        this.xianshi = 'true'
        this.$('svg').css('margin-left', '12.5em')
      } else {
        this.xianshi = ''
        this.$('svg').css('margin-left', '0em')
      }
    },
    zhuanhan: function (id) {
      this.chishu--
      this.$route.params.id = id
      this.xianshi = ''
      this.$('svg').css('margin-left', '0em')
    }
  }
}
</script>

<style scoped>
pre{
  margin-left: 2.5em;
  white-space: pre-wrap;
  word-wrap: break-word;
}
  svg,ul{
    position: fixed;
    left: 20px;
    top: 10%;
  }
.list-group{
  width: 200px;
}
</style>
