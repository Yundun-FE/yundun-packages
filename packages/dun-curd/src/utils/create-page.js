/**
 * Create a cudr component with common options
 */

import app from '../mixins/app'
import pageLayout from '../mixins/pageLayout'
import consolePage from '../mixins/consolePage'
import consoleCudr from '../mixins/consoleCudr'
import { isDef } from './'

const install = function(Vue) {
  Vue.component(this.name, this)
}

export default function(sfc) {
  const { config } = sfc

  sfc.install = sfc.install || install
  sfc.mixins = sfc.mixins || []
  sfc.mixins.push(app, consolePage, pageLayout, consoleCudr)

  sfc.props = {
    config: {
      type: Object,
      default: function() {
        return config
      }
    },
    pageName: {
      type: String,
      default: sfc.pageName
    },
    API_NAME: {
      type: String,
      default: sfc.API_NAME
    }
  }

  sfc.methods = sfc.methods || {}
  sfc.methods.isDef = isDef

  return sfc
}
