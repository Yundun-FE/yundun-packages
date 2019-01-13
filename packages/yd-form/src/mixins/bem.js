const ELEMENT = '__'
const MODS = '--'
 
const join = (name, el, symbol) => (el ? name + symbol + el : name)

const prefix = (name, mods) => {
  if (typeof mods === 'string') {
    return join(name, mods, MODS)
  }

  if (Array.isArray(mods)) {
    return mods.map(item => prefix(name, item))
  }

  const ret = {}
  Object.keys(mods).forEach(key => {
    ret[name + MODS + key] = mods[key]
  })
  return ret
}

export default {
  methods: {
    b(el, mods) { 
      const { name } = this.$options

      if (el && typeof el !== 'string') {
        mods = el
        el = ''
      }
      el = join(name, el, ELEMENT)

      return mods ? [el, prefix(el, mods)] : el
    }
  }
}
