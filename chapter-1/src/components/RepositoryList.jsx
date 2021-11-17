import RepositoryItem from "./RepositoryItem"; 
import '../styles/repositories.scss';
import {useState} from 'react';

//https://api.github.com/orgs/rocketseat/repos
const repository = {
    name:'unform',
    description:'Form is React',
    link:"https://github.com/unform/unform",
}
export default function RepositoryList(){
    const [] = useState(() =>{})
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