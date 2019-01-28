<template>
  <el-dropdown
    :class="b()"
    split-button
    trigger="click"
    @click="handleClick"
    @command="handleCommand"
  >
    <slot/>
    <el-dropdown-menu slot="dropdown">
      <slot name="dropdown"/>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import create from '../../utils/create-basic'

export default create({
  name: 'ButtonAction',

  methods: {
    handleClick(scope) {
      this.$emit('click', scope)
    },

    handleCommand(scope) {
      const { mode, row } = scope
      if (mode === 'delete') {
        this.$confirm('您确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$emit('command', scope)
        })
      } else {
        this.$emit('command', scope)
      }
    }
  }
})
</script>
