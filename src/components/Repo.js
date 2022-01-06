export default function Repo({ repository }) {

    if (repository !== undefined) {
        const { name, stargazers_count, description, url } = repository;
        return (
            <div className="repo">
                <p>{name}</p>
                <p>{`Stars: ${stargazers_count}`}</p>
                <p>{description}</p>
                <p><a href={url}>See on GitHub</a></p>
            </div>
        );
    } else {
        return <p>No repos</p>;
    }

}