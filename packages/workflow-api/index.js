const Axios = require('axios')
const server = 'http://workflow.test.nodevops.cn'

function fetchAlert (data) {
  Axios({
    url: `${server}/api/alert/wechatBot`,
    method: 'POST',
    data
  })
}

module.exports = {
  fetchAlert
}
