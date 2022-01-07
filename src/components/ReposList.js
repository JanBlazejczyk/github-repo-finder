import Repo from "./Repo";

import "./ReposList.scss";

export default function ReposList({ message, repos = [] }) {

  return (
    <main>
      <div>
        {message}
      </div>
      {repos.map((repo) => (<Repo repository={repo} key={repo.id} />))}
    </main>
  )
}