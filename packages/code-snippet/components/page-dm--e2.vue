<style lang="postcss">
</style>

<template>
  <console-page-layout
    :title="title"
    :class="b()"
  >
    <DmData
      ref="dmData"
      @init="init"
    >
      <dmData :loading="loading">
        <el-table :data="list">
          <el-table-column></el-table-column>
        </el-table>
      </dmData>
    </DmData>
  </console-page-layout>
</template>

<script>
import create from 'common/utils/create-basic'
import ConsolePageLayout from 'common/components/layout/console-page-layout'
import DmData from 'common/components/Dm/DmData'
import DmToolbar from 'common/components/Dm/DmToolbar'
import DmTable from 'common/components/Dm/DmTable'

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

  components: { DmData, DmToolbar, DmTable },

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
