import ColumnAction from './ColumnAction'
// import ColumnStatus from './ColumnStatus'

const Column = {}

Column.install = Vue => {
  Vue.component(ColumnAction.name, ColumnAction)
  // Vue.component(ColumnStatus.name, ColumnStatus)
}

export default Column
