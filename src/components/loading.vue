<template>
    <div class="container">
      <form class="form-horizontal">
        <div class="form-group row has-feedback">
          <label for="inputEmail3" class="col-sm-2 control-label">账号：</label>
          <div class="col-sm-10">
            <input type="text" v-model="name" class="form-control" id="inputEmail3" placeholder="请输入账号">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 control-label">密码：</label>
          <div class="col-sm-10">
            <input type="password" v-model="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
          </div>
        </div>
        <div v-if="this.$route.params.id" class="form-group row">
          <label for="inputPassword4" class="col-sm-2 control-label">密码：</label>
          <div class="col-sm-10">
            <input type="password" v-model.lazy="rpassword" class="form-control" id="inputPassword4" placeholder="请再次输入密码">
          </div>
        </div>
        <!--<div v-if="!this.$route.params.id" class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Remember me
              </label>
            </div>
          </div>
        </div>-->
        <div class="form-group row">
          <div v-if="!this.$route.params.id" class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">登录</button>
          </div>
          <div v-else class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">注册</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      name: '',
      password: '',
      rpassword: ''
    }
  },
  watch: {
    'rpassword': function () {
      if (this.password !== this.rpassword) {
        alert('密码不一致12')
      }
    }
  }
}
</script>

<style scoped>
.container{
  width: 30%;
  height: 60%;
  margin-top: 15%;
}
  label{
    line-height: 30px;
  }
</style>
