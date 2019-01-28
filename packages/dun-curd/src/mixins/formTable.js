import { deepClone } from '@/utils'

export default {
  data() {
    return {
      // data: []
    }
  },

  methods: {
    handleRowAdd() {
      if (this.customAddRow) {
        this.$emit('add-row')
      } else {
        this.data.push(deepClone(this.row))
      }
    },

    handleRowDelete(index) {
      this.data.splice(index, 1)
    },

    // handleTableReset(scope, key, row) {
    //   this.$set(scope, key, [deepClone(row)])
    // },

    handleRowUp(index) {
      if (index === 0) return
      const item = this.data.splice(index, 1)[0]
      this.data.splice(index - 1, 0, item)
    },

    handleRowDown(index) {
      const item = this.data.splice(index, 1)[0]
      this.data.splice(index + 1, 0, item)
    }
  }
}
