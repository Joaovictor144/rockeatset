import RepositoryItem from "./RepositoryItem"; 
export default function RepositoryList(){
    const repository = {
        name:'unform',
        description:'Form is React',
        link:"https://github.com/unform/unform",
    }
    return(
        <section>
            <h1>Lista de Repositorios</h1>
            <ul>
                <RepositoryItem 
                repository={repository} />
                <RepositoryItem/>
            </ul>
        </section>
    );
}
 