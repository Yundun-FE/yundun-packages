import { isDef } from '../utils'

export default {
  props: {
    beforeOpen: Function
  },

  data() {
    return {
      bindForm: {}
    }
  },

  methods: {
    handleClose() {
      this.$refs.Dialog.handleClose()
    },

    handleOpen(form = {}) {
      this.initFormLayout && this.initFormLayout()
      Object.assign(this.FORM, this.bindForm)

      this.handleReset()
      if (isDef(form.id)) {
        this.mode = 'Edit'
      } else {
        this.mode = 'Create'
      }

      Object.assign(this.form, form)
      this.$refs.Dialog.handleOpen(form)
    }
  }
}
