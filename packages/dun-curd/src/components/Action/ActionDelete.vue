<template>
  <el-popover v-model="visible" placement="top" width="160">
    <p>确定删除？</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false">取消</el-button>
      <el-button type="primary" size="mini" @click="handleClick">确定</el-button>
    </div>
    <el-button slot="reference" type="text" size="small">删除</el-button>
  </el-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },

  methods: {
    handleClick() {
      this.$emit('click')
      this.visible = false
    }
  }
}
</script>
