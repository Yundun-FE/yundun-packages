export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}

  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object') {
      targetObj[key] = source[key].constructor === Array ? [] : {}
      targetObj[key] = deepClone(source[key])
    } else {
      targetObj[key] = source[key]
    }
  }
  return targetObj
}

export function listToObj(list, key) {
  const obj = {}
  list.forEach(item => {
    obj[item[key]] = item
  })
  return obj
}

export function generateMixed(n) {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let res = ''
  for (let i = 0; i < n; i++) {
    const id = Math.ceil(Math.random() * 35)
    res += chars[id]
  }
  return res
}
