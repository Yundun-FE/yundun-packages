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
    >
      <DmTable
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
import create from '@/utils/create-basic'
import consoleData from '@/mixins/consoleData'

export default create({
  name: '',

  mixins: [consoleData],

  data() {
    return {
      title: '',
      params: {}
    }
  },

  methods: {
    formatResponse(response) {

      return response
    }
  }
})
</script>
