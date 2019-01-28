import { formatSeconds } from '@/utils/date'
export function labelView(value, origin, label = 'label', noknow = '未知') {
  if (!origin) return

  const item = origin.find(item => item.value === value)

  let name
  if (item) name = item[label]
  return name || noknow
}

const Filters = {
  formatSeconds,
  labelView
}

export function installFilter(Vue) {
  Object.keys(Filters).forEach(key => {
    Vue.filter(key, Filters[key])
  })
}

