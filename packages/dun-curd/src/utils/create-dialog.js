/**
 * Create a cudr component with common options
 */

import app from '../mixins/app'
import consoleEdit from '../mixins/consoleEdit'
import consoleDialog from '../mixins/consoleDialog'
import { isDef } from './'

const install = function(Vue) {
  Vue.component(this.name, this)
}

export default function(sfc) {
  sfc.install = sfc.install || install
  sfc.mixins = sfc.mixins || []
  sfc.mixins.push(app, consoleEdit, consoleDialog)

  sfc.props = {
    handleEditSubmit: Function,
    handleCreateSubmit: Function,
    API_NAME: {
      type: String,
      default: sfc.API_NAME
    }
  }

  sfc.methods = sfc.methods || {}
  sfc.methods.isDef = isDef

  return sfc
}
