<template>
  <div>
    <DmTable
      add-button
      border
      @click-add-button="handleRowAdd"
    >
      <el-table :data="list">
        <el-table-column
          label="匹配类型"
          width="140"
        >
          <template slot-scope="scope">
            <ColumnForm
              :model="scope.row"
              :ref="`name-${scope.$index}`"
              :rules="rowRules"
              prop="name"
            >
              <el-input v-model="scope.row.name" />
            </ColumnForm>
          </template>
        </el-table-column>
        <el-table-column
          align="right"
          label="操作"
          width="80px"
        >
          <template slot-scope="scope">
            <template v-if="scope.row.$edit">
              <el-button
                type="text"
                @click="handleRowSave(scope)"
              >保存</el-button>
              <el-divider direction="vertical" />
              <el-button
                type="text"
                @click="handleRowCancel(scope)"
              >取消</el-button>
            </template>
            <template v-else>
              <el-button
                type="text"
                @click="handleRowEdit(scope)"
              >编辑</el-button>
              <el-divider direction="vertical" />
              <PopoverConfirm
                content="确认删除？"
                @submit="handleRowDelete(scope)"
              >
                <el-button type="text">删除</el-button>
              </PopoverConfirm>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </DmTable>
  </div>
</template>

<script>
import consoleData from '@/mixins/consoleData'
import consoleTable from '@/mixins/consoleTable'
import { deepClone } from '@/utils'
import RULE from '@/utils/verify'
import ColumnForm from '@/components/Column/ColumnForm'

export default {
  components: { ColumnForm },

  mixins: [consoleData, consoleTable],

  data() {
    return {
      API_INDEX: '',
      rowKey: ['name'],
      row: {
        name: ''
      },
      rowRules: {
        name: [
          {
            required: true,
            message: ' ',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    handleRowAdd() {
      this.list.unshift({
        name: ''
      })
    },

    async handleSaveRow({ row }) {
      const form = row

      try {
        if (form.id) {
          await this.Fetch.post('', form)
        } else {
          await this.Fetch.post('', form)
        }
      } catch (e) {
        return
      }
      this.Message('ACTION_SUCCESS')
      this.fetchList()
    },

    handleRowCancel({ row, $index }) {
      if (row.id && row.$cache) {
        const cache = row.$cache
        row.name = cache.name
      } else {
        this.list.splice($index, 1)
      }
    },

    async handleRowDelete({ row }) {
      const { id } = row
      const form = {
        id
      }
      try {
        await this.Fetch.post('', form)
      } catch (e) {
        return
      }
      this.Message('ACTION_SUCCESS')
      this.fetchList()
    },

    handleRowEdit(scope) {
      scope.row.$edit = true
      scope.row.$cache = deepClone(scope.row)
    }
  }
}
</script>
