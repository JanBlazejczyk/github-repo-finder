import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import Repo from "./Repo";
import "../styles/ReposList.scss";

export default function ReposList({ user, displayUser, repos = [] }) {

  return (
    <div className="repos__list">
      {displayUser && <div className="repos__list__user">{`${user}'s repos`}</div>}
      {repos.map((repo) => (
        <Repo repository={repo} key={repo.id} />
      ))}
    </div >
  )

}