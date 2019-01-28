import { deepClone } from '../utils'

export default {
  methods: {
    handleRowAdd(table, row) {
      table.push(deepClone(row))
    },

    handleRowDelete(table, index) {
      table.splice(index, 1)
    },

    handleTableReset(scope, key, row) {
      this.$set(scope, key, [deepClone(row)])
    },

    handleRowUp(list, index) {
      if (index === 0) return
      const item = list.splice(index, 1)[0]
      list.splice(index - 1, 0, item)
    },

    handleRowDown(list, index) {
      const item = list.splice(index, 1)[0]
      list.splice(index + 1, 0, item)
    }
  }
}
