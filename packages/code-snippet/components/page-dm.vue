<template>
  <console-page-layout
    :title="title"
    :class="b()"
  >
    <DmToolbar>
      <div slot="right">
        <InputSearch></InputSearch>
      </div>
    </DmToolbar>
    <DmData
      ref="DmData"
      @init="init"
      class="margin-top"
    >
      <DmTable
        size="medium"
        min-height
        :loading="loading"
      >
        <el-table :data="list">
          <el-table-column></el-table-column>
        </el-table>
      </DmTable>
    </DmData>
  </console-page-layout>
</template>

<script>
import ConsolePageLayout from 'common/components/layout/console-page-layout'
import DmData from 'common/components/DmData/DmData'
import DmToolbar from 'common/components/Dm/DmToolbar'
import create from 'common/utils/create-basic'
import Fetch from 'common/api/fetch'
import { formatList, mergeParams } from 'common/utils/response'
import ColumnAction from 'common/components/Column/ColumnAction'
import InputSearch from 'common/components/Input/InputSearch'

export default create({
  name: '',

  components: { ConsolePageLayout, DmData, ColumnAction },

  data() {
    return {
      title: '',
      loading: true,
      list: [],
      params: {}
    }
  },

  computed: {},

  methods: {
    handleSearch() {
      this.$refs.DmData.initPage()
    },

    async init(params) {
      params = params || this.$refs.DmData.getParams()
      this.loading = true
      try {
        // const { list, total } = formatList(await Fetch.get('', mergeParams(params, this.params)))
        // this.list = list
        // this.$refs.DmData.init({ total })
      } finally {
        this.loading = false
      }
    }
  }
})
</script>
