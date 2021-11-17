import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss' 
import { useState,useEffect } from "react";
import axios from 'axios';
export default function RepositoryList(){
    const [repositorio,setRepositorio] = useState(false);
    useEffect(() =>{
        getRepo('Joaovictor144')
        
    },[])
    let getRepo = async (user) =>{
        let res = await axios.get(`https://api.github.com/users/${user}`);
        setRepositorio(res.data);
    }
    if(repositorio === false){
        return(
            <section className='repository-list'>
                <h1>Lista de Repositorios</h1>
                <ul>
                    <h2>AGUARDANDO DADOS</h2>                    
                </ul>
            </section>

        );
    }else {
        return(
            <section className='repository-list'>
                <h1>Lista de Repositorios</h1>
                <ul>
                    <RepositoryItem repository={repositorio} />
                </ul>
            </section>
        );
    }
}
 