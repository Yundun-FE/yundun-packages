<style lang="postcss">
.DmConsole {
  padding: 20px 30px;

  .el-table th {
    background: rgb(249, 251, 255);
  }

  &__toolbar {
    width: 100%;
    margin-bottom: 12px;
    overflow: hidden;
  }

  &__core {
    width: 100%;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__body {
    width: 100%;
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
    overflow: hidden;
    padding: 12px;

    .el-pagination {
      float: right;
    }
  }
}
</style>

<template>
  <div
    v-if="show"
    :class="b()"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
  >
    <div :class="b('query')">
      <slot name="query" />
    </div>
    <!-- 操作条 -->
    <div :class="b('toolbar')">
      <!-- 操作按钮 -->
      <template v-if="actions.toolbar">
        <el-button
          v-for="(item, index) in actions.toolbar.list"
          v-if="item.label"
          :key="index"
          :type="item.type"
          size="medium"
          @click="handleAction(item.command)"
        >{{ item.label }}</el-button>
      </template>
      <!-- 批量操作按钮 -->
      <template v-if="actions.multiple">
        <el-button
          v-for="(item, index) in actions.multiple.list"
          v-if="item.label"
          :key="`multiple-${index}`"
          :type="item.type"
          :disabled="multipleSelection.length === 0"
          size="medium"
          @click="handleAction({ command: item.command, mode: 'Multiple'})"
        >{{ item.label }}</el-button>
      </template>
      <div class="pull-right">
        <slot name="toolbar-right"/>
        <FormSearch
          size="medium"
          @submit="handleSearch"
        />
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
          :selection="selection"
          :actions="actions"
          :data="data"
          @action="handleAction"
          @selection-change="handleSelectionChange"
        >
          <slot />
        </RenderTable>
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
    selection: Boolean,
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
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    actions: {
      type: Object,
      default: function() {
        return {}
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
