<template>
    <div class="card">
      <img class="card-img-top" src="../assets/card.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{info.name}}</h5>
        <p class="card-text">{{info.language}}</p>
        <p class="card-text"><small class="text-muted">{{info.lable}}</small></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      info: {}
    }
  },
  created () {
    this.axios.get('../../static/introduce.json')
      .then(res => {
        this.info = res.data.info
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
