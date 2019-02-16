import DmConsole from './DmConsole'
import DmEdit from './DmEdit'
import RenderTable from './RenderTable'

const Dm = {}

Dm.install = Vue => {
  Vue.component(DmConsole.name, DmConsole)
  Vue.component(DmEdit.name, DmEdit)
  Vue.component(RenderTable.name, RenderTable)
}

export default Dm
