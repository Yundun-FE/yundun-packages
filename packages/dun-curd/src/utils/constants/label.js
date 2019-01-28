const MODULES_TYPE = [{
  label: '网页',
  value: 'wp'
},
{
  label: '控制台',
  value: 'cp'
},
{
  label: '感知图',
  value: 'pr'
},
{
  label: '支付',
  value: 'pp'
}
]

const ENV = [{
  label: '测试',
  value: 'test'
},
{
  label: '预发布',
  value: 'pre'
},
{
  label: '线上测试',
  value: 'test-online'
},
{
  label: '线上',
  value: 'prod'
}
]

const APP_PAGE_TYPE = [
  {
    label: '通用',
    value: 0
  },
  {
    label: '列表页',
    value: 1
  },
  {
    label: '编辑页',
    value: 2
  },
  {
    label: '弹框',
    value: 3
  },
  {
    label: '控制台',
    value: 4
  },
  {
    label: '配置页',
    value: 5
  }
]

const COLUMN_COMPONENT_NAME = [
  {
    label: '操作栏',
    value: 'ColumnAction'
  }
]

const BUTTON_TYPE = [
  {
    label: 'PRIMARY',
    value: 'primary'
  },
  {
    label: 'DANGER',
    value: 'danger'
  }
]

const APPLICATION_TYPE = [
  {
    label: ''
  }
]

export {
  APP_PAGE_TYPE,
  MODULES_TYPE,
  ENV,
  COLUMN_COMPONENT_NAME,
  BUTTON_TYPE
}

export default{
  APP_PAGE_TYPE,
  MODULES_TYPE,
  ENV,
  COLUMN_COMPONENT_NAME,
  BUTTON_TYPE
}
