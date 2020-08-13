import Vue from 'vue'
import Router from 'vue-router'
import bspnav from '../components/bspnav'
import document from '../view/document'
import main from '../view/main'
import neirong from '../view/rewen-neirong'
import relist from '../components/relist'
import info from '../view/info'
import loading from '../components/loading'
import tag from '../components/tag'
import lunbo from '../components/lunbo'
import TagVw from '../view/TagVw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'tnav',
      component: bspnav
    },
    {
      path: '/card',
      name: 'card',
      component: document
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
        {
          path: '',
          component: relist
        },
        {
          path: 'relist',
          name: 'relist',
          component: relist
        },
        {
          path: 'neirong',
          name: 'neirong',
          component: neirong
        },
        {
          path: '/tagvm',
          name: 'tagvm',
          component: TagVw
        }
      ]
    },
    {
      path: '/neirong1',
      name: 'neirong1',
      component: neirong
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/login',
      name: 'login',
      component: loading
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/lunbo',
      name: 'lunbo',
      component: lunbo
    }
  ]
})
