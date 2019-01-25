<template>
  <div>
    <el-form-item label="目录">
      <TableForm
        :data="form.menus"
        :row="row"
      >
        <el-table-column label="名称">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.name"
              placeholder="名称"
            />
          </template>
        </el-table-column>
      </TableForm>
    </el-form-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row: {
        name: '',
        childrens: []
      }
    }
  },
  computed: {
    form() {
      return this.$parent.model
    }
  }
}
</script>
