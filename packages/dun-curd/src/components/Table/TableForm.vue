<template>
  <div>
    <el-table
      :data="data"
      :show-header="showHeader"
      :size="size"
      border
    >
      <slot />
      <el-table-column
        :width="actionWidth"
        prop="name"
        label="操作"
      >
        <template slot-scope="scope">
          <template v-if="sort">
            <el-button
              :size="size"
              type="text"
              @click="handleRowUp(scope.$index)"
            >上移</el-button>
            <el-button
              :size="size"
              type="text"
              @click="handleRowDown(scope.$index)"
            >下移</el-button>
          </template>
          <el-button
            v-if="editRow"
            :size="size"
            type="text"
            @click="handleEditRow(scope)"
          >编辑</el-button>
          <el-button
            :size="size"
            type="text"
            @click="handleRowDelete(scope.$index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 12px">
      <slot name="add-form" />
      <el-dropdown
        v-if="showAddRow"
        :size="size"
        split-button
        type="primary"
        trigger="click"
        @click="handleRowAdd"
        @command="handleAddRowComand"
      >
        新增
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in rowTemplate"
            :key="index"
            :command="item"
          >{{ item.label }}</el-dropdown-item>
          <el-dropdown-item
            divided
            command="Import"
          >导入</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <DialogFastAdd
      ref="DialogFastAdd"
      :handle-create-submit="handleImportSubmit"
    />
  </div>
</template>

<script>
import create from '../../utils/create-basic'
import formTable from '../../mixins/formTable'
import Notice from '../../utils/notice'
import DialogFastAdd from './components/DialogFastAdd'

export default create({
  name: 'TableForm',

  components: { DialogFastAdd },

  mixins: [formTable],

  props: {
    showAddRow: {
      type: Boolean,
      default: true
    },
    editRow: Boolean,
    // 启用排序按钮
    sort: Boolean,
    // 快捷添加行
    rowTemplate: Array,
    customAddRow: Boolean,
    size: {
      type: String,
      default: 'small'
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    row: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },

  computed: {
    actionWidth() {
      let width = 100
      if (this.sort) width += 100
      if (this.editRow) width += 50
      return `${width}px`
    }
  },

  methods: {
    handleImportSubmit(form) {
      let { content } = form

      try {
        content = JSON.parse(content)
      } catch (e) {
        Notice('EDIT_ERROR')
        throw new Error()
      }

      this.data.push(...content)
    },

    handleAddRowComand(cmd) {
      if (typeof cmd === 'string') {
        if (cmd === 'Import') {
          this.$refs.DialogFastAdd.handleOpen()
        }
      } else {
        this.data.push(cmd.row)
      }
    },

    handleEditRow(scope) {
      this.$emit('on-edit-row', scope)
    }
  }
})
</script>
