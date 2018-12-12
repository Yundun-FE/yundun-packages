<template>
  <console-page-layout
    :title="title"
    :class="b()"
  >
    <DmData
      ref="dmData"
      @init="init"
    >
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
import Fetch from 'common/api/fetch'
import { formatList, mergeParams } from 'common/utils/response'

export default create({
  name: '',

  props: {},

  data() {
    return {
      title: '',
      loading: true,
      list: [],
      params: {}
    }
  },

  components: { ConsolePageLayout },

  computed: {},

  methods: {
    handleSearch() {
      this.$refs.dmData.initPage()
    },

    async init(params) {
      this.loading = true
      try {
        // const { list, total } = formatList(await Fetch.get('', mergeParams(params, this.params)))
        // this.list = list
        // this.$refs.dmData.init({ total })
      } finally {
        this.loading = false
      }
    }
  }
})
</script>
