import { deepClone } from './'

// export function formatSettings(blocks, settings = {}) {
//   Object.keys(blocks).forEach(key => {
//     settings[`blocks.DmConsole.${key}`] = item[key]
//   })
// }

function formatColumns(columns) {
  const data = {}
  columns.forEach(column => {
    delete column.componentName
    data[column.props.prop] = {
      show: true,
      props: {
        label: column.props.label
      }
    }
  })
  return data
}

export function dataToObj(blocks, obj = {}) {
  deepClone(blocks).forEach(item => {
    obj[item.name] = item
  })

  Object.keys(obj).forEach(key => {
    const item = obj[key]
    if (item.name === 'DmConsole') {
      item.props = {
        columns: formatColumns(item.props.columns)
      }
    }
  })

  return obj
}
