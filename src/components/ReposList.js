import Repo from "./Repo";

import "./ReposList.scss";

export default function ReposList({ message, repos = [] }) {


  if (message === null) {
    return (
      <div>
        {repos.map((repo) => (<Repo repository={repo} key={repo.id} />))}
      </div>
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