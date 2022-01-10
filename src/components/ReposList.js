import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import Repo from "./Repo";
import "../styles/ReposList.scss";
import placeholderStyles from "../styles/placeholderStyles";

export default function ReposList({ user, displayUser, loading, repos = [] }) {

  return (
    <div className="repos__list">
      <ReactPlaceholder
        className="placeholder--username"
        type='textRow'
        ready={!loading}
        showLoadingAnimation={true}
        style={placeholderStyles.username}
        color="#627080"
      >
        {displayUser && <div className="repos__list__user">{`${user}'s repos`}</div>}
      </ReactPlaceholder>

      {repos.map((repo, index) => (
        <ReactPlaceholder
          key={`placeholder-${index}`}
          className="placeholder--repo"
          type='textRow'
          ready={!loading}
          showLoadingAnimation={true}
          style={placeholderStyles.repo}
          color="#627080"
        >
          <Repo repository={repo} key={repo.id} />
        </ReactPlaceholder>
      ))}
    </div >
  )

}