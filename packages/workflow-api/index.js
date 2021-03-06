const Axios = require('axios')
const parseChangelog = require('@yundun-fe/changelog-parser')
const server = 'http://workflow.test.nodevops.cn'

function fetchAlert (data) {
  Axios({
    url: `${server}/api/alert/wechatBot`,
    method: 'POST',
    data
  })
}

function release (options) {
  if (err) throw err

  const { versions = [] } = result
  if (versions.length) {
    const { version, parsed } = versions[0]

    let content = '项目发布'
    content += `\n> 项目：${PKG.title}\n版本：${version}\n`
    content += formatUpdateList(parsed)

    fetchAlert({
      botName: 'measure',
      data: {
        msgtype: 'markdown',
        markdown: {
          content
        }
      }
    })
  }
}

module.exports = {
  fetchAlert,
  release
}
