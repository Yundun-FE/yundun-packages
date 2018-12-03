<style lang="postcss">
</style>

<template>
  <console-page-layout :title="title" :class="b()">
    <DmData ref="dmData" @init="init">
      <yd-table :loading="loading">
        <el-table :data="list">
          <el-table-column></el-table-column>
        </el-table>
      </yd-table>
    </DmData>
  </console-page-layout>
</template>

<script>
import ConsolePageLayout from 'common/components/layout/console-page-layout'
import DmData from 'common/components/DmData/DmData'
import create from 'common/utils/create-basic'

export default create({
  name: '',

  props: {},

  data() {
    return {
      title: '',
      loading: true,
      list: []
    }
  },

  components: { ConsolePageLayout },

  computed: {},

  methods: {
    async init(params) {
      this.loading = true
      // const data = await 
      // const {list = []} = data
      // const total = parseInt(data.total, 10)
      // this.$refs.dmData.init({ total })
      this.loading = false
    }
  }
})
</script>
