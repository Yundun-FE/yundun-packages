import { isDef } from './'
// 选择器排除器
export const selectExclude = function(list, exclude = []) {
  list.forEach(item => {
    if (exclude.includes(item.value)) {
      item.show = false
    } else {
      item.show = true
    }
  })
  return list
}

// 选择器提取器
export const selectExport = function(list, ext = []) {
  const nList = []

  list.forEach(item => {
    if (ext.includes(item.value)) {
      nList.push(item)
    }
  })
  return list
}

// 验证器，配合 el-form 使用
export function validator(reg, message) {
  function _validator(rule, value, callback) {
    if (typeof reg === 'function') {
      if (reg()) {
        callback()
      } else {
        callback(new Error(message))
      }
    } else {
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
  }
  return _validator
}

// 选择框转
export function checkGroupFormat(arr, origin) {
  if (!arr && arr.length === 0) return {}

  const obj = {}

  if (origin) {
    origin.forEach(item => {
      obj[item.key] = false
    })
  }

  arr.forEach(key => {
    obj[key] = true
  })

  return obj
}

// 验证状态提取器
export function exportValidateMessage(obj) {
  let _message = null
  for (const k in obj) {
    const item = obj[k]
    for (let i = 0; i < item.length; i++) {
      const mItem = item[i]
      const { message } = mItem
      if (message) {
        _message = message
        break
      }
    }
  }
  return _message
}

// 将选择参数转为标准格式（主要用于服务端 API 转换）
export function selectLabelFormat(list, name, cfg) {
  const VARS = {}
  const LIST = []
  // 转标准格式
  for (const k in list) {
    const item = list[k]
    const key = cfg ? item[cfg] : k
    VARS[key] = k

    const label = name ? item[name] : item
    const value = Array.isArray(list) ? item : k

    const add = {
      label,
      value
    }
    LIST.push(add)
  }
  return [LIST, VARS]
}

// 选择数据标准格式转回
export function selectLabelToObj(list) {
  const obj = {}
  list.forEach(item => {
    obj[item.value] = item.label
  })
  return obj
}

export function formatLabel(list, labelName, valueName = labelName) {
  return list.map(_ => {
    return {
      label: _[labelName] || _,
      value: isDef(_[valueName]) ? _[valueName] : _
    }
  })
}

export function validateList(refs) {
  if (!refs) return true

  refs = Array.isArray(refs) ? refs : [refs]

  try {
    for (let index = 0; index < refs.length; index++) {
      const item = refs[index]
      console.log(item, 1)
      item.validate(valid => {
        console.log(valid)
        if (!valid) throw new Error()
      })
      // for (let i = 0; i < arr.length; i++) {
      //   const name = arr[i]
      // }
    }
  } catch (e) {
    return false
  }
  return true
}
