export function array2Obj(array, key) {
  const data = {}
  array.forEach(item => {
    data[item[key]] = item
  })
}
