<template>
  <Dialog
    :class="b()"
    :title="title"
    :visible.sync="open"
    v-loading
    :close-on-click-modal="true"
  >
    <el-form
      ref="form"
      :model="form"
      :rules="RULES"
    >
      <el-form-item
        label="名称"
        prop="name"
      >
        <el-input
          v-model="form.name"
          style="width: 220px"
        ></el-input>
      </el-form-item>

      <!-- <el-form-item
        label="消息接收人"
        prop="notice_user"
      >
        <SelectMultiple
          v-model="form.notice_user"
          id="notice_user"
          item-name="用户"
          :checks="selectNumber"
          :default-check="false"
        ></SelectMultiple>
      </el-form-item> -->
    </el-form>
    <div slot="footer">
      <el-button
        type="text"
        @click="handleClose"
      >取消</el-button>
      <el-button
        @click="handleSubmit"
        type="primary"
      >保存</el-button>
    </div>
  </Dialog>
</template>

<script>
import create from 'common/utils/create-basic'
import Dialog from 'common/components/Dialog/Dialog'
import SelectMultiple from 'common/components/Select/SelectMultiple'
// import LABEL from '../constants/label'
// import { FORM, RULES } from './form'
import { deepClone } from 'common/utils'
// import { labelView } from 'common/service/filter'
// import { formatLabel } from 'common/utils/form'

const FORM = {}

export default create({
  name: 'AddPropertyDialog',

  components: { Dialog, SelectMultiple },

  data() {
    return {
      // RULES,
      // LABEL,
      open: false,
      mode: '',
      form: {}
    }
  },

  computed: {
    title() {
      const name = 'dialog'
      return this.mode === 'EDIT' ? `修改${name}` : `新增${name}`
    }
  },

  // watch: {
  //   'form.name': function (val) {
  //     this.$nextTick(() => {
  //       this.$refs.form.clearValidate()
  //     })
  //   }
  // },

  methods: {
    handleOpen(form = {}, mode) {
      this.mode = mode
      this.form = Object.assign(deepClone(FORM), form)
      this.$refs.form && this.$refs.form.clearValidate()
      this.open = true
    },

    handleClose() {
      this.open = false
    },

    handleSubmit() {
      const form = deepClone(this.form)
      form._mode = this.mode
      this.$emit('submit', form)
    }
  }
})
</script>
