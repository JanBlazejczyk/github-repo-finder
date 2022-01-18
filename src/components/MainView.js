import { ReposList, MainMessage, Pagination } from "./";

import "../styles/MainView.scss";

export default function MainView({
  message,
  repos,
  user,
  loading,
  displayUser,
  reposPerPage,
  totalRepos,
  handlePagination }) {
  if (message === null) {
    return (
      <main className="main-view">
        <ReposList
          repos={repos}
          user={user}
          displayUser={displayUser}
          loading={loading}
        />
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={totalRepos}
          handlePagination={handlePagination}
        />
      </main>
    );
  }
  return (
    <main className="main-view">
      <MainMessage message={message} />
    </main>
  )
}