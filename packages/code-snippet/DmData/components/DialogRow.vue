<template>
  <DmDialog
    ref="Dialog"
    :fetch-submit="fetchSubmit"
    :mode="mode"
    width="500px"
    title-label="角色"
    @submit="handleSubmit"
  >
    <el-form :model="form">
      <el-form-item
        label="Name"
        prop="name"
      >
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item
        label="名称"
        prop="title"
      >
        <el-input v-model="form.title" />
      </el-form-item>
    </el-form>
  </DmDialog>
</template>

<script>
import createDialog from '@/utils/createDialog'

export default createDialog({
  data() {
    return {
      formDefault: {
        name: '',
        title: ''
      },
      formRules: {
        content: { required: true, message: '请输入' }
      }
    }
  },

  methods: {
    initOptions(form, options) {
      this.mode = form.id ? 'Edit' : 'Create'
    },

    async fetchSubmit() {
      const form = {
        shopId: this.userInfo.shopId,
        ...this.form
      }
      try {
        if (this.mode === 'Create') {
          await this.Fetch.post('v1/admin/', form)
        } else {
          await this.Fetch.put(`v1/admin//${form.id}`, form)
        }
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
