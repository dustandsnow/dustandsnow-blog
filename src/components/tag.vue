<template>
    <div class="card">
      <svg :width="width" :height="height">
        <a :href="tag.href" v-for='(tag,index) in tags' :key="tag.id">
          <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)' :fill="colors[index]">{{tag.tag}}</text>
        </a>
      </svg>
    </div>
</template>

<script>
export default {
  name: 'tag',
  data: function () {
    return {
      width: 260,
      height: 260,
      tagsNum: 20,
      RADIUS: 100,
      speedX: Math.PI / 360,
      speedY: Math.PI / 360,
      tags: [],
      colors: []
    }
  },
  computed: {
    CX () {
      return this.width / 2
    },
    CY () {
      return this.height / 2
    }
  },
  created () { // 初始化标签位置
    this.changeColors()
    let tags = []
    const res = this.axios.get('../../static/tags.json')
    res.then(r => {
      tags = r.data.tags
      this.tagsNum = tags.length
      for (let i = 0; i < this.tagsNum; i++) {
        let k = -1 + (2 * (i + 1) - 1) / this.tagsNum
        let a = Math.acos(k)
        let b = a * Math.sqrt(this.tagsNum * Math.PI)
        tags[i].x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b) - 15
        tags[i].y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b) + 5
        tags[i].z = this.RADIUS * Math.cos(a)
        tags[i].href = 'https://github.com/dustandsnow/dustandsnow-blog'
      }
      this.tags = tags
    })
  },
  mounted () { // 使球开始旋转
    setInterval(() => {
      this.rotateX(this.speedX)
      this.rotateY(this.speedY)
    }, 17)
  },
  methods: {
    rotateX (angleX) {
      let cos = Math.cos(angleX)
      let sin = Math.sin(angleX)
      for (let tag of this.tags) {
        let y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
        let z1 = tag.z * cos + (tag.y - this.CY) * sin
        tag.y = y1
        tag.z = z1
      }
    },
    rotateY (angleY) {
      let cos = Math.cos(angleY)
      let sin = Math.sin(angleY)
      for (let tag of this.tags) {
        let x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
        let z1 = tag.z * cos + (tag.x - this.CX) * sin
        tag.x = x1
        tag.z = z1
      }
    },
    changeColors () {
      for (let i = 0; i < 30; i++) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        this.colors[i] = 'rgb(' + r + ',' + g + ',' + b + ')'
      }
    },
    listen (event) { // 响应鼠标移动
      let x = event.clientX - this.CX - 15
      let y = event.clientY - this.CY + 5
      this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002, x * 0.0001)
      this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002, y * 0.0001)
    }
  }
}
</script>

<style scoped>

</style>
