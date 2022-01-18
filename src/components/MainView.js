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

  if (message === null && message !== "User has no repos!") {
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