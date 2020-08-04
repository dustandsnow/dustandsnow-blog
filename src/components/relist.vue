<template>
    <div>
      <div class="header-panel"><h3>热点信息</h3></div>
      <ul class="list-group">
        <li class="list-group-item" v-for="item in rewen" :key="item.id" @click="zhankai(item.id)">
         <!-- <blockquote class="blockquote">
            <p class="mb-0">-->{{item.title}}<!--</p>
           &lt;!&ndash; <footer class="blockquote-footer">{{item.footer}} </footer>&ndash;&gt;
          </blockquote>-->
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'relist',
  data () {
    return {
      rewen: []
    }
  },
  created () {
    this.axios.get('../../static/renmen.json')
      .then(res => {
        this.rewen = res.data.remen
      })
  },
  methods: {
    zhankai: function (id) {
      console.log(id)
      this.$router.push({
        name: 'neirong',
        params: {
          id: id,
          list: this.rewen
        }
      })
    }
  }
}
</script>

<style scoped>
  .blockquote-footer::before {
     content: "";
  }
  .list-group-item{
    /*height: 80px;*/
  }
</style>
