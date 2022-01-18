import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import Repo from "./Repo";
import "../styles/ReposList.scss";
import placeholderStyles from "../styles/placeholderStyles";

export default function ReposList({ user, displayUser, loading, repos = [] }) {

  const placeholdersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (loading) {
    return (
      <div className="placeholders">
        <ReactPlaceholder
          className="placeholder--username"
          type='textRow'
          ready={!loading}
          showLoadingAnimation={true}
          style={placeholderStyles.username}
          color="#627080"
        >
          <div>sth</div>
        </ReactPlaceholder>
        {placeholdersArray.map((number, index) => (
          <ReactPlaceholder
            key={`placeholder-${index}`}
            className="placeholder--repo"
            type='textRow'
            ready={!loading}
            showLoadingAnimation={true}
            style={placeholderStyles.repo}
            color="#627080"
          >
            <div>{number}</div>
          </ReactPlaceholder>
        ))}
      </div>
    )
  }

  return (
    <div className="repos__list">
      {displayUser && <div className="repos__list__user">{`${user}'s repos`}</div>}

      {repos.map((repo) => (
        <Repo repository={repo} key={repo.id} />
      ))}
    </div >
  )
}