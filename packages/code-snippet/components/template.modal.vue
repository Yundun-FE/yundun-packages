<style lang="scss">
</style>

<template>
  <Modal
    ref="Modal"
    :width="700"
    title-label="配置"
    @submit="fetchSubmit"
  >

  </Modal>
</template>

<script>
import create from '@/utils/create-basic'

export default create({
  mixins: [],

  data() {
    return {

    }
  },

  methods: {
    async fetchSubmit() {
      const form = this.form.getFieldsValue()
      const columns = []
      this.columns.forEach((item, index) => {
        columns.push(this.$refs[`FormColumn${index}`][0].form.getFieldsValue())
      })

      form.settings = columns

      try {
        this.$refs.Modal.startSubmitLoading()
        await this.Fetch.put(`/v2/jobs/${this.jobsId}/settings/${form.name}`, form)
      } finally {
        this.Notice('ACTION_SUCCESS')
        this.$refs.Modal.handleClose()
        this.$refs.Modal.resetSubmitLoading()
      }
    },

    afterOpen(form) {

    }
  }
})
</script>
