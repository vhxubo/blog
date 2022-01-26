require("dotenv").config();
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.TOKEN });
const repository = process.env.REPOSITORY.split("/");

module.exports = async () => {
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues--parameters
  const { data: issues } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues",
    {
      owner: repository[0],
      repo: repository[1],
      per_page: 100,
      state: "open",
      creator: repository[0],
    }
  );
  console.log(issues);
  return issues;
};
