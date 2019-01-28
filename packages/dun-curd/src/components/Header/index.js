import HeaderTop from './HeaderTop'
import HeaderTab from './HeaderTab'
import HeaderBreadcrumb from './HeaderBreadcrumb'

HeaderTop.install = Vue => {
  Vue.component(HeaderTop.name, HeaderTop)
  Vue.component(HeaderTab.name, HeaderTab)
  Vue.component(HeaderBreadcrumb.name, HeaderBreadcrumb)
}

export default HeaderTop
