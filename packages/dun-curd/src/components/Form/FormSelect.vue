<template>
  <el-select
    v-model="val"
    :size="size"
    :placeholder="placeholder"
    :disabled="disabled"
    :filterable="filterable"
    @change="handleChange"
  >
    <el-option
      v-if="defaultText"
      :size="size"
      :label="defaultText"
      value=""
    >{{ defaultText }}</el-option>
    <el-option
      v-for="item in selects"
      :size="size"
      :key="item.value"
      :disabled="item.disabled"
      :value="item.value"
      :label="item.label"
    />
  </el-select>
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: 'yd-form-select',

  props: {
    placeholder: String,
    disabled: Boolean,
    defaultText: String,
    size: {
      type: String,
      default: ''
    },
    selects: {
      type: Array,
      default: () => {
        return []
      }
    },
    filterable: Boolean,
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
