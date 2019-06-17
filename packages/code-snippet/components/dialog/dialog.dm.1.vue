<template>
  <DmDialog
    ref="Dialog"
    :fetch-submit="fetchSubmit"
    width="500px"
    title="添加资产"
    @submit="handleSubmit"
  >
    <!--  -->
  </DmDialog>
</template>

<script>
import RULE from '@/utils/verify'
import createDialog from '@/utils/createDialog'

export default createDialog({
  data() {
    return {
      formData: {
        name: ''
      },
      rule: {
        name: [
          {

          }
        ]
      }
    }
  },

  methods: {
    beforeOpen() {
      //
    },

    async fetchSubmit(form) {
      form = {
        ...this.formData
      }
      try {
        await this.Fetch.post('', form)
      } catch (e) {
        throw new Error()
      }
    },

    async handleSubmit(form) {
      this.Message('ACTION_SUCCESS')
      this.$emit('init')
      this.handleClose()
    }
  }
})
</script>
