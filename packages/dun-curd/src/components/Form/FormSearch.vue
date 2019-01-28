<style lang="postcss">
.FormSearch {
  width: 200px !important;
}
</style>

<template>
  <el-input
    :class="b()"
    :placeholder="placeholder"
    v-model="keyword"
    :size="size"
    clearable
    prefix-icon="el-icon-search"
    @change="handleChange"
    @keyup.enter.native="handleSubmit"
  />
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: 'FormSearch',

  props: {
    value: [String, Number],
    size: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入进行查询'
    }
  },

  data() {
    return {
      keyword: ''
    }
  },

  watch: {
    value(val) {
      this.keyword = val
    },
    keyword(val) {
      this.$emit('input', val)
    }
  },

  mounted() {
    this.keyword = this.value
  },

  methods: {
    handleChange() {
      this.$emit('change', this.keyword)
    },
    handleSubmit() {
      this.$emit('submit', this.keyword)
    }
  }
})
</script>
