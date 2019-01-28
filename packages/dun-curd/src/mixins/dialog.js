import { isDef } from '../utils'

export default {
  data() {
    return {
      visible: false,
      mode: 'Create'
    }
  },

  methods: {
    handleClose() {
      this.visible = false
    },

    handleOpen(form) {
      if (form) this.mode = 'Edit'
      this.visible = true
    }
  }
}
