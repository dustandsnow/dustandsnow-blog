<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <img src="../assets/loge.jpg" height="30px" width="30px">
      <a class="navbar-brand" href="/relist">Dustandsnow</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li :class="['nav-item','dropdown',glindex === index ? 'active':'']" v-for="(nav,index) in navs" v-on:click="gaolaing(index)" :key="nav.title">
            <a class="nav-link" :href="nav.href">{{nav.title}}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="nav.xiala">
              <a class="dropdown-item" href="#" v-for="chile in nav.child" :key="chile">{{chile}}</a>
            </div>
          </li>
        </ul>
        <!--<form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="请输入关键字" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">查询</button>
        </form>-->
        <div @click="dengl">
          <span @click="dengl(false)">登录  /</span>
          <span @click="dengl(true)">注册</span>
        </div>
      </div>
    </nav>
</template>

<script>
import Card from '../view/document'
export default {
  name: 'bspnav',
  components: {Card},
  data: function () {
    return {
      glindex: 0,
      navs: [{
        title: '主页',
        href: '/'
      },
      {
        title: '文章',
        href: '#'
      },
      {
        title: '笔记',
        href: '#'
      },
      {
        title: '留言',
        href: '#',
        xiala: 'ture',
        child: {
          title1: 'Action',
          title2: 'Another',
          title3: 'Something else'
        }
      }]
    }
  },
  mounted () {
    this.xiala()
  },
  methods: {
    gaolaing: function (n) {
      this.glindex = n
    },
    xiala: function () {
      this.$('.dropdown-menu').parent().addClass('dropdown')
      this.$('.dropdown-menu').prev().addClass('dropdown-toggle').attr({
        'id': 'navbarDropdown',
        'role': 'button',
        'data-toggle': 'dropdown',
        'aria-haspopup': 'true',
        'aria-expanded': 'false'
      })
    },
    dengl: function (i) {
      this.$router.push({
        name: 'login',
        params: {
          id: i
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .beijinhg{
    width: 90%;
    height: 300px;
    background-image: url("../assets/zhuye.jpg") ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: auto;
  }
  nav{
    margin: auto;
    max-width: 1140px;
  }
  image{
    margin: 8px;
  }
</style>
