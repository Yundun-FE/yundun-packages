<template>
  <ConsolePageLayout>
    <DmToolbar>
      <el-button
        type="primary"
        @click="$refs.DialogRow.handleOpen()"
      >新增</el-button>
      <el-button
        :disabled="!multipleSelection.length"
        @click="handleDelete"
      >删除</el-button>
      <div slot="right">
        <InputSearch
          v-model="bindParams.name"
          @submit="handleSearch"
        />
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
          @selection-change="handleRowSelect"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            label=""
            prop=""
            min-width="150"
          />
          <el-table-column
            label="操作"
            align="right"
            min-width="150"
          >
            <template slot-scope="scope">
              <el-button @click="$refs.DialogRow.handleOpen(scope.row)">编辑</el-button>
              <el-divider direction="vertical" />
              <el-button @click="handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </DmTable>
    </DmData>
    <DialogRow
      ref="DialogRow"
      @init="fetchList"
    />
  </ConsolePageLayout>
</template>

<script>
import consoleData from '@/mixins/consoleData'
import DialogRow from './components/DialogRow'

export default {
  components: { DialogRow },

  mixins: [consoleData],

  data() {
    return {
      API_INDEX: '',
      bindParams: {
        name: ''
      },
      selectionId: []
    }
  },

  computed: {
    selectionId() {
      return this.multipleSelection.map(_ => _.id)
    }
  },

  methods: {
    formatResponse(response) {
      return response
    },

    handleRowSelect(selection) {
      this.selectionId = selection.map(_ => _.id)
    },

    handleDelete() {
      this.$confirm('确认操作?', '提示', {
        type: 'warning'
      }).then(async () => {
        try {
          // await this.Fetch.delete('V4/Web.ca.self.del', { ids: this.selectionId.join(',') })
        } catch (e) {
          return
        }
        this.Message('ACTION_SUCCESS')
        this.fetchList()
      })
    },

    handleAction() {
      this.$confirm('确认操作?', '提示', {
        type: 'warning'
      }).then(async () => {
        try {
          // await this.Fetch.delete('V4/Web.ca.self.del', { ids: this.selectionId.join(',') })
        } catch (e) {
          return
        }
        this.Message('ACTION_SUCCESS')
        this.fetchList()
      })
    }
  }
}
</script>
