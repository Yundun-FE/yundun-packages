import { deepClone } from '../utils'

export default {
  data() {
    return {
      multipleSelection: []
    }
  },

  computed: {
    multipleActionDisable() {
      return this.multipleSelection.length === 0
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 进入编辑
    handleRowEdit(scope) {
      this.$refs.DialogRow.handleOpen(deepClone(scope.row), 'EDIT')
    },

    handleRowDetail(scope) {
      this.$router.push({
        path: `${scope.row.id}`,
        append: true
      })
    },
    // 跳转至页面编辑
    handleRowEditpage(scope) {
      this.$router.push({
        path: `${scope.row.id}/edit`,
        append: true
      })
    },

    handleUpdate(form) {
      return this.updateApi(`/${this.API_NAME}`, form)
    },

    handleMultipleAction(e) {
      const { command } = e
      this.$confirm('确认执行?', '提示', {
        type: 'warning'
      }).then(() => {
        if (command === 'Delete') {
          const ids = this.multipleSelection.map(_ => _.id).join(',')
          this.handleDelete(ids)
        } else {
          this[`handleMultiple${command}`](this.multipleSelection)
        }
      })
    },

    handleCreate() {
      this.$refs.DialogRow.handleOpen()
    },

    handleAction(e) {
      if (typeof e === 'string') {
        this[`handle${e}`]()
      } else {
        const { mode = 'Row', command, scope } = e
        if (mode === 'Row') {
          this[`handleRow${command}`](scope)
        } else {
          this.handleMultipleAction(e)
        }
      }
    },
    // 行删除
    handleRowDelete(scope) {
      const { row } = scope
      this.$confirm('确认操作?', '提示', {
        type: 'warning'
      }).then(() => {
        this.handleDelete(row.id)
      })
    },

    async handleDelete(id) {
      if (!id) {
        console.warn('no-id')
        return
      }
      await this.Fetch.delete(`/${this.API_NAME}/${id}`)
      this.actionSuccess()
      this.init()
    },

    async handleRowSubmit(form) {
      // try {
      //   await this.handleUpdate(form)
      // } catch (e) {
      //   return
      // }
      // this.$refs.DialogRow.handleClose()
      // this.actionSuccess()
      // this.init()
    },

    handleRowClone(scope) {
      const form = deepClone(scope.row)
      form.name = form.name + ' COPY'
      this.handleRowSubmit(form)
    },

    updateApi(url, form) {
      const mode = form._mode
      if (mode === 'EDIT') {
        return this.Fetch.put(`${url}/${form.id}`, form)
      } else {
        return this.Fetch.post(url, form)
      }
    },

    actionSuccess() {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
    }
  }
}
