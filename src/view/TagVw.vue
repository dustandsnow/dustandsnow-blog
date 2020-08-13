<template>
  <div class="card">
    <div class="card-header">
      标签集
    </div>
    <div class="card-body">
      <a v-for="item in tag" :key="item.id" class="btn btn-outline-success" >{{item.tag}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagVw',
  data () {
    return {
      tag: []
    }
  },
  created () {
    this.axios.get('../../static/tags.json')
      .then(res => {
        this.tag = res.data.tags
      })
  }
}
</script>

<style scoped>
  .btn-outline-success{
    margin-right: 20px;
    margin-bottom: 20px;
  }
</style>
