require('dotenv').config()
const { Octokit } = require('@octokit/core')
const fs = require('fs')
const path = '../posts'

const octokit = new Octokit({ auth: process.env.TOKEN })

// 遍历所有的issues，根据labels生成到各个标签目录下面，没有标签的放置在posts下面
;(async () => {
  const { data: issues } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues',
    {
      owner: 'vhxubo',
      repo: 'blog',
    }
  )
  if (!fs.existsSync(path)) fs.mkdirSync(path)
  const posts = []
  issues.forEach((item) => {
    console.log(item)
    const { title, body, html_url: url, number } = item
    const result = `# ${title} [#${number}](${url})\n\n${body}`
    const postPath = `${path}/${title}.md`
    posts.push(`- [${title}](${encodeURI(postPath)})`)

    fs.writeFileSync(postPath, result)
  })

  fs.writeFileSync(`${path}/README.md`, '# POSTS\n\n' + posts.join('\n'))
})()
