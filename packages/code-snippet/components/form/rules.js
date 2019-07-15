// https://github.com/yiminghe/async-validator

function ipVaildate(rule, value, callback) {
  value = value.split(',')
  value.forEach(item => {
    if (!RULE.cidrREG.test(item) && !RULE.ipRangeReg.test(item)) {
      callback(new Error())
    }
  })
  callback()
}


const rules = {
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],

  ip: {
    required: true,
    pattern: RULE.ipReg,
    message: '格式有误',
    trigger: 'blur'
  },

  email: [
    {
      required: true,
      type: 'email',
      message: '格式有误',
      trigger: 'blur'
    }
  ],

  ipList: [
    {
      validator: ipVaildate, 
      message:'IP 地址不正确', 
      trigger: 'blur' 
    }
  ]
}