<template>
  <div>
    <DialogForm
      ref="Dialog"
      v-model="form"
      :rules="rules"
      :form-default="formDefault"
      title=" "
      cancel-button-type="text"
      @submit="handleSubmit"
    >
      <el-form-item label="转发方式">
    
      </el-form-item>
    </DialogForm>
  </div>
</template>

<script>
import RULE from '@/utils/verify'
import { validator } from '@/utils/form'
import createDialog from '@/mixins/createDialog'

export default createDialog({
  mixins: [consoleDialog],

  data() {
    return {
      rules: {},
      formDefault: {},
      form: {}
    }
  },

  methods: {
    resetSubmitLoading() {
      this.$refs.Dialog.submitLoading = false
    },

    handleSubmit() {
      this.$emit('submit', this.form)
    }
  }
})
</script>
