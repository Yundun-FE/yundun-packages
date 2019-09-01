<style lang="scss">
</style>

<template>
  <div :class="b()">
    <el-input-number
      v-model="val"
      :min="0"
      :max="100000"
      controls-position="right"
      @change="handleChange"
    />
  </div>
</template>

<script>
import create from '@/utils/create-basic'

export default create({
  name: '',

  props: {
    value: Object
  },

  data() {
    return {
      val: 0
    }
  },

  watch: {
    value(val) {
      this.init()
    }
  },

  created() {
    this.init()
  },

  methods: {
    init() {
      const value = this.value
      if (typeof value === 'object') {
        this.val = value
      }
    },

    handleChange() {
      const value = {
      
      }
      this.$emit('input', value)
    }
  }
})
</script>
