import Repo from "./Repo";
import { useEffect } from 'react';

import "./ReposList.scss";

export default function ReposList({ repos = [] }) {
  return (
    <main className="repos__list">
      {repos.map((repo) => (<Repo repository={repo} key={repo.id} />))}
    </main>
  )
}