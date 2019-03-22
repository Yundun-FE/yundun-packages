<template>
  <console-page-layout :class="b()">
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
        <el-table :data="list">
          <el-table-column />
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
      API_NAME: '',
      bindParams: {}
    }
  },

  methods: {
    formatResponse(response) {
      return response
    }
  }
})
</script>
