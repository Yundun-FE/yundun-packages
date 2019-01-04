<style lang="postcss">
</style>

<template>
  <yd-table :class="b()" :loading="loading" add-btn @add-row="handleAddRow">
    <el-table :data="list">
      <el-table-column label="操作" align="right" width="80">
        <template scope="scope">
          <ColumnAction>
            <el-button v-show="!scope.row.$edit" type="text" @click="handleRowDelete(scope)">删除</el-button>
          </ColumnAction>
        </template>
      </el-table-column>
    </el-table>
  </yd-table>
</template>

<script>
import create from 'common/utils/create-basic'
import { deepClone } from 'common/utils'

const FORM_ROW = {

}

export default create({
  name: '',

  props: {
    loading: Boolean
  },

  data() {
    return {
      list: []
    }
  },

  methods: {
    checkItem(index) {
      try {

      } catch (e) {
        return false
      }
      return true
    },

    handleRowAdd() {
      this.list.push(deepClone(FORM_ROW))
    },

    handleRowDelete(scope) {
      const { $index } = scope
      this.list.splice($index, 1)
    }
  }
})
</script>
