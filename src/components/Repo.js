export default function Repo({ repository }) {

    if (repository !== undefined) {
        const { name, stargazers_count, description, html_url, id } = repository;
        return (
            <div className="repo" key={id}>
                <p>{name}</p>
                <p>{`Stars: ${stargazers_count}`}</p>
                <p>{description}</p>
                <p><a href={html_url} target="_blank" rel="noopener noreferrer">See on GitHub</a></p>
            </div>
        );
    } else {
        return <p>No repos</p>;
    }

}