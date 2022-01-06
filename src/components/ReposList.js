import Repo from "./Repo";
import { useEffect } from 'react';

export default function ReposList({ repos = [] }) {

    useEffect(() => {
        console.log("Repo mounted");
    }, [])

    return (
        <div className="repos__list">
            {repos.map((repo) => (<Repo repository={repo} key={repo.id} />))}
        </div>
    )
}