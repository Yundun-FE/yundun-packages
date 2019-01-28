<style lang="postcss">
</style>

<template>
  <div :class="b()">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="(item, index) in data"
        :key="index"
        :name="item.name"
        :label="item.meta.title"
      />
    </el-tabs>
  </div>
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: 'HeaderTab',

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      activeName: this.$route.name
    }
  },

  methods: {
    handleClick(val) {
      const data = this.data[val.index]
      this.activeName = data.name
      this.$router.push({
        path: '../' + data.path,
        append: true
      })
    }
  }
})
</script>
