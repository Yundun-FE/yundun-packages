<template>
  <ModalForm ref="ModalForm">
    <template slot-scope="scope">
      <a-form-item>
        
      </a-form-item>
    </template>

  </ModalForm>
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
