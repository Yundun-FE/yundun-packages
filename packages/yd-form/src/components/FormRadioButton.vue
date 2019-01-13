<template>
  <el-radio-group
    v-model="val"
    :size="size"
    :disabled="disabled"
  >
    <el-radio-button
      v-for="item in radios"
      :key="item.value"
      :disabled="item.disabled"
      :label="item.value"
    >{{item.label}}</el-radio-button>
    <slot></slot>
  </el-radio-group>
</template>

<script>
import create from '../utils/create-basic'

export default create({
  name: 'yd-form-radio-button',

  props: {
    size: {
      type: String,
      default: 'small'
    },
    border: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
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
      this.$emit('input', val)
    },
    value(val) {
      this.val = val
    }
  }
})
</script>
