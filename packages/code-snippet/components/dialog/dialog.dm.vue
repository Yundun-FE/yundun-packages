<template>
  <DmDialog
    ref="Dialog"
    :rule="rule"
    :option="option"
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
      option: {
        form: {
          size: 'small',
          labelPosition: 'right'
        },
        submitBtn: {
          show: false
        },
        row: {
          gutter: 12
        }
      },
      rule: [
        {
          type: 'input',
          title: '资产地址',
          field: 'property_object',
          value: '',
          props: {
            placeholder: '域名/IP'
          },
          validate: [{
            required: true,
            message: '请输入资产地址',
            trigger: 'blur'
          }
          ]
        }
      ]
    }
  },

  methods: {
    beforeOpen() {
      //
    },

    async fetchSubmit(form) {
      form = {
        ...form
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
