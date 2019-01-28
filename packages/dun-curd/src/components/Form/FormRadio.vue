<template>
  <el-radio-group v-model="val">
    <el-radio
      v-for="item in radios"
      :key="item.value"
      :disabled="item.disabled || disabled"
      :label="item.value"
      :border="border"
    >{{ item.label }}</el-radio>
  </el-radio-group>
</template>

<script>
import create from '../../utils/create-basic'

export default create({
  name: 'yd-form-radio',

  props: {
    disabled: Boolean,
    size: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    },
    radios: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: [String, Number]
  },

  data() {
    return {
      val: this.value
    }
  },

  watch: {
    val(val) {
      this.$emit('change', val)
      this.$emit('input', val)
    },
    value(val) {
      this.val = val
    }
  }
})
</script>
