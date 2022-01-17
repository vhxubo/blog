require("dotenv").config();
const { Octokit } = require("@octokit/core");
const fs = require("fs");
const del = require("del");
const path = "../posts";

const octokit = new Octokit({ auth: process.env.TOKEN });
const repository = process.env.REPOSITORY.split("/");

(async () => {
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues--parameters
  const { data: issues } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues",
    {
      owner: repository[0],
      repo: repository[1],
      per_page: 100,
      state: "closed",
    }
  );
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  } else {
    del.sync(path + "/*.md", { force: true });
  }
  const posts = [];
  console.log(issues.length);
  issues.forEach((item) => {
    const { title, body, html_url: url, number, labels } = item;
    const labelName = labels[0].name;
    const result = `# ${title} [#${number}](${url})\n\n[\`${labelName}\`](https://github.com/${process.env.REPOSITORY}/issues?q=label:${labelName})\n\n${body}`;
    const postName = `[${labelName}]${title}`;
    const postPath = `${path}/${postName}.md`;
    posts.push(`- [${postName}](${encodeURI(postPath)})`);

    fs.writeFileSync(postPath, result);
  });

  fs.writeFileSync(`${path}/README.md`, "# POSTS\n\n" + posts.join("\n"));
})();
