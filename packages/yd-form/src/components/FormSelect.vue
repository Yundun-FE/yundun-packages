<template>
  <el-select
    v-model="val"
    :size="size"
    :placeholder="placeholder"
    @change="handleChange"
    :disabled="disabled"
  >
    <el-option
      :size="size"
      value=""
      :label="defaultText"
      v-if="defaultText"
    >{{defaultText}}</el-option>
    <el-option
      :size="size"
      v-for="item in selects"
      :key="item.value"
      :disabled="item.disabled"
      :value="item.value"
      :label="item.label"
    ></el-option>
  </el-select>
</template>

<script>
import create from '../utils/create-basic'

export default create({
  name: 'yd-form-select',

  props: {
    placeholder: String,
    disabled: Boolean,
    defaultText: String,
    size: {
      type: String,
      default: 'small'
    },
    selects: {
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
  },

  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
})
</script>
