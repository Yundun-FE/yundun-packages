<style lang="postcss">
</style>

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
        min-height
        :loading="loading"
        size="medium"
      >
        <el-table :data="list">
          <el-table-column></el-table-column>
        </el-table>
      </DmTable>
    </DmData>
  </console-page-layout>
</template>

<script>
import create from 'common/utils/create-basic'
import { formatList, mergeParams } from 'common/utils/response'
import Fetch from 'common/api/fetch'

export default create({
  name: '',

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
