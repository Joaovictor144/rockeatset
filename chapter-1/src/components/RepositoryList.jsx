import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss' 
export default function RepositoryList(){
    const repository = {
        name:'unform',
        description:'Form is React',
        link:"https://github.com/unform/unform",
    }
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
 