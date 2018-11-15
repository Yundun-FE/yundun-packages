<style lang="postcss">
</style>

<template>
  <yd-table :class="b()" :loading="loading" add-btn @add-row="handleAddRow">
    <el-table :data="list">
      <el-table-column></el-table-column>
    </el-table>
  </yd-table>
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: '',

  props: {
    loading: Boolean,
    list: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {
    handleAddRow() {
      this.list.push()
    }
  }
})
</script>
