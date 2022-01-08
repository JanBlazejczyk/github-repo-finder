import ReposList from "./ReposList";
import MainMessage from "./MainMessage";

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

export default function MainView({ message, repos, user, loading, displayUser }) {
  if (message === null) {
    return (
      <ReactPlaceholder
        type='textRow'
        rows={7}
        ready={!loading}
        showLoadingAnimation={true}
        delay={3000}
        style={{
          textAlign: "center",
          margin: "20px",
          borderRadius: "0.4rem",
          width: "93vw",
          height: "20vw",
          color: "#22272e"
        }}
      >
        <ReposList repos={repos} user={user} displayUser={displayUser} />
      </ReactPlaceholder>


    );
  }

  return <MainMessage message={message} />
}