import { Octokit } from "octokit";

export async function getUserRepos(username) {
  const octokit = new Octokit();

  const response = await octokit.paginate(`GET /users/{user}/repos`, {
    user: `${username}`,
    per_page: 100,
    // setting this header is recommended in the documentation
    headers: {
      "Accept": "application/vnd.github.v3+json",
    }
  });
  return response;
}