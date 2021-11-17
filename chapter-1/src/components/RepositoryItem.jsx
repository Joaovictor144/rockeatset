function RepositoryItem(props){
    return(
        <>
            <li>
                <img src={props.repository?.avatar_url ?? 'default'} alt={props.repository?.login ?? 'default'}/>
                <br/>
                <strong>{props.repository?.name ?? 'Default'}</strong>
                <p>{props.repository?.bio ?? 'Default'}</p>
                <a href={props.repository?.html_url ?? 'Default'}>
                    Acessar Repositorio
                </a>
            </li>
            
        </>
    )
}

export default RepositoryItem;