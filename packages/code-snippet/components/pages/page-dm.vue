<template>
  <ConsolePageLayout>
    <DmToolbar>
      <!--  -->
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
          <el-table-column
            label="标题"
            min-width="180"
            prop="title"
          />
          <el-table-column
            label="操作"
            align="right"
            width="200"
          />
        </el-table>
      </DmTable>
    </DmData>
  </ConsolePageLayout>
</template>

<script>
import consoleData from '@/mixins/consoleData'

export default {
  components: { },

  mixins: [consoleData],

  data() {
    return {
      API_INDEX: '',
      bindParams: {}
    }
  },

  methods: {
  }
}
</script>
