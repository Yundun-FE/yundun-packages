import { Vue, Router, Store } from '@/assets/console-core'
import App from './app'
import routeConfig from './router'
import storeConfig from './store'
import '@/assets/core-chart'

const store = Store(storeConfig)
const router = Router(routeConfig, store)

const app = new Vue({
  el: '#root',
  store,
  router,
  components: {
    App
  },
  render: h => h(App)
})
