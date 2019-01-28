// 控制台表单，用于读取表单配置和常规表单提交

import Fetch from '@/utils/fetch'
import Notice from '@/utils/notice'
import { deepClone, isDef } from '@/utils'
import { merge } from 'lodash/object'

function formatForm(data) {
  const form = {}
  data.forEach(item => {
    form[item.prop] = isDef(item.default) ? item.default : ''
  })
  return form
}

function formatRules(data) {
  const rules = {}
  data.forEach(item => {
    if (item.rules) rules[item.prop] = item.rules
  })
  return rules
}

export default {
  data() {
    return {
      loading: true,
      mode: 'Create',
      rules: {},
      form: {},
      FORM: {},
      id: ''
    }
  },

  created() {
    this.initFormLayout()
  },

  methods: {
    initData() {},

    async init() {
      if (this.API_NAME && this.id) {
        this.mode = 'Edit'
        const data = await Fetch.get(`/${this.API_NAME}/${this.id}`)
        this.form = Object.assign(deepClone(this.FORM), data)
      }
      // if (!data.settings) data.settings = deepClone(this.FORM.settings)

      this.initData()
    },
    // 读取默认表单和验证规则
    async initFormLayout() {
      if (this.API_NAME) {
        const data = await Fetch.get(`/${this.API_NAME}`, { resources: 'form' })
        this.FORM = formatForm(data)
        this.rules = formatRules(data)
      }
      this.init()
    },

    handleReset() {
      this.form = deepClone(this.FORM)
    },

    async handleSubmit() {
      const form = deepClone(this.form)
      console.log(this)
      try {
        if (this.mode === 'Edit') {
          if (this.API_NAME && this.id) {
            await Fetch.patch(`/${this.API_NAME}/${this.id}`, form)
          } else {
            await this.handleEditSubmit(this.form)
          }
        } else {
          if (this.API_NAME) {
            await Fetch.post(`/${this.API_NAME}`, form)
          } else {
            await this.handleCreateSubmit(this.form)
          }
        }
      } catch (e) {
        return
      }
      Notice('ACTION_SUCCESS')
      if (this.$refs.Dialog) {
        this.$emit('init')
        this.$refs.Dialog.handleClose()
      }
    }
  }
}
