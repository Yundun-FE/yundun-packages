export function labelFind(value, origin, key = 'label') {
  console.log(value)
  const item = origin.find(_ => _.value === value)
  return item ? item[key] : ''
}
