<style lang="less">
</style>

<template>
  <div>
    <el-form>
      <el-form-item prop="name" label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item prop="remark" label="备注">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {}
  },

  computed: {},

  methods: {}
}
</script>
