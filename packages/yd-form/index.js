import Form from './src/components/FormSelect'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  const components = [Form]

  components.forEach(Component => {
    Component.install(Vue)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default {
  install
}
