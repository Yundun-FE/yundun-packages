<style lang="scss">
.DmConsole {
  padding: 20px 30px;
  display: flex;
  flex-flow: column;
  .el-table th {
    background: rgb(249, 251, 255);
  }

  &__toolbar {
    width: 100%;
    margin-bottom: 12px;
  }

  &__core {
    display: flex;
    flex-flow: column;
    background: #fff;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__body {
    min-height: 500px;
    .el-table {
      min-height: 500px;
    }

    .el-loading-mask {
      top: 47px;

      .el-loading-spinner {
        top: 30px;
        margin-top: 0px;
      }
    }
  }

  &__footer {
    padding: 12px;

    .el-pagination {
      float: right;
    }
  }
}
</style>

<template>
  <div
    :class="b()"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
  >
    <div :class="b('query')">
      <slot name="query" />
    </div>
    <!-- 操作条 -->
    <div :class="b('toolbar')">
      <ColumnAction
        :list="actionsToolbar"
        @action="handleAction"
      />
      <div class="pull-right">
        <slot name="toolbar-right" />
        <!-- <FormSearch
          size="medium"
          @submit="handleSearch"
        /> -->
        <!-- <el-tooltip
          content="布局配置"
          placement="top"
        >
          <el-button
            icon="el-icon-setting"
            size="medium"
            circle
          />
        </el-tooltip> -->
      </div>
      <slot name="toolbar" />
    </div>
    <div
      :class="b('core')"
      element-loading-spinner="el-icon-loading"
      element-loading-background="#FFF"
    >
      <!-- BODY -->
      <div :class="b('body')">
        <RenderTable
          v-if="columns && columns.length > 0"
          :columns="columns"
          :selection="tableSelection"
          :actions-row="actionsRow"
          :data="data"
          @action="handleAction"
          @selection-change="handleSelectionChange"
        />
      </div>
      <!-- FOOTER -->
      <div :class="b('footer')">
        <el-pagination
          :current-page="page"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          :total="total"
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import create from '../../utils/create-basic'
import RenderTable from './RenderTable'

export default create({
  name: 'DmConsole',

  components: { RenderTable },

  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    bindParams: {
      type: Object,
      default: function() {
        return {}
      }
    },
    loading: {
      type: Boolean,
      default: true
    },
    multipleSelection: {
      type: Array,
      default: function() {
        return []
      }
    },
    selection: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    actionsRow: {
      type: Array,
      default: function() {
        return []
      }
    },
    actionsToolbar: {
      type: Array,
      default: function() {
        return []
      }
    }
  },

  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      show: false,
      params: {
        name: ''
      }
    }
  },

  computed: {
    tableSelection() {
      let op = false
      if (this.selection) {
        op = true
      } else {
        this.actionsToolbar.forEach(item => {
          if (item.command.includes('Multiple')) op = true
        })
      }
      return op
    }
  },

  // watch: {
  //   actionsToolbar(val) {
  //     this.selection = false
  //   }
  // },

  mounted() {
    this.handleEmit()
  },

  methods: {
    handleShow() {
      this.show = true
    },
    handleAction(e) {
      if (!e) return
      this.$emit('action', e)
    },

    handleSelectionChange(val) {
      this.$emit('update:multipleSelection', val)
    },

    updateTotal(total) {
      this.total = total
    },

    handleSearch() {
      this.handleInit()
    },

    handleInit() {
      this.page = 1
      this.handleEmit()
    },

    handleEmit() {
      const { total, page, pageSize } = this
      const params = {
        total, page, pageSize, ... this.params, ...this.bindParams
      }

      this.$emit('init', params)
    },

    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.page = 1
      this.handleEmit()
    },

    handleCurrentChange(page) {
      this.page = page
      this.handleEmit()
    }
  }
})
</script>
