<style lang="postcss" scoped>
</style>

<template>
  <yd-dialog
    :class="b()"
    :title="title"
    :visible.sync="open"
    v-loading
    :close-on-click-modal="true"
  >
    <div slot="footer">
      <el-button
        type="text"
        @click="handleClose"
      >取消</el-button>
      <el-button
        @click="handleSubmit"
        type="primary"
      >保存</el-button>
    </div>
  </yd-dialog>
</template>

<script>
import create from 'common/utils/create-basic'
import { deepClone } from 'common/utils'

export default create({
  name: 'dialog',

  components: {},

  data() {
    return {
      title: '',
      open: false,
      form: {

      }
    }
  },

  methods: {
    handleOpen(form) {
      this.form = deepClone(form)
      this.open = true
    },

    handleClose() {
      this.open = false
    },

    handleSubmit() {
      this.$emit('submit', this.form)
    }
  }
})
</script>
