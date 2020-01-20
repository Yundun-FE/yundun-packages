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
            <yd-form-select
              v-model="scope.row.backup"
              :selects="[]"
            />
          </template>
        </el-table-column>
        <el-table-column
          align="right"
          label="操作"
          width="80px"
        >
          <template slot-scope="scope">
            <ColumnAction>
              <el-button
                type="text"
                @click="handleRowDelete(scope.$index)"
              >删除</el-button>
            </ColumnAction>
          </template>
        </el-table-column>
      </el-table>
    </DmTable>
  </div>
</template>

<script>
import consoleTable from '@/mixins/consoleTable'
import RULE from '@/utils/verify'
import ColumnForm from '@/components/Column/ColumnForm'

export default {
  components: { ColumnForm },

  mixins: [consoleTable],

  data() {
    return {
      selectList: [],
      rowKey: ['id'],
      row: {
        id: '',
        backup: 1
      },
      rowRules: {
        // id: [
        //   {
        //     required: true,
        //     message: ' ',
        //     trigger: 'blur'
        //   }
        // ]
      }
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
    },

    async setList(list) {
      this.list = list
    },

    async getList() {
      const list = []
      return list
    }
  }
}
</script>
