import Page from './Page/Page'
import Form from './Form'
import Column from './Column'
import Dm from './Dm'
import Card from './Card'
import Dialog from './Dialog'
import Table from './Table'
import Header from './Header'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  const components = [
    Form,
    Dialog,
    Column,
    Dm,
    Card,
    Header,
    Table
  ]

  components.forEach(Component => {
    Component.install(Vue)
  })
}
export function installComponents(Vue) {
  Vue.use(install)
  Vue.component(Page.name, Page)
}
