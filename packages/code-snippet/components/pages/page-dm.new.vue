<template>
  <console-page-layout>
    <DmToolbar>
      <div slot="right">
        <InputSearch />
      </div>
    </DmToolbar>
    <DmData
      ref="DmData"
      @init="fetchList"
    >
      <DmTable
        :loading="loading"
        min-height
      >
        <el-table 
          :data="list" 
          @select="handleRowSelect"
          @select-all="handleRowSelect"
        >
                  <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column />
        </el-table>
      </DmTable>
    </DmData>
  </console-page-layout>
</template>

<script>
import consoleData from '@/mixins/consoleData'

export default {
  mixins: [consoleData],

  data() {
    return {
      API_INDEX: '',
      bindParams: {},
      selectionId: []
    }
  },

  methods: {
    formatResponse(response) {
      return response
    },

    handleRowSelect(selection) {
      this.selectionId = selection.map(_ => _.id)
    },

  }
}
</script>
