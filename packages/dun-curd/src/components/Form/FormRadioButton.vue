<template>
  <el-radio-group
    v-model="val"
    :size="size"
    @change="handleChange"
  >
    <el-radio-button
      v-if="defaultLabel"
      :label="defaultValue"
      :key="defaultValue"
    >{{ defaultLabel }}</el-radio-button>
    <el-radio-button
      v-for="item in radios"
      :key="item.value"
      :disabled="item.disabled"
      :label="item.value"
    >{{ item.label }}</el-radio-button>
    <slot />
  </el-radio-group>
</template>

<script>
import create from '@/utils/create-basic'

export default create({
  name: 'yd-form-radio-button',

  props: {
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
    defaultLabel: String,
    defaultValue: {
      type: String,
      default: ''
    },
    value: [String, Number, Boolean]
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
  },

  methods: {
    handleChange(val) {
      this.$emit('change', val)
    }
  }
})
</script>
