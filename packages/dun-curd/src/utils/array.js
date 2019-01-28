export function array2Obj(array, key) {
  const data = {}
  array.forEach(item => {
    data[item[key]] = item
  })
}

export function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}
