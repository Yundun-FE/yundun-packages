const { fetchAlert } = require('@yundun-fe/workflow-api')
const parseChangelog = require('@yundun-fe/changelog-parser')
const PKG = require('../package.json')

parseChangelog('CHANGELOG.md', function (err, result) {
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
})

function formatUpdateList (data) {
  delete data._
  let content = ``
  Object.keys(data).forEach(key => {
    content += `\n${key}：`
    data[key].forEach(item => {
      item = item.replace('* ', '')
      content += `\n${item}`
    })
  })
  return content
}

