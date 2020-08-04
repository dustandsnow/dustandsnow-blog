<template>
    <div id="card" >
      <div class="card" v-for="wen in wenzhang" :key="wen.title">
        <div class="card-header">
          {{wen.title}}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{wen.article}}</p>
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
      wenzhang: []
    }
  },
  created () {
    this.axios.get('../../static/content.json').then(res => {
      this.wenzhang = res.data.data
    })
  }
}
</script>

<style scoped>
.card{
  margin: 0px 0px 10px 0px;
}
</style>
