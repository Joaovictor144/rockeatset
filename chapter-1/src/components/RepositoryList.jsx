import RepositoryItem from "./RepositoryItem"; 
import '../styles/repositories.scss';
import {useState, useEffect} from 'react';


//https://api.github.com/orgs/rocketseat/repos
const repository = {
    name:'unform',
    description:'Form is React',
    link:"https://github.com/unform/unform",
}
export default function RepositoryList(){
    const [repositories,setRepositories] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(reponse => reponse.json())
        .then(data => setRepositories(data))
    },[])

    return(
        <section className='repository-list'>
            <h1>Lista de Repositorios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem/>
            </ul>
        </section>
        );
}