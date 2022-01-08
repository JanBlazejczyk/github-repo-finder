import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import Repo from "./Repo";
import "../styles/ReposList.scss";

export default function ReposList({ message, loading, repos = [] }) {

  if (message === null) {
    return (
      <main className="repos__list">
        {repos.map((repo) => (
          <ReactPlaceholder
            type='textRow'
            rows={7}
            ready={!loading}
            showLoadingAnimation={true}
            key={repo.id}
            style={{
              textAlign: "center",
              margin: "20px",
              borderRadius: "0.4rem",
              width: "93vw",
              height: "20vw",
              color: "#22272e"
            }}
          >
            <Repo repository={repo} key={repo.id} />
          </ReactPlaceholder>
        ))}

      </main >
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