<template>
  <el-row>
    <el-col :span="9">
      <el-form-item
        label="应用名称"
        prop="name"
      >
        <el-input
          v-model="form.name"
          placeholder="名称"
        />
      </el-form-item>
      <el-form-item
        label="CODE"
        prop="code"
      >
        <el-input
          v-model="form.code"
        />
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script>
export default {
  computed: {
    form() {
      return this.$parent.model
    }
  }
}
</script>
