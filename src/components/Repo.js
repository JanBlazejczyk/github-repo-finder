import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "../styles/Repo.scss";

export default function Repo({ repository }) {

  const starIcon = <FontAwesomeIcon icon={faStar} />

  if (repository !== undefined) {
    const { name, stargazers_count, description, html_url, id } = repository;
    return (
      <div className="repo" id={id}>
        <div className="repo__header">
          {/* About: rel="noopener noreferrer": https://mathiasbynens.github.io/rel-noopener/ */}
          <span className="repo__line repo__line--header"><a title="see on github" href={html_url} target="_blank" rel="noopener noreferrer">{name}</a></span>
          <div className="repo__header repo__header__stars">
            <span className="repo__line repo__line--stars">{starIcon}</span>
            <span className="repo__line repo__line--stars">{stargazers_count}</span>
          </div>
        </div>
        <span className="repo__line repo__line--last">{description}</span>
      </div>
    );
  } else {
    return <p>No repos</p>;
  }

}