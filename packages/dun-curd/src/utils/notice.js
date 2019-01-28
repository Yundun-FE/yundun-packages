import { Notification } from 'element-ui'

function notice(name, err) {
  let type = 'success'
  const title = '提示'
  let message = ''

  switch (name) {
    case 'DELETE_SUCCESS':
      message = '删除成功'
      break

    case 'DELETE_ERROR':
      message = '删除失败'
      type = 'error'
      break

    case 'CREATE_SUCCESS':
      message = '创建成功'
      break

    case 'CREATE_ERROR':
      message = '创建失败'
      type = 'error'
      break

    case 'EDIT_SUCCESS':
      message = '编辑成功'
      break

    case 'EDIT_ERROR':
      message = '编辑失败'
      type = 'error'
      break

    case 'ACTION_SUCCESS':
      message = '操作成功'
      type = 'success'
      break
  }

  if (err && err.message) {
    message = `${message}: ${err.message}`
  }

  Notification({
    title,
    message,
    type
  })
}

export default notice
