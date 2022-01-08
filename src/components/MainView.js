import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import ReposList from "./ReposList";
import MainMessage from "./MainMessage";

import "../styles/MainView.scss";

export default function MainView({ message, repos, user, loading, displayUser }) {
  if (message === null) {
    return (
      <main className="main-view">
        <ReposList repos={repos} user={user} displayUser={displayUser} loading={loading} />
      </main>

    );
  }
  return (
    <main className="main-view">
      <MainMessage message={message} />
    </main>
  )
}