import { merge } from 'lodash/object'

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

    handleOpen(form) {
      if (form) {
        this.mode = 'Edit'
        this.form = form
        console.log(form)
        if (form.id) this.id = form.id
      } else {
        this.mode = 'Create'
        this.id = ''
        Object.assign(this.FORM, this.bindForm)
        this.handleReset()
      }
      this.$refs.Dialog.handleOpen(form)
    }
  }
}
