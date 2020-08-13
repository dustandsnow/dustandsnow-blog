<template>
    <div id="card" >
      <div class="card" v-for="(wen,index) in wenzhang" :key="wen.title">
        <div class="card-header">
          {{wen.title}}
        </div>
        <div class="card-body" v-on:click="zhanshi(index)">
          <blockquote class="blockquote mb-0">
            <p :class="zhankai === index?'':'more' ">{{wen.content}}</p>
            <footer class="blockquote-footer">来自{{wen.source}}<cite title="mingz">{{wen.author}}</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      wenzhang: [],
      wens: [],
      zhankai: ''
    }
  },
  props: ['listid'],
  created () {
    this.axios.get('../../static/content.json').then(res => {
      this.wenzhang = res.data.data
      this.wens = res.data.data
    })
  },
  watch: {
    'listid': function () {
      let www = []
      for (let i = 0; i < this.wens.length; i++) {
        console.log(this.listid, this.wens[i].id)
        if (this.listid > this.wens[i].id) {
          www.push(this.wens[i])
        }
      }
      this.wenzhang = www
    }
  },
  methods: {
    zhanshi: function (index) {
      if (this.zhankai !== index) {
        this.zhankai = index
      } else {
        this.zhankai = ''
      }
    }
  }
}
</script>

<style scoped>
.card{
  margin: 0 0 10px 0;
}
p{
  cursor: pointer;
}
  .more{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>
