<template>
  <div>
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
        <yd-form-radio/>
      </el-form-item>
    </DialogForm>
  </div>
</template>

<script>
import RULE from '@/utils/verify'
import { validator } from '@/utils/form'
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
    handleSubmit() {
      this.$emit('submit', this.form)
    }
  }
})
</script>
