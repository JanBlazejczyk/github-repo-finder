import Repo from "./Repo";
import { useEffect } from "react";

import "./ReposList.scss";

export default function ReposList({ repos = [] }) {

  // in case repos contains a response which is an error
  if (repos.name === "HttpError") {
    if (repos.status !== 404) {
      return (
        <div>
          Something went wrong: {repos.status}
        </div>
      )
    } else {
      return (
        <div>
          User not found
        </div>
      )
    }
  }

  if (repos.length !== 0) {
    return (
      <main className="repos__list">
        {repos.map((repo) => (<Repo repository={repo} key={repo.id} />))}
      </main>
    )
  } else {
    return (
      <div>
        Search for users
      </div>
    )
  }
}