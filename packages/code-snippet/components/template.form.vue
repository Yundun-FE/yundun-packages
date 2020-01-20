<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    label-position="top"
    label-width="120px"
  >
    <el-form-item
      prop="alert_type"
      label="告警方式"
    >
      <yd-form-checkbox
        :checks="LABEL.NOTICE_TYPE"
        v-model="form.alert_type"
      />
    </el-form-item>
    <el-form-item
      prop="alert_control"
      label="连续告警设置"
    >
      <yd-form-select
        :selects="selectControl"
        v-model="form.alert_control"
        style="width: 200px"
        border
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox
        v-model="form.resume_alert"
        :true-label="1"
        :false-label="0"
      >
        恢复通知
      </el-checkbox>
    </el-form-item>
    <el-form-item
      label="消息接收人"
      prop="alert_receivers"
    >
      <SelectMultiple
        v-model="form.alert_receivers"
        :checks="selectNumber"
        :default-check="false"
        width="300px"
        item-name="用户"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="advance">
        高级功能
      </el-checkbox>
    </el-form-item>
    <template v-if="advance">
      <el-form-item
        label="回调URL"
        prop="alert_callback_url"
      >
        <el-input
          v-model="form.alert_callback_url"
          style="width: 300px"
        />
      </el-form-item>
      <el-form-item
        label="回调秘钥"
        prop="alert_callback_secret"
      >
        <el-input
          v-model="form.alert_callback_secret"
          style="width: 300px"
        />
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import LABEL from '../../../constants/label'
import { deepClone } from '@/utils'
import { formatLabel } from '@/utils/form'
import SelectMultiple from '@/components/Select/SelectMultiple'
import { Promise } from 'q'

const FORM = {
  alert_type: [],
  alert_receivers: [],
  resume_alert: 0,
  alert_control: 0,
  alert_callback_url: '',
  alert_callback_secret: ''
}

function validateAlertType(rule, value, callback) {
  if (value && value.length > 0) {
    callback()
  } else {
    callback(new Error('请选择告警方式'))
  }
}

function validateAlertReceivers(rule, value, callback) {
  if (value && value.length > 0) {
    callback()
  } else {
    callback(new Error('请选择消息接收人'))
  }
}

export default {
  components: { SelectMultiple },

  props: {
    uuid: String
  },

  data() {
    return {
      LABEL,
      rules: {
        alert_type: [
          {
            validator: validateAlertType
          }
        ],
        alert_receivers: [
          {
            validator: validateAlertReceivers
          }
        ]
      },
      alertType: [],
      advance: false,
      form: deepClone(FORM),
      selectNumber: [],
      selectControl: []
    }
  },

  created() {
    this.init()
  },

  methods: {
    async init() {
      const data = await this.Fetch.get('V4/cloud.monitor.alertSetting.config')
      this.selectNumber = data.receivers_list.map(_ => {
        return {
          value: _.value,
          label: _.name
        }
      })

      this.selectControl = data.control_list.map(_ => {
        return {
          value: _.value,
          label: _.name
        }
      })
    },

    restForm() {
      this.form = deepClone(FORM)
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
    },

    setForm(form) {
      this.restForm()
      if (form.alert_callback_url) this.advance = true
      Object.assign(this.form, form)
    },

    getForm() {
      this.$refs.form.validate(valid => {
        if (!valid) throw new Error()
      })

      return this.form
    },

    async initNumber() {
      const data = await this.Fetch.get('/V4/shield.notice.member.list')
      this.selectNumber = formatLabel(data.notice_member_list, 'name', 'id')
    }
  }
}
</script>
