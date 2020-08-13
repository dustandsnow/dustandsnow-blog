<template>
  <div>
    <div class="right">
      <info></info>
      <div class="card">
        <div class="card-body">
          <h5>热点信息</h5>
          <ul class="list-group">
            <li class="list-group-item" v-for="item in rewen" :key="item.id" @click="zhankai(item.id)">
              <!-- <blockquote class="blockquote">
                 <p class="mb-0">-->{{item.title}}<!--</p>
               &lt;!&ndash; <footer class="blockquote-footer">{{item.footer}} </footer>&ndash;&gt;
              </blockquote>-->
            </li>
          </ul>
        </div>
      </div>
      <tag ></tag>
    </div>
    <card :listid="listid" class="left" ></card>
  </div>
</template>

<script>
import Card from '../view/document'
import Info from '../view/info'
import Tag from './tag'
export default {
  name: 'relist',
  components: {Tag, Info, Card},
  data () {
    return {
      rewen: [],
      listid: ''
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
      this.listid = id
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
    cursor: pointer;
  }

  .left{
    width: 75%;
    float: left;
  }
  .right{
    width: 24%;
    float: right;
  }
  ul,li{
    border: none;
  }
  .card{
    margin-bottom: 20px;
  }
  .yun{
    width: 13.75rem;
    height: 13.75rem;
  }
</style>
