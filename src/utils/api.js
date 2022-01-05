function get(endpoint) {
    const base_url = "https://api.github.com/";

    // setting this header is recommended in the documentation
    const config = {
        method: 'GET',
        headers: {
            "Accept": "application/vnd.github.v3+json"
        },
    }
    return fetch(`${base_url}${endpoint}`, config)
}

export function getUserRepos(userName) {
    const user_repos_endpoint = `users/${userName}/repos`;
    return get(user_repos_endpoint);
}

export function getOrgRepos(orgName) {
    const organization_repos_endpoint = `orgs/${orgName}/repos`;
    return get(organization_repos_endpoint);
}