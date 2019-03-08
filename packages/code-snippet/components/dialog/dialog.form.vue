<template>
  <DialogForm
    ref="Dialog"
    v-model="form"
    :rules="rules"
    :form-default="formDefault"
    title=""
    cancel-button-type="text"
    @submit="handleSubmit"
  >
    <el-form-item label="通知方式">
      <yd-form-radio />
    </el-form-item>
  </DialogForm>
</template>

<script>
import RULE from '@/utils/verify'
import createDialog from '@/mixins/createDialog'

export default createDialog({
  data() {
    return {
      rules: {},
      formDefault: {},
      form: {}
    }
  },

  methods: {
    async handleSubmit() {
      const form = {
        ...this.form
      }
      try {
        await this.Fetch.post('', form)
      } catch (e) {
        this.resetSubmitLoading()
        return
      }
      this.Message('ACTION_SUCCESS')
      this.handleClose()
    }
  }
})
</script>
