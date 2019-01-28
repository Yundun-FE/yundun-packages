import TableForm from './TableForm'
// import ColumnStatus from './ColumnStatus'

const Table = {}

Table.install = Vue => {
  Vue.component(TableForm.name, TableForm)
}

export default Table
