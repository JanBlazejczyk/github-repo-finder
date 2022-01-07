import Repo from "./Repo";

import "./ReposList.scss";

export default function ReposList({ message, repos = [] }) {


  if (message === null) {
    return (
      <main className="repos__list">
        {repos.map((repo) => (<Repo repository={repo} key={repo.id} />))}
      </main>
    )
  } else {
    return (
      <main>
        <div className="repos__list__message">
          {message}
        </div>
      </main>
    )
  }


}