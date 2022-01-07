import Repo from "./Repo";
import { useEffect } from "react";

import "./ReposList.scss";

export default function ReposList({ repos = [] }) {

  if (repos.length !== 0 && repos !== "Not found") {
    return (
      <main className="repos__list">
        {repos.map((repo) => (<Repo repository={repo} key={repo.id} />))}
      </main>
    )
  } else if (repos === "Not found") {
    return (
      <div className="repos__list__message">
        Username not found
      </div>
    )
  } else {
    return (
      <div className="repos__list__message">
        Search for users repos
      </div>
    )
  }
}