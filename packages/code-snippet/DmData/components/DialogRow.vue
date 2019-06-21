<template>
  <DmDialog
    ref="Dialog"
    width="500px"
    title="添加资产"
    @submit="handleSubmit"
  >
    <!--  -->
  </DmDialog>
</template>

<script>
import createDialog from '@/utils/createDialog'

export default createDialog({
  data() {
    return {
      formDefault: {
        name: ''
      },
    }
  },

  methods: {
    initOptions(options) {
    },

    async fetchSubmit() {
      const form = {
        ...this.form
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
